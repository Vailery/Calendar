import { createContext, ReactNode, useEffect, useState } from "react";

interface ITheme {
  children: ReactNode;
}

export const darkTheme = {
  textButton: "#000000",
  mainBackground: "#797979",
  text: "#FFFFFF",
  widgetBackground: "#121212",
  grayColor: "#C1C1C1",
};

export const lightTheme = {
  textButton: "#FFFFFF",
  mainBackground: "#e5e5e5",
  text: "#000000",
  widgetBackground: "#ffffff",
  grayColor: "rgba(0, 0, 0, 0.5)",
};

export const ThemeContext = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: lightTheme,
});

export const ThemeProdiver = ({ children }: ITheme) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
