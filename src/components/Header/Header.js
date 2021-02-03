import React from 'react'
import firebase from 'firebase/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import 'firebase/auth'

export default function Header() {
  const [user, loading, error] = useAuthState(firebase.auth())
  console.log(user, loading, error)

  async function handleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }

  function handleLogout() {
    firebase.auth().signOut()
  }

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    <div>Authentication error!</div>
  }
  if (user) {
    return (
      <div>Welcome {user.displayName} ({user.email})
        <img src={user.photoURL} alt={user.name} />
        <button onClick={handleLogout}>logout</button>
      </div>
    )
  } 
  return <button onClick={handleLogin}>Login</button>
}