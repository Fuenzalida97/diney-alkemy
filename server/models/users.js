module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING
        },
        email: {
            type: type.STRING
        },
        password: {
            type: type.STRING
        },
    });
}