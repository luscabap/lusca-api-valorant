interface IPropsItem {
    name: string
}

export default function ItemNav({ name }: IPropsItem){
    return (
        <a href="#" className="font-semibold transition duration-500 hover:text-white hover:bg-slate-950 p-3 rounded-md "><li>{name}</li></a>
    )
}