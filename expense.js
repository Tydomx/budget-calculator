// functionality for displaying list of expenses

const expForm = document.getElementById('expForm');
let expName = document.getElementById('expName');
let expNumber = document.getElementById('expNumber');

let id = 0;
let details = [];

function addExpenses(name, number) {
	if (!name.length || !number.length) {
		expName.style.border = '1px solid #b80c09';
		expName.placeholder = 'input can not be empty';
		expName.style.color = '#b80c09';

		expNumber.style.border = '1px solid #b80c09';
		expNumber.placeholder = 'input can not be empty';
		expNumber.style.color = '#b80c09';

		setTimeout(() => {
			expName.style.color = '#495057';
			expName.style.border = '1px solid gray';
			expName.placeholder = 'input can not be empty';

			expNumber.placeholder = 'input can not be empty';
			expNumber.style.border = '1px solid gray';
			expNumber.style.color = '#495057';
		}, 3000);
	} else {
		const userExp = {
			id: id,
			name: name,
			number: parseInt(number),
		};
		details.push(userExp);
		displayExp(details);
		id++;
		expName.value = '';
		expNumber.value = '';
	}
};

// function to display expense list after user adds expense
function displayExp(details) {
	expValue.innerHTML = null;
	for (i = 0; i < details.length; i++) {
		expValue.innerHTML += `
			<div class='expValue' id="${details[i].id}">
				<div id="expTitleName" class="exp"><p> <span>$ </span> ${details[i].number}</p></div>
				<div id="edite_delete">
					<p>
						<button id="${details[i].id}" onclick="editExpDetails(${details[i].id})"> <img src="image/edit.svg" width="15" alt="" /></button>
						<button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})"><img src="image/trash.svg" width="15" alt="" /></button>
					</p>
				</div>
		`;
	}
	calcExpenses();
	displayExpenses.style.display = 'block';
};

expForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addExpenses(expName.value, expNumber.value);
});