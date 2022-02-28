export const REGISTER_MUTATION = (name, email, password, height) => `mutation  {
                  createUser (name: "${name}", email: "${email}", password: "${password}", height: "${height}"){
                    name,
                    token
                  }
                }`;
