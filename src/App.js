import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import style from "./App.module.css";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import TerminalsContainer from "./Components/Terminals/TerminalsContainer";
import BuyersContainer from "./Components/Buyers/BuyersContainer";
import BuyerContainer from "./Components/Buyer/BuyerContainer";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import Login from "./Components/Login/Login";

const App = (props) => {
  return (
    <div className={style.appWrapper}>
        <SidebarContainer />
        <div className={style.appWrapperContent}>
            <Switch>
                <Route exact path="/terminals" render={ () => <TerminalsContainer /> } />
                <Route exact path="/buyers" render={ () => <BuyersContainer /> } />
                <Route exact path="/buyers/:id" render={ () => <BuyerContainer /> } />
                <Route exact path="/login" render={ () => <Login /> } />

                <Route path="/404" render={ () => <NotFoundPage />} />
                <Redirect to="/404" />
            </Switch>
        </div>
    </div>
  );
}

export default App;