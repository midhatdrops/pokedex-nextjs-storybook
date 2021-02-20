import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../../src/theme';

enum VARIANTS {
  LIGHT,
  DARK,
}

export interface IProps {
  /**
   * Define Dark Mode(0) or Light Mode(1)
   */
  variant: VARIANTS;
}

export const Component = styled.div<IProps>`
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
    opacity: 0.7;
  }
  ${(props) => {
    switch (props.variant) {
      case VARIANTS.DARK: {
        return `background-color: ${props.theme.palette.common.black}`;
      }
      case VARIANTS.LIGHT: {
        return `background-color: ${props.theme.palette.common.dark}`;
      }
    }
  }}
`;

export const ItemTree: React.FC<IProps> = ({ variant, ...props }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Component variant={variant}>{props.children}</Component>
    </ThemeProvider>
  );
};
