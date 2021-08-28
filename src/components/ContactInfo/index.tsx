import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LinkedInfoBlock from 'components/ui/LinkedInfoBlock';
// import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';
import { motion } from 'framer-motion';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
    };
  };
}
interface SanityContact {
  node: {
    id: string,
    contact_type: string;
    contact_value: string;
    contact_icon: IconProps;
    contact_link: string;
  }
}

const ConctactInfo: React.FC = () => {
  const { markdownRemark, allMarkdownRemark, allSanityContact } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
      allSanityContact {
        edges {
          node {
            id
            contact_type
            contact_value
            contact_icon
            contact_link
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const contacts: Contact[] = allMarkdownRemark.edges;
  const sanityContacts: SanityContact[] = allSanityContact.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} hero center />
      {sanityContacts.map((item) => {
        const {
          id,
          contact_type,
          contact_value,
          contact_icon,
          contact_link
        } = item.node;

        return (
          <Styled.ContactInfoItem key={id}>
            <motion.div whileHover={{ scale: 1.10 }} whileTap={{ scale: 1.05 }} >
              <LinkedInfoBlock icon={contact_icon} title={contact_type} content={contact_value} linkTo={contact_link} center />
            </motion.div>
          </Styled.ContactInfoItem>
        );
      })}
    </Container>
  );
};

export default ConctactInfo;
