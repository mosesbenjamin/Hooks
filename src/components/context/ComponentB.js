import React, { useContext } from 'react';
import { userContext, channelContext } from '../../App'

// import ComponentC from './ComponentC'

const ComponentB =()=>{

    const user = useContext(userContext)
    const channel = useContext(channelContext)

    return(
        <div>
            {/* <ComponentC /> */}
            {user} - {channel}
        </div>
    )
}

export default ComponentB;