import { useMemo } from 'react';

function App({ data }) {

  // imaginar aquí: estado timer... y re-renderización de componente provocada por el mismo 

  const filteredList = useMemo(() => {
    // Realizar un cálculo costoso para filtrar la lista
    return data.filter(item => item > 10);
  }, [data]);

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}