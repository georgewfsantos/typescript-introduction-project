
interface techObject {
  title: string,
  experience: number
}

interface createUserData {
  name?: string;  // the "?" means it's an optional parameter
  email: string;
  password: string;
  techs: Array<string | techObject>;
} 

export default function createUser({ name, email, password }: createUserData){
  const user = {
    name, 
    email,
    password
  }

  return user;
}