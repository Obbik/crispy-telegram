
export const  InsertUser = (name, email, password, height) => {

    const query = 
    `INSERT INTO Users (name, email, password, height)
     VALUES ('${name}', '${email}', '${password}', '${height}');`;
  return query;    
}

export const LoginUser = (name,  email) => {
    const query = `SELECT * FROM Users WHERE email = '${email}' AND name = '${name}'`;
  return query;    
}
