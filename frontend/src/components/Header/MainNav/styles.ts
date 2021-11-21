import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyledProps {
  open: boolean;
}

export const MainNav = styled.nav<StyledProps>`
  ${tw`lg:flex flex-col lg:flex-row lg:w-auto w-full order-last lg:order-none my-4 lg:my-0 hidden`};
  ${({ open }) => open && tw`flex`};
`;

export const MainNavItem = motion.custom(styled(Link)`
  ${tw`relative text-black sm:text-lg border-b border-transparent hover:text-indigo-900 ml-0 sm:ml-8 mt-3 sm:mt-0`};
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
  ${tw`flex flex-col items-end justify-center cursor-pointer w-6 h-5 lg:hidden`};
  outline: none !important;

  span {
    ${tw`bg-black inline-block w-6 h-px`};
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
      ${tw`bg-red inline-block w-8 h-px`};

      ${({ open }) => (open ? tw`opacity-0` : tw`opacity-1`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`;
