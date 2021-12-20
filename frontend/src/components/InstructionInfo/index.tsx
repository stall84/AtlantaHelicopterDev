import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import InstructionCard from 'components/ui/InstructionCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './styles';


interface SanityFlightInstruction {
    node: {
        id: string;
        instruction_type: string;
        instruction_description: string;
        instruction_photo: {
            asset: {
                url: string;
                gatsbyImageData: IGatsbyImageData;
            }
        };
        instruction_booking_link: string;
        instruction_pricing: string;
    }
}


const InstructionInfo: React.FC = () => {

    const { allSanityFlightInstruction } = useStaticQuery(graphql`
        query {
            allSanityFlightInstruction {
                edges {
                    node {
                        id
                        instruction_type
                        instruction_description
                        instruction_photo {
                            asset {
                                url
                                gatsbyImageData(layout: CONSTRAINED)
                            }
                        }
                        instruction_booking_link
                        instruction_pricing
                    }
                }
            }
        }
    `)

    const flightInstructionList: SanityFlightInstruction[] = allSanityFlightInstruction.edges;
    console.log('flightInstructionList: ', flightInstructionList)

    return (
        <Container section>
            <TitleSection title="Flight Instruction" subtitle="Rotor and Fixed Wing!" center hero />
            <Styled.InstructionGrid>
                {
                    flightInstructionList.map((element) => {
                        const {
                            instruction_type,
                            instruction_description,
                            instruction_photo: {
                                asset: {
                                    url,
                                    gatsbyImageData
                                }
                            },
                            instruction_booking_link,
                            instruction_pricing
                        } = element.node;
                        return (
                            <Styled.InstructionInfoItem>
                                <InstructionCard title={instruction_type} description={instruction_description} photo={gatsbyImageData} url={url} pricing={instruction_pricing} />
                            </Styled.InstructionInfoItem>
                        )
                    })
                }
            </Styled.InstructionGrid>
        </Container>
    )
}

export default InstructionInfo;