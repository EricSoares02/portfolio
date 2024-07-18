// app/api/route.js 👈🏽

import {NextRequest ,NextResponse } from "next/server";
import ProjectsRepository from "../../dto/repositories/projects";


export async function GET(req: NextRequest) {
  
  try {
    const product = await new ProjectsRepository().getAll();
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
 
}
