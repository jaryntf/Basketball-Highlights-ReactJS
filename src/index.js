import React from "react";
import ReactDom from "react-dom";
import Main from "./Main";

import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import "./index.css";


ReactDom.render(
    <Main/>,
    document.getElementById("root"));
