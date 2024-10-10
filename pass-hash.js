const bcrypt = require('bcrypt')

async function hashPassword(){
    const password = 'admin123';
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
}

hashPassword()