import React from 'react'
import './style.css';

export default function NavBar() {
    return (
        <div className="navBarCont flex flex-col h-screen w-20 sticky top-0  justify-between">
            <div className="logo flex items-center justify-center">
                Logo
            </div>
            <div className="btnCont flex flex-col h-2/4 items-center justify-around">
                <div className="btn1 group btn flex justify-center items-center relative overflow-visible">
                    <div className="btnContent absolute z-10">1</div>

                    <div className="btnHover absolute top-0 left-full h-full w-0 bg-white transition-all duration-300 group-hover:w-[60px] rounded-r-full z-0"></div>
                </div>

                <div className="btn1 btn flex justify-center items-center">2</div>
                <div className="btn1 btn flex justify-center items-center">3</div>
                <div className="btn1 btn flex justify-center items-center">4</div>
                <div className="btn1 btn flex justify-center items-center">5</div>
                <div className="btn1 btn flex justify-center items-center">6</div>
            </div>

            <div className="logOutBtn flex items-center justify-center">L.Out</div>
        </div>
    );
}
