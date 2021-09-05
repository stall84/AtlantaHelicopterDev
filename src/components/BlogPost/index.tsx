import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SectionTitle } from 'helpers/definitions';

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
            <h1>Blog Page</h1>
            <br />
            <div>
                <h2>
                    {title}
                </h2>
            </div>
        </>
    )
}


export default BlogPost;