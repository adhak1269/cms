const db = require('./db');

const rows = db.prepare('SELECT * FROM posts WHERE id = 3').all();
console.table(rows);

