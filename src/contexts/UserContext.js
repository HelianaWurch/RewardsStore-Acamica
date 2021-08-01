import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../services/api/api";

const UserContext = createContext();

function UserContextProvider({ children }) {
	const [isLoading, setLoading] = useState(true);
	let [userInfo, setUserInfo] = useState({
		name: "",
		points: 0,
	});

	let userCoins = userInfo.points;

	useEffect(() => {
		setLoading(true);
		getUser(setUserInfo);
	}, [userInfo]);

	return (
		<UserContext.Provider value={[isLoading, userInfo, setUserInfo, userCoins]}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContextProvider, UserContext };
