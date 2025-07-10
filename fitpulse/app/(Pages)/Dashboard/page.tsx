import Image from "next/image";
import "./style.css";
import NavBar from "@/app/Components/SideNav";
import TopBar from "@/app/Components/TopBar";
import ActivityTracker from "@/app/Components/ActivityTracker";
import SleepTracker from "@/app/Components/SleepTracker";
import HealthTracker from "@/app/Components/HealthTracker";
import CaloriesAnalysis from "@/app/Components/CaloriesAnalysis";
export default function Dashboard() {
    return (
        <div className="flex w-screen">
            <NavBar />
            <div className=" flex flex-col w-full p-2">
                <TopBar />
                <div className="p-0 m-0 h-full ">
                    <div className="content bg-green-400 flex flex-1  flex-col h-full">
                        <div className="titleCont hidden  md:flex justify-between items-center bg-cyan-400-400 h-20 p-2 bg-green-600">
                            <div className="hello">
                                Hello, Anna
                            </div>
                            <div className="actionsBtns flex">
                                <div className="searchBarCont p-2">S</div>
                                <div className="calendarCont p-2">C</div>
                                <div className="aiBtn p-2">A</div>
                            </div>
                        </div>
                        <div className="main flex flex-1 flex-col md:flex-row">
                            <div className="section1_2 flex  flex-2 md:flex-row flex-col  ">
                                <div className="section1 flex flex-1 flex-row md:flex-col  h-full">
                                    <ActivityTracker />
                                    <SleepTracker />
                                </div>
                                <div className="section2 flex flex-1 flex-row md:flex-col h-full">
                                    <HealthTracker />
                                    <CaloriesAnalysis />

                                </div>
                            </div>

                            <div className="section3 flex flex-1 bg-purple-500">
                                5
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
