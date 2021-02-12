import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Theme from '../../../src/theme';

enum VARIANTS {
  Dark,
  Light,
}

export interface Iprops {
  /**
   * Variant is defined by: Dark(0) or Light(1)
   */
  variant?: VARIANTS | 0;
}

const Component = styled.div<Iprops>`
  width: 100%;
  height: 30px;
  position: fixed;
  top: 0;
  ${(props) => {
    switch (props.variant) {
      case VARIANTS.Dark: {
        return `
          background-color: ${props.theme.palette.common.black};
          border-bottom: 1px solid ${props.theme.palette.common.white};
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
  <ThemeProvider theme={Theme}>
    <Component variant={variant} />
  </ThemeProvider>
);
