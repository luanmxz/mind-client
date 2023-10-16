const handleSubmit = (e: any) => {
	console.log(e);
	const email = e.target.elements[0].value;
	const password = e.target.elements[1].value;
	e.preventDefault();
	fetch('http://localhost:3333/auth/signIn', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});
};

export default handleSubmit;
