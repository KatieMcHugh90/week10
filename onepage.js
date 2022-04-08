 


let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let occupationInput = document.querySelector('#occupation');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let email = emailInput.value;
    let occupation = occupationInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${occupation}</td>
                </tr>`;
    table.innerHTML += template;
});