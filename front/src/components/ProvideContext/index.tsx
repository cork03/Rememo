import { Route, Redirect } from 'react-router-dom'
import React from 'react'

export const AuthenticatedPage = ({children, user, ...rest} :any) => {
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}


