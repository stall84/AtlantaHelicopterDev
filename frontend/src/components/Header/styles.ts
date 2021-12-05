import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  ${tw`fixed z-50 bg-transparent px-10`};
`;

export const Wrapper = styled(Container)`
  ${tw`min-h-full items-center justify-around`};
`;
