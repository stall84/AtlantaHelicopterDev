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

    const { allSanityFlightInstruction, discoveryFlight, privateCertificate, commercialCertificate } = useStaticQuery(graphql`
        query {
            discoveryFlight: sanityFlightInstruction(instruction_order: {eq: "discovery_flight"}){
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
            privateCertificate: sanityFlightInstruction(instruction_order: {eq: "private_certificate"}){
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
            commercialCertificate: sanityFlightInstruction(instruction_order: {eq: "commercial_certificate"}){
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
            allSanityFlightInstruction: allSanityFlightInstruction {
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
    console.log('single private_cert : ', privateCertificate)
    console.log('flightInstructionList: ', flightInstructionList)

    return (
        <Container section>
            <TitleSection title="Flight Instruction" subtitle="Rotor and Fixed Wing! You must start with the Discovery Flight, even if you've logged time, you'll need to get familiar with our equipment and instructors through the Discovery Flight" none center hero />
            <Styled.InstructionGrid>
                <Styled.InstructionInfoItem className="discoveryCert">
                    <InstructionCard right className="discoveryCert" linkTo={`https://checkout.xola.com/index.html#seller/${process.env.GATSBY_XOLA_SELLER_ID}/experiences/61bf4407fc5a3b0d13453a25?openExternal=true`} title={discoveryFlight.instruction_type} description={discoveryFlight.instruction_description} url={discoveryFlight.instruction_photo.asset.url} photo={discoveryFlight.instruction_photo.asset.gatsbyImageData} pricing={discoveryFlight.instruction_pricing} />
                </Styled.InstructionInfoItem>
                <Styled.InstructionInfoItem className="privateCert">
                    <InstructionCard right className="privateCert" title={privateCertificate.instruction_type} description={privateCertificate.instruction_description} url={privateCertificate.instruction_photo.asset.url} photo={privateCertificate.instruction_photo.asset.gatsbyImageData} pricing={privateCertificate.instruction_pricing} />
                </Styled.InstructionInfoItem>
                <Styled.InstructionInfoItem className="commieCert">
                    <InstructionCard right className="commieCert" title={commercialCertificate.instruction_type} description={commercialCertificate.instruction_description} url={commercialCertificate.instruction_photo.asset.url} photo={commercialCertificate.instruction_photo.asset.gatsbyImageData} pricing={commercialCertificate.instruction_pricing} />
                </Styled.InstructionInfoItem>
                {/* {
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
                } */}
            </Styled.InstructionGrid>
        </Container>
    )
}

export default InstructionInfo;