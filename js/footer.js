// load the languages this page was build with
const loadLan = () => {
  const lanArr = ["HTML", "CSS", "JavaScript"]
  let strLan = ""

  lanArr.forEach((word, i) => {
    //checks if its the last word to remove the comma and add 'and' before the last word
    if (i == lanArr.length - 1) {
      strLan = strLan.substring(0, strLan.length - 2)
      strLan += " and " + word
    } else {
      strLan += word + ", "
    }
  })

  document.getElementById("lan").innerHTML += strLan
}
window.onload = loadLan
