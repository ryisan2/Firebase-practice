import React from "react";
import { setDefaultEventParameters } from "firebase/analytics";
import "./App.css";
import {getAuthapp} from "./firebase/init";
import { auth } from "./firebase/init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { set } from "firebase/database";

// function App() {
//   function register() {
//     console.log("Registering");
//     createUserWithEmailAndPassword(auth, "email@email.com", "test1234")
//       .then((user) => {
//         // Signed up
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   function login() {
//     console.log("Logging in");
//     signInWithEmailAndPassword(auth, "email@email.com", "test1234")
//       .then((user) => {
//         // Signed in
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }

//   function logout() {
//     console.log("Logging out");
//     signOut(auth)
//   }

//   return (
//     <div className="App">
//       <button className="nice_btn" onClick={register}>
//         Register
//       </button>
//       <button className="nice_btn" onClick={login}>
//         Login
//       </button>
//       <button className="nice_btn" onClick={logout}>
//         Logout
//       </button>
//     </div>
//   );
// }


function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => { 
     onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        // User is signed in
        setUser(user);
      }
      })
  } ,[]);// This is a hook that runs when the component mounts
  function register() {
    console.log("Registering");
    createUserWithEmailAndPassword(auth, "email@email.com", "test1234")
      .then((user) => {
        // Signed up
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    console.log("Logging in");
    signInWithEmailAndPassword(auth, "email@email.com", "test1234")
      .then(({ user }) => {
        // Signed in
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    console.log("Logging out");
    signOut(auth);
    setUser({}); // Reset the user state
  }

  // The code above is all hard-coded, but you can easily modify it to accept user input.

  const welcome = user.email ? 
      <div className="email_shw">
        ( {user.email} logged in ,welcome)
        {/* // Display the user's email */}
      </div>
     :  <div className="email_shw">
     ( logged out)
   </div>;

  return (
    <div className="App">
      <button className="nice_btn" onClick={register}>
        Register
      </button>
      <button className="nice_btn" onClick={login}>
        Login
      </button>
      <button className="nice_btn" onClick={logout}>
        Logout
      </button>
      {welcome}
      {loading ?'loading...': user.email}
    </div>
  );
}

export default App;
