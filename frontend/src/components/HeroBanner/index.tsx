import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from 'components/ui/Container';
import { SectionTitle } from 'helpers/definitions';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import * as Styled from './styles';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Carousel from 'components/ui/Carousel';
import Button from 'components/ui/Button';

import TourModal from '../ui/TourModal';

// interface SectionHeroBanner extends SectionTitle {
//   content: string;
//   linkTo: string;
//   linkText: string;
// }

interface SectionBannerProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
  bgImg?: string;
}

const Banner: React.FC<SectionBannerProps> = ({ title, subtitle, content, linkTo, linkText, bgImg }) => {
  const [isShown, setisShown] = useState(false);
  const modalFader = () => {
    setTimeout(() => {
      setisShown(false);
    }, 2000)
  }
  return (
    <Styled.Banner>
      <Container section>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Content>{content}</Styled.Content>
        <Link to={linkTo}>
          <Button primary>{linkText}</Button>
        </Link>
        <div
          style={GridStyles}
          onMouseEnter={(e) => e && setisShown(true)}
          onMouseLeave={(e) => e && modalFader()}
        >
          <Button
            primary
            hidden={isShown}
          >
            Hover over Me!
          </Button>
          {/* {
            isShown && <div style={GridStyles} > <p style={{ gridColumn: '1 / 4', backgroundColor: 'orange', height: '100px' }}> BUTTON  </p>  <p style={{ height: '150px', width: '150px' }}>1</p> <p style={{ height: '150px', width: '150px' }}>2</p> <p style={{ height: '150px', width: '150px' }}>3</p></div>
          } */}
          {
            isShown && <TourModal />
          }
        </div>
      </Container>
    </Styled.Banner>
  );

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

  // const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;
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

const Styling = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const GridStyles = {
  display: 'grid',
  backgroundColor: 'beige',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: '1fr 3fr'
}


export default HeroBanner;
