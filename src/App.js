import React from 'react'

import './App.css'
import Comments from './Comments'
import UserInfo from './UserInfo'
import NewComment from './NewComment'
import CreateUser from './CreateUser'
import SignInUser from './SignInUser'
import  { AuthProvider } from './auth'



function App() {
  
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <SignInUser />
        <UserInfo />
      </div>
    </AuthProvider>
  )
}

export default App
