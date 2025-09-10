const Sequelize = require('sequelize')
const sequelize = new Sequelize('bjg8i6itvanxkukj0rqz', 'u72outg0rwm0lkc1', '4CtDscEFTqoPUI0c7Eac', {
    host: 'bjg8i6itvanxkukj0rqz-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/*
const Sequelize = require('sequelize')
const sequelize = new Sequelize('bxyxdmusd4mtgb36bilx', 'uhvw4ng0skkdqq9o', 'PODUnHIELgarThOSPZnA', {
    host: 'bxyxdmusd4mtgb36bilx-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
*/