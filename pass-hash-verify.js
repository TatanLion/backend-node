const bcrypt = require('bcrypt')

async function hashPassword(){
    const password = 'admin123';
    const hash = '$2b$10$F8ZHwmWGiL9ECU.6ykuvCeYoJZcFeZP1j0lxylHMJEx04av/M3OFy';
    const isMatch = await bcrypt.compare(password, hash);
    console.log(isMatch);
}

hashPassword()