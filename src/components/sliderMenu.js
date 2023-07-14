const { back } = require("../settings/options");

module.exports = (bot, chatId) => {
    // https://2static.fjcdn.com/pictures/Kancolle_3746cb_6034542.jpg
    bot.sendPhoto(chatId, 'https://wallpapers.com/images/hd/chalkboard-with-wine-bottles-art-zbbl2sh4frwmitta.jpg', {
        reply_markup: back,
        parse_mode: 'Markdown',
        caption: `
Меню нашего бара 🍷: 

*без алкоголя:*

• Кола без сахара (30 рублей)
• Кола без сахара (30 рублей)
• Кола без сахара (30 рублей)
• Кола без сахара (30 рублей)
• Кола без сахара (30 рублей)
• Кола без сахара (30 рублей)

*Слабо алкогольные:*

• Вино белое (30 рублей)
• Вино белое (30 рублей)
• Вино белое (30 рублей)
• Вино белое (30 рублей)
• Вино белое (30 рублей)

*Сильно алкогольные:*

• Водка (30 рублей)
• Водка (30 рублей)
• Водка (30 рублей)
• Водка (30 рублей)
• Водка (30 рублей)
• Водка (30 рублей)
`
    });
}