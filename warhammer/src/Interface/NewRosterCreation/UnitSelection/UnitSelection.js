import React, {Component} from "react";
import "./UnitSelection.css";
import UnitsList from "../UnitsList/UnitsList.js";
import UnitRolesList from "../UnitRolesList/UnitRolesList.js";

class UnitSelection extends Component {
    constructor(props) {
        super(props);
        this.ScrollToUnitsByRole = this.ScrollToUnitsByRole.bind(props);
    }

    ScrollToUnitsByRole(name) {
        //console.log("Выбранная роль "+name);
        var theElement = document.getElementById("UnitListByRole"+name);
        console.log(theElement.id);
           // var selectedPosX = 0;
           // var selectedPosY = 0;
            //if (theElement != null) {
             //   console.log(theElement != null);
                //selectedPosX += theElement.offsetLeft;
                //selectedPosY += theElement.current.offsetTop;
                //theElement = theElement.offsetParent;
           // }
            theElement.scrollIntoView({behavior: "smooth"});
           // console.log(selectedPosX);
           // console.log(selectedPosY);
           // window.scrollTo(0, selectedPosY);
    }

    render() {
        return (
            <div>
                <div className = "UnitSelection__SelectionArea">
                    <div className = "UnitSelection__UnitList">
                        <h1 className = "UnitSelection__Header">Select a unit</h1>
                        <UnitsList Faction = {this.props.Faction} />
                    </div>
                    <div className = "UnitSelection__RolesList"><UnitRolesList FactionId = {this.props.Faction.id} ScrollToUnitsByRole = {this.ScrollToUnitsByRole}/></div>
                </div>
            </div>
        )
    }
}

export default UnitSelection;
