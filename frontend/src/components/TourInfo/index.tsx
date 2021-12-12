import React, { useEffect, useRef, ForwardedRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import LinkedInfoBlock from 'components/ui/LinkedInfoBlock';
// import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import TourCard from 'components/ui/TourCard';



import * as Styled from './styles';


interface XolaExperienceArray {
  toursArray: [] | [any] | never[];
}

type BuildTour = {
  id: string;
  name: string;
  description: string;
  duration?: number;
  photoLink?: string;
  price: number;
  priceType?: string;
  ref?: any;
}


const TourInfo: React.FC<XolaExperienceArray> = ({ toursArray }) => {

  // Tour Cards will be created at site build time with this implementation, but are still capable of using the useEffect 'dynamic' call to Xola for the tours found in tours.tsx (pages).
  const { experiences } = useStaticQuery(graphql`{
    experiences: allExperience {
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
  }`)

  const buildTours = experiences.edges;

  // Sort the tours from lowest to highest price
  buildTours.sort((a: any, b: any) => a.node.price - b.node.price)

  return (
    <>

      <Container section>
        <TitleSection title="Charters and Tours" subtitle="" hero center />

        <Styled.h3>
          All tours listed below are priced <strong>per person</strong>. <br />
          All charters are priced <strong>per hour</strong><br />
          All winery/chophouse excursions are total price <strong>up to 3 people</strong><br />
          Find the perfect fit of time and destinations for you below!
        </Styled.h3>

        {
          buildTours.map((tour: any) => {
            const {
              id,
              name,
              description,
              price,
              photoLink
            } = tour.node;
            return (
              <Styled.TourInfoItem key={id}  >
                <TourCard id={id} name={name} description={description} price={price} photoLink={photoLink} />
              </Styled.TourInfoItem>
            );
          })
        }

        {/* {
          toursArray.map((tour) => {
            return (
              <Styled.TourInfoItem>
                <TourCard id={tour.id} name={tour.name} description={tour.desc} price={tour.price} photoLink={tour.photo.id} />
              </Styled.TourInfoItem>
            );
          })
        } */}

        {/* <div id="dummyDiv" ref={dummyDivRef} /> */}

      </Container>
    </>
  );
};

export default TourInfo;
