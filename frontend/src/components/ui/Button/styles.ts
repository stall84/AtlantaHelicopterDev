import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-1 px-4 sm:py-2 sm:px-8 rounded-full border border-black text-black`};

  ${({ primary }) => (primary ? tw`bg-offWhite` : tw`text-black`)};

  ${({ block }) => block && tw`w-full`};

  transition: background-color 1s, transform 1s;
  & :hover {
    ${tw`bg-lightRed`}
    transform: 20% 20%
  }

`);
