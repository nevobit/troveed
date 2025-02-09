import { classNames } from "../../../utilities/css";
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string | string[];
    size: 'micro' | 'slim' | 'medium' | 'large',
    fullWidth?: boolean;
    variant: 'plain' | 'primary' | 'secondary' | 'tertiary',
    loading: boolean;
}
export const Button = ({ disabled, loading, variant, ...rest }: ButtonProps) => {
  const isDisabled = disabled || loading;

    const className = classNames(
        styles.button,
        isDisabled && styles.disable,
        loading && styles.loading,
        styles[variant]
    )
    const commonProps = {
        className,
        ...rest
    }
  return (
    <button {...commonProps} > 
    </button>
  )
}
