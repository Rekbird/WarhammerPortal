import React, {Component} from "react";
import { connect } from 'react-redux';

import "./EditUnitPsychicPowers.css";
import ChoiceUnitPsychicPower from "./ChoiceUnitPsychicPower.js";
import * as ActionCreators from "../../../Store/ActionsCreators.js";
import * as utils from "../../../Scripts/CommonFunctions.js";


class EditUnitPsychicPowers extends Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            SelectedSpells: (this.props.SelectedSpells && this.props.SelectedSpells.length > 0) ? this.props.SelectedSpells.slice(0) : [],
            AvailableSpells: (this.props.AvailableSpells && this.props.AvailableSpells.length > 0) ? this.props.AvailableSpells.slice(0) : [],
            RemoveButtonLocked: true,
            AddButtonLocked: false
        }
        */
        this.ChosenAvailableSpells = [];
        this.ChosenSelectedSpells = [];
        this.ChooseAvailablePsychicPowers = this.ChooseAvailablePsychicPowers.bind(this);
        this.ChooseSelectedPsychicPowers = this.ChooseSelectedPsychicPowers.bind(this);
        this.AddPsychicPowers = this.AddPsychicPowers.bind(this);
        this.RemovePsychicPowers = this.RemovePsychicPowers.bind(this);
    }

    componentWillMount() {
        let AddButtonLocked;
        let RemoveButtonLocked;
        let AvailableSpells = this.props.Unit.BaseUnit.AvailableSpells.slice();
        let SelectedSpells = this.props.Unit.SpellsSelected.slice();
        if(!this.props.Unit.SpellsSelected || this.props.Unit.SpellsSelected.length == 0) {
            AddButtonLocked = false;
            RemoveButtonLocked = true;
            if(this.props.KnowsSmite) {
                const Spell = this.props.Unit.BaseUnit.AvailableSpells.find((spell) => parseInt(spell.id) == parseInt(1));
                console.log("Edit unit psychic powers component");
                console.log(Spell);
                if(!!Spell) { 
                    SelectedSpells.push(Spell);
                    AvailableSpells.splice(AvailableSpells.indexOf(Spell), 1);
                }
            }
        } else if(this.props.Unit.SpellsSelected.length < this.props.MaxSpells) {
            AddButtonLocked = false;
            RemoveButtonLocked = false;
        } else {
            AddButtonLocked = true;
            RemoveButtonLocked = false;
        }/*
        this.setState({
            AvailableSpells: AvailableSpells,
            SelectedSpells: SelectedSpells,
            RemoveButtonLocked: RemoveButtonLocked,
            AddButtonLocked: AddButtonLocked
        });
        */
       this.props.SetPsychicPowerMenuButtons(AvailableSpells, SelectedSpells, RemoveButtonLocked, AddButtonLocked);
       this.props.SetUnitPsychicPowers(SelectedSpells, this.props.Unit);
    }

    ChooseAvailablePsychicPowers(event) {
        let SelectedOptions = event.target.selectedOptions;
        let Spells = [];
        //this.ChosenAvailableSpells = [];
        let AddButtonLocked;
        if(SelectedOptions && (SelectedOptions.length > 0)) {

            
            for(let i=0;i<SelectedOptions.length;i++) {
                //let SpellID = SelectedOptions.item(i).value;
               //console.log(SpellID);
                const Spell = this.props.AvailableSpells.find((spell) => spell.id == SelectedOptions.item(i).value);
                console.log(Spell);
                Spells.push(Spell);
            }
           
        } else {
            console.log("Empty list");
        }
        if(Spells.length + this.props.SelectedSpells.length > this.props.MaxSpells) {
            this.ChosenAvailableSpells = [];
            /*
            this.setState({
                AddButtonLocked: true
           });
           */
          AddButtonLocked = true;
        } else {
            this.ChosenAvailableSpells = Spells;
            /*
            this.setState({
                AddButtonLocked: false
           });
           */
          AddButtonLocked = false;
        }
       this.props.SetPsychicPowerMenuButtons(this.props.AvailableSpells, this.props.SelectedSpells, this.props.RemoveButtonLocked, AddButtonLocked);
      
       console.log(this.ChosenAvailableSpells.length);
    }

    ChooseSelectedPsychicPowers(event) {
        let SelectedOptions = event.target.selectedOptions;
        let Spells = [];
        //this.ChosenSelectedSpells = [];
        let RemoveButtonLocked;
        if(SelectedOptions && (SelectedOptions.length > 0)) {

            
            for(let i=0;i<SelectedOptions.length;i++) {
                const Spell = this.props.SelectedSpells.find((spell) => spell.id == SelectedOptions.item(i).value);
                Spells.push(Spell);
                console.log(Spell);
            }

        } else {
            console.log("Empty list");
        }
        if(Spells.length == 1 && Spells[0].id == 1) {
            this.ChosenSelectedSpells = [];
            /*
            this.setState({
                RemoveButtonLocked: true
           });
           */
          RemoveButtonLocked = true;
        } else {
            this.ChosenSelectedSpells = Spells;
            /*
            this.setState({
                RemoveButtonLocked: false
           });
           */
          RemoveButtonLocked = false;
        }
        this.props.SetPsychicPowerMenuButtons(this.props.AvailableSpells, this.props.SelectedSpells, RemoveButtonLocked, this.props.AddButtonLocked);
        console.log(Spells);
    }

    AddPsychicPowers() {
        let AddButtonLocked;
        let RemoveButtonLocked;
        let AvailableSpells = this.props.AvailableSpells.slice();
        let SelectedSpells = this.props.SelectedSpells.slice();
        if(this.ChosenAvailableSpells &&(this.ChosenAvailableSpells.length > 0)) {
            console.log("Выбранные доступные спеллы "+this.ChosenAvailableSpells.length);
            
            for(let i =0;i<this.ChosenAvailableSpells.length;i++) {
                const Spell = this.ChosenAvailableSpells[i];
                AvailableSpells.splice(AvailableSpells.indexOf(Spell), 1);
                SelectedSpells.push(Spell);
            }
            AddButtonLocked = (SelectedSpells.length >= this.props.MaxSpells);
            RemoveButtonLocked = false;
            /*
            this.setState({
                    AvailableSpells: AvailableSpells,
                    SelectedSpells: SelectedSpells,
                    RemoveButtonLocked: RemoveButtonLocked,
                    AddButtonLocked: AddButtonLocked
               });
               */
            this.ChosenAvailableSpells = [];
            this.ChosenSelectedSpells = [];
            console.log("Added spells "+this.props.SelectedSpells.length);
            this.props.SetPsychicPowerMenuButtons(AvailableSpells, SelectedSpells, RemoveButtonLocked, AddButtonLocked);
            this.props.SetUnitPsychicPowers(SelectedSpells, this.props.Unit);
        }
    }

    RemovePsychicPowers() {
        let AddButtonLocked;
        let RemoveButtonLocked;
        let SelectedSpells = this.props.SelectedSpells.slice();
        let AvailableSpells = this.props.AvailableSpells.slice();
        if(this.ChosenSelectedSpells &&(this.ChosenSelectedSpells.length > 0)) {
            console.log(this.ChosenSelectedSpells.length);
            
            for(let i = 0; i<this.ChosenSelectedSpells.length;i++) {
                const Spell = this.ChosenSelectedSpells[i];
                if(!(this.props.KnowsSmite && Spell.id == 1)) {
                    SelectedSpells.splice(SelectedSpells.indexOf(Spell), 1);
                    AvailableSpells.push(Spell);
                }
            }
            /*
            if(SelectedSpells && (SelectedSpells.length > 0)) {
                for(let i=0;i<SelectedSpells.length;i++) {
                    const Spell = SelectedSpells[i];
                    AvailableSpells.splice(AvailableSpells.indexOf(Spell), 1);
                }
            }
            */
            RemoveButtonLocked = (!SelectedSpells || SelectedSpells.length == 0 || (SelectedSpells.length == 1 && SelectedSpells[0].id == 1));
            AddButtonLocked = false;
            /*
            this.setState({
                AvailableSpells: AvailableSpells,
                SelectedSpells: SelectedSpells,
                RemoveButtonLocked: RemoveButtonLocked,
                AddButtonLocked: AddButtonLocked
           });
           */
            this.ChosenAvailableSpells = [];
            this.ChosenSelectedSpells = [];
            this.props.SetPsychicPowerMenuButtons(AvailableSpells, SelectedSpells, RemoveButtonLocked, AddButtonLocked);
            this.props.SetUnitPsychicPowers(SelectedSpells, this.props.Unit);
        }
    }

    render() {
        let RemoveButton;
        let AddButton;
        if(this.props.RemoveButtonLocked) {
            RemoveButton = <button disabled = {true} className = "EditUnitPsychicPowers__Button_Locked">{"<"}</button>
        } else {
            RemoveButton = <button className = "EditUnitPsychicPowers__Button" onClick = {this.RemovePsychicPowers.bind(this)}>{"<"}</button>
        }

        if(this.props.AddButtonLocked) {
            AddButton = <button disabled = {true} className = "EditUnitPsychicPowers__Button_Locked">{">"}</button>
        } else {
            AddButton = <button className = "EditUnitPsychicPowers__Button" onClick = {this.AddPsychicPowers.bind(this)}>{">"}</button>
        }

        return(
            <div className = "EditUnitPsychicPowers">
                <h2 className = "EditUnitPsychicPowers__Header">Edit Unit Psychic Powers</h2>
                <ChoiceUnitPsychicPower SelectLabel = "Available Psychic Powers" ChoosePsychicPowers = {this.ChooseAvailablePsychicPowers} AvailablePowers = {this.props.AvailableSpells}/>
                <div className = "EditUnitPsychicPowers__ButtonsDiv">
                    {AddButton}
                    {RemoveButton}
                </div> 
                <ChoiceUnitPsychicPower SelectLabel = "Selected Psychic Powers"  ChoosePsychicPowers = {this.ChooseSelectedPsychicPowers} AvailablePowers = {this.props.SelectedSpells}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        AvailableSpells: state.PsychicPowerMenuButtons.AvailableSpells,
        SelectedSpells: state.PsychicPowerMenuButtons.SelectedSpells,
        RemoveButtonLocked: state.PsychicPowerMenuButtons.RemoveButtonLocked,
        AddButtonLocked: state.PsychicPowerMenuButtons.AddButtonLocked,
        MaxSpells: utils.GetCurrentNumberOfSpells(state.RosterEditing.ActiveUnit.BaseUnit.NumberOfSpells, state.RosterEditing.ActiveUnit.Models.length),
        //MaxSpells: 3,
        KnowsSmite: state.RosterEditing.ActiveUnit.BaseUnit.KnowsSmite,
        Unit: state.RosterEditing.ActiveUnit  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SetPsychicPowerMenuButtons: (AvailableSpells, SelectedSpells, RemoveButtonLocked, AddButtonLocked) => dispatch(ActionCreators.PsychicPowerMenuButtons(AvailableSpells, SelectedSpells, RemoveButtonLocked, AddButtonLocked)),
        SetUnitPsychicPowers: (SelectedSpells, Unit) => dispatch(ActionCreators.UnitPsychicPowers(SelectedSpells, Unit))
    }
}

const containerEditUnitPsychicPowers = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUnitPsychicPowers);

export default containerEditUnitPsychicPowers;