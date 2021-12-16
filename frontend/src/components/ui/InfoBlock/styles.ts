import { IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
  bgImage?: IGatsbyImageData | string;
}

export const InfoBlock = styled.div<StyledProps>`
  ${({ bgImage }) => bgImage && `background-image: url(${bgImage}); background-position: center; background-size: cover; background-repeat: no-repeat; `}
  ${tw`flex flex-col sm:min-h-full my-4 mx-3 p-4 rounded-lg border border-gray-300`};
  ${({ center }) => center && tw`items-center items-center`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-black border border-lightRed rounded-full mb-2`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${tw`p-2 m-2`}
  background-color: transparent;
  opacity: 0.7;
  ${({ center }) => center && tw`text-center`};
  &:hover {
    background-color: white;
    opacity: 0.6;
  }
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 text-red font-semibold`};
`;

export const Content = styled.p`
  ${tw`mt-1 text-black`};
`;

export const Link = styled.a<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300`};
  ${({ center }) => center && tw`items-center items-center`};
`
