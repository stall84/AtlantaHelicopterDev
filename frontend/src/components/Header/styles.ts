import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

interface ScrollStyles {

  scrolled?: boolean;

}

// export const Header = styled.header`
//   ${tw`fixed z-50 bg-transparent px-10`};
//   transition: all 1.5s, ease-in-out;
// `;

export const Header = styled.header<ScrollStyles>`
  ${tw`fixed w-full h-[150px] z-50 bg-transparent `};
  ${({ scrolled }) => scrolled && tw`bg-red h-scrolled`};
  transition: all 1s ease;
`;

export const Wrapper = styled(Container)<ScrollStyles>`
  ${tw`min-h-full items-center justify-around`};
`;

