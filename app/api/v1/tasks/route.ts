import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";
import {
  getUserID,
  getUserIDfromString,
  isLoggedIn,
} from "@/src/auth/authentication";

// Get All Tasks
export async function GET(request: NextRequest) {
  await dbConnect(); // this must be here. Some problems if you use --turbo!

  // await isLoggedIn(request);
  const token = request.headers.get("Authorization");
  if (!token) {
    return NextResponse.json({ error: "Wrong user" }, { status: 401 });
  }
  const id = await getUserIDfromString(token.split(" ")[1].trim());
  const tasks = await Task.find({ author: id });

  return NextResponse.json(tasks);
}

// Create a Task
export async function POST(request: NextRequest) {
  await dbConnect();

  const data = await request.json();
  console.log(request.cookies.getAll());

  const newTask = await Task.create(data);

  return NextResponse.json(newTask);
}
