import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import LinkedInfoBlock from 'components/ui/LinkedInfoBlock';
// import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import TourCard from 'components/ui/TourCard';
import Icon, { IconProps } from 'components/ui/Icon';


import { SectionTitle } from 'helpers/definitions';

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
}


const TourInfo: React.FC<XolaExperienceArray> = ({ toursArray }) => {
  // console.log(toursArray);
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


  const orderedTours = toursArray.sort((a, b) => a.price - b.price);


  const buildTours = experiences.edges
  buildTours.sort((a: any, b: any) => a.node.price - b.node.price)

  console.log('OrderedTours: ', orderedTours);
  return (
    <>
      <Styled.Icon className="bounce">
        <Icon icon="arrow-down" />
      </Styled.Icon>

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
              <Styled.TourInfoItem>
                <TourCard key={id} id={id} name={name} description={description} price={price} photoLink={photoLink} />
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

      </Container>
    </>
  );
};

export default TourInfo;
