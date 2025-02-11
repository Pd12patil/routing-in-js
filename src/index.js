import ReactDom from "react-dom/client";
import Home from "./views/Home/Home";
import DashBorad from "./views/Dashborad/DashBorad";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import "./index.css";

function App (){
  const path = window.location.pathname;
  
  if(path == "/") {
    root.render (<Home/>)
  }
  else if(path == "/dashbord"){
    root.render (<DashBorad/>)
  }
  else if(path == "/about"){
    root.render (<About/>)
  }
  else if(path == "/contact"){
    root.render (<Contact/>)
  }
  else {
    root.render(<h1 className="text-4xl mt-10 justify-center flex text-gray-600">404 Page not found</h1>)
  }
}

//   switch (path) {
//     case '/':
//       return <Home/>;
//     case '/dashbord':
//       return <DashBorad/>;
//     case '/about':
//       return <About/>;
//     case '/contact':
//       return <Contact/>;
//     default :
//       return <h1>404 page not found</h1>;
//   }
// }



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
  <App />
  </>
)

