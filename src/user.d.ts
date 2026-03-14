export interface IUserParams {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

declare global {
  namespace Express {
    export interface Request {
      user?: IUserParams;
    }
  }
}
