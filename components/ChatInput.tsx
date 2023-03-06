import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
    chatId : string;
};
function ChatInput({chatId}:Props) {
    const [prompt, setPrompt] = useState("");
  return(
    <div>
        <form className="p-5 space-x-5 flex-1">
            <input value={prompt} onChange={e => setPrompt(e.target.value)} type="text" placeholder="Type your message here..."/>
            <button type="submit"> 
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