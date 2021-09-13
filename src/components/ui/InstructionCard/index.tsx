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
    linkTo?: string;
    description: string;
    pricing: string;
}

const InstructionCard: React.FC<Props> = ({
    title,
    photo,
    linkTo,
    description,
    pricing
}) => (
    <Styled.InstructionCard>
        <Styled.Wrapper>
            <Styled.Title>
                {title}
            </Styled.Title>
            <GatsbyImage image={photo} alt={title} />
            <Styled.Wrapper>
                <Styled.Content>
                    {description}
                </Styled.Content>
                <Link to={'/contact'}>
                    <Button>
                        Click to Contact Us!
                    </Button>
                </Link>
            </Styled.Wrapper>
        </Styled.Wrapper>
    </Styled.InstructionCard>

)

export default InstructionCard;