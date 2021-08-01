const API_URL = "https://coding-challenge-api.aerolab.co";

let myHeaders = new Headers();
myHeaders.append(
	"Authorization",
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZjYzFhZDY3Mjk2ZTAwMTk5NjQxNDciLCJpYXQiOjE2MjcxNzczODl9.sTKwPPE9L3wOLCj5iKqBePgLCSbtqhUcHP7JZNdN7h4"
);
myHeaders.append("Content-Type", "application/json");

//---------------------------------------------USER-----------------------------------------------

export function getUser(fn) {
	let requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(`${API_URL}/user/me`, requestOptions)
		.then((response) => response.json())
		.then((json) => {
			fn(json);
		})
		.catch((err) => console.log(err));
}

// -----------------------------------------PRODUCTS-----------------------------------------------

export function getProducts(fn) {
	let requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(`${API_URL}/products`, requestOptions)
		.then((response) => response.json())
		.then((json) => {
			fn(json);
		})
		.catch((err) => console.log(err));
}

// -------------------------------------REDEEM PRODUCTS--------------------------------------------

export function getReedemProducts(productId, fn) {
	let redeem = JSON.stringify({ productId: productId });
	console.log(redeem);

	let requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: redeem,
		redirect: "follow",
	};

	fetch(`${API_URL}/redeem`, requestOptions)
		.then((response) => response.json())
		.then((json) => {
			// fn(json);
			return true;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
}

// -----------------------------------------HISTORY------------------------------------------------

export function getHistory(setRedeemProducts) {
	let requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(`${API_URL}/user/history`, requestOptions)
		.then((response) => response.json())
		.then((json) => setRedeemProducts(json))
		.catch((err) => console.log(err));
}

// ------------------------------------------POINTS------------------------------------------------

export function postCoins(amount, userInfo, setUserInfo) {
	let coins = JSON.stringify({ amount: amount });

	let requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: coins,
		redirect: "follow",
	};

	fetch(`${API_URL}/user/points`, requestOptions)
		.then((response) => response.json())
		.then((json) => {
			const newCoinsState = { ...userInfo };
			newCoinsState.points = json["New Points"];
			setUserInfo(newCoinsState);
			setUserInfo(json);
		})
		.catch((err) => console.log(err));
}
