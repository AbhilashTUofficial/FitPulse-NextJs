import React from 'react'
import SleepRhythmGraph from '../SleepRhythmGraph'

function SleepTracker() {
    return (
        <div className='sleepTrackerCont flex flex-1 flex-col justify-around items-center w-full bg-indigo-500'>
            <div className="title">Sleep Score</div>
            <SleepRhythmGraph />
        </div>
    )
}

export default SleepTracker