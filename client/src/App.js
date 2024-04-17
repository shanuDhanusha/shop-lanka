import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './customer/Home';
import Comments from './customer/Comments';
import Purchers from './customer/Purches';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/comments' element={<Comments/>}/> 
          <Route path='/Puchers' element={<Purchers/>}/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
