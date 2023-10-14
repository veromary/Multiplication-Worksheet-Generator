
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleButton = question.querySelector('.toggle-button');

    question.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggleButton.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
        } else {
            answer.style.display = 'block';
            toggleButton.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
        }
    });
});
