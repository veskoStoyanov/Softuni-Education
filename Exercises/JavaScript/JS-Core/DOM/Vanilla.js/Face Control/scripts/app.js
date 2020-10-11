	
	function getData() {
		let textArea = JSON.parse(document.querySelector('textarea').value);
		let lastEl = textArea.pop();
		let peopleIn = [];
		let peopleOut = [];
		let blackList = [];
	
		let pplIn = document.querySelector('#peopleIn p');
		let pplOut = document.querySelector('#peopleOut p');
		let blcList = document.querySelector('#blacklist p');
	
		for (const arr of textArea) {
			let action = arr.action;
			let curName = {
				firstName: arr.firstName,
				lastName: arr.lastName
			}
	
			if (action === 'peopleIn') {
				if (!blackList.find(p => p.firstName === curName.firstName && p.lastName === curName.lastName)) {
					peopleIn.push(curName);
				}
			} else if (action === 'peopleOut') {
				if (peopleIn.find(p => p.firstName === curName.firstName && p.lastName === curName.lastName)) {
					let index = peopleIn.findIndex(p => p.firstName === curName.firstName && p.lastName === curName.lastName);
					peopleIn.splice(index, 1);
					peopleOut.push(curName);
				} 
			}else if (action === 'blacklist') {
				if (peopleIn.find(p => p.firstName === curName.firstName && p.lastName === curName.lastName)) {
					let index = peopleIn.findIndex(p => p.firstName === curName.firstName && p.lastName === p.lastName)
					peopleIn.splice(index, 1);
					peopleOut.push(curName);
				}
				blackList.push(curName);
			}
		}
	
		let output = {};
		output['peopleIn'] = peopleIn;
		output['peopleOut'] = peopleOut;
		output['blacklist'] = blackList;
	
		if (lastEl.criteria !== '' && lastEl.action !== '') {
			output[lastEl.action] = output[lastEl.action]
				.sort((a, b) => a[lastEl.criteria].localeCompare(b[lastEl.criteria]));
		}
	
		pplIn.textContent = output.peopleIn.map(p => `{"firstName":"${p.firstName}","lastName":"${p.lastName}"}`).join(' ');
		pplOut.textContent =output.peopleOut.map(p => `{"firstName":"${p.firstName}","lastName":"${p.lastName}"}`).join(' ');
		blcList.textContent = output.blacklist.map(p => `{"firstName":"${p.firstName}","lastName":"${p.lastName}"}`).join(' ');
	}
