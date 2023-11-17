import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  let state = {}
  function startCV() {
    state = {}
    showTextChoice(1)
  }

  function showTextChoice(textChoiceIndex) {
    const textChoice = textChoices.find(textChoice => textChoice.id === textChoiceIndex)
    textElement.innerText = textChoice.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textChoice.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        if (textChoice.id == 9) { option.nextText = numberRandom() }
        if (textChoice.id == 15) { option.nextText = russianRoulette() }
        if (textChoice.id == 17) { option.nextText = svårRussianRoulette() }
        if (textChoice.id == 18) { option.nextText = svårasteRussianRoulette() }
        if (textChoice.id == 1) { document.body.style.backgroundColor = "#242424" }
        if (textChoice.id == 14 || textChoice.id == 16) {
          button.style.backgroundImage = "url('/banana.gif')"
          button.style.height = "400px"
          button.style.width = "350px"
          document.body.style.backgroundColor = "red"
          Choice = 1
        }
        if (textChoice.id == 8) {
          button.style.backgroundImage = "url('/voices.gif')"
          button.style.height = "550px"
          button.style.width = "600px"
          document.body.style.backgroundColor = "black"
          Choice = 1
        }
        if (textChoice.id == 13) {
          button.style.backgroundImage = "url('/happyCat.gif')"
          button.style.height = "550px"
          button.style.width = "600px"
          document.body.style.backgroundColor = "green"
          Choice = 1
        }
        if (textChoice.id == 12) {
          button.style.backgroundImage = "url('/laserCat.gif')"
          button.style.height = "370px"
          button.style.width = "200px"
          document.body.style.backgroundColor = "crimson"
          Choice = 1
        }
        if (textChoice.id == 11) {
          button.style.backgroundImage = "url('/bellyCat.gif')"
          button.style.height = "550px"
          button.style.width = "600px"
          document.body.style.backgroundColor = "blue"
          Choice = 1
        }
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)


        window.addEventListener("beforeunload", function (e) {
          localStorage['Choice'] = textChoice.id
          window.addEventListener("load", function (e) {
            Choice = localStorage.getItem('Choice');

          });
        });
      }
    })
  }



  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

  function selectOption(option) {
    const nextTextChoiceId = option.nextText
    if (nextTextChoiceId <= 0) {
      return startCV()
    }
    state = Object.assign(state, option.setState)
    showTextChoice(nextTextChoiceId)
  }

  startCV()
  let state = {}
  function startCV() {
    state = {}
    showTextChoice(1)
  }

  function showTextChoice(textChoiceIndex) {
    const textChoice = textChoices.find(textChoice => textChoice.id === textChoiceIndex)
    textElement.innerText = textChoice.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textChoice.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)


        window.addEventListener("beforeunload", function (e) {
          localStorage['Choice'] = textChoice.id
          window.addEventListener("load", function (e) {
            Choice = localStorage.getItem('Choice');

          });
        });
      }
    })
  }



  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

  function selectOption(option) {
    const nextTextChoiceId = option.nextText
    if (nextTextChoiceId <= 0) {
      return startCV()
    }
    state = Object.assign(state, option.setState)
    showTextChoice(nextTextChoiceId)
  }

  startCV()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
