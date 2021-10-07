import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query {
      headerBg: sanityColors(color_title: {eq: "Header-Background"}) {
        color_hex
      }
    }
  `)
  const headerBg: string = data.headerBg.color_hex;
  return (
    <Styled.Header style={{ backgroundColor: `${headerBg}` }}>
      <Styled.Wrapper>
        <Logo />
        <MainNav />
      </Styled.Wrapper>
    </Styled.Header>
  )

};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
