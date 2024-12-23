import React, {StrictMode, useState} from 'react';

export default ({message, type = "information", closable = true, children}: {
    message: string,
    type?: string,
    closable: boolean
    children?: React.ReactNode,
}) => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
        return null;
    }
    const handleCloseClick = () => {
        setVisible(false);
    }
    return (
        <div>
            {closable && (
                <button onClick={handleCloseClick}><span>❌</span></button>
            )}
            <div>
                <div>⚠{type}</div>
                <div>{message}</div>
            </div>
            {children}
        </div>
    );
}

