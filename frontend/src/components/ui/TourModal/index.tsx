import React, { useState, useEffect } from "react";

import { useStaticQuery, graphql } from 'gatsby';

import TourCard from "../TourCard";
import * as Styled from "./styles";


interface MiniModalProps {
  id: string;
  name: string;
  description: string;
  duration?: number;
  price?: number;
  priceType?: string;
  photoLink?: string;
}

const MiniTourCard: React.FC<MiniModalProps> = ({ id, name, description }) => (
  <Styled.TourCard key={id}>
    <Styled.Wrapper>
      <Styled.Title>
        {name && name}
      </Styled.Title>
      <Styled.Content>
        {description && description}
      </Styled.Content>
    </Styled.Wrapper>
  </Styled.TourCard>
)

const TourModal: React.FC = () => {
  const [previewTour, setPreviewTour] = useState(null)

  const { experiences, singleTour } = useStaticQuery(graphql`{
      experiences: allExperience(limit: 3, sort: {fields: duration}) {
        edges {
        node {
          id
          name
          description
          duration
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
            const { id, name, description } = tour.node;
            return <MiniTourCard id={id} name={name} description={description} />
          })
        }
      </Styled.TourContainer>
      {/* <MiniTourCard id={singleTour.id} name={singleTour.name} description={singleTour.description} /> */}
    </>
  )
}

export default TourModal;