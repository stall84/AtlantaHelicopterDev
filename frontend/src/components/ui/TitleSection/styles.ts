import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
  none?: boolean;
  hero?: boolean;
}

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2<StyledProps>`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
  ${({ hero }) => hero && tw`sm:text-3xl text-black`}
`;

export const SubTitle = styled.h4<StyledProps>`
  ${tw`text-xs text-lightRed w-full text-left`};
  ${({ center }) => center && tw`text-center`};
  ${({ hero }) => hero && tw`sm:text-lg text-indigo sm:mb-8`};
  /* text-shadow: -0.35px -0.35px 0 #3c366b, 0.35px -0.35px 0 #3c366b, -0.35px 0.35px 0 #3c366b, 0.35px 0.35px 0 #3c366b; */
`;

export const Separator = styled.h2<StyledProps>`
  ${tw`relative w-2 h-8 sm:mb-4 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};
  ${({ none }) => none && tw`hidden`}

  &:before {
    content: '';
    ${tw`bg-red h-full w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-black h-6 w-px absolute ml-1`};
  }
`;
