import styled from "styled-components";

const Select = styled.select`
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 8px 12px;
  border-radius: 3px;
  font-weight: 600;
  -webkit-appearance: none;
`;

export default Select;