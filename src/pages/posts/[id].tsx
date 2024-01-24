import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import { Post } from "@/model/post";

function BlogPost({ post }: { post: Post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default BlogPost;

const postsDirectory = path.join(process.cwd(), "posts");

export const getStaticPaths: GetStaticPaths = async () => {
  // postsディレクトリ内のファイル名を取得
  const filenames = fs.readdirSync(postsDirectory);

  // ファイル名からIDを取得（.md拡張子を除去）
  const paths = filenames.map((filename) => ({
    params: { id: filename.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id as string;
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // gray-matterを使ってMarkdownファイルを解析
  const { data, content } = matter(fileContents);

  // MarkdownをHTML文字列に変換
  const result = await remark().use(html).process(content);
  const contentHtml = result.toString();

  return {
    props: {
      post: {
        id,
        title: data.title,
        content: contentHtml,
      },
    },
  };
};
