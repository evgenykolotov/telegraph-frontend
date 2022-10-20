import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';

interface AuthStateModel {
  one: string;
}

const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth');
const AUTH_INITIAL_STATE: AuthStateModel = {
  one: 'fsdfs',
};

@State({
  name: AUTH_STATE_TOKEN,
  defaults: AUTH_INITIAL_STATE,
})
@Injectable()
export class AuthState { }
