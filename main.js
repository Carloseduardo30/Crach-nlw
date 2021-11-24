const LinksSocialMedia = {
  github: 'Carloseduardo30',
  youtube: 'cadudedeus',
  facebook: 'cadudedeus',
  instagran: 'cadudedeus'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.childrem) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://$
   {social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getgithubinfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => alerta(data.avatar_url))
}

getgithubinfos()
