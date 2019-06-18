import React, {Component} from "react";
import "./WargearSelection.css";
import "./WargearElement/WargearElement.js"
import * as ActionCreators from "../../../Store/ActionsCreators.js";
import {connect} from 'redux';
/*
in:
RosterModels
CurrentModel
UpdateSelectedWargearOptions()

out:
this.WargearSlots
*/

class WargearSelection extends Component {
    constructor(props) {
        super(props);
        this.GetSelectedUnitOptions = this.GetSelectedUnitOptions.bind(this);
        this.WargearSlots = this.props.CurrentModel.RosterWargearSlots.slice();
        this.UpdateSelectedWargearOptions = this.UpdateSelectedWargearOptions.bind(this);
    }
    
    SelectedWargearOption = (SelectedOptionId, CurrentSlot) => {
        CurrentSlot.SelectedOption = CurrentSlot.BaseSlot.Options.filter(option => option.id == SelectedOptionId)[0];
        UpdateSelectedWargearOptions(this.WargearSlots);
    }

    GetAvailableOptions = (CurrentSlot, UnitSelectedOptions, CurrentModel) => {
        let AvailableOptions = [];
        let BaseOptions = CurrentSlot.BaseSlot.Options;
        let ModelSelectedOptions = [];
        let AllSelectedOptions = UnitSelectedOptions;
        //let AllSelectedOptions = GetSelectedUnitOptions(this.props.RosterModels)
        let couldBeIncluded;

        if (!!CurrentModel.RosterWargearSlots && CurrentModel.RosterWargearSlots.length > 0) {
            for (let i = 0; i < CurrentModel.RosterWargearSlots.length; i++) {
                ModelSelectedOptions.push(CurrentModel.RosterWargearSlots[i].SelectedOption);
            }
        }
        
        for (let i = 0; i < BaseOptions.length; i++) {
        let HasLinkedOptions = !!BaseOptions[i].LinkedOptionsId && BaseOptions[i].LinkedOptionsId.length > 0;
            if (!!BaseOptions[i].PerXmodels) {
                let AlreadyHave = AllSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;
                let CanCarry = this.props.RosterModels.length / BaseOptions[i].PerXmodels;
                
                if (CanCarry > AlreadyHave) {
                    couldBeIncluded = true;
                }
            }

            if (!!BaseOptions[i].CountPerModel) {
                let alreadyHave = ModelSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;
                couldBeIncluded = couldBeIncluded && (alreadyHave < BaseOptions[i].CountPerModel);
            }

            if (couldBeIncluded) {
                AvailableOptions.push(BaseOptions[i]);
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

        const UnitSelectedOptions = this.GetSelectedUnitOptions(this.props.RosterModels);
        const RosterWargearSlots = this.WargearSlots.map(
            (slot) => 
                <WargearElement key = {slot.id} CurrentSlot = {slot} AvailableOptions = {this.GetAvailableOptions(slot, UnitSelectedOptions, this.props.CurrentModel)} SelectedWargearOption = {SelectedWargearOption} SelectedOption = {slot.SelectedOption}/>
          );
        return (
            <div>
               <ul className = ''>{RosterWargearSlots}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CurrentModel: state.RosterEditing.ActiveModel,
        RosterModels: state.RosterEditing.ActiveUnit.Models
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UpdateSelectedWargearOptions: (WargearSlots) => dispatch(ActionCreators.UpdateModelWargear(WargearSlots))
    }
}

const containerWargearSelection = connect(
    mapStateToProps,
    mapDispatchToProps
  )(WargearSelection);

export default containerWargearSelection;