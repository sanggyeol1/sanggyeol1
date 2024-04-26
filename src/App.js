
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './AppLayout/AppLayout';
import HomePage from './page/HomePage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
