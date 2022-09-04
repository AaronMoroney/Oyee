
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import LoginSignup from './pages/LoginSignupPage/LoginSignup';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<LoginSignup />} />
        <Route path = '/homepage' element = {<HomePage />} />
          {/* For UI dev purposes, created link to home page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App



