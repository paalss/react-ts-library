import { MouseEventHandler } from 'react'

interface ButtonProps {
  onClick: MouseEventHandler;
  children: string;
}
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick}>Click {children}</button>
  )
}

export default Button
