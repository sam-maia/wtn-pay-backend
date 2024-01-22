const Sequelize = require('sequelize')
const sequelize = new Sequelize('bxyxdmusd4mtgb36bilx', 'uhvw4ng0skkdqq9o', 'PODUnHIELgarThOSPZnA', {
    host: 'bxyxdmusd4mtgb36bilx-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}