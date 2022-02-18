
export const  InsertUser = (name, email, password, height) => {

    const query = `INSERT INTO Users (name, email, password, height)
     VALUES ('${name}', '${email}', '${password}', '${height}')`;
  return query;    
}

