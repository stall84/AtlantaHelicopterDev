import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://instagram.com/northatlantaexecutive" rel="noreferrer noopener" target="_blank">
          Instagram
        </Styled.Link>
        {/* <Styled.Link
          href="https://github.com/SaimirKapaj/gatsby-markdown-typescript-personal-website"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link> */}
        <Styled.Link href="https://www.facebook.com/AtlantaHeli" rel="noreferrer noopener" target="_blank">
          Facebook
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
