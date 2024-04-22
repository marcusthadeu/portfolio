async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/marcusthadeu/-DIO-Forma-o-JavaScript-Developer-/main/PORTFOLIO/data/profile.json'
  const response = await fetch(url)
  const profileData = await response.json()
  return profileData
}
