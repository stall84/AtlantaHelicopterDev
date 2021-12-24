import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Post {
  node: {
    id: string;
    title: string;
    publishedAt: string;
    slug: {
      current: string;
    };
    _rawExcerpt: React.ReactNode;
    mainImage: {
      asset: {
        gatsbyImageData: IGatsbyImageData;
      }
    }
  };
}

const Posts: React.FC = () => {
  const { allSanityPost } = useStaticQuery(graphql`{

    allSanityPost(filter: { publishedAt: { ne: null } } ) {
      edges {
        node {
          id
          title
          publishedAt
          slug {
            current
          }
          _rawExcerpt(resolveReferences: { maxDepth: 5 } )
          mainImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
}
`);

  // const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const posts: Post[] = allSanityPost.edges;

  return (
    <Container section>
      <TitleSection title="Blog" none center />
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            title,
            publishedAt,
            slug: { current },
            mainImage: { asset: { gatsbyImageData } },
            _rawExcerpt,
          } = item.node;

          return (
            <Styled.Post key={id}>
              <Link to={current}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    <Styled.Image>
                      <GatsbyImage image={gatsbyImageData} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>{format(new Date(publishedAt), 'yyyy-MM')}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>Some Stuff</Styled.Description>
                    </Styled.Content>
                    {/* <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags> */}
                  </Styled.Card>
                </motion.div>
              </Link>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
