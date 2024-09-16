import {TrashIcon } from "lucide-react"

function Ficha({fichas}) {

    return (
        <ul className="space-y-4 p-6 bg-gray-500 rounded-md">
            {fichas.map((ficha => 
            <li key={ficha.id} className="flex gap-2">
                <button className= "bg-slate-700 w-full text-left text-green-500 p-2 rounded-md">
                    {ficha.nome}
                </button>
                <button>
                    <TrashIcon></TrashIcon>
                </button>
            </li>
            ))}

        </ul>
    )
}

export default Ficha