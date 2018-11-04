import styled, { keyframes } from "styled-components";
import * as React from "react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }

  50% {
    transform: scale(1.0);
  }
`;

const Spinner = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  animation: ${rotate} 2.0s infinite linear;
`;

const Dot = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 100%;
  animation: ${bounce} 2.0s infinite ease-in-out;
`;

const Dot2 = styled(Dot)`
  top: auto;
  bottom: 0;
  animation-delay: -1.0s;
`;

const LoadingIndicator: React.SFC = () => (
  <Spinner>
    <Dot />
    <Dot2 />
  </Spinner>
);

export default LoadingIndicator;