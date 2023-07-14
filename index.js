const telegramApi = require("node-telegram-bot-api");
const config = require("./config.json");
const token = config.token;
const bot = new telegramApi(token, { polling: true });

const express = require('express');
const cors = require('cors');

const port = 8000;
const app = express();
app.use(express.json())
app.use(cors())

const start = () => {
    require('./src/dataBase/connect')();
    require('./src/callbacks/msgCallback')(bot);
    require('./src/callbacks/btnCallback')(bot);
};

app.post('/web-data', async (req, res) => {
    const { queryId, products, totalPrice } = req.body
    try {
        await bot.answerWebAppQuery(queryId, {
            type: 'article',
            id: queryId,
            title: 'Успешная покупка!'
        });
        return res.sendStatus(200).json({});;
    } catch (e) {
        await bot.answerWebAppQuery(queryId, {
            type: 'article',
            id: queryId,
            title: 'Не удалось завершить покупку!'
        });
        return res.sendStatus(500).json({});
    }
})

app.listen(port, () => console.log(`Запущен на порте ${port}!`))
start();