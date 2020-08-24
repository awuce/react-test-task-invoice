import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import style from "./App.module.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import TerminalsContainer from "./Components/Terminals/TerminalsContainer";
import BuyersContainer from "./Components/Buyers/BuyersContainer";
import BuyerContainer from "./Components/Buyer/BuyerContainer";

const App = (props) => {
  return (
    <div className={style.appWrapper}>
        <Sidebar />
        <div className={style.appWrapperContent}>
            <Switch>
                <Route exact path="/terminals" render={ () => <TerminalsContainer /> } />
                <Route exact path="/buyers" render={ () => <BuyersContainer /> } />
                <Route exact path="/buyers/:id" render={ (props) => <BuyerContainer {...props}/> } />

                <Route path="/404" render={ () => <NotFoundPage />} />
                <Redirect to="/404" />
            </Switch>
        </div>
    </div>
  );
}

export default App;
