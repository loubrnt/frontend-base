import { useToggle } from '../../hooks/useToggle';
import { useCounter } from '../../hooks/useCounter';
import { Button } from '../../components/common/Button';

const Overview = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold border-b pb-4">Tableau de bord</h1>

      {/* Section Hook Toggle */}
      <section className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold mb-4 text-gray-500">Test du Hook : useToggle</h2>
        <Button 
          label={isMenuOpen ? "Cacher le secret" : "Voir le secret"} 
          onClick={toggleMenu} 
          variant={isMenuOpen ? "secondary" : "primary"}
        />
        {isMenuOpen && (
          <div className="mt-4 p-4 bg-indigo-50 text-indigo-700 rounded-lg animate-bounce">
            🎉 Bravo ! Tu maîtrises les Hooks !
          </div>
        )}
      </section>

      {/* Section Hook Counter */}
      <section className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold mb-4 text-gray-500">Test du Hook : useCounter</h2>
        <div className="flex items-center justify-center space-x-6">
          <button onClick={decrement} className="text-3xl hover:text-indigo-600">-</button>
          <span className="text-5xl font-mono font-bold w-20 text-center">{count}</span>
          <button onClick={increment} className="text-3xl hover:text-indigo-600">+</button>
        </div>
        <div className="mt-6 flex justify-center">
          <button onClick={reset} className="text-sm text-gray-400 hover:text-gray-600 underline">Réinitialiser</button>
        </div>
      </section>
    </div>
  );
};

export default Overview;