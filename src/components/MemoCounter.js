import React, { useState, useMemo } from 'react';

const MemoCounter = ()=>{

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const IncrementOne = ()=>{
        setCounterOne(prevCountOne => prevCountOne + 1)
    }

    const IncrementTwo = ()=>{
        setCounterTwo(prevCountTwo => prevCountTwo + 1)
    }

    const isEven = useMemo(()=>{
        let i=0;
        while(i < 2000000000) i++
        return counterOne % 2 === 0;
    }, [counterOne])


    return(
        <div>
            <div>
                <button onClick={IncrementOne}>Count 1 - {counterOne}</button>
                <span>{ isEven ? 'Even': 'Odd' }</span>
            </div>
            <div>
                <button onClick={IncrementTwo}>Count 2 - {counterTwo}</button>
            </div>
            
        </div>
    );
}

export default MemoCounter;