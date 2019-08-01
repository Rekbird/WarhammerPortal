import React, {Component} from "react";
import "./WargearSelection.css";
import WargearElement from "./WargearElement/WargearElement.js"
import * as ActionCreators from "../../../Store/ActionsCreators.js";
import * as utils from "../../../Scripts/CommonFunctions.js";
import { connect } from 'react-redux';
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
        this.WargearSlots = [];
        this.ReturnedTraits = [];
        this.ReturnedRelics = [];
        this.UnitIsWarlord = false;
        this.ChosenTrait = null;
        this.ChosenRelic = null;
    }
    
    SelectedWargearOption = (SelectedOptionId, CurrentSlot) => {
        CurrentSlot.SelectedOption = CurrentSlot.BaseSlot.Options.filter(option => option.id == SelectedOptionId)[0];
        this.props.UpdateSelectedWargearOptions(this.WargearSlots);
    }
    
    GetAvailableOptions = (CurrentSlot, UnitSelectedOptions, CurrentModel) => {
        let AvailableOptions = [];
        let BaseOptions = CurrentSlot.BaseSlot.Options;
        let ModelSelectedOptions = [];
        let AllSelectedOptions = UnitSelectedOptions;

        if (!!CurrentModel.RosterWargearSlots && CurrentModel.RosterWargearSlots.length > 0) {
            for (let i = 0; i < CurrentModel.RosterWargearSlots.length; i++) {
                ModelSelectedOptions.push(CurrentModel.RosterWargearSlots[i].SelectedOption);
            }
        }
        
        for (let i = 0; i < BaseOptions.length; i++) {
            let couldBeIncluded = true;
            let HasLinkedOptions = (!!BaseOptions[i].LinkedOptionsId && BaseOptions[i].LinkedOptionsId.length > 0);
            let UnitAlreadyHave = AllSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;

            if (!!BaseOptions[i].PerXmodels) {
                let CanCarry = this.props.RosterModels.length / BaseOptions[i].PerXmodels;
                couldBeIncluded = couldBeIncluded && (CanCarry > UnitAlreadyHave);

            }

            if (couldBeIncluded && !!BaseOptions[i].UpToXModels) {
                couldBeIncluded = couldBeIncluded && (BaseOptions[i].UpToXModels > UnitAlreadyHave);

            }

            if (couldBeIncluded && !!BaseOptions[i].CountPerModel && !(BaseOptions[i].LinkedOptionsId.includes(CurrentSlot.SelectedOption.id))) {
                let ModelAlreadyHave = ModelSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;
                //console.log("Selected option equals with current option " + (BaseOptions[i].id == CurrentSlot.SelectedOption.id));
                couldBeIncluded = couldBeIncluded && (ModelAlreadyHave < BaseOptions[i].CountPerModel);
            }

            if (couldBeIncluded) {
                AvailableOptions.push(BaseOptions[i]);
            }

        }

        if (!AvailableOptions.includes(CurrentSlot.SelectedOption)) {
            this.SelectedWargearOption(AvailableOptions[0].id, CurrentSlot);
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

    HandleEvent = () => {
        this.props.SetUnitAsWarlord(!this.UnitIsWarlord);
    }

    SelectedWarlordTrait = (event) => {
        this.ChosenTrait = this.ReturnedTraits.find(elem => elem.id == event.target.value);
        this.props.SetUnitWarlordTrait(this.ChosenTrait);
    }

    SelectedRelic = (event) => {
        this.ChosenRelic = this.ReturnedRelics.find(elem => elem.id == event.target.value);
        this.props.SetUnitRelic(this.ChosenRelic);
    }

    render() {
        this.UnitIsWarlord = this.props.ActiveUnit.Warlord;
        let WarlordOptions;
        let WarlordTraitAndRelic;

        if (this.props.ActiveUnit.BaseUnit.UnitRole.id == 3 && this.props.ActiveUnit.BaseUnit.MaxModelQuant < 2) {
            if (this.UnitIsWarlord) {
                this.ReturnedTraits = utils.GetWarlordTraits(this.props.ActiveDetachment.Faction.id, this.props.ActiveDetachment.ChapterTactic.id);
                if (this.props.ActiveUnit.BaseUnit.Named) this.ReturnedTraits = this.ReturnedTraits.filter(trait => trait.id == this.props.ActiveUnit.BaseUnit.WarlordTraitId); 
                let AvailableWarlordTraits = this.ReturnedTraits.map((option) =>
                    <option className = "WargearSelection__Option" key = {option.id} value = {option.id} disabled = {!!this.props.ActiveUnit.ChosenWarlordTrait && (option.id == this.props.ActiveUnit.ChosenWarlordTrait.id)}>{option.Name}</option>
                );
                this.ChosenTrait = !!this.props.ActiveUnit.ChosenWarlordTrait ? this.props.ActiveUnit.ChosenWarlordTrait : this.ReturnedTraits[0];
                let RelicSelection = null;
                if (!this.props.ActiveUnit.BaseUnit.Named) {
                    this.ReturnedRelics = utils.GetFactionRelics(this.props.ActiveDetachment.Faction.id, this.props.ActiveDetachment.ChapterTactic.id, this.props.ActiveUnit);
                    let AvailableRelics = this.ReturnedRelics.map((option) =>
                        <option className = "WargearSelection__Option" key = {option.id} value = {option.id} disabled = {!!this.props.ActiveUnit.ChosenRelic && (option.id == this.props.ActiveUnit.ChosenRelic.id)}>{option.Name}</option>
                    );
                    this.ChosenRelic = !!this.props.ActiveUnit.ChosenRelic ? this.props.ActiveUnit.ChosenRelic : this.ReturnedRelics[0];
                    RelicSelection = 
                        <div className = 'WargearSelection__SelectDiv'>
                            <h3 className = 'WargearSelection__Label'>Relic</h3>
                            <select className = "WargearSelection__Select" value = {this.ChosenRelic.id} onChange = {this.SelectedRelic}>{AvailableRelics}</select>
                        </div>
                }
                WarlordTraitAndRelic = 
                    <div className = 'WargearSelection__WarlordTraitAndRelicDiv'>
                        <div className = 'WargearSelection__SelectDiv'>
                            <h3 className = 'WargearSelection__Label'>Warlord trait</h3>
                            <select className = "WargearSelection__Select" value = {this.ChosenTrait.id} onChange = {this.SelectedWarlordTrait}>{AvailableWarlordTraits}</select>
                        </div>
                        {RelicSelection}
                    </div>
            } else {
                this.ChosenTrait = null;
                this.ChosenRelic = null;
            }

            WarlordOptions = 
                <div>
                    <h3 className = 'WargearSelection__Title'>Additional options</h3>
                    <label className = 'WargearSelection__CheckBox'><input type = 'checkbox' name = 'WarlordCheckBox' checked = {this.UnitIsWarlord ? 'checked' : ''} onChange = {this.HandleEvent}></input>This unit is a Warlord</label>
                    {WarlordTraitAndRelic}
                </div>
        }
        
        this.WargearSlots = this.props.CurrentModel.RosterWargearSlots.slice();
        const UnitSelectedOptions = this.GetSelectedUnitOptions(this.props.RosterModels);
        const RosterWargearSlots = this.WargearSlots.map(
            (slot) => 
                <WargearElement  key = {slot.id} CurrentSlot = {slot} AvailableOptions = {this.GetAvailableOptions(slot, UnitSelectedOptions, this.props.CurrentModel)} SelectedWargearOption = {this.SelectedWargearOption} SelectedOption = {slot.SelectedOption}/>
            );
        return (
            <div className = 'WargearSelection__Component'>
                <h3 className = 'WargearSelection__Title'>{this.props.CurrentModel.BaseModel.Name} - Wargear options</h3>
                <ul className = 'WargearSelection__List'>{RosterWargearSlots}</ul>
                {WarlordOptions}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CurrentModel: state.RosterEditing.ActiveModel,
        RosterModels: state.RosterEditing.ActiveUnit.Models,
        ActiveUnit : state.RosterEditing.ActiveUnit,
        ActiveDetachment: state.RosterEditing.ActiveDetachment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UpdateSelectedWargearOptions: (WargearSlots) => dispatch(ActionCreators.UpdateModelWargear(WargearSlots)),
        SetUnitAsWarlord: (WarlordCheckBox) => dispatch(ActionCreators.SetUnitAsWarlord(WarlordCheckBox)),
        SetUnitWarlordTrait: (ChosenTrait) => dispatch(ActionCreators.SetUnitWarlordTrait(ChosenTrait)),
        SetUnitRelic: (ChosenRelic) => dispatch(ActionCreators.SetUnitRelic(ChosenRelic))
    }
}

const containerWargearSelection = connect(
    mapStateToProps,
    mapDispatchToProps
  )(WargearSelection);

export default containerWargearSelection;