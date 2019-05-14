import React, {Component} from "react";
import "./WargearSelection.css";
import "./WargearElement/WargearElement.js"

/*
in:
RosterModels
CurrentModel

out:
none
*/


class WargearSelection extends Component {
    constructor(props) {
        super(props);
        this.GetSelectedUnitOptions = this.GetSelectedUnitOptions.bind(this);
        this.AllSelectedOptions = this.GetSelectedUnitOptions(this.props.RosterModels);
    }

    SelectedWargearOption = (SelectedOptionId, CurrentSlot) => {
        CurrentSlot.SelectedOption = CurrentSlot.BaseSlot.Options.filter(option => option.id == SelectedOptionId)[0];

    }

    GetAvailableOptions = (CurrentSlot, AllSelectedOptions, CurrentModel) => {
        let AvailableOptions = [];
        let BaseOptions = CurrentSlot.BaseSlot.Options;
        let ModelSelectedOptions = [];

        if (!!CurrentModel.RosterWargearSlots && CurrentModel.RosterWargearSlots.length > 0) {
            for (let i = 0; i < CurrentModel.RosterWargearSlots.length; i++) {
                ModelSelectedOptions.push(CurrentModel.RosterWargearSlots[i].SelectedOption);
            }
        }
        


        return AvailableOptions;
    }

    GetSelectedUnitOptions = (RosterModels) => {
        let AllSelectedOptions = [];
        if (!!RosterModels && RosterModels.length > 0) {
            for (let i = 0; i < RosterModels.length; i++) {
                let Slots = RosterModels[i].RosterWargearSlots;
                if (!!Slots && Slots.length > 0) {
                    for (let j = 0; j < Slots.length; j++) {
                        if (!!Slots[j].SelectedOption) {
                            AllSelectedOptions.push(Slots[j].SelectedOption);
                        }
                    }
                }
            }
        }
        return AllSelectedOptions;
    }
 
    render() {
        const RosterWargearSlots = this.props.RosterWargearSlots.map(
            (slot) => 
                <WargearElement key = {slot.id} CurrentSlot = {slot} AvailableOptions = {this.GetAvailableOptions(slot, this.AllSelectedOptions, this.props.CurrentModel)} SelectedWargearOption = {SelectedWargearOption} SelectedOption = {slot.SelectedOption}/>
          );
        return (
            <div>
               <ul className = ''>{RosterWargearSlots}</ul>
            </div>
        )
    }
}

export default WargearSelection;