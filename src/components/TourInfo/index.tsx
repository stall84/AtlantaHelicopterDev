import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import LinkedInfoBlock from 'components/ui/LinkedInfoBlock';
// import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import TourCard from 'components/ui/TourCard';
import { IconProps } from 'components/ui/Icon';


import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

// interface Contact {
//   node: {
//     id: string;
//     frontmatter: {
//       title: string;
//       content: string;
//       icon: IconProps;
//     };
//   };
// }
// interface SanityContact {
//   node: {
//     id: string,
//     contact_type: string;
//     contact_value: string;
//     contact_icon: IconProps;
//     contact_link: string;
//   }
// }
interface XolaExperienceArray {
  toursArray: [] | [any] | never[];
}


const TourInfo: React.FC<XolaExperienceArray> = ({ toursArray }) => {
  console.log(toursArray);

  const orderedTours = toursArray.sort((a, b) => a.price - b.price);

  console.log('OrderedTours: ', orderedTours);
  return (
    <Container section>
      <TitleSection title="Charters and Tours" subtitle="" hero center />
      <Styled.h3>
        All tours listed below are priced <strong>per person</strong>. <br />
        All charters are priced <strong>per hour</strong><br />
        All winery/chophouse excursions are total price <strong>up to 3 people</strong><br />
        Find the perfect fit of time and destinations for you below!
      </Styled.h3>
      {
        toursArray.map((tour) => {
          return (
            <Styled.TourInfoItem>
              <TourCard id={tour.id} name={tour.name} description={tour.desc} price={tour.price} photoLink={tour.photo.id} />
            </Styled.TourInfoItem>
          );
        })
      }
    </Container>
  );
};

export default TourInfo;
