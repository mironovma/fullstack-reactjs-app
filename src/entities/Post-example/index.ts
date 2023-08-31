export type { Post, PostSchema } from "./model/types/post";
export { postActions, postReducer } from "./model/slice/postSlice";
export { fetchPostData } from "./model/services/fetchPostData";
export { PostDetail } from "./ui/PostDetail";
