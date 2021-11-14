import styled from 'styled-components';
import tw from 'tailwind.macro';


export const Banner = styled.section`
  ${tw`flex flex-col justify-start h-full border-b border-indigo-100`};
    p, h1 {
      color: black;
      /* mix-blend-mode: overlay; */
      transition: color 1s;
      
      &:hover {
        
        ${tw`text-lightRed`}
      }
    }
`;

export const Content = styled.p`
  ${tw`text-sm sm:text-base mb-1 sm:mb-8`};
  /* text-shadow: 0.4px 0.4px 0.4px rgba(200,90,87,200); */
`;

export const Title = styled.h1`
  ${tw`uppercase mb-1 sm:mb-5 text-lg sm:text-3xl w-full text-center`};
  text-shadow: 1px 1px 1px rgba(200,90,87,200);
`;

export const ButtonDiv = styled.div`
  ${tw`hidden lg:flex m-2 p-2`}
`;