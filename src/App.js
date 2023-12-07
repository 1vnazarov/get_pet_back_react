import { Routes, Route } from 'react-router-dom';
import AuthPage from "./pages/auth_page";
import Main from "./pages/main";
import './css/style.css';
import ProfilePage from "./pages/profile_page";
import RegisterPage from "./pages/register_page";
import AddPage from "./pages/add_page";
import SearchPage from "./pages/search_page";
import Card from './components/card';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element = {<Main/>}/>
        <Route path={'/profile'} element = {<ProfilePage/>}/>
        <Route path={'/register'} element = {<RegisterPage/>}/>
        <Route path={'/addCard'} element = {<AddPage/>}/>
        <Route path={'/search'} element = {<SearchPage/>}/>
        <Route path={'/login'} element = {<AuthPage/>}/>
        <Route path={'/card'} element = {<Card/>}/>
      </Routes>
    </div>
  );
}

export default App;
