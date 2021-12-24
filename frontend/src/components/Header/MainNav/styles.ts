import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyledProps {
  open: boolean;
}
interface ScrolledProps {
  scrolled?: boolean;
}

export const MainNav = styled.nav<StyledProps>`
  ${tw`lg:flex flex-col lg:flex-row pl-1 pb-1 sm:p-0 lg:w-auto w-full order-last lg:order-none hidden bg-white sm:bg-transparent`};
  ${({ open }) => open && tw`flex mt-3`};
  /* @media screen and (max-width: 425px) {     // Experimental gradient nav-menu for mobile screens
    background: linear-gradient(90deg, gray 15%, white 30%, red);
  } */
`;

export const MainNavItem = motion.custom(styled(Link)<ScrolledProps>`
  ${tw`relative text-black text-sm sm:text-xl border-b border-white md:border-transparent hover:text-red ml-0 sm:ml-8 mt-3 sm:mt-0`};
  ${({ scrolled }) => scrolled && tw`hover:text-white`};
  font-family: "GoodTimes", monospace;
  width: max-content;

  &.active {
    ${tw`border-red`};
  }

  &:before {
    ${tw`absolute w-full bg-red h-px left-0 invisible`};
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    transform: scaleX(1);
  }
`);

export const ToogleMainNav = styled.button<StyledProps>`
  ${tw`flex flex-col mt-1 items-end justify-center cursor-pointer w-6 h-5 lg:hidden`};
  outline: none !important;

  span {
    ${tw`bg-white inline-block w-8 h-1`};
    transition: 0.2s;

    &:first-child {
      ${({ open }) => (open ? tw`-mb-px` : tw`mb-1`)};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
      ${({ open }) => (open ? tw`-mt-px` : tw`mt-1`)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    }

    &:nth-child(2) {
      ${tw`bg-black inline-block w-8 h-1`};

      ${({ open }) => (open ? tw`opacity-0` : tw`opacity-1`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`;
