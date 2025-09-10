import { Blogs } from "@/components/blogs";
import { deleteBlog, getBlogs } from "@/services/getBlogs";

export default async function page() {
  const data = await getBlogs();
  if (!data) {
    return <div>Failed to load blogs.</div>;
  }
  return (
    <section className="container mx-auto p-4">
      <Blogs data={data} />
    </section>
  );
}
