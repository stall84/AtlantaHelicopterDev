import React from 'react';
import { Link } from 'gatsby';
import Icon, { IconProps } from 'components/ui/Icon';
import * as Styled from './styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  linkTo: string;
  bgImage: IGatsbyImageData | string;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, linkTo, center, bgImage }) => (
  <Styled.InfoBlock center={center} bgImage={bgImage} >
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <Link to={linkTo}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Content>{content}</Styled.Content>
      </Link>
    </Styled.Wrapper>

  </Styled.InfoBlock>
);

export default InfoBlock;
