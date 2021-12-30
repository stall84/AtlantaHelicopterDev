import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
  topPad?: boolean;
  photoLink?: string;
}

export const TourCard = styled.div<StyledProps>`
  ${({ photoLink }) => photoLink && `height: 450px; background-image: url(${process.env.GATSBY_IMG_TEST}${photoLink}_723x542.jpg); background-position: center; background-size: cover; filter: brightness(.79)`};
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
  ${tw`flex flex-col justify-between p-2 m-2 h-full bg-white opacity-90 sm:bg-transparent`}
  ${tw`hover:bg-white  hover:border hover:border-red`}
  &:hover {
    opacity: 0.9;
  }
`;

export const DescriptionWrapper = styled.div`
  ${tw`flex flex-col p-1 overflow-auto`}
`;

export const PriceLink = styled.div<StyledProps>`
  ${tw`flex flex-col justify-center m-1 mt-2 items-center`};
`;

export const Title = styled.h3`
  ${tw`sm:text-xl text-red mt-1 font-semibold text-center`};
  font-family: 'GoodTimes', monospace;
  text-shadow: 1px 1px 1px black;
`;

export const Content = styled.p`
  ${tw`mt-1 text-ellipsis sm:text-lg text-black text-center`};
`;

export const Link = styled.a<StyledProps>`
  ${tw`flex flex-col p-1 rounded-lg`};
  ${({ center }) => center && tw`items-center items-center`};
  Button {
    ${tw`border-black text-red hover:text-black hover:bg-lightRed`}
  }
`
export const priceDiv = styled.div`
  ${tw`p-1`}
`
export const h3 = styled.h3`
  ${tw`text-lightRed text-xl font-semibold hover:text-red`}
  text-shadow: 1px 1px 1px white;
`;