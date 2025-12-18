import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Connexion</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input 
            type="email" placeholder="Email" required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input 
            type="password" placeholder="Mot de passe" required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <Button label="Se connecter" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;