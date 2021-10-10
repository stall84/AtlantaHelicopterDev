import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  title: string;
  subtitle?: string;
  none?: boolean;
  hero?: boolean;
}

const TitleSection: React.FC<Props> = ({ center, hero, none, title, subtitle }) => (
  <Styled.TitleSection >
    {subtitle && <Styled.SubTitle hero={hero} center={center}>{subtitle}</Styled.SubTitle>}
    <Styled.Title hero={hero} center={center}>{title}</Styled.Title>
    <Styled.Separator none={none} center={center} />
  </Styled.TitleSection>
);

export default TitleSection;
