//react
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
//pages
import LoginSignup from './pages/LoginSignup.js';
import HomePage from './pages/HomePage.js';
import ProfilePage from './pages/ProfilePage.js';
import UserProfilePage from './pages/UserProfilePage.js';
import PostPage from './pages/PostPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <LoginSignup /> } />
        <Route path = '/homepage' element = { <HomePage  /> } />
        <Route path = '/profilepage' element = { <ProfilePage /> } />
        <Route path = '/userprofilepage' element = { <UserProfilePage /> } />
        <Route path = '/postpage' element = { <PostPage  /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App



