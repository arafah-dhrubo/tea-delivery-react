import React, { useEffect, useState } from 'react'
import firebaseInitializer  from '../Firebase/FirebaseInit'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { useHistory } from 'react-router'
const useFirebase = () => {
  const history = useHistory();
  firebaseInitializer()
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth()
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then(result => setUser(result.user))
      .catch(error => error.message)
      .finally(() => setIsLoading(false));
  }

  const handleCreateUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result)
        setUserName(name)
      })
      .catch(error => error.message)
    history.push('/login')
  }

  const setUserName = name => {
    updateProfile(auth.currentUser, { displayName: name }).then(result => {})
  }

  const handleSignInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    //   .then(result => {
    //     setUser(result.user)
    //   })
    //   .catch(error => error.message)
  }

  const handleSignOut = () => signOut(auth).then(() => setUser({}))

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      setIsLoading(false);
    })
  })

  return {
    setUser,
    user,
    isLoading,
    handleGoogleSignIn,
    handleSignOut,
    handleCreateUser,
    handleSignInUser
  }
}

export default useFirebase
