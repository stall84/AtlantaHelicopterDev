import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
  topPad?: boolean;
  photoLink?: string;
  hovering?: boolean;
}

export const TourCard = styled.div<StyledProps>`
  ${tw`flex flex-col sm:h-card justify-center items-center my-2 mx-2 p-2 rounded-lg border border-gray-300 hover:border- hover:bg-offWhite`};
  ${({ center }) => center && tw`items-center`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${tw`flex flex-col justify-around m-1 items-center text-center`};
  ${({ photoLink }) => photoLink && `height: 400px; background-image: url(${process.env.GATSBY_IMG_TEST}${photoLink}_723x542.jpg); background-position: center; background-size: cover; filter: brightness(.7)`};
  &:hover {
    filter: none;
  }
  transition: filter 280ms ease-out;
`;

export const PriceLink = styled.div<StyledProps>`
  ${tw`flex flex-col justify-center m-1 items-center`};
  ${({ center }) => center && tw`text-center`};
  ${({ topPad }) => topPad && tw`pt-4`}
`;

export const Title = styled.h3`
  ${tw`sm:text-xl text-red mt-1 font-semibold text-center`};
  font-family: 'GoodTimes', monospace;
  text-shadow: 1px 1px 1px white;
`;

export const Content = styled.p`
  ${tw`mt-1 text-white text-center`};
`;

export const Link = styled.a<StyledProps>`
  ${tw`flex flex-col my-1 mx-1 p-2 rounded-lg`};
  ${({ center }) => center && tw`items-center items-center`};
  Button {
    ${tw`hover:bg-lightRed`}
  }
`
export const priceDiv = styled.div`
  ${tw`mb-3 p-2 border border-white rounded-md`}
`
export const h3 = styled.h3`
  ${tw`text-lightRed text-xl font-semibold hover:text-red`}
  text-shadow: 1px 1px 1px white;
`;