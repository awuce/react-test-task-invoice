import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import style from "./App.module.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Buyers from "./Components/Buyers/Buyers";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import TerminalsContainer from "./Components/Terminals/TerminalsContainer";

const App = (props) => {
  return (
    <div className={style.appWrapper}>
        <Sidebar />
        <div className={style.appWrapperContent}>
            <Switch>
                <Route exact path="/terminals" render={ () => <TerminalsContainer /> } />
                <Route exact path="/buyers/:id?" render={ () => <Buyers /> } />

                <Route path="/404" render={ () => <NotFoundPage />} />
                <Redirect to="/404" />
            </Switch>
        </div>
    </div>
  );
}

export default App;
