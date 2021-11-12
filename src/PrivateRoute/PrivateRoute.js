import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div class="spinner-border" role="status">
      <span class="visually-hidden text-center">Loading...</span>
    </div>
}
  return (
    <Route
      {...rest}
      render = {({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          ></Redirect>
        )
      }>
    </Route>
  )
}

export default PrivateRoute
