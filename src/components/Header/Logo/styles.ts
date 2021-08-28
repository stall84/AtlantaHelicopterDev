import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center sm:w-auto mr-auto text-black hover:text-indigo-900`};
`;

export const Text = styled.h1`
  ${tw`sm:flex sm:flex-none sm:mt-1 sm:ml-8 hidden sm:text-red sm:text-xl`};
`;

export const Image = styled.figure`
  ${tw`-ml-8 mr-2 py-1 sm:-ml-6 sm:py-0 sm:w-3/4 sm:h-20`};

  /* img {
    ${tw`h-full w-full rounded-full border border-red`};
  } */
`;
