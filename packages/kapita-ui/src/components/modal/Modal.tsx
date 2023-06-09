import { type PropFunction, $, Slot, component$, useStyles$, useOnDocument } from '@builder.io/qwik';
import styles from "./Modal.css?inline";

export type BudgetsMapModalProps = {
    title?:string;
    content?: string;
    isVisible?: boolean;
    onClose: PropFunction<() => boolean >
}

export type ModalProps = BudgetsMapModalProps

export default component$( ({title, content, isVisible, onClose}:ModalProps) => {
    useStyles$(styles);

    const handlerOnClose = $((e:any) => {
        if(e.target.id === 'wrapper-modal') onClose();
    })

    useOnDocument('keydown', $((event)=>{
        const key = event as KeyboardEvent
        if(key.code === 'Escape') onClose()
      }));

    return (
        <div class={`fixed flex modal ${isVisible ? 'block': 'hidden'}`} onClick$={handlerOnClose} id='wrapper-modal'>
             <div class={"w-[600px]"}>
                <div class={"bg-white dark:bg-primary-500 p-2 rounded-sm"}>
                    <button class={"btn-secondary"} onClick$={onClose}> Close </button>
                    {title ? <h1 class={"text-xl"}>{title}</h1>:<Slot name="modal-title"/>}
                    {content ? <p>{content}</p>:<Slot name="modal-content"/>}
                </div>
            </div>
        </div>
    );
} )