import React from "react";

const Greet = () => {
    // return <div>
    //     <h1>Hello, Rizwan</h1>
    // </div>

    return React.createElement("div", {className: "container", id: "firstApp"}, 
        React.createElement("h1", null, "Hello Rizwan")
    )
};

export default Greet