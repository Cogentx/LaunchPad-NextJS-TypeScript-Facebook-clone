import { FieldValue } from "firebase/firestore";

interface IPost {
  id?: string;
  message: string;
  name?: string;
  email?: string;
  image?: string;
  timestamp: FieldValue;
  postImage?: string;
}

export { IPost };
