// import { useState } from 'react'
import './App.css'
import { textNodes } from './components/choices'

function App() {
  const textElement = document.getElementById('text')
  const optionButtonsElement = document.getElementById('option-buttons')

  let state = {}

  function startGame() {
    state = {}
    showTextNode(1)
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    // textNode.options.forEach(option => {
    //   if (showOption(option)) {
    //     const button = document.createElement('button')
    //     button.innerHTML = option.text
    //     // const img = document.createElement('img')
    //     // img.src = option.text
    //     button.classList.add('btn')
    //     button.addEventListener('click', () => selectOption(option))
    //     optionButtonsElement.appendChild(button)
    //     // button.appendChild(img)
    //   }
    // })
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
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
      <div className="container">
        <div id="text">Text</div>
        <div id="option-buttons" className="btn-grid">
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
          <button className="btn">Option 1</button>
          <button className="btn">Option 2</button>
          <button className="btn">Option 3</button>
        </div>
      </div>
    </>
  )
}

export default App
