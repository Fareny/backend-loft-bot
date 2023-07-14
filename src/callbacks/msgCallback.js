const checkUser = require("../dataBase/checkUser");
const { menu } = require("../settings/options");

module.exports = (bot) => {

    bot.on("message", (msg) => {
        const data = msg.text;
        const id = msg.chat.id;

        switch (data) {

            case '/start':
            case '/menu':
                bot.sendPhoto(id, 'https://home.ordercounter.com/wp-content/uploads/2020/10/Hybrid-pos-hybrid-pos-system.png', {
                    caption: 'Добро пожаловать в @barman_loft_bot',
                    reply_markup: menu
                });
                checkUser(id);
                break

        }


    })

}