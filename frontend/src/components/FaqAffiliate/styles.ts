import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Section = styled.section`
    ${tw`h-60 flex flex-col p-1 bg-offWhite items-center justify-around`}
`;

export const Paragraph = styled.p`
    font-family: 'OswaldSemiBold', monospace;
    ${tw`p-2 my-2 text-center`}
`;