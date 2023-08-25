import React, { forwardRef } from "react";
import ReactDOM from "react-dom/client";
// import newheader from './components/header.js';
// import Midsec from './components/midsection.js';
import { restaurantList } from "./components/constants.js";
import Header from "./components/header.js";
import {Footer} from './components/footer.js'

import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Midsec from "./components/midsection.js";
// import { restaurants } from "./components/midsection.js";
// import {searchText} from "./components/midsection.js";

//0th  restaurant data
//
console.log('hello world');
console.log('0th restaurant Data');
console.log(restaurantList[0].name);

// 1st restaurant data
console.log('1st restaurant Data')
console.log(restaurantList[1].name);


const  rootelmenDOM = document.getElementById('root');
const rootobj = ReactDOM.createRoot(rootelmenDOM);



const Final =()=>{
  return(  <>
  <Header/>
  <Midsec />
  {Footer()}
  </>);
  
  
}

rootobj.render(Final());