import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import InstructionCard from 'components/ui/InstructionCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './styles';


const FaqAffiliate: React.FC = () => {

    return (
        <Container section>
            <div>
                FAQ - AFFILIATE
            </div>
            <div>
                COMPONENT
            </div>
            <hr />
            <br />
            <section>
                <div>
                    <h2>TESTING XOLA GIFT CARDS</h2>
                </div>
                < hr />
                <div>
                    <div className="xola-checkout" data-seller="5d2d2aabde7c4b0eb96866bd" data-experience="61bf2e2f636fea37cf02885c" data-version="2">Book Now!</div>
                </div>
            </section>
        </Container>

    )
}


export default FaqAffiliate;