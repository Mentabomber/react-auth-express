import { createContext, useContext, useState } from "react";
import fetchApi from "../utils/fetchApi";

// creazione dell context
const PostsContext = createContext();

// creazione di un elemento custom attorno al provider
export function PostsProvider({ children }) {
  const [postsList, setPostsList] = useState([]);

  async function fetchData() {
    const jsonData = await fetchApi('/posts');

    setPostsList(jsonData.data);
  }

  return (
    <PostsContext.Provider value={{postsList, fetchData}}>
      {children}
    </PostsContext.Provider>
  );
}

// creazione di un custom hook per accedere al context
export function usePosts() {
  return useContext(PostsContext);
}