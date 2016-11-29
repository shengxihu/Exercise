var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*******',
    database:'sys',
    port: 3306
});
conn.connect();
conn.query('SELECT * FROM t_user WHERE id = 1', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
});
conn.end();
