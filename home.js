const techStack = [
  ["Go", "./Assets/go.svg"],
  ["Python", "./Assets/python.svg"],
  ["JavaScript", "./Assets/JavaScript.svg"],
  ["HTML", "./Assets/html.svg"],
  ["CSS", "./Assets/css.svg"],
  ["React", "./Assets/react.svg"],
  ["Git", "./Assets/git.svg"],
  ["Figma", "./Assets/figma.svg"],
,
]


function loadTechStack() {
  const stack = document.getElementById("tech-stack")

  techStack.forEach(tech => {
    stack.innerHTML += 
      `<div id="${tech[0]}-tech" class="tech"> 
        <img id="${tech[0]}" src="${tech[1]}" alt="${tech[0]}">
        <span>${tech[0]}</span>
      </div>`
  })
}


loadTechStack()