const userSplMap = {
    getByEmail: 'select * from user where email=?',
    register: 'INSERT INTO user(email,password,create_time) VALUES(?,?,now())',
    login: 'select * from user where email=? AND password=?',
    getUserList: 'SELECT id,email,username,status,role,create_time FROM user',
    setUserAdd: 'INSERT INTO user(username,email,password,role,status,create_time) VALUES(?,?,?,?,?,now())',
    getUserEdit: 'select * from user where id=?',
    getEditSave: 'UPDATE user SET username=?,email=?,role=?,status=? WHERE id=?',
    delete: 'DELETE FROM user WHERE id=?'
};

module.exports = userSplMap;
