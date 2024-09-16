import { useEffect, useState } from 'react'
import Ficha from "./components/Ficha"

function App() {
  const [fichas, setFichas] = useState(JSON.parse(localStorage.getItem("sheets")) || [])

  useEffect(() => {
    localStorage.setItem("sheets", JSON.stringify(fichas));
  }, [fichas])

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const response = await fetch(`http://localhost:8080/sheets`, {
          method: 'GET',
        });
        const data = await response.json();
        console.log(data); 
        setFichas(data.content || []);
      } catch (error) {
        console.error('Erro ao buscar fichas:', error);
      }
    };
    
    fetchFichas();
  }, []);

  return (
   <div className='w-screen h-screen bg-gray-900 flex justify-center p-6'>
    <div className='w-[500px] space-y-4'>
      <h1 className='text-3x1 text-green-500 font-bold text-center'>Ficha de Treino</h1>
      <Ficha 
      fichas = {fichas}
      />
    </div>
   </div>
  )
}

export default App
