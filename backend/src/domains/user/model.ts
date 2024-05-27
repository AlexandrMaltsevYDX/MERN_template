// db
export interface MUser {
  userId?: number;
  userName?: string;
  password?: string;
}

export class UserModel implements MUser {
  userId?: number;
  userName?: string;
  password?: string;
  constructor(userId?: number, userName?: string, password?: string) {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
  }
}
