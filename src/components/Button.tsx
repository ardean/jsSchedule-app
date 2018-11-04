import styled from "styled-components";

const Button = styled.button`
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 8px 12px;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;