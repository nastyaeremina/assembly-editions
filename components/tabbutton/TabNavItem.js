import React from "react";
import { Tab } from "./tabstyled";

const TabNavItem = ({ id, title, activeTab, setActiveTab, bgColor, textColor }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <Tab bgColor={bgColor} textColor={textColor} onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </Tab>
 );
};
export default TabNavItem;