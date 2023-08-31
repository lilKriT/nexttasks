import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";

// Get All Tasks
export async function GET() {
  await dbConnect(); // this must be here. Some problems if you use --turbo!

  const tasks = await Task.find();

  return NextResponse.json(tasks);
}

// Create a Task
export async function POST(request: NextRequest) {
  await dbConnect();

  const data = await request.json();

  const newTask = await Task.create(data);

  return NextResponse.json(newTask);
}
