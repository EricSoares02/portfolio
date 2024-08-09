// app/api/route.js 👈🏽

import {NextRequest ,NextResponse } from "next/server";
import { z } from "zod";
import ProjectsRepository from "../../dto/repositories/projects";


export async function GET(req: NextRequest) {
  
  const id = req.nextUrl.searchParams.get("id");

  const IdSchema = z.string().length(24);

  try {
    await IdSchema.parse(id);
    const product = await new ProjectsRepository().getById(id ?? "");
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
 
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

