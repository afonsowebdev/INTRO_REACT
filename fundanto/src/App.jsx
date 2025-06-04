import FirstComponent from './components/FirstComponent'
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponents from './components/MyComponents'
import Events from './components/Events'

function App() {
  return (
    <div className="App">
      <h1>Fundamento de React</h1>
      <FirstComponent />
      <p>Este é o primeiro componente do nosso projeto!</p>
      <TemplateExpressions />
      <MyComponents />
      <Events />
    </div>
    /*  */
  )
}

export default App
