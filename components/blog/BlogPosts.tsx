import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../shared/Post";

type Props = {
  data: any;
  locale?: string;
};

const BlogPosts = (props: Props) => {
  const [posts, setPosts] = useState(props.data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_API +
        `/api/posts?sort=date:desc&pagination[withCount]=true&pagination[start]=${posts.length}&pagination[limit]=9&populate=*&filters[type][$eq]=blog&locale=` +
        props.locale
    );
    const newPosts = await res.json();
    setPosts((post: any) => [...post, ...newPosts.data]);
    console.log(newPosts)
    if((newPosts.meta.pagination.start + newPosts.meta.pagination.limit) > newPosts.meta.pagination.total) {
      setHasMore(false);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<div className="text-center mt-20 mb-8"><h4>Loading...</h4></div>}
        endMessage={<div className="text-center mt-20 mb-8"><h4>Nothing more to show</h4></div>}
        className="w-full"
      >
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post: any) => (
            <div key={post.id} className="mx-auto">
              {
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.attributes.title}
                  subtitle={post.attributes.subtitle}
                  tags={post.attributes.tag}
                  date={post.attributes.date}
                  url={post.attributes.url}
                  type={post.attributes.type}
                  content={post.attributes.content}
                  image={
                    post.attributes.image.data != null
                      ? post.attributes.image.data.attributes.formats.medium.url
                      : null
                  }
                />
              }
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default BlogPosts;