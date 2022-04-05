const registerForm = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
})

usernameInput.addEventListener('change', function(e) {
    let char = e.target.value.length
    let condition = undefined;
    if(char > 32 || char < 8) condition = false;
    else condition = true;
    showResult('username',condition)
})

function showResult(field, condition) {
    let area = document.getElementById(field + 'Area')
    if(condition === true) area.style = 'border-color: green'
    else if(condition === false) area.style = 'border-color: red';
    else area.style = 'border-color: #000';
}