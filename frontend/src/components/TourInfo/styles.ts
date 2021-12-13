import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TourGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const TourInfoItem = styled.div`
  justify-self: center;
  ${tw`w-full sm:w-11/12 sm:h-3/6`};
`;

export const h3 = styled.h3`
  ${tw`sm:w-1/2 text-center text-slate sm:text-xl`}
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-12 h-12 text-black border border-lightRed rounded-full`};
`;

