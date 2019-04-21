import React, {Component} from "react";
import "./EditUnitPsychicPowers.css";
import ChoiceUnitPsychicPower from "./ChoiceUnitPsychicPower.js";

class EditUnitPsychicPowers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedSpells: this.props.SelectedSpells.slice(0),
            AvailableSpells: this.props.AvailableSpells.slice(0),
            RemoveButtonLocked: true,
            AddButtonLocked: false
        }
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
        let AvailableSpells = this.props.AvailableSpells.slice(0);
        let SelectedSpells = this.props.SelectedSpells.slice(0);
        if(!this.props.SelectedSpells || this.props.SelectedSpells.length == 0) {
            AddButtonLocked = false;
            RemoveButtonLocked = true;
            if(this.props.KnowsSmite) {
                let Spell = this.props.AvailableSpells.filter(function(spell) {return spell.id == 1})[0];
                SelectedSpells.push(Spell);
                AvailableSpells.splice(AvailableSpells.indexOf(Spell), 1);
            }
        } else if(this.props.SelectedSpells.length < this.props.MaxSpells) {
            AddButtonLocked = false;
            RemoveButtonLocked = false;
        } else {
            AddButtonLocked = true;
            RemoveButtonLocked = false;
        }
        this.setState({
            AvailableSpells: AvailableSpells,
            SelectedSpells: SelectedSpells,
            RemoveButtonLocked: RemoveButtonLocked,
            AddButtonLocked: AddButtonLocked
        });
        
    }

    ChooseAvailablePsychicPowers(event) {
        let SelectedOptions = event.target.selectedOptions;
        let Spells = [];
        //this.ChosenAvailableSpells = [];
        if(SelectedOptions && (SelectedOptions.length > 0)) {

            
            for(let i=0;i<SelectedOptions.length;i++) {
                //let SpellID = SelectedOptions.item(i).value;
               //console.log(SpellID);
                let Spell = this.state.AvailableSpells.filter(function(spell) {return spell.id == SelectedOptions.item(i).value})[0];
                console.log(Spell);
                Spells.push(Spell);
            }
           
        } else {
            console.log("Empty list");
        }
        if(Spells.length + this.state.SelectedSpells.length > this.props.MaxSpells) {
            this.ChosenAvailableSpells = [];
            this.setState({
                AddButtonLocked: true
           });
        } else {
            this.ChosenAvailableSpells = Spells;
            this.setState({
                AddButtonLocked: false
           });
        }
       
      
       console.log(this.ChosenAvailableSpells.length);
    }

    ChooseSelectedPsychicPowers(event) {
        let SelectedOptions = event.target.selectedOptions;
        let Spells = [];
        //this.ChosenSelectedSpells = [];
        if(SelectedOptions && (SelectedOptions.length > 0)) {

            
            for(let i=0;i<SelectedOptions.length;i++) {
                let Spell = this.state.SelectedSpells.filter(function(spell) {return spell.id == SelectedOptions.item(i).value})[0];
                Spells.push(Spell);
                console.log(Spell);
            }

        } else {
            console.log("Empty list");
        }
        if(Spells.length == 1 && Spells[0].id == 1) {
            this.ChosenSelectedSpells = [];
            this.setState({
                RemoveButtonLocked: true
           });
        } else {
            this.ChosenSelectedSpells = Spells;
            this.setState({
                RemoveButtonLocked: false
           });
        }
        
        console.log(Spells);
    }

    AddPsychicPowers() {
        let AddButtonLocked;
        let RemoveButtonLocked;
        let AvailableSpells = this.state.AvailableSpells;
        let SelectedSpells = this.state.SelectedSpells;
        if(this.ChosenAvailableSpells &&(this.ChosenAvailableSpells.length > 0)) {
            console.log("Выбранные доступные спеллы "+this.ChosenAvailableSpells.length);
            
            for(let i =0;i<this.ChosenAvailableSpells.length;i++) {
                let Spell = this.ChosenAvailableSpells[i];
                AvailableSpells.splice(AvailableSpells.indexOf(Spell), 1);
                SelectedSpells.push(Spell);
            }
            AddButtonLocked = (SelectedSpells.length >= this.props.MaxSpells);
            RemoveButtonLocked = false;
            this.setState({
                    AvailableSpells: AvailableSpells,
                    SelectedSpells: SelectedSpells,
                    RemoveButtonLocked: RemoveButtonLocked,
                    AddButtonLocked: AddButtonLocked
               });
            this.ChosenAvailableSpells = [];
            this.ChosenSelectedSpells = [];
            console.log("Added spells "+this.state.SelectedSpells.length);
        }
    }

    RemovePsychicPowers() {
        let AddButtonLocked;
        let RemoveButtonLocked;
        let SelectedSpells = this.state.SelectedSpells;
        let AvailableSpells = this.props.AvailableSpells.slice();
        if(this.ChosenSelectedSpells &&(this.ChosenSelectedSpells.length > 0)) {
            console.log(this.ChosenSelectedSpells.length);
            
            for(let i = 0; i<this.ChosenSelectedSpells.length;i++) {
                let Spell = this.ChosenSelectedSpells[i];
                if(!(this.props.KnowsSmite && Spell.id == 1)) {
                    SelectedSpells.splice(SelectedSpells.indexOf(Spell), 1);
                }
            }
            
            if(SelectedSpells && (SelectedSpells.length > 0)) {
                for(let i=0;i<SelectedSpells.length;i++) {
                    let Spell = SelectedSpells[i];
                    AvailableSpells.splice(AvailableSpells.indexOf(Spell), 1);
                }
            }
            RemoveButtonLocked = (!SelectedSpells || SelectedSpells.length == 0);
            AddButtonLocked = false;
            this.setState({
                AvailableSpells: AvailableSpells,
                SelectedSpells: SelectedSpells,
                RemoveButtonLocked: RemoveButtonLocked,
                AddButtonLocked: AddButtonLocked
           });
            this.ChosenAvailableSpells = [];
            this.ChosenSelectedSpells = [];
        }
    }

    render() {
        let RemoveButton;
        let AddButton;
        if(this.state.RemoveButtonLocked) {
            RemoveButton = <button disabled = {true} className = "EditUnitPsychicPowers__Button_Locked">{"<"}</button>
        } else {
            RemoveButton = <button className = "EditUnitPsychicPowers__Button" onClick = {this.RemovePsychicPowers.bind(this)}>{"<"}</button>
        }

        if(this.state.AddButtonLocked) {
            AddButton = <button disabled = {true} className = "EditUnitPsychicPowers__Button_Locked">{">"}</button>
        } else {
            AddButton = <button className = "EditUnitPsychicPowers__Button" onClick = {this.AddPsychicPowers.bind(this)}>{">"}</button>
        }

        return(
            <div className = "EditUnitPsychicPowers">
                <h2 className = "EditUnitPsychicPowers__Header">Edit Unit Psychic Powers</h2>
                <ChoiceUnitPsychicPower SelectLabel = "Available Psychic Powers" ChoosePsychicPowers = {this.ChooseAvailablePsychicPowers} AvailablePowers = {this.state.AvailableSpells}/>
                <div className = "EditUnitPsychicPowers__ButtonsDiv">
                    {AddButton}
                    {RemoveButton}
                </div> 
                <ChoiceUnitPsychicPower SelectLabel = "Selected Psychic Powers"  ChoosePsychicPowers = {this.ChooseSelectedPsychicPowers} AvailablePowers = {this.state.SelectedSpells}/>
            </div>
        )
    }
}

export default EditUnitPsychicPowers;