describe('Проверка покупки нового аватара', function () {                  // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {     // название теста
         cy.visit('https://pokemonbattle.ru/');                            // переходим на сайт https://pokemonbattle.ru/
         cy.get('#k_email').type('USER_LOGIN');                            // ввод логина
         cy.get('#k_password').type('USER_PASSWORD');                      // ввод пароля
         cy.get('.MuiButton-root').click();                                // нажимаем кнопку Войти
         cy.wait(2000);
         cy.get('.header_card_trainer').click();                           // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get(':nth-child(5) > #dropdown > img').click()                 // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();                    // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                  // вводим номер карты
         cy.get('.card_csv').type('125');                                  // вводим CVV карты
         cy.get('.card_date').type('1226');                                // вводим срок действия карты
         cy.get('.card_name').type('NAME');                                // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                          // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');       // проверка наличия и видимости сообщения об успешной покупке
     });
 }); 