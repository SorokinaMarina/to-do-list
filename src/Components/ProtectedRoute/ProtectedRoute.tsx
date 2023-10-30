import React from "react";
import { Navigate } from 'react-router-dom';

interface ComponentType {
    [value: string]: any;
  }
  
interface ProtectedProps {
    element: React.ComponentType<ComponentType>;
    isLoggedIn: boolean;
}

function ProtectedRoute ({element: Component, ...props}: ProtectedProps): JSX.Element {
    return (
        props.isLoggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace />
    )
}

export default ProtectedRoute;