import React from "react";

const UserContext = React.createContext({
    name: "Rizwan",
    age: 21
});

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider }
export default UserContext