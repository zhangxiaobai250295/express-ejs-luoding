const userSplMap = {
    getByEmail: 'select * from user where email=?',
    register: 'INSERT INTO user(email,password,create_time) VALUES(?,?,now())',
    login: 'select * from user where email=? AND password=?'
};

module.exports = userSplMap;
