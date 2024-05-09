// import './App.css';
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
import MyAccountAddPassedTrainig from './pages/MyAccountPage/MyAccountAddPassedTraining';
import AppContext, { UserDataType } from './AppContext';
import { useEffect, useState } from 'react';
import {
  getTokenFromLocalStorage,
  idFromLocalStorage,
} from './components/MiniProfile/utils';
import { USER_SERVICE } from './env';

function App() {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [token, setToken] = useState(getTokenFromLocalStorage());
  useEffect(() => {
    setToken(getTokenFromLocalStorage());
  }, [userData]);
  useEffect(() => {
    setToken(getTokenFromLocalStorage());
    fetch(USER_SERVICE + '/me?id=' + idFromLocalStorage())
      .then((res) => {
        if (!res.ok) {
          setUserData(null);
          throw new Error('Failed to fetch user data');
        }
        return res.json();
      })
      .then((data) => {
        setUserData({ ...data?.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className='app relative'>
        <AppContext.Provider value={{ userData, setUserData, setToken }}>
          <BrowserRouter>
            <Header setUserData={setUserData} userData={userData} />
            <Routes>
              {token ? (
                <>
                  <Route
                    path='/'
                    element={<LoginHomePage userData={userData} />}
                  />
                  <Route
                    path='/change-password'
                    element={<ChangePasswordPage />}
                  />
                  <Route
                    path='/change-password/changed-successful'
                    element={<PasswordChanged />}
                  />

                  <Route
                    path='/my-account'
                    element={<MyAccountPage userRole={userData?.role || ''} />}
                  />
                  <Route
                    path='/my-account/add-trainer'
                    element={<AddTrainerPage />}
                  />
                  <Route
                    path='/my-account/edit-profile'
                    element={<MyAccountEditPage />}
                  />
                  <Route
                    path='/my-account/add-passed-training'
                    element={<MyAccountAddPassedTrainig />}
                  />
                  <Route
                    path='/my-account/trainings/:roleparams'
                    element={<TrainingPage />}
                  />
                </>
              ) : (
                <>
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/joinus' element={<JoinUsPage />} />
                  <Route path='/joinus/:roleparams' element={<JoinUsPage />} />
                  <Route
                    path='/joinus/:roleparams/validation'
                    element={<JoinUsPage />}
                  />
                  <Route path='/' element={<HomePage />} />
                </>
              )}
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/pricing' element={<PricingPage />} />
              <Route path='/features' element={<FeaturesPage />} />
              <Route path='/aboutus' element={<AboutUsPage />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
