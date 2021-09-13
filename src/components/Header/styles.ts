import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  ${tw`h-mobHeader sm:h-30 bg-gray-100 border-b border-red sm:py-1`};
`;

export const Wrapper = styled(Container)`
  ${tw`items-center justify-between`};
`;
