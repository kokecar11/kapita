import {type QwikIntrinsicElements, component$, useStyles$, JSXChildren, Slot } from '@builder.io/qwik';
import stylesButton from './Button.css?inline'
export type ButtonProps = QwikIntrinsicElements['button'] & {
  children?: JSXChildren;
};

export const Button = component$( ({...props}: ButtonProps) => {
  useStyles$(stylesButton)
    return <button {...props}><Slot /></button>
  }
);