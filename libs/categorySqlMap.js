const categorySqlMap = {
    getCategoryList: 'SELECT * FROM category',
    getCategoryEdit: 'select * from category where id=?',
    setEdit: 'UPDATE category SET categoryname=?,sort=?,`status`=?,imgurl=?,`describe`=? WHERE id=?',
    delete: 'DELETE FROM category WHERE id=?',
    addCategory: 'INSERT INTO category(categoryname,sort,`status`,imgurl,`describe`) VALUES(?,?,?,?,?)'
};

module.exports = categorySqlMap;
