import React, {Component} from "react";
import { connect } from 'react-redux';

import * as utils from "../../Scripts/CommonFunctions.js";
import RosterMenu from "./RosterMenu/RosterMenu.js";
import DetachmentEditing from "./DetachmentEditing/DetachmentEditing.js";
import UnitSelection from "./UnitSelection/UnitSelection.js";
import UnitEditing from "./UnitEditing/UnitEditing.js";
import {RosterDetachment} from "../../Classes/CommonClasses.js";
import {RosterUnit} from "../../Classes/CommonClasses.js";
import {Roster} from "../../Classes/CommonClasses.js";
import "./NewRosterCreation.css";
import RosterEditing from "./RosterEditing/RosterEditing.js";

import * as ActionCreators from "../../Store/ActionsCreators.js";

class RosterCreation extends Component{
    constructor(props) {
        super(props)
        /*
        this.state = {
            Action: "Roster Editing",
            Roster: this.props.Roster,
            ActiveDetachment: null,
            ActiveUnit: null,
            RosterChanged: false
        };
        */
        this.ActiveDetachment = null;
        this.ActiveUnit = null;
        this.AddNewDetachment = this.AddNewDetachment.bind(this);
        this.EditDetachment = this.EditDetachment.bind(this);
        this.CopyDetachment = this.CopyDetachment.bind(this);
        this.DeleteDetachment = this.DeleteDetachment.bind(this);
        //this.AddNewUnit = this.AddNewUnit.bind(this);
        this.EditUnit = this.EditUnit.bind(this);
        this.CopyUnit = this.CopyUnit.bind(this);
        this.DeleteUnit = this.DeleteUnit.bind(this);
        this.EditRoster = this.EditRoster.bind(this);
        this.showUnitSelectionList = this.showUnitSelectionList.bind(this);
        //this.handleRosterDetachmentChange = this.handleRosterDetachmentChange.bind(this);
        //this.handleRosterChange = this.handleRosterChange.bind(this);
    }

    /*
    handleRosterDetachmentChange = (RosterDetachment, Faction, DetachmentType, ChapterTactic) => {
        if(RosterDetachment) {
            if(Faction) {
                console.log("ид детачмента в родителе "+RosterDetachment.id)
                this.props.DetachmentFaction(RosterDetachment.id, Faction);
            }
            if(DetachmentType) {
                this.props.DetachmentType(RosterDetachment.id, DetachmentType);
            }
            if(ChapterTactic) {
                this.props.ChapterTactic(RosterDetachment.id, ChapterTactic);
            }
            /*
            this.setState({
                //Roster: this.state.Roster,
                RosterChanged: !this.state.RosterChanged
            });
            
        }
    }
*/
    AddNewDetachment = () => {
        /*
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
        */
       let NewId = (!!this.props.Roster.RosterDetachments && this.props.Roster.RosterDetachments.length > 0) ? (this.props.Roster.RosterDetachments.length+1) : 1;
       this.props.NewDetachment(NewId);
       //this.props.RosterAction("Detachment Editing");
    }

    EditDetachment = (Detachment) => {
        /*
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
        */
       this.props.SetActiveDetachment(Detachment);
       this.props.RosterAction("Detachment Editing");
    }

    CopyDetachment = (Detachment) => {
        /*
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
        */
       let NewId = (!!this.props.Roster.RosterDetachments && this.props.Roster.RosterDetachments.length > 0) ? (this.props.Roster.RosterDetachments.length+1) : 1;
       this.props.CopyDetachment(Detachment.id, NewId);
       this.props.RosterAction("Detachment Editing");
    }

    DeleteDetachment = (Detachment) => {
        /*
        let Roster = this.state.Roster;
        Roster.RosterDetachments.splice(Roster.RosterDetachments.indexOf(Detachment), 1);
        let CurrentAction = this.state.Action;
        if(Roster.RosterDetachments.length === 0) {
            CurrentAction = "Roster Editing";
        }
        
        this.setState({
            Action: CurrentAction,
            RosterChanged: !this.state.RosterChanged
        });
        */
        this.props.DeleteDetachment(Detachment.id);
    }
    /*
    AddNewUnit = (Detachment, Unit) => {
        /*
        Detachment.RosterUnits.push(Unit);
        Unit.id = Detachment.RosterUnits.length;
        this.setState({
            //Roster: this.state.Roster,
            Action: "Unit Editing",
            //ActiveDetachment: Detachment,
            ActiveUnit: Unit,
            RosterChanged: !this.state.RosterChanged
        });
        
       let NewId = 1;
       this.props.Roster.RosterDetachments.forEach((element) => {
           if(!!element.RosterUnits) {
                NewId = NewId+element.RosterUnits.length;
           }
       });
       this.props.AddNewUnit(Detachment.id, NewId, Unit);
       this.props.RosterAction("Unit Editing");
    }
    */
    EditUnit = (Unit) => {
        /*
        this.setState({
            //Roster: this.state.Roster,
            Action: "Unit Editing",
            ActiveUnit: Unit,
            RosterChanged: !this.state.RosterChanged
        });
        */
       this.props.SetActiveUnit(Unit);
       this.props.RosterAction("Unit Editing");
    }

