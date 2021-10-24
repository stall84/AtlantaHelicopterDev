import styled from 'styled-components';
import tw from 'tailwind.macro';


export const Banner = styled.section`
  ${tw`flex flex-col justify-start h-full border-b border-indigo-100`};
    p, h1 {
      color: white;
      /* mix-blend-mode: multiply; */
    }
`;

export const Content = styled.p`
  ${tw`text-sm sm:text-base mb-1 sm:mb-8`};
  
`;

export const Title = styled.h1`
  ${tw`uppercase mb-1 sm:mb-5 text-lg sm:text-3xl w-full text-center`};
  text-shadow: 1px 1px 1px black
`;