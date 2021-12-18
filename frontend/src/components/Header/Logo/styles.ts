import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

interface LogoStyles {
  scrolled: boolean;
}

export const Logo = styled(Link)`
  ${tw`flex items-center lg:w-auto`};
`;

export const Text = styled.h1<LogoStyles>`
  font-family: "GoodTimes", monospace;
  /* ${tw`sm:flex sm:flex-none sm:mt-1 sm:ml-8 hidden sm:text-white sm:text-2xl`}; */
  display: none;
  ${({ scrolled }) => scrolled && `display: flex; font-size: 1.2rem; color: white`};
  @media screen and (max-width: 425px) {
    display: flex;
    color: white;
  }
`;

export const Image = styled.figure<LogoStyles>`
  ${tw`m-1 p-1`};
  ${({ scrolled }) => scrolled && tw`hidden`};

  // On small mobile screens, don't display the atl-heli logo
  @media screen and (max-width: 425px) {
    ${tw`hidden text-white`}
  }
`;
