//puerto
process.env.PORT = process.env.PORT || 3000;
//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//DB
let db;
if (process.env.NODE_ENV === 'dev') {
    db = 'mongodb://localhost:27017/cafe';
} else {
    db = 'mongodb+srv://edgar:GDzNRouv0NUXBAQv@cluster0-aezhv.mongodb.net/cafe';
}

process.env.URLDB = db;