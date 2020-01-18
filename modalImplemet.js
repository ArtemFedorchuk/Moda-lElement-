const submitPriceElem = document.getElementById('btn');

function handleSubmit() {
	let modalDomObj = document.createElement('div')
	let closeBtn = document.createElement('button')
	let cloneModalBtn = document.createElement('button')

		modalDomObj.id = 'myDiv';
		modalDomObj.style.width = '300px';
		modalDomObj.style.heigt = '300px';
		modalDomObj.style.transition = "all 2s";
		modalDomObj.style.padding = '50px 50px';
		modalDomObj.style.boxShadow = '0px 0px 500px black';
		modalDomObj.style.textTransform = 'uppercase';
		modalDomObj.style.fontSize = '20px';
		modalDomObj.style.color = 'rgba(55,71,79 ,1)';
		modalDomObj.style.position = 'absolute';
		modalDomObj.style.textAlign = 'center';
		modalDomObj.style.fontWeigt = 'bold';
		modalDomObj.style.left = '50%';
		modalDomObj.style.borderRadius = '24px';
		modalDomObj.style.top = '20%';
		modalDomObj.style.transform = 'translate(-50%, -50%)';
		modalDomObj.style.backgroundColor = 'rgba(239,83,80 ,1)';
		modalDomObj.innerHTML = 'ERROR';

		closeBtn.id = 'closeBtnElem';
		closeBtn.style.padding = '10px 15px';
		closeBtn.style.position = 'absolute';
		closeBtn.style.left = '88%';
		closeBtn.style.bottom = '56%';
		closeBtn.style.color = 'rgba(55,71,79 ,1)';
		closeBtn.style.borderColor = 'rgba(239,83,80 ,1)';
		closeBtn.style.background = 'rgba(239,83,80 ,1)';
		closeBtn.innerText = 'X';

		cloneModalBtn.id = 'cloneModalBtn';
		cloneModalBtn.style.padding = '7px 15px';
		cloneModalBtn.style.textAlign = 'center';
		cloneModalBtn.style.position = 'absolute';
		cloneModalBtn.style.left = '78%';
		cloneModalBtn.style.fontSize = '23px';
		cloneModalBtn.style.bottom = '57%';
		cloneModalBtn.style.color = 'rgba(55,71,79 ,1)';
		cloneModalBtn.style.borderColor = 'rgba(239,83,80 ,1)';
		cloneModalBtn.style.background = 'rgba(239,83,80 ,1)';
		cloneModalBtn.innerText = '+';

		document.body.appendChild(modalDomObj).appendChild(closeBtn);
		document.body.appendChild(modalDomObj).appendChild(cloneModalBtn);

		const closeBtnElem = document.getElementById('closeBtnElem');
		const modalElem = document.getElementById('myDiv');
		const cloneModalElem = document.getElementById('cloneModalBtn');

		function handleSubmitClose() {
			modalElem.parentNode.removeChild(modalDomObj);
		};

		function handleCloneModal() {
			document.body.appendChild(modalDomObj)
			console.log('CLONE => ',  new(document.body.appendChild(modalDomObj)))
			//разобраться почему не клонируется модальное окно ??????????
		};
		
		closeBtnElem.addEventListener('click', handleSubmitClose);
		cloneModalBtn.addEventListener('click', handleCloneModal);
}

function handleSubmitClose() {
	alert('You serios?');
}

submitPriceElem.addEventListener('click', handleSubmit)