import React from 'react';
import styled from 'styled-components';

enum VARIANTS {
  Dark,
  Light,
}

interface Iprops {
  /**
   * Variant is defined by: Dark(0) or Light(1)
   */
  variant?: VARIANTS | 0;
}

const Component = styled.div<Iprops>`
  width: 100%;
  height: 30px;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 2;
  ${(props) => {
    switch (props.variant) {
      case VARIANTS.Dark: {
        return `
          background-color: ${props.theme.palette.common.black};
          border-bottom: 1px solid ${props.theme.palette.secondary.main};
        `;
      }
      case VARIANTS.Light: {
        return `
          background-color: ${props.theme.palette.common.white};
          border-bottom: 1px solid ${props.theme.palette.common.black};
        `;
      }
    }
  }}
`;

export const Toolbar: React.FC<Iprops> = ({ variant, ...props }) => (
  <Component variant={variant}>{props.children}</Component>
);
