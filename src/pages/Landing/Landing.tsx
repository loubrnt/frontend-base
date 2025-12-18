import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import { Button } from '../../components/common/Button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="max-w-4xl mx-auto text-center mt-24 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Gérez vos projets avec <span className="text-indigo-600">clarté</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          La solution idéale pour organiser votre travail au quotidien.
        </p>
        <Button label="Commencer gratuitement" onClick={() => navigate('/login')} />
      </header>
    </div>
  );
};

export default Landing;