import React, { forwardRef } from 'react';
import { Link } from 'gatsby';
import Icon, { IconProps } from 'components/ui/Icon';
import * as Styled from './styles';
import Button from '../Button';
import { motion } from 'framer-motion';


interface TourCardXolaProps extends Styled.StyledProps {
  id: string;
  name: string;
  description: string;
  photoLink?: string;
  cancellationPolicy?: string;
  price: number;
  priceType?: string;
}

const TourCard: React.FC<TourCardXolaProps> = ({ id, center, name, description, price, priceType, photoLink, cancellationPolicy }) => (

  <Styled.TourCard photoLink={photoLink} center={center} id={id}>
    <Styled.Wrapper >
      <Styled.Title>{name}</Styled.Title>
      <Styled.DescriptionWrapper>
        <Styled.Content>{description}</Styled.Content>
      </Styled.DescriptionWrapper>
      <Styled.PriceLink>
        <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 1.15 }} >
          <Styled.priceDiv>
            <Styled.h3>${price}</Styled.h3>
          </Styled.priceDiv>
        </motion.div>
        <Styled.Link center target="_blank" href={`https://checkout.xola.com/index.html#seller/${process.env.GATSBY_XOLA_SELLER_ID}/experiences/${id}?openExternal=true`}>
          <Button>Click to book!</Button>
        </Styled.Link>
      </Styled.PriceLink>
    </Styled.Wrapper>
  </Styled.TourCard>

)

export default TourCard;
