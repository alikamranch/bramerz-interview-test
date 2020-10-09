'use strict';
const location = require('./locations.interface');

class Test {
	constructor() {
		displayLocations(); // You can comment this if you want
	}
}

const displayLocations = () => {
	console.log('Location', location);
};

//to make a deep copy of the location object
let locationCopy = JSON.parse(JSON.stringify(location));

//to change timingEnabled values
const changeTimingsEnabledValue = (locationCopy) => {
	let branchTimings = locationCopy.branch_timings;
	branchTimings.Monday.timingsEnabled = false;
	branchTimings.Tuesday.timingsEnabled = false;
	branchTimings.Wednesday.timingsEnabled = false;
	branchTimings.Thursday.timingsEnabled = false;
	branchTimings.Friday.timingsEnabled = false;
	branchTimings.Saturday.timingsEnabled = false;
	branchTimings.Sunday.timingsEnabled = false;

	return locationCopy;
};

//reassign location object copy
locationCopy = changeTimingsEnabledValue(locationCopy);
console.log("Copy of location object with timingsEnabled turned to false:\n", locationCopy);












// Do not edit below this line
const test = new Test();
