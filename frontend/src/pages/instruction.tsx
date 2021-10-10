import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import InstructionInfo from 'components/InstructionInfo';
import { useEffect, useState } from 'react';


const FlightInstructionPage: React.FC = () => {


    return (
        <Layout>
            <SEO title="Flight Instruction" />
            <InstructionInfo />
        </Layout>
    )
}

export default FlightInstructionPage;