import React, { FC } from "react";

import { Link, NavLink } from "react-router-dom";

import Icon from "@components/ui/Icon";
import ContentBlock from "@components/layout/ContentBlock";

import logo from "@assets/images/logo.png";

import "./Sidebar.scss";

const Sidebar: FC = () => {
  return (
    <ContentBlock
      className="sidebar"
      as="aside"
      paddingSize="smaller">
      <Link to="/home" className="sidebar__logo">
        <img src={logo} alt="Logo" className="sidebar__logo-picture" />
      </Link>
      <nav className="sidebar__navigation">
        <NavLink to="/home" className="navigation-item">
          <Icon name="weather" className="navigation-item__icon" />
          <span className="navigation-item__text">Weather</span>
        </NavLink>
        <NavLink to="cities" className="navigation-item">
          <Icon name="list" className="navigation-item__icon" />
          <span className="navigation-item__text">Cities</span>
        </NavLink>
        <NavLink to="settings" className="navigation-item">
          <Icon name="settings" className="navigation-item__icon" />
          <span className="navigation-item__text">Settings</span>
        </NavLink>
      </nav>
    </ContentBlock>
  );
};

export default Sidebar;
