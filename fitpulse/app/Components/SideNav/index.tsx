import React from 'react'

export default function NavBar() {
    return (
        <div className="navBarCont flex flex-col h-screen w-20 bg-red-600 sticky top-0  justify-between">
            <div className="logo flex items-center justify-center">
                Logo
            </div>
            <div className="btnCont flex flex-col items-center justify-center">
                <div className="btn1">1</div>
                <div className="btn1">2</div>
                <div className="btn1">3</div>
                <div className="btn1">4</div>
                <div className="btn1">5</div>
            </div>
            <div className="logOutBtn flex items-center justify-center">Logout</div>
        </div>
    );
}
