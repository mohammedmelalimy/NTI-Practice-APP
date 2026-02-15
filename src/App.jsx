import { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import { selectIsDarkMode } from "./Store/Slices/themeSlice";

function App() {
  const isDark = useSelector(selectIsDarkMode);

  useEffect(() => {
    // ternary operator version
    isDark 
      ? document.documentElement.classList.add("dark") 
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
