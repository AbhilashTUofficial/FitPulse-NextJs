import React from 'react'
import WalkStepCount from '../WalkStepCount'
import HeartRateGraph from '../HeartRateGraph'
import StressMeter from '../StressMeter'
import WaterLevel from '../WaterLevel'

function HealthTracker() {
    return (
        <div className='healthTrackerCont grid grid-cols-2 grid-rows-2 h-full'>
            <WalkStepCount />
            <HeartRateGraph />
            <StressMeter />
            <WaterLevel />
        </div>
    )
}

export default HealthTracker