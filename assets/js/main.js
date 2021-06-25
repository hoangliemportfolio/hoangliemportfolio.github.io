


// Active cho nút chọn Portfolio
var portSelection = document.querySelectorAll('.port__navbar-item')

for (let i = 0; i < portSelection.length; i++) {
    portSelection[i].addEventListener('click', function(){
        for (let j = 0; j < portSelection.length; j++){
            portSelection[j].classList.remove('active');
        }
        this.classList.add('active');})}