// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';
import admin from 'firebase-admin';
import { adminDb } from '../../firebaseAdmin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
      const {prompt, chatId, model, session} = req.body;
      console.log(req.body.prompt)
      if(!prompt){
          res.status(400).json({ answer : "Please provide a prompt !!"});
          return;
      }
      if(!chatId){
          res.status(400).json({ answer : "Please provide a valid chat !!"});
          return;
      }
      const response = await query(prompt, chatId, model);
      console.log(res);
      const message : Message = {
          text : response || "ChatGpt cannot find answer for that !!",
          createdAt : admin.firestore.Timestamp.now(),
          user : {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: "https://links.papareact.com/89k",
          },
      };
      
      await adminDb
      .collection("users")
      .doc(session?.user?.email)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);

      res.status(200).json({ answer: message.text })
}
