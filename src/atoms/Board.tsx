import React from 'react'
import Backspace from './Backspace';
import BokClick from './BokClick';
import Header from '../components/Header';
import "../sass/atoms/_board.scss"

interface BoardProps {
  username?: string;
  message1?: string;
  message2?: string;
}

const Board = ({ username, message1, message2 }: BoardProps) => {
  return (
    <>
      <Header
        leftChild={<Backspace />}
        rightChild={<BokClick />} />
      <div className='board-wrapper'>
        <h1 className='board-title'>
          <span className='username'>{username}</span>
          {message1}<br />
          {message2}</h1>
      </div>
    </>
  )
}

export default Board