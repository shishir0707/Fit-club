import React from 'react'
import './Plans.scss';
import { plansData } from '../../data/plansData.js';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className='plans-container' id='plans'>

            <div className='blur plans-blur1'></div>
            <div className='blur plans-blur2'></div>

            <div className='programs-header' style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            {/* plans card */}

            <div className='plans'>
                {plansData.map((plans, i) => (
                    <div className='plan' key={i}>
                        {plans.icon}
                        <span>{plans.name}</span>
                        <span>$ {plans.price}</span>

                        <div className='features'>
                            {plans.features.map((feature, i) => (
                                <div className='feature' key={i}>
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits - </span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans