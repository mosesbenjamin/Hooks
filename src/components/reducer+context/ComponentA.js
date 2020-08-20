import React, { useContext } from 'react'
import { CountContext } from '../../App';


const ComponentA = ()=>{

    const countContext = useContext(CountContext)
    return(
        <div>
            Component A - {countContext.countState}
            <button onClick={()=>countContext.countDispatch('INCREMENT')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('DECREMENT')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default ComponentA;