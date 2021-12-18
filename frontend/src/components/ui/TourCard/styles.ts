import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
  topPad?: boolean;
  photoLink?: string;
}

export const TourCard = styled.div<StyledProps>`
  ${({ photoLink }) => photoLink && `height: 400px; background-image: url(${process.env.GATSBY_IMG_TEST}${photoLink}_723x542.jpg); background-position: center; background-size: cover; filter: brightness(.72)`};
  ${tw`flex flex-col shadow-xl justify-center p-4 rounded-lg border border-gray-300`};
  &:hover {
    filter: none;
  }
  transition: filter 280ms ease-out;
 
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${tw`p-2 m-2 h-full bg-transparent opacity-75`}
  ${tw`hover:bg-white hover:opacity-80 hover:border hover:border-red hover:rounded-lg`}
`;

export const PriceLink = styled.div<StyledProps>`
  ${tw`flex flex-col justify-center m-1 mt-2 items-center`};
`;

export const Title = styled.h3`
  ${tw`sm:text-xl text-red mt-1 font-semibold text-center`};
  font-family: 'GoodTimes', monospace;
  text-shadow: 1px 1px 1px white;
`;

export const Content = styled.p`
  ${tw`mt-1 text-black text-center`};
`;

export const Link = styled.a<StyledProps>`
  ${tw`flex flex-col my-1 mx-1 p-2 rounded-lg`};
  ${({ center }) => center && tw`items-center items-center`};
  Button {
    ${tw`text-red hover:text-black hover:bg-lightRed`}
  }
`
export const priceDiv = styled.div`
  ${tw`mb-3 p-2 border border-black rounded-md`}
`
export const h3 = styled.h3`
  ${tw`text-lightRed text-xl font-semibold hover:text-red`}
  text-shadow: 1px 1px 1px white;
`;