import {type QwikIntrinsicElements, component$, useStyles$, Slot } from '@builder.io/qwik';
import stylesButton from './Button.css?inline'
export type ButtonProps = QwikIntrinsicElements['button'] & {
  variant?: 'primary' | 'secondary' | 'danger' | 'info' | 'warning' | 'success';
  size?: 'small' | 'medium' | 'large';
};

export const Button = component$( ({variant, size,...props}: ButtonProps) => {
  useStyles$(stylesButton)
    return (
      <button {...props} class={`btn btn-${variant ? variant:'primary'} btn-${size ? size : 'medium'}`}>
        <Slot />
      </button>
    );
  }
);