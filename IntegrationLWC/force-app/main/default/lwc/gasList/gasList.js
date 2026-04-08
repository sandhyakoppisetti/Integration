import { LightningElement, track, wire } from 'lwc';
// Fix: Reference the correct Apex class and method. Ensure GasPrices.cls exposes @AuraEnabled method getGasPrices.
import getGasPrices from '@salesforce/apex/GasPrices.getGasPrices';

export default class GasList extends LightningElement {
    enteredState = '';
    searchState = '';
    showState = 'Enter valid state Name';
  

    @track stateData;   // single state object
    @track error;
@track cityData = [];


    handleChange(event) {
        this.enteredState = event.target.value;
    }

    handleClick(event) {
        this.searchState = this.enteredState;
    }

    @wire(getGasPrices, { searchState: '$searchState' })
    fetchGasPrices(result) {
        if (result.data) {
            try {

            
        const data = JSON.parse(result.data);

            // Expecting Apex to 
            // return a JSON string or an object. Handle bot

            if (data.success) {
                this.stateData = data.result.state[0];
                this.showState = this.stateData.name;
                this.cityData = data.result.cities; 
                this.error = undefined;

            } else {
                this.stateData = undefined;
                this.cityData = [];
              this.showState = 'Please enter a valid state';
            }
        } catch (e) {
            console.error('JSON parse error:', e);
            this.stateData = undefined;
            this.cityData = [];
            this.showState = 'PLEASE PROVIDE VALID STATE CODE';
        }

    } else if(result.error) {
        // Log and surface a friendly message
        /* eslint-disable no-console */
        console.error('Error while fetching gas prices:', result.error);
        this.stateData = undefined;
        this.cityData = [];
            this.showState = 'Error occurred while searching gas prices';
            this.error = result.error;

    }
}
}