/**
 * Created by WG on 2015/10/15.
 * dao/userSqlMapping.js
 * CRUD SQLÓï¾ä
 */

var user = {
    insert:'INSERT INTO user(id,name,age) VALUES(0,?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};
module.exports = user;


