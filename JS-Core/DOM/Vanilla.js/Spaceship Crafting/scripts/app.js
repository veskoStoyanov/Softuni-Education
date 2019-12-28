function spaceshipCrafting() {
	let titanium = Number(document.getElementById('titaniumCoreFound').value);
	let aluminium = Number(document.getElementById('aluminiumCoreFound').value);
	let magnesium = Number(document.getElementById('magnesiumCoreFound').value);
	let carbon = Number(document.getElementById('carbonCoreFound').value);
	let loses = Number(document.getElementById('lossesPercent').value);
	let procent = loses / 4;
	procent /= 100;

	titanium -= titanium * procent;
	aluminium -= aluminium * procent;
	magnesium -= magnesium * procent;
	carbon -= carbon * procent;

	titanium = Math.round(titanium);
	aluminium = Math.round(aluminium);
	magnesium = Math.round(magnesium);
	carbon = Math.round(carbon);

	let titaniumBar = titanium / 25;
	let aluminiumBar = aluminium / 50;
	let magnesiumBar = magnesium / 75;
	let carbonBar = carbon / 100;

	let theUndefinedShip = 0;
	let nullMaster = 0;
	let jasonCrew = 0;
	let falseFleet = 0;
	let bool = false;

	titaniumBar = Math.round(titaniumBar);
	aluminiumBar = Math.round(aluminiumBar);
	magnesiumBar = Math.round(magnesiumBar);
	carbonBar = Math.round(carbonBar);

	while (true) {
		if (titaniumBar >= 7 && aluminiumBar >= 9 && magnesiumBar >= 7 && carbonBar >= 7) {
			theUndefinedShip++
			titaniumBar -= 7;
			aluminiumBar -= 9;
			magnesiumBar -= 7;
			carbonBar -= 7;
			bool = true;
		} if (titaniumBar >= 5 && aluminiumBar >= 7 && magnesiumBar >= 7 && carbonBar >= 5) {
			nullMaster++
			titaniumBar -= 5;
			aluminiumBar -= 7;
			magnesiumBar -= 7;
			carbonBar -= 5;
			bool = true;
		} if (titaniumBar >= 3 && aluminiumBar >= 5 && magnesiumBar >= 5 && carbonBar >= 2) {
			jasonCrew++
			titaniumBar -= 3;
			aluminiumBar -= 5;
			magnesiumBar -= 5;
			carbonBar -= 2;
			bool = true;
		} if (titaniumBar >= 2 && aluminiumBar >= 2 && magnesiumBar >= 3 && carbonBar >= 1) {
			falseFleet++
			titaniumBar -= 2;
			aluminiumBar -= 2;
			magnesiumBar -= 3;
			carbonBar -= 1;
			bool = true;
		} if (bool === false) {
			break;
		}
		bool = false;
	}

	let arr = [];
	if (theUndefinedShip > 0) {
		let text = `${theUndefinedShip} THE-UNDEFINED-SHIP`;
		arr.push(text);
	} if (nullMaster > 0) {
		let text = `${nullMaster} NULL-MASTER`;
		arr.push(text);
	} if (jasonCrew > 0) {
		let text = `${jasonCrew} JSON-CREW`;
		arr.push(text);
	} if (falseFleet > 0) {
		let text = `${falseFleet} FALSE-FLEET`;
		arr.push(text);
	}

	let restCore = `${titaniumBar} titanium bars, ${aluminiumBar} aluminum bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`

	let printCore = document.querySelector('#availableBars p');
	printCore.textContent = restCore;

	let shipsPrint = document.querySelector('#builtSpaceships p');

	shipsPrint.textContent = arr.join(', ')
}