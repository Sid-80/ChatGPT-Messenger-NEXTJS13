import { DocumentData } from "firebase/firestore";

type Props = {
    msg : DocumentData;
}

function Message({msg} : Props) {
    const isChatGPT = msg.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <img src={msg.user.avatar} alt="" className="h-8 w-8"/>
            <p>{msg.text}</p>
        </div>
    </div>
  )
}

export default Message;