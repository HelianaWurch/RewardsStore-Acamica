const API_URL = "https://coding-challenge-api.aerolab.co";

let myHeaders = new Headers();
myHeaders.append(
	"Authorization",
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjYzFhZDY3Mjk2ZTAwMTk5NjQxNDciLCJpYXQiOjE2MjcxNzczODl9.sTKwPPE9L3wOLCj5iKqBePgLCSbtqhUcHP7JZNdN7h4"
);
myHeaders.append("Content-Type", "application/json");

//---------------------------------------------USER-----------------------------------------------

export function getUser() {
	let requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(`${API_URL}/user/me`, requestOptions)
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((err) => console.log(err));
}

// -----------------------------------------PRODUCTS-----------------------------------------------

export function getProducts(setProd) {
	let requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(`${API_URL}/products`, requestOptions)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			setProd(json);
		})
		.catch((err) => console.log(err));
}

// -----------------------------------------HISTORY------------------------------------------------

export function getHistory() {
	let requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(`${API_URL}/user/history`, requestOptions)
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((err) => console.log(err));
}
