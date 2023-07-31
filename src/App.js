import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import NavigationMenu from './Components/NavigationMenu';
import LocationPage from './Pages/LocationPage';
import NewsPage from './Pages/NewsPage';

function App() {
  return (
    <>
      <NavigationMenu />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/services' element={<ServicesPage />} />
        <Route exact path='/location' element={<LocationPage />} />
        <Route exact path='/news' element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
