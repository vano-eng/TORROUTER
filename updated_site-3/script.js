
document.addEventListener('DOMContentLoaded', () => {
    // Language switching code (kept from previous addition)
    const langLinks = document.querySelectorAll('.language-selector .lang');
    const textElements = {
        en: {
            title: "Tor Router Store",
            description: "This is a unique device ensuring complete anonymity online.",
            features: [
                "Internet security and freedom",
                "Works on 220V or Power Bank",
                "Connects from any device",
                "Convenient web interface management",
                "Data protection from interception"
            ],
            price: "Price: $200",
            buy: "Buy",
            chatHelp: "Need help? Contact us via chat!",
            chatButton: "Write on Telegram"
        },
        ru: {
            title: "Магазин Tor Роутеров",
            description: "Это уникальное устройство, обеспечивающее вашу полную анонимность в интернете.",
            features: [
                "Интернет безопасность и свобода в сети",
                "Работает от сети 220В и Power Bank",
                "Подключение с любого устройства",
                "Удобное управление через веб-интерфейс",
                "Защита данных от перехвата"
            ],
            price: "Цена: $200",
            buy: "Купить",
            chatHelp: "Нужна помощь? Свяжитесь с нами через чат!",
            chatButton: "Написать в Telegram"
        }
    };

    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = link.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });

    function switchLanguage(lang) {
        const productCard = document.querySelector('.product-card');
        const chatSupport = document.querySelector('#chat-support');

        document.title = textElements[lang].title;
        productCard.querySelector('.description').textContent = textElements[lang].description;
        const featureList = productCard.querySelector('.features');
        featureList.innerHTML = textElements[lang].features.map(feature => `<li>${feature}</li>`).join('');
        productCard.querySelector('.price').textContent = textElements[lang].price;
        productCard.querySelector('.btn').textContent = textElements[lang].buy;
        chatSupport.querySelector('h2').textContent = textElements[lang].chatHelp;
        chatSupport.querySelector('.btn').textContent = textElements[lang].chatButton;
    }

    // Image slider code
    const images = document.querySelectorAll('.slider-image');
    let currentImageIndex = 0;

    setInterval(() => {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }, 3000); // Change image every 3 seconds
});
