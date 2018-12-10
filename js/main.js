jQuery(document).ready(function($) {

    // Добавляем маску для поля с номера телефона
    $('#example-tel-input').mask('+38 (000) 000-00-00');



    // Отправляет данные из формы на сервер и получает ответ
    $('#contactForm').on('submit', function(event) {
        
        

        var form = $('#contactForm'),
            button = $('#button'),
            firstName = $('#firstName'),
            lastName = $('#lastName'),
            phone = $('#example-tel-input');
        

                let data = form.serializeArray();
                let body=`<span>
                    Имя: ${data[0].value}<br>
                    Фамилия: ${data[1].value}<br>
                    Телефон: ${data[2].value}
                    
                    </span>`;
                    debugger
                Email.send({
                    Host : 'smtp.gmail.com',
                    Username : "buyhomeonline1@gmail.com",
                    Password : "qwertY123!",
                    To : 'buyhomeonline1@gmail.com',
                    From : "buyhomeonline1@gmail.com",
                    Subject : "Letter from site",
                    Body : body //any string data here (html also)
                }).then(
                    (message) => {debugger},
                  (message) => {debugger}
                );
    
       
    
        event.preventDefault();
                    return false;
    });

});





























    