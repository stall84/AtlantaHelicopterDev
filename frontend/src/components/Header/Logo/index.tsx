import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import * as Styled from './styles';


const Logo: React.FC = () => {
  const { site } = useStaticQuery(graphql`{
  site {
    siteMetadata {
      title
    }
  }
  # placeholderImage: file(relativePath: {eq: "logoV2.png"}) {
  #   childImageSharp {
  #     gatsbyImageData(width: 474, layout: CONSTRAINED)
  #   }
  # }
}
`);

  const siteTitle: string = site.siteMetadata.title;
  // const logoImage = placeholderImage.childImageSharp.gatsbyImageData;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <StaticImage className="logoSpacing" src="../../../assets/images/atl_heli_logo_1.png" alt="Atlanta Helicopters Logo" placeholder="blurred" width={150} layout="constrained" />
      </Styled.Image>
      {/* <Styled.Text>{siteTitle}</Styled.Text> */}
    </Styled.Logo>
  );
};

export default Logo;
