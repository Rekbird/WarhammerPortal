import React, {Component} from "react";
import "./DetachmentEditing.css";
import DetachmentParameterChoice from "./DetachmentParameterChoice.js";
import * as utils from "../../../Scripts/CommonFunctions.js";
import FactionGraphicList from "../../FactionGraphicList/FactionGraphicList.js";

class DetachmentEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Detachment: (!!this.props.RosterDetachment.Detachment) ? (this.props.RosterDetachment.Detachment) : (null),
            //DetachmentName: (this.props.RosterDetachment.Detachment && !!this.props.RosterDetachment.Detachment.Name) ? (this.props.RosterDetachment.Detachment.Name) : ("New Detachment"),
            //DetachmentFaction: (!!this.props.RosterDetachment.Faction) ? (this.props.RosterDetachment.Faction) : (null),
            //DetachmentChapterTactic: (!!this.props.RosterDetachment.ChapterTactic) ? (this.props.RosterDetachment.ChapterTactic) : (null),
            FactionSelection: false
        }
        //this.componentWillMount = this.componentWillMount.bind(this);
        this.handleDetachmentNameChange = this.handleDetachmentNameChange.bind(this);
        this.handleDetachmentFactionChange = this.handleDetachmentFactionChange.bind(this);
        this.handleDetachmentChapterTacticChange = this.handleDetachmentChapterTacticChange.bind(this);
        this.showFactionSelectionWindow = this.showFactionSelectionWindow.bind(this);
        this.hideFactionSelectionWindow = this.hideFactionSelectionWindow.bind(this);
    }
    /*
    componentWillUpdate() {
       let DetachmentName = (this.props.RosterDetachment.Detachment && !!this.props.RosterDetachment.Detachment.Name) ? (this.props.RosterDetachment.Detachment.Name) : ("New Detachment");
       let DetachmentFaction = (!!this.props.RosterDetachment.Faction) ? (this.props.RosterDetachment.Faction) : (null);
       let DetachmentChapterTactic = (!!this.props.RosterDetachment.ChapterTactic) ? (this.props.RosterDetachment.ChapterTactic) : (null);
       let Detachment = (!!this.props.RosterDetachment.Detachment) ? (this.props.RosterDetachment.Detachment) : (null);
       if(
           DetachmentName != this.state.DetachmentName || 
           DetachmentFaction != this.state.DetachmentFaction ||
           DetachmentChapterTactic != this.state.DetachmentChapterTactic ||
           Detachment != this.state.Detachment
        ) { 
            console.log("Вызвали метод WillUpdate в комопоненте DetachmentEditing");
            this.setState({
                Detachment: Detachment,
                DetachmentName: DetachmentName,
                DetachmentFaction: DetachmentFaction,
                DetachmentChapterTactic: DetachmentChapterTactic
            });
        }        
    }
    */
    handleDetachmentNameChange(DetachmentId) {
        let Detachment = utils.GetDetachment(DetachmentId);
        //this.props.RosterDetachment.Detachment = Detachment;
        /*this.setState({
            Detachment: Detachment,
            DetachmentName: Detachment.Name
        });
        */
       //RosterDetachment, Faction, DetachmentType, ChapterTactic
       console.log("ид детачмента из дочернего "+this.props.RosterDetachment.id);
        this.props.handleRosterDetachmentChange(this.props.RosterDetachment,null,Detachment,null);
    }

    handleDetachmentFactionChange(FactionId) {
        let Faction = utils.GetFaction(FactionId);
        //this.props.RosterDetachment.Faction = Faction;
        //console.log("фракция детачмента "+Faction.id);
        //console.log("фракция детачмента в пропсах "+this.props.RosterDetachment.Faction.id);
        this.setState({
            FactionSelection: false
        });
        //RosterDetachment, Faction, DetachmentType, ChapterTactic
        console.log(this.props.RosterDetachment);
        console.log("ид детачмента из дочернего "+this.props.RosterDetachment.id);
        this.props.handleRosterDetachmentChange(this.props.RosterDetachment,Faction,null,null);
    }

    handleDetachmentChapterTacticChange(ChapterTacticId) {
        let ChapterTactic = utils.GetChapterTactic(ChapterTacticId);
        //this.props.RosterDetachment.ChapterTactic = ChapterTactic;
        /*this.setState({
            DetachmentChapterTactic: ChapterTactic
        });*/
        //RosterDetachment, Faction, DetachmentType, ChapterTactic
        this.props.handleRosterDetachmentChange(this.props.RosterDetachment,null,null,ChapterTactic);
    }

    showFactionSelectionWindow() {
        this.setState({
            FactionSelection: true
        });
    }

    hideFactionSelectionWindow() {
        this.setState({
            FactionSelection: false
        });
    }

    render() {
        console.log("Вызвали рендер в компоненте DetachmentEditing. Ид детачмнта "+this.props.RosterDetachment.id);
        let FactionSelectionWindow = (
            this.state.FactionSelection ? (
                <div className = "DetachmentEditing__FactionSelectionWindow">
                    <h2 className = "DetachmentEditing__FactionSelectionWindow_Header">Choose the Roster's faction</h2>
                    <button onClick = {this.hideFactionSelectionWindow} className = "DetachmentEditing__FactionSelectionWindow_CloseButton">x</button>
                    <FactionGraphicList buttonClick = {this.handleDetachmentFactionChange}/>
                </div>
            ) : null
        );
        let FactionImage;
        if(this.props.RosterDetachment.Faction) {
            FactionImage = <img className = "DetachmentEditing__FactionImage" src = {this.props.RosterDetachment.Faction.CodexImage} alt = {this.props.RosterDetachment.Faction.Name}/>
        }
        let DetachmentImage;
        if(this.props.RosterDetachment.Detachment) {
            DetachmentImage = 
            <figure className = "DetachmentEditing__DetachmentImageFigure">
                <img className = "DetachmentEditing__DetachmentImage" src = {this.props.RosterDetachment.Detachment.Image} alt = {this.props.RosterDetachment.Detachment.Name}/>
            </figure>
        }
        let DetachmentName = (this.props.RosterDetachment.Detachment) ? (this.props.RosterDetachment.Detachment.Name) : "New Detachment";
        return (
            <div className = "DetachmentEditing">
                <h1 className = "DetachmentEditing__Header">Edit {DetachmentName}</h1>
                {FactionSelectionWindow}
                <div className = "DetachmentEditing__FactionDiv">
                    <div className="DetachmentEditing__CurrentFaction">
                        <button className = "DetachmentEditing__Button" onClick = {this.showFactionSelectionWindow}>Faction's list</button>
                        <p>Current chosen Faction : </p>
                    </div>
                    <div className = "DetachmentEditing__ChosenFactionLabel"><figure className = "DetachmentEditing__ChosenFactionTitle">{FactionImage}<figcaption>{this.props.RosterDetachment.Faction ? this.props.RosterDetachment.Faction.Name : "--none--"}</figcaption></figure></div>
                </div>
                <div className = "DetachmentEditing__MiddleDiv">
                    <DetachmentParameterChoice ListTypeNumber = {1} ObjectId = {this.props.RosterDetachment.Detachment ? this.props.RosterDetachment.Detachment.id : ""} handleChange = {this.handleDetachmentNameChange} />
                    <DetachmentParameterChoice ListTypeNumber = {3} FactionId = {this.props.RosterDetachment.Faction && this.props.RosterDetachment.Faction.id ? this.props.RosterDetachment.Faction.id : ""} ObjectId = {this.props.RosterDetachment.ChapterTactic && this.props.RosterDetachment.ChapterTactic.id ? this.props.RosterDetachment.ChapterTactic.id : ""} handleChange = {this.handleDetachmentChapterTacticChange} />
                </div>
                {DetachmentImage}
            </div>
        )
    }
}

export default DetachmentEditing;