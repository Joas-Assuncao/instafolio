import { CaretDoubleRight } from "phosphor-react";
import { ContainerCard } from "./styles";

interface IRepoProps {
    nameRepo: string;
}

export function Card(props: IRepoProps) {
    return (
        <ContainerCard>
            <strong>{props.nameRepo}</strong>
            <a href="">Ver mais <CaretDoubleRight size={16} weight="bold" /></a>
        </ContainerCard>
    )
}