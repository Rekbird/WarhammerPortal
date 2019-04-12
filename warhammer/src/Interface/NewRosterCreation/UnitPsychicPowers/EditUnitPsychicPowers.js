import React, {Component} from "react";
import "./EditUnitPsychicPowers.css";
import ChoiceUnitPsychicPower from "./ChoiceUnitPsychicPower.js";

class EditUnitPsychicPowers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedSpells: this.props.SelectedSpells.slice(0),
            AvailableSpells: this.props.AvailableSpells.slice(0)
        }
        this.ChosenAvailableSpells = [];
        this.ChosenSelectedSpells = [];
        this.ChooseAvailablePsychicPowers = this.ChooseAvailablePsychicPowers.bind(this);
        this.ChooseSelectedPsychicPowers = this.ChooseSelectedPsychicPowers.bind(this);
        this.AddPsychicPowers = this.AddPsychicPowers.bind(this);
        this.RemovePsychicPowers = this.RemovePsychicPowers.bind(this);
    }
/*
    componentDidMount() {
        console.log(this.props.AvailableSpells.length);
        this.setState({
            AvailableSpells: this.props.AvailableSpells.slice(0),
            SelectedSpells: this.props.SelectedSpells.slice(0)
        });
        console.log(this.state.AvailableSpells.length);
        console.log(this.state.SelectedSpells.length);
    }
*/
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
      this.ChosenAvailableSpells = Spells;
       
      
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
        this.ChosenSelectedSpells = Spells;
        console.log(Spells);
    }

    AddPsychicPowers() {
        let AvailableSpells = this.state.AvailableSpells;
        let SelectedSpells = this.state.SelectedSpells;
        if(this.ChosenAvailableSpells &&(this.ChosenAvailableSpells.length > 0)) {
            console.log("Выбранные доступные спеллы "+this.ChosenAvailableSpells.length);
            
            for(let i =0;i<this.ChosenAvailableSpells.length;i++) {
                let Spell = this.ChosenAvailableSpells[i];
                AvailableSpells.splice(AvailableSpells.indexOf(Spell), 1);
                SelectedSpells.push(Spell);
            }
            this.setState({
                    AvailableSpells: AvailableSpells,
                    SelectedSpells: SelectedSpells,
                    ChosenSelectedSpells: [],
                    ChosenAvailableSpells: []
               });
            console.log("Added spells "+this.state.SelectedSpells.length);
        }
    }

    RemovePsychicPowers() {
        let SelectedSpells = this.state.SelectedSpells;
        let AvailableSpells = this.props.AvailableSpells.slice();
        if(this.ChosenSelectedSpells &&(this.ChosenSelectedSpells.length > 0)) {
            console.log(this.ChosenSelectedSpells.length);
            
            for(let i = 0; i<this.ChosenSelectedSpells.length;i++) {
                let Spell = this.ChosenSelectedSpells[i];
                SelectedSpells.splice(SelectedSpells.indexOf(Spell), 1);
            }
            
            if(SelectedSpells && (SelectedSpells.length > 0)) {
                for(let i=0;i<SelectedSpells.length;i++) {
                    let Spell = SelectedSpells[i];
                    AvailableSpells.splice(SelectedSpells.indexOf(Spell), 1);
                }
            }
            this.setState({
                AvailableSpells: AvailableSpells,
                SelectedSpells: SelectedSpells,
                ChosenSelectedSpells: [],
                ChosenAvailableSpells: []
           });
        }
    }

    render() {
        return(
            <div>
                <ChoiceUnitPsychicPower SelectLabel = "Available Psychic Powers" ChoosePsychicPowers = {this.ChooseAvailablePsychicPowers} AvailablePowers = {this.state.AvailableSpells}/>
                <button onClick = {this.AddPsychicPowers.bind(this)}>{">"}</button>
                <button onClick = {this.RemovePsychicPowers.bind(this)}>{"<"}</button>
                <ChoiceUnitPsychicPower SelectLabel = "Selected Psychic Powers"  ChoosePsychicPowers = {this.ChooseSelectedPsychicPowers} AvailablePowers = {this.state.SelectedSpells}/>
            </div>
        )
    }
}

export default EditUnitPsychicPowers;