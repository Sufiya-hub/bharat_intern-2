const btns = document.querySelectorAll('.button');
btns.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    if (
      e.target.parentNode.parentNode.children[1].classList.contains(
        'deactivate'
      )
    ) {
      e.target.textContent = 'x';
    } else {
      e.target.textContent = '+';
    }
    e.target.parentNode.parentNode.children[1].classList.toggle('deactivate');
  });
});
[node,node].forEach((el)=>{
  el.class.contasin('name')
  name = el.value
})