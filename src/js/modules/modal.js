const modal = () => {  
    function modalWindow(selector, trigger, closeTrigger, closeClickOverlay = true) {
        const modal = document.querySelector(selector),
              open = document.querySelectorAll(trigger),
              close = document.querySelector(closeTrigger),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        open.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = scroll + 'px';
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = 0 + 'px';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = 0 + 'px';
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout( function() {
            document.querySelector(selector).style.display = 'block';
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }

    modalWindow('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    modalWindow('.popup', '.phone_link', '.popup .popup_close');
    modalWindow('.popup_calc', '.glazing_price_btn', '.popup_calc_close');
    modalWindow('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    modalWindow('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);

    showModalByTime('.popup_engineer', 3000);
 
}; 

export default modal;



