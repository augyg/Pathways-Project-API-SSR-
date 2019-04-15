const path = require('path');
const login = (email, password) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, './data/accounts.json'), (err, data) => {
      if(!err) {
        let accountData = JSON.parse(data);
        accountData.forEach(a => {
          if(a.email === email && a.password === password) {
            resolve({token: a.token});
          }
        });      
      } 
      reject(err);
    });
  });
}

module.exports = { login }