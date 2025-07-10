import React from 'react'
import './style.css';
export default function TopBar() {
    return (
        <div className=" topBarCont flex justify-between align-center  h-20 p-1 bg-amber-400 sticky top-0">
            <div className="tabs flex items-center md:justify-start justify-center w-full">
                <div className="tab1 p-2">Home</div>
                <div className="tab2 p-2">Actions</div>
                <div className="tab3 p-2">Sleep</div>
                <div className="tab4 p-2">Calories</div>
            </div>
            <div className="actions hidden md:flex items-center">
                <div className="themeSwitch p-2">Theme</div>
                <div className="notif p-2">N</div>
                <div className="profile p-2">P</div>
            </div>

        </div>
    );
}
