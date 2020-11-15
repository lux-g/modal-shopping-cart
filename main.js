const openBtn = document.querySelector('.btn');
const modal = document.querySelector('.modal-bg');
const closeBtn = document.querySelector('.fi-xnluxl-times');

openBtn.addEventListener('click', ()=> {
    modal.classList.add('bg-active');
});

closeBtn.addEventListener('click', ()=> {
    modal.classList.remove('bg-active');
})


//clicked anywhere outside modal it closes
window.onclick = (e)=> {
    if(e.target == modal) {
        modal.classList.remove('bg-active');
    }
}
