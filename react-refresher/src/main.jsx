
// import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

// const h1 = React.createElement("h1", null, "Hello world")

let name = "Joy"
createRoot(document.getElementById("root")).render(
 <div>
 <h1 className="title" id= "heading">
     welcome to mobile dev! {name} </h1>
     <App/>
 </div>
  
)