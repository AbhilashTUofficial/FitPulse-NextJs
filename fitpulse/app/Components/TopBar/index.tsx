import React from 'react'
import './style.css';
export default function TopBar() {
    return (
        <div className=" topBarCont flex justify-between align-center  h-20 p-1 bg-amber-400 sticky top-0">
            <div className="tabs flex items-center md:justify-start justify-center w-full">
                <div className="tab p-2">
                    <div className="icon"></div>
                    <span>Home</span>
                </div>
                <div className="tab p-2">
                    <div className="icon"></div>
                    <span>Actions</span>
                </div>
                <div className="tab p-2">
                    <div className="icon"></div>
                    <span>Sleep</span>
                </div>
                <div className="tab p-2">
                    <div className="icon"></div>
                    <span>Calories</span>
                </div>
            </div>
            <div className="actions hidden md:flex items-center">
                <div className="themeSwitch actionBtn themeBtn p-2">
                    <div className="themeThumb"></div>
                </div>
                <div className="notif actionBtn">
                    <div className="icon"></div>
                </div>
                <div className="profile actionBtn p-2">
                    <div className="profilePic"></div>
                    <div className="dropBtn">v</div>
                </div>
            </div>

        </div>
    );
}
