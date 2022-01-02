import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import ConctactInfo from 'components/ContactInfo';


const IndexPage: React.FC = () => {

  return (
    <Layout>
      <SEO title="Atlanta Helicopter Tours" />
      <HeroBanner />
      <Services />
      <hr />
      <ConctactInfo />
    </Layout>
  );
};

export default IndexPage;
