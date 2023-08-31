import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json({ msg: `Fetching a task with ID: ${id}` });
}
export async function POST(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json({ msg: `Creating a single task` });
}
export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json({ msg: `Updating a task with ID: ${id}` });
}
export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json({ msg: `Deleting a task with ID: ${id}` });
}
