import styled from 'styled-components';
import tw from 'tailwind.macro';


export const InstructionGrid = styled.section`
  ${tw`m-1 p-1`};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
  
  div:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  div:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  div:nth-child(3) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }


  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const InstructionInfoItem = styled.div`
  ${tw`w-full sm:w-auto`};
`;