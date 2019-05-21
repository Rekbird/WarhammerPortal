import React, {Component} from "react";
import * as utils from "../../Scripts/CommonFunctions.js";
import RosterMenu from "./RosterMenu/RosterMenu.js";
import DetachmentEditing from "./DetachmentEditing/DetachmentEditing.js";
import UnitSelection from "./UnitSelection/UnitSelection.js";
import UnitEditing from "./UnitEditing/UnitEditing.js";
import {RosterDetachment} from "../../Classes/CommonClasses.js";
import {RosterUnit} from "../../Classes/CommonClasses.js";
import {Roster} from "../../Classes/CommonClasses.js";
import "./NewRosterCreation.css";

class RosterCreation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            Action: "Roster Editing",
            Roster: this.props.Roster,
            ActiveDetachment: null,
            ActiveUnit: null,
            RosterChanged: false
        };
        this.ActiveDetachment = null;
        this.ActiveUnit = null;
        this.AddNewDetachment = this.AddNewDetachment.bind(this);
        this.EditDetachment = this.EditDetachment.bind(this);
        this.CopyDetachment = this.CopyDetachment.bind(this);
        this.DeleteDetachment = this.DeleteDetachment.bind(this);
        this.AddNewUnit = this.AddNewUnit.bind(this);
        this.EditUnit = this.EditUnit.bind(this);
        this.CopyUnit = this.CopyUnit.bind(this);
        this.DeleteUnit = this.DeleteUnit.bind(this);
        this.EditRoster = this.EditRoster.bind(this);
        this.showUnitSelectionList = this.showUnitSelectionList.bind(this);
        this.handleRosterDetachmentChange = this.handleRosterDetachmentChange.bind(this);
    }

    handleRosterDetachmentChange = (RosterDetachment, Faction, DetachmentType, ChapterTactic) => {
        if(RosterDetachment) {
            if(Faction) {
                RosterDetachment.Faction = Faction;
                console.log("Меняли детач фракция "+Faction.Name);
            }
            if(DetachmentType) {
                RosterDetachment.Detachment = DetachmentType;
                console.log("Меняли детач детач "+DetachmentType.Name);
            }
            if(ChapterTactic) {
                RosterDetachment.ChapterTactic = ChapterTactic;
                console.log("Меняли детач чаптер тактика "+ChapterTactic.Name);
            }
            this.setState({
                //Roster: this.state.Roster,
                RosterChanged: !this.state.RosterChanged
            });
        }
    }

    AddNewDetachment = () => {
        let Roster = this.state.Roster;
        this.state.Action = null;
        let NewId = (!!Roster.RosterDetachments && Roster.RosterDetachments.length > 0) ? (Roster.RosterDetachments.length+1) : 1;
        let NewDetachment = new RosterDetachment(NewId,[],null,null,null,Roster.id,null,null);
        Roster.RosterDetachments.push(NewDetachment);
        this.setState({
            Action: "Detachment Editing",
            ActiveDetachment: NewDetachment,
            RosterChanged: !this.state.RosterChanged
        })
    }

    EditDetachment = (Detachment) => {
        //let Roster = this.state.Roster;
        this.state.Action = null;
        console.log("Детач из параметров "+Detachment.id);
        this.ActiveDetachment = Detachment;
        this.setState({
            Action: "Detachment Editing",
            ActiveDetachment: Detachment,
            RosterChanged: !this.state.RosterChanged
        });
        console.log("Детач из стейта "+this.state.ActiveDetachment.id);
        console.log("Детач из конструктора "+this.ActiveDetachment.id);
        console.log("Ростер из стейта "+this.state.Roster.id);
    }

    CopyDetachment = (Detachment) => {
        let Roster = this.state.Roster;
        let NewId = (!!Roster.RosterDetachments && Roster.RosterDetachments.length > 0) ? (Roster.RosterDetachments.length+1) : 1;
        let NewDetachment = [Detachment.copyRosterDetachment()].slice()[0];
        NewDetachment.id = NewId;
        Roster.RosterDetachments.push(NewDetachment);
        this.setState({
            Action: "Detachment Editing",
            Roster: Roster,
            ActiveDetachment: NewDetachment,
            RosterChanged: !this.state.RosterChanged
        });
    }

    DeleteDetachment = (Detachment) => {
        let Roster = this.state.Roster;
        Roster.RosterDetachments.splice(Roster.RosterDetachments.indexOf(Detachment), 1);
        this.setState({
            //Roster: Roster,
            RosterChanged: !this.state.RosterChanged
        });
    }

    AddNewUnit = (Detachment, Unit) => {
        Detachment.RosterUnits.push(Unit);
        Unit.id = Detachment.RosterUnits.length;
        this.setState({
            //Roster: this.state.Roster,
            Action: "Unit Editing",
            //ActiveDetachment: Detachment,
            ActiveUnit: Unit,
            RosterChanged: !this.state.RosterChanged
        });
    }

    EditUnit = (Unit) => {
        this.setState({
            //Roster: this.state.Roster,
            Action: "Unit Editing",
            ActiveUnit: Unit,
            RosterChanged: !this.state.RosterChanged
        });
    }

    CopyUnit = (Detachment, Unit) => {
        let UnitCopy = Unit.copyRosterUnit();
        Detachment.RosterUnits.push(UnitCopy);
        UnitCopy.id = Detachment.RosterUnits.length;
        this.setState({
            //Roster: this.state.Roster,
            RosterChanged: !this.state.RosterChanged
        });
    }

    DeleteUnit = (Detachment, Unit) => {
        Detachment.RosterUnits.splice(Detachment.RosterUnits.indexOf(Unit), 1);
        this.setState({
            //Roster: this.state.Roster,
            RosterChanged: !this.state.RosterChanged
        });
    }

    EditRoster = () => {
        this.setState({
            //Roster: this.state.Roster,
            Action: "Roster Editing"
        });
    }

    showUnitSelectionList = (Detachment) => {
        console.log("объект детачмента "+Detachment);
        console.log("фракция детачмента "+Detachment.Faction);
        console.log("равенство детачей "+Detachment.id);
        this.setState({
            Action: "Unit Selection",
            ActiveDetachment: Detachment
        });
    }

    render = () => {
        let WorkingArea;
        switch(this.state.Action) {
            case "Roster Editing": 
                WorkingArea = <div>Here will be roster editing</div>;
            break;

            case "Detachment Editing": 
                console.log("Детач из конструктора в рендере "+this.state.ActiveDetachment.id);
                WorkingArea = <DetachmentEditing handleRosterDetachmentChange = {this.handleRosterDetachmentChange} RosterDetachment = {this.state.ActiveDetachment}/>;
            break;

            case "Unit Selection": 
                WorkingArea = <UnitSelection Faction = {this.state.ActiveDetachment.Faction} Detachment = {this.state.ActiveDetachment} AddNewUnit = {this.AddNewUnit}/>;
            break;

            case "Unit Editing": 
                WorkingArea = <UnitEditing Unit = {this.state.ActiveUnit}/>;
            break;
        }
        return(
            <div>
                <RosterMenu 
                    Roster = {this.state.Roster}
                    NewDetachmentClick = {this.AddNewDetachment}
                    EditDetachmentClick = {this.EditDetachment}
                    CopyDetachmentClick = {this.CopyDetachment}
                    DeleteDetachmentClick  = {this.DeleteDetachment}
                    EditClick = {this.EditUnit} 
                    CopyClick = {this.CopyUnit} 
                    DeleteClick = {this.DeleteUnit} 
                    NewUnitClick = {this.showUnitSelectionList}
                    EditRosterClick = {this.EditRoster}
                />
                <div className = "RosterEditing_WorkingArea">{WorkingArea}</div>
            </div>
        )
    }
}

export default RosterCreation;