
let amountSelected = ""

const donationBtns = document.querySelectorAll('.donation-opt')
const presetOpts = document.querySelectorAll('.preset-opt')
const donationCustomBtn = document.querySelector('#custom-btn')
const donationCustomInput = document.querySelector('#custom-value')
const infoMsg = document.querySelector('#info-msg')

const setCustomValue = () => {
  amountSelected = "custom"
  handleSetActive(donationCustomBtn)
}
donationCustomInput.addEventListener("click", setCustomValue)
donationCustomBtn.addEventListener("click", setCustomValue)

presetOpts.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault()
    amountSelected = e.target.value
    if(e.target.value === "5") {
      infoMsg.style.display = "block"
    } else infoMsg.style.display = "none"
    handleSetActive(e.target)
  })
})

function handleSetActive(el) {
  donationBtns.forEach(btn => {
    btn.classList.remove("active")
  });
  el.classList.add("active")	
}

function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
}


const handleSubmit = (e) => {
  e.preventDefault()

  //<!-- //* Required validation
  const formMsg = document.getElementById('form-error')
  formMsg.innerHTML = '';
  
  const formData = new FormData(document.querySelector('#socios-form'))
  const formattedForm = {}
  for (let input of formData.entries()) {
    if(!(input[0] === "custom-value" || input[0] === "g-recaptcha-response")) {
      if(!input[1])	return formMsg.innerHTML = '<span class="form-msg">Por favor, rellena todos los campos</span>';
      formattedForm[input[0]] = input[1]
    }
  }

  if(!amountSelected) return formMsg.innerHTML = '<span class="form-msg">Por favor, selecciona una cantidad</span>';

  //<!-- //* Terms verification
  const termsCheckbox = document.querySelector('#accept-terms')
  if(!termsCheckbox.checked) return formMsg.innerHTML = '<span class="form-msg">Para continuar debes aceptar la política de privacidad</span>';


  //<!-- //* captcha verification
  var response = grecaptcha.getResponse();
  if(response.length == 0) {
    document.getElementById('g-recaptcha-error').innerHTML = '<span class="form-msg">Por favor, verifica el Captcha para continuar</span>';
    return false;
  }

  //<!-- //* Complete object
  const currentDate = new Date()
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}` // En month cuenta el 0
  formattedForm['date'] = formattedDate
  formattedForm['month'] = currentDate.getMonth()+1

  // Set Quantity
  if(amountSelected === "custom") {
    const customValue = donationCustomInput.value
    if(customValue < 5) return formMsg.innerHTML = '<span class="form-msg">La cantidad mínima mensual es de 5€</span>';
    formattedForm['amount'] = customValue
  } else {
    formattedForm['amount'] = amountSelected
  }

  const { name, dni, email, CP, IBAN, amount, month, date } = formattedForm

  document.querySelector('#submit-btn').classList.add('activeLoading')

  //<!-- //* Send
  fetch('https://api.apispreadsheets.com/data/3056/', {
    method: 'post',
    body: JSON.stringify({'data': formattedForm}),
  }).then(res => {		
    if (res.status === 201 || 200){

      Email.send({
        SecureToken: "dfe7a32e-f930-4a7b-aaf1-aed1f0d83211",
        To : 'maisharoots@gmail.com',
        // To : email,
        From : "info@maisharoots.org",
        Subject : "Nuevo socio!",
        Body : `
          Nuevo socio oleee!
          Sus datos:
          <br>
          Nombre: ${name}
          <br>
          DNI: ${dni}
          <br>
          Email: ${email}
          <br>
          Código Postal: ${CP}
          <br>
          IBAN: ${IBAN}
          <br>
          Fecha de alta: ${date}
          <br>
          Mes de alta: ${month}
          <br>
          Dinerito al mes: ${amount}
        `
      }).then(() => {
        document.querySelector('#socios-form').style.display = "none"
        document.querySelector('.success-msg').style.display = "block"
      }).catch(err => console.error(err))

    } else {
      formMsg.innerHTML = '<span class="form-msg">Ha ocurrido un error, por favor, vuelve a intentarlo más tarde</span>';
      console.err(res);
    }
  })
}