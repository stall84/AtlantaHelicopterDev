import styled from 'styled-components';
import tw from 'tailwind.macro';


export const Banner = styled.section`
  ${tw`flex flex-col sm:pt-40 justify-start h-full border-b border-indigo-100`};
    p, h1 {
      color: black;
      /* mix-blend-mode: overlay; */
      transition: color 1s;
      
      &:hover {
        
        ${tw`text-darkRed`};
        text-shadow: 1px 1px 1px black;
      }
    }
`;

export const Content = styled.p`
  font-family: "GoodTimes", monospace;
  ${tw`text-sm sm:text-base mb-1 sm:mb-8`};
  /* text-shadow: 0.4px 0.4px 0.4px rgba(200,90,87,200); */
`;

export const Title = styled.h1`
  font-family: "GoodTimes", monospace;
  ${tw`uppercase mb-1 sm:mb-5 text-lg sm:text-5xl w-full text-center`};
  text-shadow: 1px 1px 1px rgb(200,90,87);
`;

export const ButtonDiv = styled.div`
  ${tw`hidden lg:flex m-2 p-2`}
`;