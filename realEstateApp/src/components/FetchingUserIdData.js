import { PostLocalHost } from '../lib/PostLocalHost';

export const FetchingUserIdData = async ({ params }) => {
  const res = await fetch(`${PostLocalHost}/${params.postId}`);
  const data = await res.json();
  return data;
};
