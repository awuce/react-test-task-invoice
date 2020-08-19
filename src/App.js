import React from 'react';
import {Route} from "react-router-dom";
import style from "./App.module.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Terminals from "./Components/Terminals/Terminals";
import Buyers from "./Components/Buyers/Buyers";

const App = (props) => {
  return (
    <div className={style.appWrapper}>
        <Sidebar />
        <div className={style.appWrapperContent}>
            <Route path="/terminals" render={ () => <Terminals /> } />
            <Route path="/buyers/:id?" render={ () => <Buyers /> } />
        </div>
    </div>
  );
}

export default App;
