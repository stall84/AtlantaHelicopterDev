import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import ConctactInfo from 'components/ContactInfo';

import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage } from 'gatsby-plugin-image';



const IndexPage: React.FC = () => {

  return (
    <Layout>
      <SEO title="North Atlanta Executive Air Service" />

      <HeroBanner />
      <Services />
      <hr />
      {/* <Testimonials /> */}
      <ConctactInfo />
    </Layout>
  );
};

export default IndexPage;
