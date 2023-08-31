import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";

// Get Single Task
export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json({ msg: `Fetching a task with ID: ${id}` });
}

// Update a Task
export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json({ msg: `Updating a task with ID: ${id}` });
}

// Delete a Task
export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json({ msg: `Deleting a task with ID: ${id}` });
}
