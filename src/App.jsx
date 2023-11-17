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


    let i = 1;
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
        }
        i++;
      }
    })
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

  function selectOption(option) {
    // all buttons become red
    const button = document.getElementById('button1')
    button.style.backgroundColor = 'red'
    const button2 = document.getElementById('button2')
    button2.style.backgroundColor = 'red'
    const button3 = document.getElementById('button3')
    button3.style.backgroundColor = 'red'

    // correct button becomes green
    const buttonCorr = document.getElementById(correctButton)
    buttonCorr.style.backgroundColor = 'green'
    if (option.text.includes('picCorrect.png')) {
      points += 1
    }

    console.log(textNodes)
    setTimeout(() => {
      if (option.nextText > textNodes.length) {
        console.log('game over')
        const page = document.getElementById('container')
        page.innerHtml = ' '
        const text = document.createElement('h1')
        text.innerText = `You got ${points} out of ${textNodes.length} correct!`
        page.appendChild(text)
      } else {
        console.log('not game over')
        const nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0) {
          return startGame()
        }
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
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
