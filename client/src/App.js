import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import CreateForm from './components/CreateForm/CreateForm.jsx'
import Detail from './components/Detail/Detail.jsx'
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/Landing.jsx'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<NavBar/>}/> */}
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/createForm' element={<CreateForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
