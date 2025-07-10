import React from 'react'
import ActvOverview from '../ActivityOverview'
import BarGraph from '../BarGraph'

function ActivityTracker() {
    return (
        <div className="activityTrackerCont flex md:flex-col flex-row justify-around items-center flex-1 w-full bg-pink-400">
            <div className="overviewCont flex flex-col justify-around items-center">
                <ActvOverview />
                <DateRageNavigation />
                <div className="daterRangeCont ">
                    <div className="dateRange">This Week</div>
                    <div className="prevTime">3h 24m</div>
                </div>
            </div>
            <div className="statsCont flex flex-col justify-around items-center">
                <BarGraph />
                <div className="tdyAct">Today 1 activies/bike ride 28,50 km</div>
            </div>
        </div>
    )
}

const DateRageNavigation = () => {
    return (
        <div>
            DateRangeNavigation
        </div>
    )
}

export default ActivityTracker