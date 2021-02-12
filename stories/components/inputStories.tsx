import React from 'react';
import styled from 'styled-components';

export const InputTest = styled.input`
  width: 200px;
  height: 40px;
  background-color: black;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 2px 2px;
  border-radius: 3px;
  text-align: center;
`;

export interface InputStyled {
  /**
   * What function executes when clicked ?
   */
  onClick?: () => void;
  /**
   * What text is the placeholder ?
   */
  placeholder: string;
}

export const Input: React.FC<InputStyled> = ({ placeholder, ...props }) => (
  <InputTest placeholder={placeholder} />
);
