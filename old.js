import React from 'react';
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Hooks
import { useAuthState } from './hooks';
// Components
import Channel from './components/Channel';
import Loader from './components/Loader';

firebase.initializeApp({
apiKey: "AIzaSyAnzsdTcWA5LO3sSY7iBi00AkCVO61VIqM",
authDomain: "forex-chat-fee00.firebaseapp.com",
databaseURL: "https://forex-chat-fee00-default-rtdb.firebaseio.com",
projectId: "forex-chat-fee00",
storageBucket: "forex-chat-fee00.appspot.com",
messagingSenderId: "849151649848",
appId: "1:849151649848:web:a25a52e63a6cc567935ecd",
measurementId: "G-366466W4EV"
});

function App() {
  const { user, initializing } = useAuthState(firebase.auth());

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full">
          <Loader size="lg" />
        </div>
      );
    }

    if (user) return <Channel user={user} />;

    return (
      <div className="flex items-center justify-center shadow-md h-full">
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-coolDark-600 transition-all">
          <h2 className="mb-2 text-3xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 w-12 h-12 mr-1 text-primary-500"
            >
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            Forex
          </h2>
          <p className="mb-8 text-lg text-center">
            The easiest way to chat with people all around the world.
          </p>
          <button
            onClick={signInWithGoogle}
            className="rounded shadow-button pl-6 pr-8 py-3 bg-coolDark-600 text-gray-600 font-medium flex items-center justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75"
          >
            <svg
              viewBox="5 -5 30 30"
              enableBackground="new 5 -5 30 30"
              className="w-6 h-6 mr-4 flex-shrink-0"
            >
              <path
                fill="#000000"
                d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"
              ></path>
              <path
                fill="#EA4335"
                d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"
              ></path>
              <path
                fill="#4285F4"
                d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"
              ></path>
              <path
                fill="#34A853"
                d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
    <div className="hi">
      <div className="flex flex-col h-full bg-coolDark-500 text-white transition-colors">
        <header
          className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md"
          style={{ height: 'var(--topbar-height)' }}
        >
          <a href="index.html">
            <img src={"public\images\favricon.png"} alt="Forex" width={150} />
          </a>
          <div className="flex items-center">
            {user ? (
              <button
                onClick={signOut}
                className="uppercase text-sm font-medium text-primary-500 hover:text-white tracking-wide bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 transition-all"
              >
                Sign out
              </button>
            ) : null}
          </div>
        </header>
        <main
          className="flex-1"
          style={{ maxHeight: 'calc(100% - var(--topbar-height))' }}
        >
          {renderContent()}
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
