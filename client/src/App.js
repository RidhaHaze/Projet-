import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Contacts from './components/Contacts';
import AddEditContact from './components/AddEditContact';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
   <NavBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contacts' element={<Contacts />} />
    <Route path='/addEdit' element={<AddEditContact />} />
    <Route path='*' element={<NotFound />} />
   </Routes>

    </div>
  );
  
}

export default App;
