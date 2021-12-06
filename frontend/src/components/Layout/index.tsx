import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Newsletter from 'components/Newsletter';
import ContactInfo from 'components/ContactInfo';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteLayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      layoutBg: sanityColors(color_title: {eq: "Layout-Background"}) {
        color_hex
      }
    }
  `);
  const layoutBg: string = data.layoutBg.color_hex;
  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout style={{ backgroundColor: `${layoutBg}` }}>
          <Styled.HeadWrapper>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Styled.HeadWrapper>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            <Footer />
          </motion.div>
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

export default Layout;
