/* Вам необхідно написати функцію, яка приймає на вхід масив об'єктів,
 де кожен об'єкт описує сповіщення та має поля source / text / date. 
 Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення,
  а значенням - масив сповіщень із цього джерела.
*/
const notifications = [
  { source: 'email', text: 'Привіт', date: '2024-07-21' },
  { source: 'sms', text: 'Я пропустила 1 заняття', date: '2024-07-22' },
  { source: 'email', text: 'Чи можна перескласти іспит?', date: '2024-07-22' },
  { source: 'push', text: 'Замовлення доставлено', date: '2024-07-20' },
  { source: 'sms', text: 'Чи складна домашка?', date: '2024-07-23' }
];
const groupBySource = (arr) => {
  return arr.reduce((acc, notification) => {
    const { source, text, date } = notification;
    if (!acc[source]) {
      acc[source] = [];
    }
      acc[source].push({ text, date });
      return acc;
    }, {});
  };

  const groupedNotifications = groupBySource(notifications);

console.log(groupedNotifications);
