import styled, { StyledProps } from 'styled-components';
import tw from 'tailwind.macro';
import Button from '../Button';
import { motion } from 'framer-motion';

interface StyleProps {
  right?: boolean;
  url?: string;
}

export const InstructionCard = styled.div<StyleProps>`
  height: 100%;
  ${({ url }) => url && `background-image: url(${url}); background-position: bottom; background-size: cover; filter: brightness(.73);`}
  ${tw`flex flex-col m-1 p-1 border rounded-lg border-gray-300`};
  ${tw`hover:border- hover:bg-offWhite`}
  ${({ right }) => right && tw`flex-row justify-end items-center`}
  &:hover {
    filter: none;
  }
  transition: all 280ms ease-out;
`;

export const Wrapper = styled.div<StyleProps>`
  ${tw`flex flex-col items-center justify-between p-1 m-1 h-full bg-transparent opacity-80`}
  ${tw`hover:bg-white hover:opacity-80 hover:border hover:border-red hover:rounded-lg`}
  ${({ right }) => right && tw`w-1/2 bg-white opacity-75`}
`;

export const Title = styled.h3`
  ${tw`sm:text-2xl text-red mb-4 font-semibold text-center`};
`;

export const Content = styled.p`
  ${tw`sm:m-2 p-1 sm:p-3 text-black text-center sm:text-lg`};
`;

export const InstructionButton = motion.custom(styled.button`
  font-family: "GoodTimes", monospace;
  ${tw`py-1 px-4 sm:py-2 sm:px-8 rounded-full border border-red text-black`};
  transition: background-color 1s, transform 1s;
  & :hover {
    ${tw`bg-lightRed`}
    transform: 20% 20%
  }
`);

