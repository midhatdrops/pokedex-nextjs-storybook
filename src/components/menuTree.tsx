import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const MenuTree: React.FC = (props) => <Component>{props.children}</Component>;

export default MenuTree;
