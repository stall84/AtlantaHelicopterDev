import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { StaticImage } from 'gatsby-plugin-image';
import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
  bgImg?: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText, bgImg }) => (
  <Styled.Banner>
    <Container section>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
