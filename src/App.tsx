/* istanbul ignore file */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/createPage/createPage';
import Feed from './pages/feedPage/feedPage';
import Profile from './pages/profilePage/profilePage';
import Register from './pages/registerPage/registerPage';
import Shop from './pages/shopPage/shopPage';
import LogIn from './components/login/login';
import Popup from './components/popUp/popUp';
import Footer from './components/footer/footer';
import DetailPage from './pages/detailPage/detailPage';

function App() {
    const [loginPopUp, setLoginPopUp] = useState(false);

    const togglePopup = () => {
        setLoginPopUp(!loginPopUp);
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route
                    path="/details/:id"
                    element={<DetailPage togglePopup={togglePopup} />}
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create" element={<Create />} />
                <Route
                    path="/shop"
                    element={<Shop togglePopup={togglePopup} />}
                />
                <Route
                    path="/feed"
                    element={<Feed togglePopup={togglePopup} />}
                />
            </Routes>

            <Popup trigger={loginPopUp}>
                <LogIn togglePopup={togglePopup} />
            </Popup>
            <Footer />
        </div>
    );
}

export default App;
