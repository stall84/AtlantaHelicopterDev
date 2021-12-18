import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TourGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TourInfoItem = styled.div`
  justify-self: center;
  ${tw`w-full p-1 m-1`};
`;

export const h3 = styled.h3`
  ${tw`sm:w-1/2 text-center text-slate sm:text-xl`}
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-12 h-12 text-black border border-lightRed rounded-full`};
`;

