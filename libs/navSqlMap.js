const navSqlMap = {
    getNavList: 'SELECT * FROM nav',
    getEdit: 'select * from nav where id=?',
    setEdit: 'UPDATE nav SET navname=?,url=?,status=? WHERE id=?',
    delete: 'DELETE FROM nav WHERE id=?',
    addNav: 'INSERT INTO nav(navname,url,status) VALUES(?,?,?)'
};

module.exports = navSqlMap;
