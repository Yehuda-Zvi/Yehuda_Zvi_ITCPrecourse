let fNameVal = false
let emailVal = false
let radioVal = false
let msgVal = false

function validate() {
  if (fNameVal && emailVal && radioVal && msgVal) {
    document.getElementById("submitBtn").disabled = false
  } else {
    document.getElementById("submitBtn").disabled = true
  }
}

function onFName() {
  fNameVal = document.getElementById("fname").value
  validate()
}

function onEmail() {
  emailVal = document.getElementById("email").value
  validate()
}

function onMsg() {
  msgVal = document.getElementById("msg").value
  validate()
}

const radios = document.querySelectorAll("input[type=radio]")
radios.forEach((radio) =>
  radio.addEventListener("click", () => {
    radioVal = radio.value
    validate()
  })
)

function onSub() {
  const lName = document.getElementById("lname").value
  const str =
    "First Name: " +
    fNameVal +
    ",\n" +
    "Last Name: " +
    lName +
    ",\n" +
    "Email: " +
    emailVal +
    ",\n" +
    "Comment: " +
    msgVal +
    ",\n" +
    "Best Js Tech: " +
    radioVal
  console.log(str)
}
