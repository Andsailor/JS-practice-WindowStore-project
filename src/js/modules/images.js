const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            bigImg.style.cssText = 'width: 500px; height: 500px';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.classList.add('faded');
        }

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';           
        }
    });
};

export default images;