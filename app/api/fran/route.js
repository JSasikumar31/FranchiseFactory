import { ConnectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";
import path from "path";
import { NextResponse } from "next/server";
import blogModel from "@/lib/config/models/blogModel";
import { URL } from "url";
//API END POINT TO CALL FRNACHISE
export async function GET(req) {
  await ConnectDB();

  try {
    const url = new URL(req.url);
    const blogId = url.searchParams.get("id");
     const blog = await blogModel.find({});
     return NextResponse.json(blog);

 
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
// API ENDPOINT FOR UPLOADING FRNACHISE 
export async function POST(req) {
  await ConnectDB();

  try {
    const formData = await req.formData();
    const timestamp = Date.now();

    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ success: false, msg: "Image file is required" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const filename = `${timestamp}_${image.name}`;
    const imagePath = path.join(process.cwd(), "public", filename);
    await writeFile(imagePath, buffer);
    const imgUrl = `/${filename}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    await blogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  await ConnectDB();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const blog = await blogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog Not Found" }, { status: 404 });
    }

    await blogModel.findByIdAndDelete(id);
    // Optionally: delete the image file with fs.unlink
    // await unlink(path.join(process.cwd(), "public", blog.image));

    return NextResponse.json({ success: true, msg: "Blog Deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
