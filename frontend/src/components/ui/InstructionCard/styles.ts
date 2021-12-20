import styled from 'styled-components';
import tw from 'tailwind.macro';
import Button from '../Button';
import { motion } from 'framer-motion';

export const InstructionCard = styled.div`
    ${tw`flex flex-col m-1 p-1 bg-white rounded-lg border border-gray-300`};
    ${tw`hover:border- hover:bg-offWhite`}
`;

export const Wrapper = styled.div`
    ${tw`flex flex-col justify-center m-1 p-2 items-center`};
`;

export const Title = styled.h3`
  ${tw`sm:text-xl text-red mb-4 font-semibold text-center`};
`;

export const Content = styled.p`
  ${tw`sm:m-2 p-1 sm:p-3 text-black text-center`};
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

