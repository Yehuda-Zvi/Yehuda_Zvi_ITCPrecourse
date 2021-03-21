const GITHUB_URL = "https://api.github.com/users/Yehuda-Zvi"

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    document.getElementById("my-name").innerHTML = data.login

    document.getElementById("profile-image").src = data.avatar_url
  })
