import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreadPage from './breed';
import BasePage from './base';
import { PATH } from './paths';

const { BASE, BREED } = PATH;

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={BASE} element={<BasePage />} />
      <Route path={BREED} element={<BreadPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
