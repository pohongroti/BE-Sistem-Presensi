// meload module mysql
const mysql=require('mysql');
// Inisialisai pool-kolam
const connectionKeKolam=mysql.createPool({
    connectionLimit: 999,
    host:'localhost',
    user:'root',
    password:'',
    database:'presensi',
    debug:false
});

module.exports=connectionKeKolam;