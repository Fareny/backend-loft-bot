const Users = require("../model/Users");
const { back, cartMenu } = require("../settings/options");

module.exports = async (bot, msg) => {
    const id = msg.from.id;

    const user = await Users.findOne({ id: id });

    bot.sendPhoto(id, 'https://рндтува.рф/wp-content/uploads/2023/01/1657423937_16-flomaster-club-p-butilka-alkogolya-risunok-krasivo-22-e1674461754641.jpg', {
        caption: `
*Ваша корзина:*

${user.shoppingСart.map(item => '• ' + item).join('\n')}

Сумма: ${user.money} рублей`,
        parse_mode: 'Markdown',
        reply_markup: cartMenu
    });
} 