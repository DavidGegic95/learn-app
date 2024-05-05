import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import MyAccountPage from './pages/MyAccountPage/MyAccountPage';
import TrainingPage from './pages/TrainingPage/TrainingPage';
import JoinUsPage from './pages/JoinUsPage/JoinUsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BlogPage from './pages/BlogPage/BlogPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import PricingPage from './pages/PricingPage/PricingPage';
import LoginHomePage from './pages/LoginHomePage/LoginHomePage';
import AddTrainerPage from './pages/AddTrainerPage/AddTrainerPage';
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage';
import PasswordChanged from './pages/ChangePasswordPage/PasswordChanged';
import MyAccountEditPage from './pages/MyAccountPage/MyAccountEditPage';
import MyAccountAddPassedTrainig from './pages/MyAccountPage/MyAccountAddPassedTrainig';
import { useEffect, useState } from 'react';

export type loggedinObject = {
  firstName: string;
  username: string;
  email: string;
};

function App() {
  const [isloggedin, setIsLoggedin] = useState<loggedinObject | null>(null);
  useEffect(() => {
    console.log('log inside mount phase app');
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Header setIsLoggedin={setIsLoggedin} isloggedin={isloggedin} />
          <Routes>
            Features
            <Route path='/' element={<HomePage />} />
            <Route
              path='/loginHome'
              element={<LoginHomePage name={'Marta'} />}
            />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/change-password' element={<ChangePasswordPage />} />
            <Route
              path='/change-password/changed-successful'
              element={<PasswordChanged />}
            />
            <Route path='/features' element={<FeaturesPage />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route
              path='/my-account'
              element={<MyAccountPage setIsLoggedin={setIsLoggedin} />}
            />
            <Route
              path='/my-account/add-trainer'
              element={<AddTrainerPage />}
            />
            <Route
              path='/my-account/edit-profile'
              element={<MyAccountEditPage isloggedin={isloggedin} />}
            />
            <Route
              path='/my-account/add-passed-training'
              element={<MyAccountAddPassedTrainig />}
            />
            <Route
              path='/login'
              element={<LoginPage setIsLoggedin={setIsLoggedin} />}
            />
            <Route path='/trainings' element={<TrainingPage />} />
            <Route path='/joinus' element={<JoinUsPage />} />
            <Route path='/joinus/:roleparams' element={<JoinUsPage />} />
            <Route
              path='/joinus/:roleparams/validation'
              element={<JoinUsPage />}
            />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
