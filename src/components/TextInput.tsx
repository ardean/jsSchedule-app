import styled from "styled-components";

const TextInput = styled.input`
  color: ${({ theme }) => theme.primaryColor};
  border: none;
  background-color: white;
  padding: 8px 12px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
`;

export default TextInput;