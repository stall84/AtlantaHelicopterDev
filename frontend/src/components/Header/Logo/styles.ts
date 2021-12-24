import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

interface LogoStyles {
  scrolled: boolean;
}

export const Logo = styled(Link)`
  ${tw`flex items-center lg:w-auto`};
  transition: all 1s linear;
`;

export const Text = styled.h1<LogoStyles>`
  font-family: "GoodTimes", monospace;
  /* ${tw`sm:flex sm:flex-none sm:mt-1 sm:ml-8 hidden sm:text-white sm:text-2xl`}; */
  display: none;
  ${({ scrolled }) => scrolled && tw`flex sm:text-oneThree text-white`};
  @media screen and (max-width: 425px) {
    display: flex;
    color: white;
    margin-top: 3px;
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
