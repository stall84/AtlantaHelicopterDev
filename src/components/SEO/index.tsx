import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta =
  | {
    name: string;
    content: any;
  }
  | {
    property: string;
    content: any;
  };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            owner
            location
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `owner`,
          content: site.siteMetadata.owner
        },
        {
          name: `author`,
          content: site.siteMetadata.author
        },
        {
          name: `location`,
          content: site.siteMetadata.location
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta!)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [] as Meta[],
  description: ``
};

export default SEO;
