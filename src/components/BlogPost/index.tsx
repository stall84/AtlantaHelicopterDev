import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SectionTitle } from 'helpers/definitions';
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

        <>
            <h1>BLOG POST</h1>
            <Styled.imageDiv>
                <GatsbyImage image={mainImage.asset.gatsbyImageData} alt={title} />
            </Styled.imageDiv>
            <Container>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias natus sunt necessitatibus voluptatem illum veritatis recusandae modi rerum perspiciatis consequatur sequi delectus, adipisci voluptatum repellendus expedita laboriosam illo atque harum?</h1>
            </Container>
        </>

    )
}


export default BlogPost;