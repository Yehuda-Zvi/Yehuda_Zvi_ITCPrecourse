const mapsArr = [
  // jerusalem
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217026.85598226875!2d35.035271194729354!3d31.79653373011291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1615936163495!5m2!1sen!2sil",
  // ramatgan
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54094.49360113373!2d34.791283995196025!3d32.0717951346621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2sRamat%20Gan!5e0!3m2!1sen!2sil!4v1615918711242!5m2!1sen!2sil",
  // safed
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53563.665493739485!2d35.46146733121294!3d32.95816113406032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c23971882b96b%3A0x51383e291ebd8850!2sSafed!5e0!3m2!1sen!2sil!4v1615935600944!5m2!1sen!2sil",
  // sderot
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27207.24849851938!2d34.57990340001616!3d31.526739888770873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15028152b5bc422b%3A0x9eca44351ad2130a!2sSderot!5e0!3m2!1sen!2sil!4v1615944207331!5m2!1sen!2sil",
  // bnei-brak
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27042.22987257173!2d34.81787430102168!3d32.0887516052322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a235bcc7279%3A0xa32fca178c423987!2sBnei%20Brak!5e0!3m2!1sen!2sil!4v1615944397539!5m2!1sen!2sil",
]

let i = 0

function next() {
  document.getElementById("maps").src = mapsArr[++i]

  //enable the back btn
  document.getElementById("back").setAttribute("style", "display: inline;")

  //checking if the array is ended, and disable the next btn
  if (i + 1 == mapsArr.length) {
    document.getElementById("next").setAttribute("style", "display: none;")
  }
}

function back() {
  document.getElementById("maps").src = mapsArr[--i]

  //enable the next btn
  document.getElementById("next").setAttribute("style", "display: inline;")

  if (i == 0) {
    document.getElementById("back").setAttribute("style", "display: none;")
  }
}
