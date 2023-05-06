import { Slot, component$, useStyles$} from "@builder.io/qwik";
import styleCard from './Card.css?inline'
export type CardProps = {
    title?:string;
    content?: string;
}

export const Card = component$( ({title, content}: CardProps) => {
    useStyles$(styleCard)
    return(
        <div class="card">
            {title ? 
                <a href="#">
                    <h5 class="card-title">{title}</h5>
                </a>
                : 
                <Slot name="card-title" />
            }
            {content ? <p class="card-content">{content}</p> : <Slot name="card-desc"/>}
            <Slot name="card-actions" />
        </div>
    );
})