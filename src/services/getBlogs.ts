"use server";
export async function getBlogs(): Promise<Blog[] | undefined> {
  try {
    const response = await fetch(`${process.env.API_URL}/blogs?populate=*`, {
      method: "GET",
      headers: {
        ContentType: "application/json",
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function deleteBlog(id: string): Promise<boolean | undefined> {
  try {
    const response = await fetch(`http://localhost:1337/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        ContentType: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete blog");
    }
    return true;
  } catch (error) {
    console.log(error);
  }
}
