import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';
import { SectionTitle } from 'helpers/definitions';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Carousel from 'components/ui/Carousel';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}



const HeroBanner: React.FC = () => {
  const { markdownRemark, banner1, banner2, banner3, bgImage1, bgImage2, bgImage3 } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
        }
      }
      bgImage: file(relativePath: { eq: "helosbg.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      # sanityBnr: sanityBanner {
      #   big_text
      #   small_text
      #   button_link
      #   button_text
      # }
      banner1: sanityBanner(banner_number: {eq: "banner_1"} ) {
        big_text
        small_text
        button_link
        button_text
      }
      banner2: sanityBanner(banner_number: {eq: "banner_2"} ) {
        big_text
        small_text
        button_link
        button_text
      }
      banner3: sanityBanner(banner_number: {eq: "banner_3"} ) {
        big_text
        small_text
        button_link
        button_text
      }
      bgImage1: sanityImages(bgImage_title: {eq: "bgImage_1"}) {
        bgImage {
          asset {
            gatsbyImageData
          }
        }
      }
      bgImage2: sanityImages(bgImage_title: {eq: "bgImage_2"}) {
        bgImage {
          asset {
            gatsbyImageData
          }
        }
      }
      bgImage3: sanityImages(bgImage_title: {eq: "bgImage_3"}) {
        bgImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;
  const sanityBackground_1 = convertToBgImage(bgImage1.bgImage.asset.gatsbyImageData);
  const sanityBackground_2 = convertToBgImage(bgImage2.bgImage.asset.gatsbyImageData);
  const sanityBackground_3 = convertToBgImage(bgImage3.bgImage.asset.gatsbyImageData);
  const sanityBanner_1 = banner1;
  const sanityBanner_2 = banner2;
  const sanityBanner_3 = banner3;
  return (


    <Carousel>
      <>
        <BackgroundImage
          Tag='section'
          {...sanityBackground_1}
          preserveStackingContext
          className="heroBanner"
        >
          <Banner
            title={sanityBanner_1.big_text}
            content={sanityBanner_1.small_text}
            linkTo={sanityBanner_1.button_link}
            linkText={sanityBanner_1.button_text}
          />
        </BackgroundImage>
      </>
      <>
        <BackgroundImage
          Tag='section'
          {...sanityBackground_2}
          preserveStackingContext
          className="heroBanner"
        >
          <Banner
            title={sanityBanner_2.big_text}
            content={sanityBanner_2.small_text}
            linkTo={sanityBanner_2.button_link}
            linkText={sanityBanner_2.button_text}
          />
        </BackgroundImage>
      </>
      <>
        <BackgroundImage
          Tag='section'
          {...sanityBackground_3}
          preserveStackingContext
          className="heroBanner"
        >
          <Banner
            title={sanityBanner_3.big_text}
            content={sanityBanner_3.small_text}
            linkTo={sanityBanner_3.button_link}
            linkText={sanityBanner_3.button_text}
          />
        </BackgroundImage>
      </>
    </Carousel>


  );
};

const StyledHeroBanner = styled(HeroBanner)`

`;
export default StyledHeroBanner;
