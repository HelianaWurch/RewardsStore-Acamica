import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../services/api/api";

const UserContext = createContext();

function UserContextProvider({ children }) {
	const [isLoading, setLoading] = useState(true);
	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		setLoading(true);
		getUser(setUserInfo);
	}, []);

	return <UserContext.Provider value={[isLoading, userInfo]}>{children}</UserContext.Provider>;
}

export { UserContextProvider, UserContext };
