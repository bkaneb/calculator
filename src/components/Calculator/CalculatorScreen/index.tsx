import React from "react";
import styled from "styled-components";

interface ICalculatorScreenProps {
    value: string;
}
//TODO: when the value is too long, it should be truncated
export const CalculatorScreen = ({ value }: ICalculatorScreenProps) => (
  <CalculatorScreenWrapper data-testid="calculator-screen">
    <Number>{value}</Number>
  </CalculatorScreenWrapper>
);

const CalculatorScreenWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 4% 2% 4%;
  height: 18%;
`;

const Number = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 3em;
  font-weight: 200;
`;
