import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

export const ErrorMessage = () => {
  const { theme } = useContext(ThemeContext);

  return <Error theme={theme}>You don't have events!</Error>;
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
