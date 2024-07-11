import React from 'react'
import { createPortal } from 'react-dom'

const PortalDemo = () => {
    // so here it will incluce this div in portal-root div in index.html
    // used when we have to render content in some other tag / tree
    return createPortal(
        <div>
            <h1>Hello World</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
