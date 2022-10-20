export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthorizationInfo {
  user: User;
  access_token: string;
  refresh_token: string;
}
