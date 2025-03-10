// app/api/tasks/route.js
import connectToDatabase from "@/lib/mongodb"; // Import your connection function
import Task from "@/lib/models/task"; // Import your Task model
import { NextResponse } from "next/server"; // Import NextResponse

export async function GET() {
  try {
    await connectToDatabase(); // Connect to MongoDB
    const tasks = await Task.find({}).sort({ createdAt: -1 }); // Fetch all tasks, sort by createdAt descending
    console.log(tasks);
    return NextResponse.json({ tasks }); // Return tasks in JSON response
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    ); // Return error response
  }
}
