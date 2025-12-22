import React, { useState } from 'react';

const TargetWealthSIP = () => {

    const [goals, setGoals] = useState([]);

    const handleGoalsChange = (e) => {
        if (e.target.value !== isNaN) {
            setGoals(parseInt(e.target.value));
        }
        else {
            setGoals(0);
        }
    };

    return (
        <div>
            <h2 className='subheading'>What are your Goals?</h2>

            <div className='w-92'>
                <button className='button w-full' value={"HOME"}>✅ Buy my own HOME</button>
                <button className='button w-full' value={"MARRAIGE"}>Save for my MARRAIGE</button>
                <button className='button w-full' value={"CAR"}>Buy my own CAR</button>
                <button className='button w-full' value={"EDUCATION"}>Save for my Child's EDUCATION</button>
                <button className='button w-full' value={"NONE"}>None of these</button>
            </div>
        </div>
    );
};

export default TargetWealthSIP;
