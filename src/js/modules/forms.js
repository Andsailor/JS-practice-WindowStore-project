const forms = (state) => {
    const forms = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          integersOnly = document.querySelectorAll('[integers]');

    const message = {
        loading: 'assets/img/200.gif',
        error: 'Произошла ошибка',
        done: 'Спасибо за заявку, ожидайте обратной связи!'
    };

    integersOnly.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = `<img src=${message.loading} alt="spinner">`;
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        }); 
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

             const formData = new FormData(item);

             if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
             }

             postData('assets/server.php', formData)
             .then(result => {
                console.log(result);
                statusMessage.textContent = message.done;
             })
             .catch(() => {
                statusMessage.textContent = message.error;
             })
             .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
             });
             
        });
    });


};

export default forms;
