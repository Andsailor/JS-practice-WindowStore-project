const tabs = () => {

    function tabsStatusChange(tabSelector, tabContentSelector, activeClass, display, tabContentImg) {
      const  trigger = document.querySelectorAll(tabSelector),
             tabContent = document.querySelectorAll(tabContentSelector),
             tabImgTrigger = document.querySelectorAll(tabContentImg);
     
             tabContent[0].style.display = display;
             trigger[0].classList.add(activeClass);

             function changeTrigger(i) {
                trigger.forEach(item => {
                    item.classList.remove(activeClass);
                    trigger[i].classList.add(activeClass);
                });
            }

            function changeTabContent(i) {
                tabContent.forEach(item => {
                        item.style.display = 'none';
                        tabContent[i].style.display = display;
                        tabContent[i].classList.add('faded');
                    });
            }

            tabImgTrigger.forEach((item, i) => {
                item.addEventListener('click', () => {
                    changeTrigger(i);
                    changeTabContent(i);               
                });
            });

             trigger.forEach((item, i) => {
                item.addEventListener('click', () => {
                    changeTrigger(i);
                    changeTabContent(i);     
        });
      });
    }
    
    tabsStatusChange('.glazing_slider a', '.glazing_content', 'active', 'block', '.glazing_block > img');    
    tabsStatusChange('.no_click', '.decoration_content >div >div', 'after_click', 'block');    
    tabsStatusChange('.balcon_icons > span', '.big_img > img', 'do_image_more', 'inline-block');
};

export default tabs;