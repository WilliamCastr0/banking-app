export default interface User {
  firstName: string;
  lastName: string;
  email: string;
  accounts: Array<string>;
  role?: string;
}
