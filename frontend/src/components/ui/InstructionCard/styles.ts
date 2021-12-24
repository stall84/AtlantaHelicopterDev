import styled, { StyledProps } from 'styled-components';
import tw from 'tailwind.macro';
import Button from '../Button';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyleProps {
  right?: boolean;
  url?: string;
}

export const InstructionCard = styled.div<StyleProps>`
  height: 100%;
  ${({ url }) => url && `background-image: url(${url}); background-position: bottom; background-size: cover; filter: brightness(.73);`}
  ${tw`flex flex-col py-1 border rounded-lg border-gray-300`};
  ${tw`hover:border- hover:bg-offWhite`}
  ${({ right }) => right && tw`flex-row justify-end items-center`}
  &:hover {
    filter: none;
  }
  transition: all 280ms ease-out;
  @media screen and (max-width: 425px) {
    height: 350px;
  }
`;

export const Wrapper = styled.div<StyleProps>`
  ${tw`flex flex-col h-full sm:p-1 sm:m-1 p-2 items-center justify-between bg-ghostWhite opacity-80 border border-black rounded-lg`}
  ${tw`hover:bg-white hover:opacity-80 hover:border hover:border-red`}
  ${({ right }) => right && tw`w-1/2 bg-ghostWhite opacity-95`}
`;

export const Title = styled.h3`
  ${tw`sm:text-3xl text-red sm:my-3 font-semibold text-center`};
`;

export const TextDiv = styled.div`
  ${tw`flex flex-col m-1 border rounded border-black p-1 overflow-auto`}
`;

export const Content = styled.p`
  ${tw`sm:m-2 p-1 sm:p-3 text-black text-center text-sm sm:text-lg`};
`;

export const Linker = styled(Link)`
  ${tw`sm:p-2 sm:m-1 `};
`;

export const InstructionButton = motion.custom(styled.button`
  font-family: "GoodTimes", monospace;
  ${tw`sm:p-2 sm:m-2 rounded-full border border-red text-black text-xs sm:text-base`};
  transition: background-color 1s, transform 1s;
  & :hover {
    ${tw`bg-lightRed`}
    transform: 20% 20%
  }
`);

