// import { useState } from 'react'
import './App.css'
import { textNodes } from './components/choices'

function App() {
  const textElement = document.getElementById('text')
  const textElement1 = document.getElementById('text1')
  const optionButtonsElement = document.getElementById('option-buttons')

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

    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        const img = document.createElement('img')
        img.src = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
        button.appendChild(img)
      }
    })
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }


  startGame()

  return (
    <>

    </>
  )
}
export default App
