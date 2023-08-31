import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";

// Get Single Task
export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  await dbConnect();

  try {
    const task = await Task.findById(id);
    return NextResponse.json(task);
  } catch (error) {
    return new NextResponse("Task not found.", { status: 400 });
  }
}

// Update a Task
export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  await dbConnect();
  const update = await request.json();

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, update, {
      new: true,
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    return new NextResponse("Task couldn't be updated.", { status: 400 });
  }
}

// Delete a Task
export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  await dbConnect();

  try {
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ msg: `Deleting a task with ID: ${id}` });
  } catch (error) {
    return new NextResponse("Task couldn't be deleted.", { status: 400 });
  }
}
