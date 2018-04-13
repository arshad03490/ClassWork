

	let users = ['Ali', 'Jhon', 'Doe'];
	let ul = document.querySelector('ul');

	let app = {
		render : () => {
			ul.innerHTML = "";
			users.map((item, index) => {
				if (app.search_text) {
					if (item.toLowerCase() == app.search_text.toLowerCase()) {
						let currentUser = document.createElement('li');
						currentUser.innerHTML = item;
						ul.appendChild(currentUser);
					}
				}else{
					let currentUser = document.createElement('li');
					currentUser.innerHTML = item;
					ul.appendChild(currentUser);
				}

			});
		},
		search_text : "",
		handleChange(e) {
			app.search_text = e.target.value;
			this.render()
		},
		mounted : () => {
			app.render();
		},
	}
	app.mounted(); 