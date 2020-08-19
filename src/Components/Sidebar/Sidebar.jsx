import React from "react";
import style from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <aside className={style.sidebarWrapper}>
            <div className={style.item}>
                <div className={style.image}></div>
            </div>
            <div className={style.item}>
                <div>
                    <NavLink to="/terminals" className={style.link}>Терминалы</NavLink>
                </div>
                <div>
                    <NavLink to="/buyers" className={style.link}>Покупатели</NavLink>
                </div>
            </div>
            <footer className={style.item}>
                <div>Copyright © 2020</div>
            </footer>
        </aside>
    );
}

export default Sidebar;