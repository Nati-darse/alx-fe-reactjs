import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isFetching, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {  // Using error object directly instead of isError
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {isFetching && <span>Updating...</span>}
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data?.map(post => (  // Added optional chaining for safety
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
