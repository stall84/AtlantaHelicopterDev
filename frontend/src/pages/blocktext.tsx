import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/Layout';
import BlockContent from "@sanity/block-content-to-react";
import { Container } from 'components/ui/Container/styles';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Card = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
`;

const BlockText: React.FC = () => {

    const { blocks } = useStaticQuery(graphql`{
        blocks: allSanityTestBlock {
                edges {
                    node {
                        _rawBlockTextEditor
                    }
                }
            }
    }`)
    const color = (props: any) => {
        return (
            <span style={{ color: props.mark.hex }} >
                {props.children}
            </span>
        )
    }

    const textblocks = blocks.edges;
    console.log('Blocks:  ', blocks)
    console.log('Text Blocks:  ', textblocks)
    return (

        <Layout>
            <Container>
                {
                    textblocks.map((item: any) => {
                        const {
                            _rawBlockTextEditor
                        } = item.node;
                        return (
                            <Card>
                                {!_rawBlockTextEditor && <h1> LOADING BLOCK TEXT ... </h1>}
                                {_rawBlockTextEditor && <BlockContent blocks={_rawBlockTextEditor} serializers={{ marks: { color } }} imageOptions={{ fit: 'max' }} projectId="jaookn88" dataset="production" />}
                                {_rawBlockTextEditor && BlockContent && console.log('BlockContent Component:  ', BlockContent)}
                            </Card>
                        )
                    })
                }
            </Container>
        </Layout>
    )
}

export default BlockText;