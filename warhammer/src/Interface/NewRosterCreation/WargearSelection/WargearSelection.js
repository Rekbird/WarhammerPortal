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
        this.AggregateOptions = this.AggregateOptions.bind(this);
        this.ReturnedTraits = [];
        this.ReturnedRelics = [];
        this.UnitIsWarlord = false;
        this.ChosenTrait = null;
        this.ChosenRelic = null;
        this.WargearSlots = this.props.CurrentModel.RosterWargearSlots.slice();
        this.UnitSelectedOptions = this.GetSelectedUnitOptions(this.props.RosterModels);
        this.AggregatedOptions = this.AggregateOptions(false);
    }
    
    SelectedWargearOption = (SelectedOptionId, CurrentSlot) => {
        CurrentSlot.SelectedOption = CurrentSlot.BaseSlot.Options.find(option => option.id == SelectedOptionId);
        this.AggregatedOptions = this.AggregateOptions(true, CurrentSlot);
        this.ValidateOptions();
        this.props.UpdateSelectedWargearOptions(this.WargearSlots);
    }
    
    ValidateOptions = () => {
        console.log("Validated!!!");
        this.WargearSlots.forEach(slot => {
            let AvailableOptions = this.AggregatedOptions.find(elem => elem.SlotId == slot.id).AvailableOptions;
            if (!AvailableOptions.includes(slot.SelectedOption)) slot.SelectedOption = AvailableOptions[0];
        });
        console.log(this.WargearSlots);
        console.log("--------------");
    }

    AggregateOptions = (Validating, lastChangedSlot) => {
        console.log("Aggregated!!!=========");
        let SlotConnections = [];
        let SlotAvailableOptions;
        this.WargearSlots.forEach(slot => {
            SlotAvailableOptions = {
                AvailableOptions: this.GetAvailableOptions(slot, this.UnitSelectedOptions, this.props.CurrentModel, Validating, lastChangedSlot),
                SlotId: slot.id
            }
            SlotConnections.push(SlotAvailableOptions)
        });
        console.log(SlotConnections);
        console.log("--------------");
    return SlotConnections;
    }

    GetAvailableOptions = (CurrentSlot, UnitSelectedOptions, CurrentModel, Validating, lastChangedSlot) => {
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
            let UnitAlreadyHave = AllSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.includes(option.id))).length;

            if (!!BaseOptions[i].PerXmodels) {
                let CanCarry = this.props.RosterModels.length / BaseOptions[i].PerXmodels;
                couldBeIncluded = couldBeIncluded && (CanCarry > UnitAlreadyHave);

            }

            if (couldBeIncluded && !!BaseOptions[i].UpToXModels) {
                couldBeIncluded = couldBeIncluded && (BaseOptions[i].UpToXModels > UnitAlreadyHave);

            }

            if (couldBeIncluded && !!BaseOptions[i].CountPerModel) {
                let ModelAlreadyHave = ModelSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (option.LinkedOptionsId.includes(BaseOptions[i].id)));
                if ((BaseOptions[i].id != CurrentSlot.SelectedOption.id) && !(CurrentSlot.SelectedOption.LinkedOptionsId.includes(BaseOptions[i].id))) {
                    couldBeIncluded = 
                }
               
                couldBeIncluded = couldBeIncluded && (ModelAlreadyHave < BaseOptions[i].CountPerModel);
                
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
        console.log("----------------RENDERED--------------");
        console.log(this.AggregatedOptions);
        console.log("--------------------------------------");
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
        
        const RosterWargearSlots = this.WargearSlots.map(
            (slot) => 
                <WargearElement  key = {slot.id} CurrentSlot = {slot} AvailableOptions = {this.AggregatedOptions.find(elem => elem.SlotId == slot.id).AvailableOptions} SelectedWargearOption = {this.SelectedWargearOption} SelectedOption = {slot.SelectedOption}/>
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