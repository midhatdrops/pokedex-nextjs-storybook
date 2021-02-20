import React from 'react';
import styled from 'styled-components';

enum VARIANTS {
  LIGHT,
  DARK,
}

interface IProps {
  variant: VARIANTS;
}

const Component = styled.div<IProps>`
  width: 100%;
  max-width: 80%;
  height: 50px;
  letter-spacing: 5px;
  font-size: 18px;
  font-weight: 400;
  font-family: Ubuntu, sans-serif;
  margin-top: 20px;
  position: relative;
  left: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s easy-in-out;
  text-align: center;
  &:hover {
    border-left: 1px solid whitesmoke;
    background-color: black;
    opacity: 0.7
  }
  /* ${(props) => {
    switch (props.variant) {
      case VARIANTS.DARK: {
        return `color: ${props.theme.palette.common.white}`;
      }
      case VARIANTS.LIGHT: {
        return `color: ${props.theme.palette.common.black}`;
      }
    }
  }} */
`;

const ItemTree: React.FC<IProps> = ({ variant, ...props }) => {
  return <Component variant={variant}>{props.children}</Component>;
};

export default ItemTree;
