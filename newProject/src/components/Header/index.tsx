import ItemNav from "./ItemNav";

export default function Header(){
    return (
        <header className="w-3/4 flex  flex-row justify-around items-center fixed top-1 p-2 rounded-lg bg-slate-300">
                <h1 className="bg-slate-700 text-slate-300 p-3 rounded-3xl">Valorant Project</h1>
                <ul className="flex gap-8">
                    <ItemNav name="Home"/>
                    <ItemNav name="Agents"/>
                    <ItemNav name="Maps"/>
                    <ItemNav name="Contact"/>
                </ul>
        </header>
    )
}