export interface LoginResp {
    token: string;
    user: UserDetails;
  }
  
  interface UserDetails {
    email: string;
    authorities: Array<string>;
  }
  