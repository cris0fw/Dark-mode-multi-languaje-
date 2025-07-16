import { useLanguajesStore } from "../hook/useLanguajes";

const SelectorIdioma = () => {
  const { languaje, handleLanguajes } = useLanguajesStore();

  return (
    <select
      value={languaje}
      onChange={(e) => handleLanguajes(e.target.value)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
    >
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};

export default SelectorIdioma;
