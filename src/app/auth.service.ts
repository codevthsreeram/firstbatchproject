import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  public isAuthenticated: boolean = false;
  public isAdmin: boolean = false
  private readonly mockUserCredentials: SignInData = {
    userName: 'Sreeram@gmail.com',
    password: 'Test123'
  };
  private readonly mockAdminCredentials: SignInData = {
    userName: 'Admin@gmail.com',
    password: 'Test1234'
  };
  authenticate(signIndata: SignInData) {
    if (signIndata.userName === this.mockUserCredentials.userName && signIndata.password === this.mockUserCredentials.password) {
      this.isAdmin = false;
      this.isAuthenticated = true;
      return true;
    }
    else if (signIndata.userName === this.mockAdminCredentials.userName && signIndata.password === this.mockAdminCredentials.password) {
      this.isAdmin = true;
      this.isAuthenticated = true;
      return true;
    }
    else {
      this.isAuthenticated = false;
      return false;
    }
  }
}
