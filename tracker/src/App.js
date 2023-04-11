import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import UserManager from './components/UserManager';
import AddIssue1 from './components/AddIssue/AddIssue1';
import IssueManager from './components/AddIssue/IssueManager';
import Login1 from './components/Login1';
// import CheckTeam from './components/TeamExist';
import NotCheckTeam from './components/NotTeamExist';
import Team from './components/Team';
import Track from './components/Track';
import Authorisor from './components/Auth';
import { useState } from 'react';
import { UserProvider } from './components/useContext';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  
  return (
    <div className='grey-card-container'>
      <div>
      <UserProvider user={currentUser}>
        <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route element ={<Home></Home>} path="/" />
           <Route element={<SignUp></SignUp>} path="SignUp" />
           <Route element={
            <Authorisor>
              
            <NotCheckTeam>
              <AddIssue1/>
            </NotCheckTeam>
            </Authorisor>
           } path="addissue" />
           
           <Route element={<Login1 />} path="login1" />
           {/* <Route element ={<AddIssue></AddIssue>} path="add"/> */}
           <Route element ={<UserManager/>} path="usermanager"/>
           <Route element ={<IssueManager/>} path="issuemanager"/>
           <Route element ={<Team/>} path="team"/>
           <Route element ={<Track/>} path="track"/>
           </Routes>
        </BrowserRouter>
        </UserProvider>
      </div>
      
    </div>
  );
}

export default App;
