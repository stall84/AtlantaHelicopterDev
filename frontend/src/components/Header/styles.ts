import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

interface ScrollStyles {
  scrolled: boolean;
}

export const Header = styled.header<ScrollStyles>`
  ${tw`fixed w-full h-initial z-50 bg-transparent `};
  ${({ scrolled }) => scrolled && tw`sm:bg-red sm:h-scrolled`};
  transition: all 0.5s linear;
  @media screen and (max-width: 425px) {
    ${tw`sticky top-0 bg-red h-12`};
  }
`;

export const Wrapper = styled(Container)<ScrollStyles>`
  ${tw`min-h-full mx-auto items-start lg:items-center justify-around`};
`;

