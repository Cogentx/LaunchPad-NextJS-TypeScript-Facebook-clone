import React from 'react';
import { IPost } from '../fb-clone';

interface IProps {
  post: IPost;
}

export default function Post({ post }: IProps) {
  const {name, email, message,timestamp,image,postImage} = post;

  return <div>{message}</div>;
}
