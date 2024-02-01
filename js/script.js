const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('tombol-submit');

button.addEventListener("click", function () {
  let nama = inputName.value;
  let email = inputEmail.value;
  
  console.log({nama,email})
})

if (!nama) {
  const nameError = document.getElementById('name-error');
  nameError.classList.add('error-message');

  nameError.innerText = "nama harus diisi";
}

if (!email) {
  const emailError = document.getElementById('email-error');
  emailError.classList.add('error-message');

  emailError.innerText = "email harus diisi";
}





