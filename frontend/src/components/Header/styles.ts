import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  ${tw`lg:h-mainHeader bg-gray-100 border-b border-red `};
`;

export const Wrapper = styled(Container)`
  ${tw`min-h-full items-center justify-around`};
`;
