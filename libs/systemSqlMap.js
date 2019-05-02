const systemSqlMap = {
    getSystemList: 'SELECT * FROM system',
    setEdit: 'UPDATE system SET title=?,subheading=?,`describe`=?,logo=?,adminEmail=?,wechatLogo=?,copyright=?,info=? WHERE id=?'
};

module.exports = systemSqlMap;
