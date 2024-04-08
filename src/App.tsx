// import TestComponent from './components/TestComponent';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import MyAccountPage from './pages/MyAccountPage/MyAccountPage';
import TrainingPage from './pages/TrainingPage/TrainingPage';
import JoinUsPage from './pages/JoinUsPage/JoinUsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<TestComponent />} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/myaccount' element={<MyAccountPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/training' element={<TrainingPage />} />
          <Route path='/joinus' element={<JoinUsPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
