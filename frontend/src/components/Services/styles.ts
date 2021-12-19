import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Services = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  ${tw`m-1 p-1`};

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceItem = styled.div`
  ${tw`items-center p-1 m-1`};
`;
