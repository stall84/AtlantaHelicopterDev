import styled from 'styled-components';
import tw from 'tailwind.macro';


export const InstructionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 0.5fr);
  grid-gap: 0.5em;
  

  .discoveryCert {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .privateCert {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 5
  }

  .commieCert {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 5
  }


  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const InstructionInfoItem = styled.div`
  ${tw`w-full h-full shadow-xl`};
`;