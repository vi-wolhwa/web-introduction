document.addEventListener('DOMContentLoaded', () => {
  const btnSubmitGuestbook = document.querySelector('.btn-submit-guestbook');

  btnSubmitGuestbook.addEventListener('click', () => {
    const name = document.querySelector('.inp-guestbook-name').value;
    const checkedCount = Array.from(document.querySelectorAll('.checkbox')).filter(
      (checkbox) => checkbox.checked
    ).length;

    alert(`${name}님, 저와 ${checkedCount}개의 취향이 같으시네요!`);
  });
});
