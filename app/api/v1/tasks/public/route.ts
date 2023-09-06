import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";

// Get Public Tasks
export async function GET() {
  await dbConnect(); // this must be here. Some problems if you use --turbo!

  const tasks = await Task.find({ public: true });

  return NextResponse.json(tasks);
}
