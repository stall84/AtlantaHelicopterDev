import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TourContainer = styled.section`
    ${tw`flex p-1`};
`;

export const TourCard = styled.div`
    ${tw`max-w-sm max-h-sm flex flex-col my-1 mx-1 p-1 bg-lightRed rounded-lg border border-gray-300 hover:border- hover:bg-offWhite`};
`;

export const Wrapper = styled.div`
    ${tw`flex flex-col justify-center m-1 items-center`};
`;

export const Title = styled.h3`
    ${tw`sm:text-xl text-red mt-1 font-semibold text-center`};
`;

export const Content = styled.p`
    ${tw`sm:text-xs m-1 text-black text-center`};
`;

export const PriceDiv = styled.div`
    ${tw`mb-3 p-2 border border-red rounded-md`}
`

export const Price = styled.p`
    ${tw`text-lightRed text-xl font-semibold hover:text-red`}
`