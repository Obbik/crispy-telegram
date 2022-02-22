
export const LOGIN_MUTATION = (name, password, email) => `mutation  {
    Login (name: "${name}", password: "${password}", email: "${email}"){
      name,
      token,
    }
  }`;