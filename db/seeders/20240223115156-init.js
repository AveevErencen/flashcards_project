/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Decks',
      [
        {
          Topic: 'Сказки и мультфильмы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          Question: 'Как вызвать джина из лампы?',
          Answer: 'Потереть её',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'На каких ножках стояла избушка Бабы Яги?',
          Answer: 'На курьих ножках',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'Как звали мальчика из дерева?',
          Answer: 'Буратино',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'Какой герой катался на печке?',
          Answer: 'Емеля',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'Как зовут пушистого необычного персонажа с большими ушами?',
          Answer: 'Чебурашка',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'От кого убежала посуда?',
          Answer: 'От Федоры',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'Вспомните, кем стал гадкий утёнок?',
          Answer: 'Лебедем',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'Кто любил играть на гармошке?',
          Answer: 'Крокодил Гена',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'Они всегда придут на помощь!',
          Answer: 'Чип и Дейл',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Question: 'Какая фамилия у почтальона, который работал в Простоквашино?',
          Answer: 'Печкин',
          Deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decks', null, {});
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
