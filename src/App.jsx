// import { useState } from 'react'
import './App.css'
import { textNodes } from './components/choices'

function App() {
  const textElement = document.getElementById('text')
  const textElement1 = document.getElementById('text1')
  const optionButtonsElement = document.getElementById('option-buttons')
  const container = document.getElementById('container')
  let points = 0;
  let correctButton = '';
  let incorrectButton = '';
  let state = {}

  function startGame() {
    state = {}
    showTextNode(1)
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.src = textNode.text
    textElement1.innerText = textNode.text1
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }


    let i = 0;
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        const img = document.createElement('img')
        img.src = option.text
        button.classList.add(`btn`)
        button.id = `button${i}`
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
        button.appendChild(img)
        if (option.text.includes('picCorrect.png')) {
          correctButton = button.id
        } else {
          incorrectButton = button.id
        }
        i++;
      }
    })
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

  function selectOption(option) {
    console.log(option)
    if (option.text.includes('picCorrect.png')) {
      points += 1
      console.log(correctButton)
      const button = document.getElementById(correctButton)
      button.style.backgroundColor = 'green'
    } else {
      points += 0
      console.log(incorrectButton)
      const button = document.getElementById(incorrectButton)
      button.style.backgroundColor = 'red'
    }
    setTimeout(() => {
      const nextTextNodeId = option.nextText
      if (nextTextNodeId <= 0) {
        return startGame()
      }
      state = Object.assign(state, option.setState)
      showTextNode(nextTextNodeId)

      if (option.text === undefined) {
        container.
      }
    }, "3000");
  }


  startGame()

  return (
    <>

    </>
  )
}
export default App
