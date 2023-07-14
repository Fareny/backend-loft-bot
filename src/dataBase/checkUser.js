const Users = require("../model/Users");
module.exports = async (id, {
    userName = '',
    shoppingСart = '',
    money = 0
} = {}) => {

    const userBD = await Users.findOne({ id });

    if (!userBD) {
        const newUser = new Users({
            id: id,
            userName: userName,
            shoppingСart: shoppingСart,
            money: money
        });
        await newUser.save();
    }
};