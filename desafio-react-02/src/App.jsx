import "./App.css";
import NovoComponente from "./components/NovoComponente";

import CidadeGrande from "./assets/CidadeGrande.jpg";

function App() {
  return (
    <div>
      <NovoComponente />

      {/* Existem duas formas de adicionar imagens em um projeto REACT, uma delas é colocando em uma pasta chamada Public e a outra é em assets */}
      
      <div>
        {/*  Imagem em Public*/}
        <img src="/fundo.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={CidadeGrande} alt="Paisagem" />
      </div>
    </div>
  );
}

export default App;
