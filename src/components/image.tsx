import React from 'react';

import styled from 'styled-components';

const Component = styled.img`
  width: 200px;
  height: 20px;
  border-radius: 4px;
  background-image: url('');
`;

export const Image: React.FC = () => <Component />;

export default Image;
