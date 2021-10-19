import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  /* removed body for test of scss */
  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
