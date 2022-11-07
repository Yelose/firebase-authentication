import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) {}

  login(username: any, password: any) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  register(username: any, password: any) {
    return from(createUserWithEmailAndPassword(this.auth, username, password));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
