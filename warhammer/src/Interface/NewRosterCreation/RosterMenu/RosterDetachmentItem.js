import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterUnitRoleItem from "./RosterUnitRoleItem.js";

class RosterUnitRole extends Component{
    constructor(props) {
        super(props);
        //this.addNewUnit = this.addNewUnit.bind(this);
    }

    render = () => {
        if(this.props.RosterDetachment.RosterUnits && this.props.RosterDetachment.RosterUnits.length > 0) {

        }
        return(
            <div>
                <li></li>
                <RosterUnitRoleItem />
            </div>
        )
    }

}

export default RosterUnitRoleItem;