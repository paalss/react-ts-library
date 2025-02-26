import { MouseEventHandler } from 'react'

interface ButtonProps {
  onClick: MouseEventHandler;
  children: string;
}
const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick}>Click {children}</button>
  )
}

export default Button
