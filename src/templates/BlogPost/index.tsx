import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import BlogPost from 'components/BlogPost';
import * as Styled from './styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Post {
    title: string;
    publishedAt: string;
    categories: {
        _id: string;
        title: string;
    }
    mainImage: {
        asset: {
            gatsbyImageData: IGatsbyImageData
        }
    }
    slug: {
        current: string;
    }
    _rawExcerpt: React.ReactNode
    _rawBody: React.ReactNode;
    // authors: {
    //     _key: string;
    //     author: {
    //         asset: {
    //             image: IGatsbyImageData
    //         }
    //     }
    // }
}

interface Props {
    data: {
        post: Post;
    }
    pageContext: {
        id: string;
        fullSlug: string;
        next: Post;
        previous: Post;
    }
}

// interface Post {
//     html: React.ReactNode;
//     fields: {
//         slug: string;
//     };
//     frontmatter: {
//         title: string;
//         date: string;
//     };
// }

// interface Props {
//     data: {
//         markdownRemark: Post;
//     };
//     pageContext: {
//         slug: string;
//         next: Post;
//         previous: Post;
//     };
// }

const BlogPostTemplate: React.FC<Props> = ({ data, pageContext }) => {
    // const post = data.markdownRemark;
    const post = data && data.post
    console.log('post: ', post)
    const { previous, next, fullSlug } = pageContext;

    return (
        <Layout>
            <SEO title={post.title} />
            <Container section>
                <TitleSection title={post.publishedAt} subtitle={post.title} />
                {/* <FormatHtml content={post.html} /> */}
                <BlogPost {...post} />
                <Styled.Links>
                    <span>
                        {previous && (
                            <Link to={previous.slug.current} rel="previous">
                                ← {previous.title}
                            </Link>
                        )}
                    </span>
                    <span>
                        {next && (
                            <Link to={next.slug.current} rel="next">
                                {next.title} →
                            </Link>
                        )}
                    </span>
                </Styled.Links>
            </Container>
        </Layout>
    );
};

export default BlogPostTemplate;

export const query = graphql`
    query BlogPostTemplateQuery($id: String!) {
        post: sanityPost(id: { eq: $id }) {
            id
            publishedAt
            categories {
                _id 
                title
            }
            mainImage {
                alt
                asset {
                    gatsbyImageData
                }
            }
            title
            slug {
                current
            }
            _rawExcerpt(resolveReferences: { maxDepth: 5 })
            _rawBody(resolveReferences: { maxDepth: 5 })
            # authors {
            #     image {
            #         asset {
            #             _id
            #             gatsbyImageData
            #         }
            #         name
            #     }
            # }
        }
    }
`;
// export const query = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date(formatString: "MMM DD, YYYY")
//       }
//     }
//   }
// `;
