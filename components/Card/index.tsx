import Link from "next/link";
import { CaretDoubleRight } from "phosphor-react";
import { ContainerCard } from "./styles";

interface IRepoProps {
    nameRepo: string;
}

export function Card(props: IRepoProps) {
    return (
        <ContainerCard>
            <strong>{props.nameRepo}</strong>
            <Link href={`post/${props.nameRepo}`}>
                <a>
                    Ver mais
                    <CaretDoubleRight size={16} weight="bold" />
                </a>
            </Link>
        </ContainerCard>
    )
}