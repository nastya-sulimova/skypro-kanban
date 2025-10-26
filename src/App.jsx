import "./App.css";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
// import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
// import PopUser from "./components/popups/PopUser/PopUser";
// import { useState } from "react";
// import { useEffect } from "react";
// import styled, { createGlobalStyle } from "styled-components";
import AppRoutes from "./components/AppRoutes";

// const GlobalStyle = createGlobalStyle`
//   main.css
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// *:before,
// *:after {
//   box-sizing: border-box;
// }

// /* CommonLink */
// a,
// a:visited {
//   text-decoration: none;
//   cursor: pointer;
// }

// button,
// ._btn {
//   cursor: pointer;
//   outline: none;
// }

// ul li {
//   list-style: none;
// }

// @keyframes card-animation {
//   0% {
//     height: 0;
//     opacity: 0;
//   }
//   100% {
//     height: auto;
//     opacity: 1;
//   }
// }
// html,
// body {
//   width: 100%;
//   height: 100%;
//   font-family: "Roboto", Arial, Helvetica, sans-serif;
//   color: #000000;
// }
// `;

// const Wrapper = styled.div`
//   max-width: 100%;
//   width: 100vw;
//   min-height: 100vh;
//   overflow: hidden;
//   background-color: #f1f1f1;
// `;

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      <AppRoutes/>
    </>
  );
}

export default App;




// import "./App.css";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
// import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
// import PopUser from "./components/popups/PopUser/PopUser";
// import { useState } from "react";
// import { useEffect } from "react";
// import styled, { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   main.css
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// *:before,
// *:after {
//   box-sizing: border-box;
// }

// /* CommonLink */
// a,
// a:visited {
//   text-decoration: none;
//   cursor: pointer;
// }

// button,
// ._btn {
//   cursor: pointer;
//   outline: none;
// }

// ul li {
//   list-style: none;
// }

// @keyframes card-animation {
//   0% {
//     height: 0;
//     opacity: 0;
//   }
//   100% {
//     height: auto;
//     opacity: 1;
//   }
// }
// html,
// body {
//   width: 100%;
//   height: 100%;
//   font-family: "Roboto", Arial, Helvetica, sans-serif;
//   color: #000000;
// }
// `;

// const Wrapper = styled.div`
//   max-width: 100%;
//   width: 100vw;
//   min-height: 100vh;
//   overflow: hidden;
//   background-color: #f1f1f1;
// `;

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         {/* <!-- pop-up start--> */}

//         <PopUser />

//         <PopNewCard />

//         <PopBrowse />

//         {/* <!-- pop-up end--> */}

//         <Header />
//         <Main loading={loading} />
//       </Wrapper>
//     </>
//   );
// }

// export default App;
