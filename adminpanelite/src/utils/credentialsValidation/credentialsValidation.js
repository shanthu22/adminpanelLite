import { apiUserLogin } from "../api/Api";

export const CredentialsValidation = async ({ credentials, login, logout }) => {
  console.log("credentialsValidation is called ++++++ ");
  console.log(credentials);

  let result = await apiUserLogin(credentials);

  if (result[0]) {
    console.log(result[1]);
    localStorage.setItem("token", result[1]);

    login(); //Setting the
    return true;
  } else {
    logout();
    return false;
  }
};
