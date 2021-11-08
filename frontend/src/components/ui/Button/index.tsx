import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ primary, block, children, onMouseEnter, onMouseLeave, hidden }) => (
  <Styled.Button primary={primary} block={block} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} hidden={hidden} >
    {children}
  </Styled.Button>
);

export default Button;
