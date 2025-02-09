import { ReactNode } from "react";
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    icon?: ReactNode,
}
const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <input className={styles.input} /> 
  )
}

export default Input