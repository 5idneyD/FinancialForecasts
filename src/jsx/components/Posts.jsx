import React from "react";
import { useQuery } from "react-query";
import axios from "axios";


export default function Posts() {

	const retrievePosts = async () => {
		const response = await axios.get("https://jsonplaceholder.typicode.com/users");
		return response.data;
	};

	const { data: posts, error, isLoading } = useQuery("postsData", retrievePosts);

	if (isLoading) return <div>Fetching posts...</div>;
	if (error) return <div>An error occurred: {error.message}</div>;

	return (
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.name}</li>
				))}
			</ul>
	);
}
