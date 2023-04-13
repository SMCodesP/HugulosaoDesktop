import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react';
import { DefaultStyledButton } from './styles';

interface TDefaultButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  color?: string;
}

const DefaultButton: React.FC<TDefaultButton> = ({
  text,
  color,
  ...props
}) => {
  return (
    <DefaultStyledButton color={color} {...(props as any)}>
      {text}
    </DefaultStyledButton>
  );
};

export default DefaultButton;
