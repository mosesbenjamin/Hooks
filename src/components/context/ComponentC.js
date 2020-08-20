import React from 'react';
import { userContext, channelContext } from '../../App'

const ComponentC =()=>{
    return(
        <div>
            <userContext.Consumer>
                {
                    user =>{
                        return(
                            <channelContext.Consumer>
                                {
                                    channel =>{
                                    return <div>User context value is - { user }, Channel value is - { channel }</div>
                                    }
                                }
                            </channelContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC;