import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Auth/Login';
import Overview from '../pages/Dashboard/Overview';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;