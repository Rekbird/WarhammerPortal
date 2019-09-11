import React, {Component} from "react";
import "./WargearSelection.css";
import WargearElement from "./WargearElement/WargearElement.js"
import * as ActionCreators from "../../../Store/ActionsCreators.js";
import * as utils from "../../../Scripts/CommonFunctions.js";
import { connect } from 'react-redux';

const _ = require('lodash');
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
        this.WargearSlots = [];
        this.UnitSelectedOptions = [];
        this.AggregatedOptions = [];
    }
    
    SelectedWargearOption = (SelectedOptionId, CurrentSlot) => {
        CurrentSlot.SelectedOption = _.find(CurrentSlot.BaseSlot.Options, option => option.id == SelectedOptionId);
        this.AggregatedOptions = this.AggregateOptions(true, CurrentSlot);
        this.ValidateOptions();
        this.props.UpdateSelectedWargearOptions(this.WargearSlots);
    }
    
    ValidateOptions = () => {
        this.WargearSlots.forEach(slot => {
            let AvailableOptions = _.find(this.AggregatedOptions, elem => elem.SlotId == slot.id).AvailableOptions;
            if (!AvailableOptions.includes(slot.SelectedOption)) slot.SelectedOption = AvailableOptions[0];
        });
    }

    AggregateOptions = (Validating, lastChangedSlot) => {
        let SlotConnections = [];
        let SlotAvailableOptions;
        this.WargearSlots.forEach(slot => {
            SlotAvailableOptions = {
                AvailableOptions: this.GetAvailableOptions(slot, this.UnitSelectedOptions, this.props.CurrentModel, Validating, lastChangedSlot),
                SlotId: slot.id
            }
            SlotConnections.push(SlotAvailableOptions)
        });
    return SlotConnections;
    }

    GetAvailableOptions = (CurrentSlot, UnitSelectedOptions, CurrentModel, Validating, lastChangedSlot) => {
        let AvailableOptions = [];
        let BaseOptions = CurrentSlot.BaseSlot.Options;
        let ModelSelectedOptions = [];
        let AllSelectedOptions = UnitSelectedOptions;

        if (!_.isEmpty(CurrentModel.RosterWargearSlots)) {
            CurrentModel.RosterWargearSlots.forEach(slot => ModelSelectedOptions.push(slot.SelectedOption));
        }

        BaseOptions.forEach(function (baseOption) {
            let couldBeIncluded = true;
            let HasLinkedOptions = !_.isEmpty(baseOption.LinkedOptionsId);
            let UnitAlreadyHave = _.filter(AllSelectedOptions, option => (option.id == baseOption.id) || (HasLinkedOptions && baseOption.LinkedOptionsId.includes(option.id))).length;

            if (!!baseOption.PerXmodels) {
                let CanCarry = this.props.RosterModels.length / baseOption.PerXmodels;
                couldBeIncluded = couldBeIncluded && (CanCarry > UnitAlreadyHave);
            }

            if (couldBeIncluded && !!baseOption.UpToXModels) {
                couldBeIncluded = couldBeIncluded && (baseOption.UpToXModels > UnitAlreadyHave);
            }

            if (couldBeIncluded && !!baseOption.CountPerModel) {
                let ModelAlreadyHave = _.filter(ModelSelectedOptions, option => (option.id == baseOption.id) || (option.LinkedOptionsId.includes(baseOption.id)));

                if ((baseOption.id != CurrentSlot.SelectedOption.id) && !(CurrentSlot.SelectedOption.LinkedOptionsId.includes(baseOption.id))) {
                    couldBeIncluded = couldBeIncluded && (ModelAlreadyHave.length < baseOption.CountPerModel);
                } else {
                    couldBeIncluded = (Validating && CurrentSlot.id != lastChangedSlot.id) ? couldBeIncluded && (ModelAlreadyHave.length <= baseOption.CountPerModel) : true
                }
            }

            if (couldBeIncluded) {
                AvailableOptions.push(baseOption);
            }

        });
        return AvailableOptions;
    }

    GetSelectedUnitOptions = (RosterModels) => {
        let AllSelectedOptions = [];
        if (!_.isEmpty(RosterModels)) {
            RosterModels.forEach(rosterModel =>
                !_.isEmpty(rosterModel.RosterWargearSlots) && rosterModel.RosterWargearSlots.forEach(slot => 
                    !!slot.SelectedOption && AllSelectedOptions.push(slot.SelectedOption))
            );
        }
        return AllSelectedOptions;
    }

    HandleEvent = () => {
        this.props.SetUnitAsWarlord(!this.UnitIsWarlord);
    }

    SelectedWarlordTrait = (event) => {
        this.ChosenTrait = _.find(this.ReturnedTraits, elem => elem.id == event.target.value);
        this.props.SetUnitWarlordTrait(this.ChosenTrait);
    }

    SelectedRelic = (event) => {
        this.ChosenRelic = _.find(this.ReturnedRelics, elem => elem.id == event.target.value);
        this.props.SetUnitRelic(this.ChosenRelic);
    }

    render() {
        this.UnitIsWarlord = this.props.ActiveUnit.Warlord;
        this.WargearSlots = this.props.CurrentModel.RosterWargearSlots.slice();
        this.UnitSelectedOptions = this.GetSelectedUnitOptions(this.props.RosterModels);
        this.AggregatedOptions = this.AggregateOptions(false);
        let WarlordOptions;
        let WarlordTraitAndRelic;
        console.log('RENDERED---');
        console.log(this.WargearSlots);
        console.log('------------')
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
                <WargearElement  key = {slot.id} CurrentSlot = {slot} AvailableOptions = {_.find(this.AggregatedOptions,elem => elem.SlotId == slot.id).AvailableOptions} SelectedWargearOption = {this.SelectedWargearOption} SelectedOption = {slot.SelectedOption}/>
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