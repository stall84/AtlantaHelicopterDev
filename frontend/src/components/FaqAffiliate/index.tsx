import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import InstructionCard from 'components/ui/InstructionCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './styles';



const FaqAffiliate: React.FC = () => {

    const { legalTerms, cancellationPolicy } = useStaticQuery(graphql`{
        legalTerms {
            termsLegal
        }
        cancellationPolicy: experience(id: {eq: "61c02027290ac16e1217abc7"}) {
            cancellationPolicy
        }
    }`)


    return (
        <Container section>
            <TitleSection title='FAQ and Terms of Service' center />
            <Styled.Section>
                <Styled.Paragraph>
                    <TitleSection title='General Terms of Service' center none />
                    {legalTerms.termsLegal}
                </Styled.Paragraph>
                <Styled.Paragraph>
                    <TitleSection title='General Cancellation Policy' center none />
                    {cancellationPolicy.cancellationPolicy}
                </Styled.Paragraph>
            </Styled.Section>


        </Container>

    )
}


export default FaqAffiliate;