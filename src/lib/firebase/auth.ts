import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  NextOrObserver,
  User,
  onAuthStateChanged as _onAuthStateChanged,
  signInAnonymously as _signInAnonymously,
  signInWithPopup,
} from "firebase/auth";

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.error("Error signing in with Google", e);
  }
}

export async function signInAnonymously() {
  try {
    await _signInAnonymously(auth);
  } catch (e) {
    console.error("Error signing in anonymously", e);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (e) {
    console.error("Error signing out", e);
  }
}
