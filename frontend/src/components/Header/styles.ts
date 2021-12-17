import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

interface ScrollStyles {

  scrolled?: boolean;

}

export const Header = styled.header`
  ${tw`fixed z-50 bg-transparent px-10`};
  transition: all 1.5s, ease-in-out;
`;

/**@todo REFACTOR - UTILIZE OR REMOVE THE SCROLLED FUNCTION IN WRAPPER BELOW */

export const Wrapper = styled(Container)<ScrollStyles>`
  ${tw`min-h-full items-center justify-around`};
  ${ ({scrolled}) => scrolled && `margin-left: 0rem;`}    
`;

