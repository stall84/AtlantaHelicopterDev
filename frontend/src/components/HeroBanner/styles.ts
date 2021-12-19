import styled from 'styled-components';
import tw from 'tailwind.macro';


export const Banner = styled.section`
  ${tw`flex flex-col justify-center h-full border-b border-indigo-100`};
    
`;

export const Content = styled.p`
  font-family: "GoodTimes", monospace;
  ${tw`text-base text-lightRed text-center mb-1 sm:mb-8`};
  text-shadow: 0.3px 0.3px 0.2px black;
`;

export const Title = styled.h1`
  font-family: "GoodTimes", monospace;
  ${tw`uppercase m-1 text-white sm:mb-5 sm:text-5xl w-full text-center`};
  ${tw`hover:text-darkRed`}
  ${tw`text-3xl`}
  text-shadow: 1px 1px 1px rgb(200,90,87);
  transition: color 1s ease;
`;

export const ButtonDiv = styled.div`
  ${tw`hidden lg:flex m-2 p-2`}
`;