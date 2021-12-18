import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

interface ScrollStyles {

  scrolled?: boolean;

}

export const Header = styled.header<ScrollStyles>`
  ${tw`fixed w-full h-initial z-50 bg-transparent `};
  ${({ scrolled }) => scrolled && tw`bg-red h-scrolled`};
  transition: all 1.1s ease-in-out;
  @media screen and (max-width: 425px) {
    ${tw`static bg-red h-12`};
  }
`;

export const Wrapper = styled(Container)<ScrollStyles>`
  ${tw`min-h-full items-center justify-around`};
`;

