import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtUL2os-wVB91itBsnBKzpvu-3C6tc8W8",
  authDomain: "drone-gallery-jacenl.firebaseapp.com",
  projectId: "drone-gallery-jacenl",
  storageBucket: "drone-gallery-jacenl.appspot.com",
  messagingSenderId: "506863640260",
  appId: "1:506863640260:web:9f385122fd363b226e3391",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };