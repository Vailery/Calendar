import styled from "styled-components";

export const ErrorMessage = () => {
  return <Error>You don't have events!</Error>;
};

const Error = styled.p`
  align-self: center;
  font-family: "SF-Light";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.grayColor};
`;
