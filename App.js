import { StatusBar } from 'expo-status-bar';
import React, {useRef,useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Components
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Home } from './components/Home';
//firebase
import { firebaseConfig } from './Config';
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth'

initializeApp ( firebaseConfig )



const Stack = createNativeStackNavigator();

export default function App() {

  const [ auth, setAuth ]= useState()
  const [ user, setUser ]= useState()
  const FBauth= getAuth()
  const [signupError, setSignupError ] = useState()
  const [signinError, setSigninError ] = useState()

  useEffect(() => {
    onAuthStateChanged( FBauth,(user) =>{
      if ( user ) {
        setAuth(true)
        setUser(user)
      }else{
        setAuth(false)
        setUser(null)
      }
    })
  })

  const SignupHandler = ( email , password ) => {
    setSignupError(null)
    createUserWithEmailAndPassword( FBauth , email, password )
    .then(  (userCredential) => { 
      console.log( userCredential)
      setUser( userCredential )
      setAuth(true) 
    } )
    .catch( (error) => { setSignupError( error.code) } )

  }

  const SigninHandler =(email, password)=>{
    signInWithEmailAndPassword( FBauth, email,password)
    .then ( ( userCredential )  => {
      setUser( userCredential )
      setAuth(true)
    })
    .catch( ( error ) => { setSigninError( error.code ) })
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      
       <Stack.Screen name="Signup" options={{title: 'Sign Up' } }>
          {( props ) => 
          <Signup {...props} 
          handler={SignupHandler} 
          auth={auth} 
          error={signupError} /> }
        </Stack.Screen>

        <Stack.Screen 
          name="Signin" 
          options={{
            title:'Sing In'
          }}
        >
        { (props) => 
        <Signin {...props} 
        auth={auth} 
        error={signinError}
        handler={SigninHandler} 
        /> }
        </Stack.Screen>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'Home'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
