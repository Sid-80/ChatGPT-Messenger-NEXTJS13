interface Message {
    text : string;
    createdAt : admin.firestore.Timestamp;
            user:{
                _id : string;
                avatar : string;
                name:string;
            }
}