import React from "react";
import { Route , Redirect } from 'react-router-dom';

const NotAuthRedirect = ({ path , component: Component , isAuth , props}) => {
    return <Route 
        path={path}
        render={
            routerProps => {
                if(isAuth){
                    return <Component {...props} {...routerProps} />
                }

                return <Redirect to="/login" />
            }
        }
    />
}

export default NotAuthRedirect;