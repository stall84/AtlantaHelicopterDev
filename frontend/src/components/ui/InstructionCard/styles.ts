import styled from 'styled-components';
import tw from 'tailwind.macro';


export const InstructionCard = styled.div`
    ${tw`flex flex-col my-4 mx-3 p-2 bg-white rounded-lg border border-gray-300 hover:border- hover:bg-offWhite`};
`;

export const Wrapper = styled.div`
    ${tw`flex flex-col justify-center m-1 p-2 items-center`};
`;

export const Title = styled.h3`
  ${tw`sm:text-xl text-red mb-4 font-semibold text-center`};
`;

export const Content = styled.p`
  ${tw`sm:m-2 p-1 sm:p-3 text-black text-center`};
`;

