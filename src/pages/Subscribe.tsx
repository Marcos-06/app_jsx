import { FormEvent, useState } from "react";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe(){
const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables:{
                name,
                email,
            }
        })

        navigate('/event')
}

    return (
        <div className="min-h-screen bg-gray-700 bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]"> 
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma aplicação, com <strong className="text-blue-500">React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Também recomendamos improvement para commits que melhoram uma implementação atual sem adicionar um novo recurso ou consertar um bug.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}/>

                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email" 
                            placeholder="Digite seu email" 
                            onChange={event => setEmail(event.target.value)}/>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green 500 uppercase py-4 rounded font-bold text-sm border border-gray-600 hover:bg-green-700 disabled:opacity-50"
                        >
                            Garantir Vaga
                        </button>
                    </form>
                </div>
            </div>
            
            {/* <img src="/src/assets/mockup.jpg" className="mt-10" alt="" /> */}


        </div>
    );
}