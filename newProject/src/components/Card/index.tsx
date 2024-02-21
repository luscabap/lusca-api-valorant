interface ICardProps{
    nome: string
}

export default function Card({nome}: ICardProps){
    return (<h1 className="p-2 m-3 rounded-xl bg-zinc-800 text-white text-center">{nome}</h1>)
}