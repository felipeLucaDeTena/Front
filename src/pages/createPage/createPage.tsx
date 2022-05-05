/* istanbul ignore file */
import React, { useState } from 'react';
import Canvas from '../../components/main/create/canvas';
import CreateForm from '../../components/main/create/create-form';
import NavBar from '../../components/nav-bar/nav-bar';
import Popup from '../../components/popUp/popUp';
import './createPage.scss';

function Create() {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const togglePopup = () => {
        setButtonPopUp(!buttonPopUp);
    };
    return (
        <div className="create__container">
            <NavBar />
            <div className="canvas__container">
                <Canvas togglePopup={togglePopup} />
                <Popup trigger={buttonPopUp}>
                    <CreateForm togglePopup={togglePopup} />
                </Popup>
            </div>
        </div>
    );
}
export default Create;
