import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreadPage from './breed';
import BasePage from './base';
import { PATH } from './paths';
import FavoritesPage from './favorites';

const { BASE, BREED, FAVORITES } = PATH;

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={BASE} element={<BasePage />} />
      <Route path={BREED} element={<BreadPage />} />
      <Route path={FAVORITES} element={<FavoritesPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
