// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_API_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const handleSignIn = async (result) => {
    const { uid, displayName, email, photoURL } = result.user;
    const idTokenResult = await result.user.getIdTokenResult();
    const accessToken = idTokenResult.token;

    const postData = {
        uid,
        nama: displayName,
        email,
        profilePic: photoURL,
    };

    localStorage.setItem('user', displayName);
    localStorage.setItem('email', email);
    localStorage.setItem('foto', photoURL);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('uid', uid);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/member/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });


        if (!response.ok) {
            throw new Error('Failed to send user data to the server');
        } else {
            window.location.reload();
            const responseData = await response.json();
            console.log('Server response:', responseData);
        }
    } catch (error) {
        console.error('Error during data submission:', error);
    }
};

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(handleSignIn)
        .then(() => {
            toast.success('Sign-in with Google successful');
        })
        .catch((error) => {
            console.error('Error during Google sign-in:', error);
        });
};

// export const signOutUser = () => {
//     try {
//         signOut(auth)
//             .then(() => {
//                 // Clear local storage or do any other cleanup as needed
//                 localStorage.removeItem('nama');
//                 localStorage.removeItem('email');
//                 localStorage.removeItem('Foto');
//                 localStorage.removeItem('accessToken');
//                 localStorage.removeItem('uid');

//                 // You can redirect or update the UI as needed
//                 // For example, you can redirect to the login page
//                 window.location.replace('/');
//             })
//             .catch((error) => {
//                 console.error('Error during sign-out:', error);
//             });
//     } catch (error) {
//         console.error('Error during sign-out:', error);
//     }
// };