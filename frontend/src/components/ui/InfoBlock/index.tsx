import React from 'react';
import { Link } from 'gatsby';
import Icon, { IconProps } from 'components/ui/Icon';
import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  linkTo: string;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, linkTo, center }) => (
  <Styled.InfoBlock center={center} >
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
