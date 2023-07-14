module.exports = {
    menu: { //МЕНЮ ДЛЯ НОВИЧКОВ
        inline_keyboard: [

            [{ text: "Корзина", callback_data: "/cart" }, { text: "Заказать", web_app: { url: 'https://preeminent-palmier-29b4cd.netlify.app/' } }],
            [{ text: "Меню", callback_data: "/menuALC" }],
        ],
    },

    cartMenu: {
        inline_keyboard: [
            [{ text: "Убрать", callback_data: "/remove" }, { text: "Добавить", callback_data: "/add" }],
            [{ text: "Назад", callback_data: "/back" }],
        ],
    },

    back: {
        inline_keyboard: [
            [{ text: "Назад", callback_data: "/back" }],
        ],
    }
}