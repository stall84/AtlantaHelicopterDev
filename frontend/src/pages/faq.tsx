import React from "react";
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import FaqAffiliate from "components/FaqAffiliate";


const FaqPage: React.FC = () => {

    return (
        <Layout>
            <SEO title="Frequently Asked Questions" />
            <FaqAffiliate />
        </Layout>

    )
}

export default FaqPage;