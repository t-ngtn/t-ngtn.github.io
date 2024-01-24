import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";

const postsDirectory = path.join(process.cwd(), "posts");

type Post = {
  id: string;
  title: string;
  date: string;
};

type BlogListProps = {
  posts: Post[];
};

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="text-7xl mt-10 font-semibold">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <text>
                {post.title} - {post.date}
              </text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // gray-matterを使ってMarkdownファイルを解析
    const { data } = matter(fileContents);

    return {
      id,
      title: data.title,
      date: data.date,
    };
  });

  // 日付でソート
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    props: {
      posts,
    },
  };
};
