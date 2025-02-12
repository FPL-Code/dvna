module.exports = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST || 'mysql-db',
  port: process.env.MYSQL_PORT || 3306,
  dialect: 'mysql'
}

module.exports = {
  "api_key": "12345-abcde-67890-fghij",
  "db_password": "password123",
  "access_token": "98765-xyz987-12345-abcde"
}
