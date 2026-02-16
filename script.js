document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const envelope = document.querySelector('.envelope');

    envelopeWrapper.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });
});
