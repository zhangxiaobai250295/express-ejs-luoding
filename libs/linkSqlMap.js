const linkSqlMap = {
    getLinkList: 'SELECT * FROM link',
    getEdit: 'select * from link where id=?',
    setEdit: 'UPDATE link SET linkname=?,url=?,sort=?,`describe`=? WHERE id=?',
    delete: 'DELETE FROM link WHERE id=?',
    addLink: 'INSERT INTO link(linkname,url,sort,`describe`) VALUES(?,?,?,?)'
};

module.exports = linkSqlMap;
