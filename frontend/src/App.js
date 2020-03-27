import React from 'react';
import Routes from './routes';
import './global.css';

function App() {
  // const [counter, setCounter] = useState(0);

  // // o useState retorna um Array [valor, funçãoDeAtualização]

  // function increment() {
  //   setCounter(counter + 1); 
    
  // }

  return (
    // No REACT não é possível ter um elemento por baixo de outro sem que esteja agrupado, ou seja não possível ter isto <i>ola</i><u>ola2</u> - Isto dá erro. Para que funcione no REACT é necessário agrupar os elementos. Ex: <div><i>ola</i><u>ola2</u></div> - Isto está certo

   <Routes />
  );
}

export default App;
