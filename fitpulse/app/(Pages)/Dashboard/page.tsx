import Image from "next/image";
import "./style.css";
import NavBar from "@/app/Components/SideNav";
import TopBar from "@/app/Components/TopBar";
export default function Dashboard() {
    return (
        <div className="flex w-screen">
            <NavBar />
            <div className="main flex flex-col w-full p-2">
                <TopBar />
                <div className="p-0 m-0 h-full overflow-x-auto">
                    <div className="titleCont bg-cyan-400-400 h-30 bg-green-600"></div>
                    <div className="content bg-green-400 flex lg:flex-row flex-col  w-full h-full p-1 gap-1">
                        <div className="section1 flex-1 flex flex-col bg-amber-400 h-full">
                            <div className="actvOverviewCont  flex h-80  lg:flex-3 bg-pink-400"></div>
                            <div className="sleepScoreCont flex h-80 lg:flex-2 bg-indigo-500"></div>
                        </div>
                        <div className="section2 flex flex-1 flex-col bg-white">
                            <div className="caloriesAnalysisCont h-80 lg:flex-1 bg-cyan-500"></div>
                            <div className="caloriesAnalysisCont h-80 lg:flex-1 bg-amber-300"></div>
                        </div>
                        <div className="section3 flex flex-1 flex-col h-100 bg-purple-500">
                            faf
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