    CopyUnit = (Detachment, Unit) => {
        /*
        let UnitCopy = Unit.copyRosterUnit();
        Detachment.RosterUnits.push(UnitCopy);
        UnitCopy.id = Detachment.RosterUnits.length;
        this.setState({
            //Roster: this.state.Roster,
            RosterChanged: !this.state.RosterChanged
        });
        */
       let NewId = 1;
       this.props.Roster.RosterDetachments.forEach((element) => {
           if(!!element.RosterUnits) {
                NewId = NewId+element.RosterUnits.length;
           }
       });
       this.props.CopyUnit(Detachment.id, Unit.id, NewId);
    }

    DeleteUnit = (Detachment, Unit) => {
        /*
        Detachment.RosterUnits.splice(Detachment.RosterUnits.indexOf(Unit), 1);
        let CurrentAction = this.state.Action;
        if(Detachment.RosterUnits.length === 0) {
            CurrentAction = "Detachment Editing";
        }
        this.setState({
            Action: CurrentAction,
            ActiveDetachment: Detachment,
            RosterChanged: !this.state.RosterChanged
        });
        */
       this.props.DeleteUnit(Detachment.id, Unit.id);
    }

    EditRoster = () => {
        /*
        this.setState({
            //Roster: this.state.Roster,
            Action: "Roster Editing"
        });
        */
       this.props.RosterAction("Roster Editing");
    }

    /*
    handleRosterChange = (Name,MaxPL,MaxPTS) => {
        //let Roster = this.state.Roster;
        if(Name != "--none--") {
            //Roster.Name = Name;
            this.props.RosterName(Name);
        }
        if(MaxPL != "--none--") {
            //Roster.MaxPL = MaxPL;
            this.props.RosterMaxPL(MaxPL);
        }
        if(MaxPTS != "--none--") {
            //Roster.MaxPTS = MaxPTS;
            this.props.RosterMaxPTS(MaxPTS);
        }
        
        this.setState({
            Roster: Roster
        });
        
    }
    */

    showUnitSelectionList = (Detachment) => {
        /*
        console.log("объект детачмента "+Detachment);
        console.log("фракция детачмента "+Detachment.Faction);
        console.log("равенство детачей "+Detachment.id);
        this.setState({
            Action: "Unit Selection",
            ActiveDetachment: Detachment
        });
        */
       this.props.SetActiveDetachment(Detachment);
       this.props.RosterAction("Unit Selection");
    }

    render = () => {
        let WorkingArea;
        switch(this.props.Action) {
            case "Roster Editing": 
                WorkingArea = <RosterEditing/>;
            break;

            case "Detachment Editing": 
                console.log("Детач из конструктора в рендере "+this.props.ActiveDetachment.id);
                WorkingArea = <DetachmentEditing/>;
            break;

            case "Unit Selection": 
                WorkingArea = <UnitSelection/>;
            break;

            case "Unit Editing": 
                WorkingArea = <UnitEditing/>;
            break;
        }
        return(
            <div>
                <RosterMenu 
                    Roster = {this.props.Roster}
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

const mapStateToProps = (state) => {
    return {
        Action: state.RosterEditing.Action,
        Roster: state.RosterEditing.Roster,
        ActiveDetachment: state.RosterEditing.ActiveDetachment,
        ActiveUnit: state.RosterEditing.ActiveUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DetachmentFaction: (DetachmentId, Faction) => dispatch(ActionCreators.DetachmentFaction(DetachmentId, Faction)),
        DetachmentType: (DetachmentId, DetachmentType) => dispatch(ActionCreators.DetachmentType(DetachmentId, DetachmentType)),
        ChapterTactic: (DetachmentId, ChapterTactic) => dispatch(ActionCreators.ChapterTactic(DetachmentId, ChapterTactic)),
        NewDetachment: (NewId) => dispatch(ActionCreators.NewDetachment(NewId)),
        SetActiveDetachment: (ActiveDetachment) => dispatch(ActionCreators.ActiveDetachment(ActiveDetachment)),
        CopyDetachment: (DetachmentId, NewId) => dispatch(ActionCreators.CopyDetachment(DetachmentId, NewId)),
        DeleteDetachment: (DetachmentId) => dispatch(ActionCreators.DeleteDetachment(DetachmentId)),
        AddNewUnit: (DetachmentId, NewId, BaseUnit) => dispatch(ActionCreators.AddNewUnit(DetachmentId, NewId, BaseUnit)),
        SetActiveUnit: (ActiveUnit) => dispatch(ActionCreators.ActiveUnit(ActiveUnit)),
        CopyUnit: (DetachmentId, UnitId, NewId) => dispatch(ActionCreators.CopyUnit(DetachmentId, UnitId, NewId)),
        DeleteUnit: (DetachmentId, UnitId) => dispatch(ActionCreators.DeleteUnit(DetachmentId, UnitId)),
        RosterAction: (ActionNAme) => dispatch(ActionCreators.RosterAction(ActionNAme)),
        RosterName: (RosterName) => dispatch(ActionCreators.RosterName(RosterName)),
        RosterMaxPL: (RosterMaxPL) => dispatch(ActionCreators.RosterMaxPL(RosterMaxPL)),
        RosterMaxPTS: (RosterMaxPTS) => dispatch(ActionCreators.RosterMaxPTS(RosterMaxPTS)),
        
    }
}

const containerRosterCreation = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RosterCreation);


export default containerRosterCreation;