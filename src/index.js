import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createStore from "./createStore";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const fbConfig = {
    apiKey: "AIzaSyBbuGbHWPYf1bzrLhqkq6A0SsiAGMpIaTI",
    authDomain: "todoapp-c4926.firebaseapp.com",
    databaseURL: "https://todoapp-c4926-default-rtdb.firebaseio.com",
    projectId: "todoapp-c4926",
    storageBucket: "todoapp-c4926.appspot.com",
    messagingSenderId: "1066033840410",
    appId: "1:1066033840410:web:691e1cd5edae78e50beca3"
};
 
try {
  firebase.initializeApp(fbConfig);
} catch (err) {}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = createStore();

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div style={styles}>
          <h1>Todo App using React Redux and Firebase Realtime Database </h1>
          <Todos />
          <NewTodo/>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
