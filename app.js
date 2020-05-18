let webSkills = document.querySelectorAll('.web-skill-link');
let otherSkills = document.querySelectorAll('.other-skill-link');

let webSkillImg = document.querySelector('.web-skill-img');
let otherSkillImg = document.querySelector('.other-skill-img');

let displayWebSkillImg = function (e) {
  let skillName = e.target.innerHTML;
  webSkillImg.src = `./assets/img/${skillName.toLowerCase()}.png`;
}

let displayOtherSkillImg = function (e) {
  let skillName = e.target.innerHTML;
  otherSkillImg.src = `./assets/img/${skillName.toLowerCase()}.png`;
}

for (const skill of webSkills) {
  skill.addEventListener('mouseover', displayWebSkillImg);
}

for (const skill of otherSkills) {
  skill.addEventListener('mouseover', displayOtherSkillImg);
}