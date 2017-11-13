function hideAction() {
  var elementosStory = document.getElementsByClassName('story')
  for (i = 0; i < elementosStory.length; i++) {
    elementosStory[i].style.display = 'none'
  }
  var elementos = document.getElementsByClassName('adventure')
  for (i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block'
  }
  //active
  document.getElementById('nav-adventure').classList.add('active')
  //deactivate
  document.getElementById('nav-all').classList.remove('active')
  document.getElementById('nav-romance').classList.remove('active')
  document.getElementById('nav-fantasy').classList.remove('active')
  document.getElementById('nav-legend').classList.remove('active')
  document.getElementById('nav-clasics').classList.remove('active')

}

function showTodos() {
  var elementos = document.getElementsByClassName('story')
  for (i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block'
  }
  //active
  document.getElementById('nav-all').classList.add('active')
  //deactivate
  document.getElementById('nav-romance').classList.remove('active')
  document.getElementById('nav-adventure').classList.remove('active')
  document.getElementById('nav-fantasy').classList.remove('active')
  document.getElementById('nav-legend').classList.remove('active')
  document.getElementById('nav-clasics').classList.remove('active')
}

function hideFantasia() {
  var elementosStory = document.getElementsByClassName('story')
  for (i = 0; i < elementosStory.length; i++) {
    elementosStory[i].style.display = 'none'
  }
  var elementos = document.getElementsByClassName('Fantasia')
  for (i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block'
  }
  //active
  document.getElementById('nav-fantasy').classList.add('active')
  //deactivate
  document.getElementById('nav-all').classList.remove('active')
  document.getElementById('nav-adventure').classList.remove('active')
  document.getElementById('nav-romance').classList.remove('active')
  document.getElementById('nav-legend').classList.remove('active')
  document.getElementById('nav-clasics').classList.remove('active')

}

function hideRomance() {
  var elementosStory = document.getElementsByClassName('story')
  for (i = 0; i < elementosStory.length; i++) {
    elementosStory[i].style.display = 'none'
  }
  var elementos = document.getElementsByClassName('Romance')
  for (i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block'
  }
  //active
  document.getElementById('nav-romance').classList.add('active')
  //deactivate
  document.getElementById('nav-all').classList.remove('active')
  document.getElementById('nav-adventure').classList.remove('active')
  document.getElementById('nav-fantasy').classList.remove('active')
  document.getElementById('nav-legend').classList.remove('active')
  document.getElementById('nav-clasics').classList.remove('active')

}

function hideLeyendas() {
  var elementosStory = document.getElementsByClassName('story')
  for (i = 0; i < elementosStory.length; i++) {
    elementosStory[i].style.display = 'none'
  }
  var elementos = document.getElementsByClassName('Leyenda')
  for (i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block'
  }
  //active
  document.getElementById('nav-legend').classList.add('active')
  //deactivate
  document.getElementById('nav-all').classList.remove('active')
  document.getElementById('nav-adventure').classList.remove('active')
  document.getElementById('nav-fantasy').classList.remove('active')
  document.getElementById('nav-romance').classList.remove('active')
  document.getElementById('nav-clasics').classList.remove('active')

}

function hideClasics() {
  var elementosStory = document.getElementsByClassName('story')
  for (i = 0; i < elementosStory.length; i++) {
    elementosStory[i].style.display = 'none'
  }
  var elementos = document.getElementsByClassName('Clasics')
  for (i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block'
  }
  //active
  document.getElementById('nav-clasics').classList.add('active')
  //deactivate
  document.getElementById('nav-all').classList.remove('active')
  document.getElementById('nav-adventure').classList.remove('active')
  document.getElementById('nav-fantasy').classList.remove('active')
  document.getElementById('nav-legend').classList.remove('active')
  document.getElementById('nav-romance').classList.remove('active')
}
