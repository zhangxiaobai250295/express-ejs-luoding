const courseSqlMap = {
    getCourseList: 'SELECT * FROM course',
    getEdit: 'select * from course where id=?',
    setEdit: 'UPDATE course SET coursename=?,url=?,category=?,number=?,status=? WHERE id=?',
    delete: 'DELETE FROM course WHERE id=?',
    addCourse: 'INSERT INTO course(coursename,url,category,number,status) VALUES(?,?,?,?,?)'
};

module.exports = courseSqlMap;
