import React, { useState } from 'react';

import * as Styled from './styles';

interface MainNavItem {
  title: string;
  slug: string;
}

interface MainNavProps {
  scrolled: boolean;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'About Us',
    slug: '/'
  },
  {
    title: 'Charters & Tours',
    slug: '/tours/'
  },
  {
    title: 'Blog',
    slug: '/blog/'
  },
  {
    title: 'Flight Instruction',
    slug: '/instruction/'
  },
  {
    title: 'Contact Us',
    slug: '/contact/'
  },
  {
    title: 'FAQ',
    slug: '/faq/'
  }
];

const MainNav: React.FC<MainNavProps> = ({ scrolled }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styled.MainNav open={open} >
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName="active"
            whileTap={{ scale: 0.9 }}
            scrolled={scrolled}
          >
            {item.title}
          </Styled.MainNavItem>
        ))}
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </>
  );
};

export default MainNav;
