const cart = require("../components/cart");
const sliderMenu = require("../components/sliderMenu");
const { menu } = require("../settings/options");

module.exports = (bot) => {

    bot.on("callback_query", (msg) => {
        const data = msg.data;
        const id = msg.from.id;
        const msgId = msg.message.message_id;

        switch (data) {
            case "/cart":
                cart(bot, msg);
                break;
            case "/order":

                break
            case "/menuALC":
                sliderMenu(bot, id)
                break
            case "/back":
                bot.sendPhoto(id, 'https://home.ordercounter.com/wp-content/uploads/2020/10/Hybrid-pos-hybrid-pos-system.png', {
                    caption: 'Добро пожаловать в @barman_loft_bot',
                    reply_markup: menu
                });
                break
        }
    })

}