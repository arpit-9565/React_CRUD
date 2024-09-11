import Home from './components/Home';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Add from './components/Add'
import Update from './components/Update'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
    </>
  )
}

export default App
