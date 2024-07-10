import React from 'react'

const ReactMemo = ({name}) => {
    console.log("React memo componenent");
    return (
        <div>
            {name}
        </div>
    )
}

// this is higher order componenent as it takes another component and optimize it 
// it is same as in class based component called PURE COMPONENT
export default React.memo(ReactMemo)
