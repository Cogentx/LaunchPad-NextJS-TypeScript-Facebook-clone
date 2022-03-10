import { FieldValue, Timestamp } from 'firebase/firestore';

interface IPost {
  id?: string;
  message?: string;
  name?: string;
  email?: string;
  image?: string;
  timestamp?: FieldValue<Timestamp>;
  postImage?: string;
}

export { IPost };
