import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../services/api/api";

const UserContext = createContext();

function UserContextProvider({ children }) {
	let [userInfo, setUserInfo] = useState({
		name: "",
		points: 0,
	});

	useEffect(() => {
		getUser(setUserInfo);
	}, []);

	return <UserContext.Provider value={[userInfo, setUserInfo]}>{children}</UserContext.Provider>;
}

export { UserContextProvider, UserContext };
