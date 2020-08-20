import React from 'react';
import DataFetchingTwo from './components/DataFetchingTwo';

import './App.css';

function App() {

  return (
   <div className="App">
     <DataFetchingTwo />
   </div>
  );
}

export default App;



//Use State
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {

//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")
//   const [post, setPost] = useState({})

//   const baseURL = "https://jsonplaceholder.typicode.com"
//   useEffect(()=>{
//     axios.get(`${baseURL}/posts/1`)
//     .then(res =>{
//       setLoading(false)
//       setPost(res.data)
//       setError("")
//     })
//     .catch(err=>{
//       setLoading(false)
//       setPost({})
//       setError("Something went wrong.")
//     })
//   }, [])

//   return (
//    <div>
//      { loading ? "Loading...": post.title }
//      { error ? error : null }
//    </div>
//   );
// }

// export default App;


// All others up to useReducer + context to
// manage global state.

// import React, { useReducer } from 'react';

// // import ClassCounter from './components/ClassCounter';
// // import HookCounter from './components/HookCounter';
// // import HookCounterTwo from './components/HookCounterTwo';
// // import HookCounterThree from './components/HookCounterThree';
// // import HookCounterOne from './components/HookCounterOne';
// // import HookMouse from './components/HookMouse';
// // import MouseContainer from './components/MouseContainer';
// // import IntervalHookCounter from './components/IntervalHookCounter';
// // import DataFetching from './components/DataFetching';
// // import MemoCounter from './components/MemoCounter';
// // import ComponentA from './components/context/ComponentA';
// // import CounterOne from './components/reducer/CounterOne';
// // import HookCounterTwo from './components/reducer/CounterOne';
// // import CounterOne from './components/reducer/CounterOne';
// // import CounterTwo from './components/reducer/CounterTwo';
// // import CounterThree from './components/reducer/CounterThree';
// import ComponentA from './components/reducer+context/ComponentA';
// import ComponentB from './components/reducer+context/ComponentB';
// import ComponentC from './components/reducer+context/ComponentC';


// import './App.css';

// // export const userContext = React.createContext()
// // export const channelContext = React.createContext()


// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action)=>{
//     switch(action){
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         case 'RESET':
//             return initialState
//         default:
//             return state            
//     }
// }


// function App() {

//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
//       <div className="App">
//       {/* <ClassCounter /> */}
//       {/* <HookCounter /> */}
//       {/* <HookCounterTwo /> */}
//       {/* <HookCounterThree /> */}
//       {/* <HookCounterFour /> */}
//       {/* <HookCounterOne /> */}
//       {/* <HookMouse /> */}
//       {/* <MouseContainer /> */}
//       {/* <IntervalHookCounter /> */}
//       {/* <DataFetching /> */}
//       {/* <MemoCounter /> */}
//       {/* <userContext.Provider value="Moses">
//         <channelContext.Provider value="Mavewrick's">
//           <ComponentA />
//         </channelContext.Provider>
//       </userContext.Provider> */}
//       {/* <CounterOne /> */}
//       {/* <CounterTwo /> */}
//       {/* <CounterThree /> */}
//       Count {count}
//       <ComponentA />
//       <ComponentB />
//       <ComponentC />
//     </div>
//     </CountContext.Provider>
//   );
// }

// export default App;

