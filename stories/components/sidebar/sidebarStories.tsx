import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Theme from '../../../src/theme';

enum VARIANTS {
  DARK,
  LIGHT,
}

export interface sidebarProps {
  /**
   * Define Dark Mode(0) or Light Mode(1)
   */
  variant?: VARIANTS | 0;
}

const Component = styled.div<sidebarProps>`
  width: 20%;
  max-width: 150px;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  ${(props) => {
    switch (props.variant) {
      case VARIANTS.DARK: {
        return `
          background-color: ${props.theme.palette.common.black};
          border-right: 1px solid ${props.theme.palette.common.white};
        `;
      }
      case VARIANTS.LIGHT: {
        return `
          background-color: ${props.theme.palette.common.white};
          border-right: 1px solid ${props.theme.palette.common.black};
        `;
      }
    }
  }};
`;

export const Sidebar: React.FC<sidebarProps> = ({ variant, ...props }) => (
  <ThemeProvider theme={Theme}>
    <Component variant={variant} />
  </ThemeProvider>
);

export default Sidebar;
