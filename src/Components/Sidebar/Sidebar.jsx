import React from "react";
import style from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <aside className={style.sidebarWrapper}>
            <div>
                <NavLink to="/login" className={style.imageLink}>
                    <img src={props.loginPage.avatar_url} alt=""/>
                </NavLink>
            </div>
            <div>
                <div>
                    <NavLink to="/terminals" className={style.asideLink}>Терминалы</NavLink>
                </div>
                <div>
                    <NavLink to="/buyers" className={style.asideLink}>Покупатели</NavLink>
                </div>
            </div>
            <footer>
                <div>Copyright © 2020</div>
            </footer>
        </aside>
    );
}

export default Sidebar;