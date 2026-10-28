const form = document.querySelector('#inquiry-form');
document.querySelectorAll('[data-interest]').forEach(link => {
  link.addEventListener('click', () => { form.elements.interest.value = link.dataset.interest; });
});
