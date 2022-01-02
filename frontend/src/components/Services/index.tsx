import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';
import { motion } from 'framer-motion';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Service {
  node: {
    id: string;
    frontmatter: {
      title: string;
      icon: IconProps;
      description: string;
      linkTo: string;
    };
  };
}
interface SanityService {
  node: {
    id: string;
    service_description: string;
    service_name: string;
    service_icon: IconProps;
    service_link: string;
    service_bg_image: {
      asset: {
        url: string;
        gatsbyImageData: IGatsbyImageData;
      }
    }
  }
}

const Services: React.FC = () => {
  const { markdownRemark, allMarkdownRemark, allSanityServices } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "services section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "services" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              description
              linkTo
            }
          }
        }
      }
      allSanityServices {
        edges {
          node {
            id
            service_description
            service_icon
            service_name
            service_link
            service_bg_image {
              asset {
                url
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);


  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const services: Service[] = allMarkdownRemark.edges;
  const sanityservices: SanityService[] = allSanityServices.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} hero center />
      <Styled.Services>
        {sanityservices.map((item) => {
          const {
            id,
            service_description,
            service_icon,
            service_link,
            service_name,
            service_bg_image
          } = item.node;

          return (
            <Styled.ServiceItem key={id}>
              <motion.div whileHover={{ scale: 1.05, transition: { duration: .5 } }} whileTap={{ scale: 1.07 }} style={{ height: '100%', width: '100%' }} >
                <InfoBlock linkTo={service_link} icon={service_icon} title={service_name} content={service_description} bgImage={service_bg_image.asset.url} />
              </motion.div>
            </Styled.ServiceItem>
          );
        })}
      </Styled.Services>
    </Container>
  );
};

export default Services;
