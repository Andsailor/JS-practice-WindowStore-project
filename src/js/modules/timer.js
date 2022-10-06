const timer = (year, month, dayDate) => {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    function addNull(arg) {
        if (arg < 10) {
            return `0${arg}`;
        } else {
            return arg;
        }
    }

    setTimer();
  
    function setTimer() {
        const date = Date.parse(new Date());
        const deadline = Date.parse(new Date(year, month, dayDate));
        const ms = deadline - date;
        
        let day = Math.floor(ms / (1000 * 60 * 60 * 24) % 30); 
        let hour = Math.floor((ms / (1000 * 60 * 60)) % 24);
        let minute = Math.floor((ms / (1000 * 60)) % 60);
        let second = Math.round((ms / 1000) % 60);       

        days.textContent = addNull(day);
        hours.textContent = addNull(hour);
        minutes.textContent = addNull(minute);
        seconds.textContent = addNull(second);

        if (ms === 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            clearInterval(timeout);
        }
    }

    let timeout = setInterval(setTimer, 1000);

    

};

export default timer;   