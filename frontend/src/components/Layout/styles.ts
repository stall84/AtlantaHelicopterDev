import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';


export const MotionLayoutContainer = motion.custom(styled.div`
 
`)

export const Layout = styled.main`
  ${tw`flex flex-col min-h-screen`};
`;

export const HeadWrapper = styled.div`
  ${tw`flex justify-center`}
`;