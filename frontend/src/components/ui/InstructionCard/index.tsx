import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import Icon, { IconProps } from 'components/ui/Icon';
import * as Styled from './styles';
import Button from '../Button';
import { motion } from 'framer-motion';
import { IGatsbyImageData } from 'gatsby-plugin-image';



interface SanityInstruction {
    node: {
        id: string;
        instruction_type: string;
        instruction_description: string;
        instruction_photo: string;
        instruction_booking_link: string;
        instruction_pricing: string;
    }
}

interface Props {
    title: string;
    photo: IGatsbyImageData;
    url?: string;
    linkTo?: string;
    description: string;
    pricing: string;
    right?: boolean;
    className?: string;
}

const InstructionCard: React.FC<Props> = ({
    title,
    photo,
    url,
    linkTo,
    description,
    pricing,
    right,
    className
}) => (
    <Styled.InstructionCard url={url} right={right} className={className} >
        <Styled.Wrapper right={right}>
            <Styled.Title>
                {title}
            </Styled.Title>

            <Styled.TextDiv>
                <Styled.Content>
                    {description}
                </Styled.Content>
            </Styled.TextDiv>
            <Styled.Linker to={linkTo ? linkTo : '/contact'}>
                <Styled.InstructionButton>
                    Click to Book or Contact!
                </Styled.InstructionButton>
            </Styled.Linker>

        </Styled.Wrapper>
    </Styled.InstructionCard>

)

export default InstructionCard;