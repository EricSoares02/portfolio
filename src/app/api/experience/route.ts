

import {NextRequest, NextResponse } from "next/server";
import ExperienceRepository from "../dto/repositories/experience";


export async function GET(req: NextRequest) {
  

  try {
    const experiece = await new ExperienceRepository().getAll();
    return NextResponse.json(experiece, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
 
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

