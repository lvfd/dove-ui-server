const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

const DB_CONFIG = {
  user: 'epaysch',
  password: 'epaysch',
  connectString: '(DESCRIPTION_LIST=(LOAD_BALANCE=off)(FAILOVER=on)(DESCRIPTION=(ADDRESS_LIST=(LOAD_BALANCE=on)(FAILOVER=on)(ADDRESS=(PROTOCOL=TCP)(HOST=10.1.85.166)(PORT=1521))(ADDRESS=(PROTOCOL=TCP)(HOST=10.1.85.167)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=epaydb))))'
}

async function run() {
  let connection
  try {
    connection = await oracledb.getConnection(DB_CONFIG)
    const result = await connection.execute(`
      SELECT * from TDATADIC
      `)
    console.log(result.rows)
  } catch(err) {
    console.error(err)
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch(err) {
        console.error(err)
      }
    }
  }
}

run()