
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {
  const times = [
    {
      nome : 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome : 'Frontend',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome : 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome :'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome : 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE6F5',
    },
    {
      nome : 'Moblie',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome :'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  const [colaboradores, setColaboradores] =useState([])
  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => 
        aoColaboradorAdicionado(colaborador)} 
        times={times.map(time => time.nome )} 
      />

      {times.map(
        time => 
        <Time key={time.nome}
            nome={time.nome} 
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
        />)}

        <Rodape/>  
      
      
      
    </div>
  );
}

export default App;
