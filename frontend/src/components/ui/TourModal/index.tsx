import React, { useState, useEffect } from "react";

import { useStaticQuery, graphql } from 'gatsby';

import TourCard from "../TourCard";
import * as Styled from "./styles";
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import { StaticImage } from "gatsby-plugin-image";


interface MiniModalProps {
  id: string;
  name: string;
  description: string;
  duration?: number;
  price?: number;
  priceType?: string;
  photoLink?: string;
}

const MiniTourCard: React.FC<MiniModalProps> = ({ id, name, description, price, priceType, photoLink }) => (
  <Styled.TourCard key={id}>
    <Styled.Wrapper>
      <Styled.Image src={`${process.env.GATSBY_IMG_TEST}${photoLink}_723x542.jpg`} />
      <Styled.Title>
        {name}
      </Styled.Title>
      <Styled.Content>
        {description}
      </Styled.Content>
      <Styled.PriceDiv>
        <Styled.Price>{price} per {priceType}</Styled.Price>
      </Styled.PriceDiv>
    </Styled.Wrapper>
  </Styled.TourCard>
)

const TourModal: React.FC = () => {
  const [previewTour, setPreviewTour] = useState(null)

  const { experiences, singleTour } = useStaticQuery(graphql`{
      experiences: allExperience(limit: 2, sort: {fields: duration}) {
        edges {
        node {
          id
          name
          description
          duration
          price
          priceType
          photoLink
        }
      }
    }
      singleTour: experience(id: {eq: "60e206524161751e630c86a5"}) {
        id
        name
        description
        duration
        price
        priceType
        photoLink
      }
      }`)

  // const buildTours = experiences.edges;
  // buildTours.sort((a: any, b: any) => a.node.price - b.node.price)


  console.log('3 MiniTours  :  ', experiences)
  return (
    <>
      <Styled.TourContainer>
        {
          experiences.edges && experiences.edges.map((tour: any) => {
            const { id, name, description, price, priceType, photoLink } = tour.node;
            return <MiniTourCard id={id} name={name} description={description} price={price} priceType={priceType} photoLink={photoLink} />
          })
        }
      </Styled.TourContainer>
      {/* <MiniTourCard id={singleTour.id} name={singleTour.name} description={singleTour.description} /> */}
    </>
  )
}

export default TourModal;