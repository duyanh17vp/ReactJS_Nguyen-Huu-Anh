import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export interface IPost {
    id?: number;
    title: string;
    author: string;
    body: string;
  }


export function PostList() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            axios
            .get("http://localhost:5000/posts")
            .then((res) => res.data)
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => setError(err));
        })();
    }, []);
    async function handleCreate(){
        const post = {
            title: "Post 3",
            author: "tiepphan",
            body: "content post 3",
        };
        try {
            await axios.post("http://localhost:5000/posts", post);
            const res = await axios.get("http://localhost:5000/posts");
            const data = res.data;
            setPosts(data);
            
        } catch (err) {
            setError(err);
        }
    }
    return (<div>
        <h4>Post List</h4>
        <button onClick={handleCreate}>Create</button>

        {posts &&
        posts.length > 0 &&
        posts.map((post: IPost) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <div>{post.id}</div>
            <div>{post.body}</div>
          </div>
        ))}
      {error && <p>Something went wrong!</p>}
      
    </div>
    );
}