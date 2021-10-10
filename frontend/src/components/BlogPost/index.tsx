import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import BlockContent from "@sanity/block-content-to-react";

import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './styles';

interface Props {
    _rawBody: React.ReactNode;
    publishedAt: string;
    categories: {
        _id: string;
        title: string;
    }
    title: string;
    mainImage: {
        asset: {
            gatsbyImageData: IGatsbyImageData
        }
    }
}

const BlogPost: React.FC<Props> = ({ _rawBody, publishedAt, categories, title, mainImage }) => {

    return (
        <Styled.Article>
            <GatsbyImage image={mainImage.asset.gatsbyImageData} alt='placeholder' />
            <Container section>
                {_rawBody && <BlockContent blocks={_rawBody} />}
            </Container>
        </Styled.Article>

    )
}


export default BlogPost;