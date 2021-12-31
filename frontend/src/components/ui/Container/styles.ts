import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  section?: boolean;
}

export const Container = styled.div<StyledProps>`
  ${tw`flex flex-wrap justify-center max-w-screen-2xl w-full sm:mx-auto p-2`};
  ${({ section }) => section && tw`flex-col items-center mx-auto mt-12 sm:mt-24 sm:py-12`};
`;
