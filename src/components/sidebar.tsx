import React from 'react';
import styled from 'styled-components';

enum VARIANTS {
  DARK,
  LIGHT,
}

interface sidebarProps {
  variant?: VARIANTS | 0;
}

const Component = styled.div<sidebarProps>`
  width: 20%;
  max-width: px;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  ${(props) => {
    switch (props.variant) {
      case VARIANTS.DARK: {
        return `
          background-color: ${props.theme.palette.common.black};
          border-right: 1px solid ${props.theme.palette.secondary.main};
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

const Sidebar: React.FC<sidebarProps> = ({ variant, ...props }) => (
  <Component variant={variant}>{props.children}</Component>
);

export default Sidebar;
