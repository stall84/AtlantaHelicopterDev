import React, { useEffect, useState } from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  siteTitle?: string | null;
}

const Header: React.FC<Props> = (props) => {
  const siteTitle = props.siteTitle ? props.siteTitle : null;

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => {
        setScrolling(window.scrollY > 10)
      })
    }
  }, [])

  return (

    <header className={`header ${scrolling ? `scrolledHeader` : ''}`}>
      <Styled.Wrapper scrolled={scrolling}>
        <Logo scrolling={scrolling} />
        <MainNav />
      </Styled.Wrapper>
    </header>
  )

};

export default Header;
