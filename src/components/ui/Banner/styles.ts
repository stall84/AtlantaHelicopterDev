import styled from 'styled-components';
import tw from 'tailwind.macro';


export const Banner = styled.section`
  ${tw`flex flex-col justify-start h-full border-b border-indigo-100`};
`;

export const Content = styled.p`
  ${tw`text-red text-sm sm:text-base mb-1 sm:mb-8`};
`;

export const Title = styled.h1`
  ${tw`uppercase mb-1 sm:mb-5 text-lg sm:text-3xl text-black w-full text-center`};
`;