import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Inbox} from './pages/Inbox'
import {Sent} from './pages/Sent'
import {Details} from './pages/Details'
import { SentDetails } from './pages/SentDetails';

function App() {
  return (
    <div className="App">
    

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/sent' element={<Sent />} />
        <Route path='/inboxdetails/:id' element={<Details />} />
        <Route path='/sentdetails/:id' element={<SentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
