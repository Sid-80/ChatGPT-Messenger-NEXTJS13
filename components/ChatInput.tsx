'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";

type Props = {
    chatId : string;
};
function ChatInput({chatId}:Props) {
    const [prompt, setPrompt] = useState("");
    const {data:session} = useSession();
    // useSWR to get model
    const model = "davinci";

    const sendMsg = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!prompt) return;
        const input = prompt.trim();
        setPrompt("");
        const message : Message =  {
            text:input,
            createdAt : serverTimestamp(),
            user:{
                _id : session?.user?.email!,
                avatar : session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.email}`,
                name:session?.user?.name!,
            }
        }
        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
        message)

        // Toast noti loading
        const notification = toast.loading('ChatGPT is thinking !!')

        await fetch('/api/askQuestion', {
            method:'POST',
            headers : {
                'Content-Type' : 'appliation/json'
            },
            body : JSON.stringify({
                prompt : input,
                chatId,
                model,
                session
            })
        }).then(() =>{
            toast.success("ChatGPT responded !!",{
                id:notification
            })
        })
    };

  return(
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form onSubmit={e => sendMsg} className="p-5 space-x-5 flex">
            <input disabled={!session} className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300" value={prompt} onChange={e => setPrompt(e.target.value)} type="text" placeholder="Type your message here..."/>
            <button disabled={!prompt || !session} type="submit" className="bg-[#11a37f] hover:opaity-50 text-white font-bold px-4 py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"> 
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
            </button>
        </form>
        <div>
            {/* ModelSelection */}
        </div>
    </div>
  )
}

export default ChatInput;