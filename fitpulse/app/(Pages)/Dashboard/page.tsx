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
        <div className="flex w-screenn bg-[var(--secondary-black)] ">
            <NavBar />
            <div className=" flex flex-col w-full p-2 bg-[var(--primary-black)] rounded-l-2xl">
                <TopBar />
                <div className="p-0 m-0 h-full">
                    <div className="conten flex flex-1  flex-col h-full rounded-lg">
                        <div className="titleCont hidden  md:flex justify-between items-center bg-cyan-400-400 h-20">
                            <div className="hello font-bold font-sans text-2xl">
                                Hello, Anna
                            </div>
                            <div className="actionsBtns flex">
                                <div className="actionBtn searchBarCont p-2">
                                    <div className="icon"></div>
                                </div>
                                <div className="actionBtn calendarBtn text-sm p-2">
                                    <div className="icon"></div>
                                    Calendar
                                </div>
                                <div className="actionBtn aiBtn p-2">
                                    <div className="icon"></div>
                                    Chat with Ai</div>
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
