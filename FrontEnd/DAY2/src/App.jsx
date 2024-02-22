//import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './Navbar';

// function Info() {
//   return <h2>Info Page</h2>;
// }

// function About() {
//   return <h2>About Us Page</h2>;
// }

// function Subscription() {
//   return <h2>Subscription Page</h2>;
// }

// function Login() {
//   return <h2>Login Page</h2>;
// }

// function Signup() {
//   return <h2>Signup Page</h2>;
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route path="/info">
//             <Info />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/subscription">
//             <Subscription />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/signup">
//             <Signup />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
//import React from 'react';
import Login from './components/login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';

// import Homepage from './components/Homepage';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Homepage' element={<Homepage/>}/>

    </Routes>
    </Router>
  );
}
export default App;
