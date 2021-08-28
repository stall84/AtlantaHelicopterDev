import React from 'react';
import Icon, { IconProps } from 'components/ui/Icon';
import * as Styled from './styles';

// This component utilizes the standard HTML <a> anchor tag and is intended for external-links 
// and not inner-site links that will utilize Gatsby's push-state Link component

interface Props extends Styled.StyledProps {
    title: string;
    content: React.ReactNode;
    icon: IconProps;
    linkTo: string;
    center: boolean;
}

const LinkedInfoBlock: React.FC<Props> = ({ icon, title, content, linkTo, center }) => (
    <Styled.InfoBlock center={center}>
        <Styled.Icon>
            <Icon icon={icon} />
        </Styled.Icon>
        <Styled.Wrapper center={center}>
            <a href={linkTo}>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Content>{content}</Styled.Content>
            </a>
        </Styled.Wrapper>

    </Styled.InfoBlock>
);

export default LinkedInfoBlock;
