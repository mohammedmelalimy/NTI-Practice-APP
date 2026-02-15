import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { selectIsDarkMode } from '../Store/Slices/themeSlice';

const Layout = () => {
    const isDark = useSelector(selectIsDarkMode);

  useEffect(() => {
    // ternary operator version
    isDark 
      ? document.documentElement.classList.add("dark") 
      : document.documentElement.classList.remove("dark");
  }, [isDark]);
  return (
    <div className='dark:bg-black min-h-screen'>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
export default Layout