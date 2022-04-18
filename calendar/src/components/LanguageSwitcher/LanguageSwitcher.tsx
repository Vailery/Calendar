import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <Select>
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="es">Español</option>
      </select>
    </Select>
  );
};

const Select = styled.div`
  position: relative;
  & select {
    background: #0071e3;
    padding: 4px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-family: "SF-Light";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme }) => theme.textButton};
    cursor: pointer;
  }
`;
