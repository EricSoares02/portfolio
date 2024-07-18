// app/api/route.js 👈🏽

import {NextRequest, NextResponse } from "next/server";
import HardSkillsRepository from "../dto/repositories/hardSkills";


export async function GET(req: NextRequest) {
  

  try {
    const hardSkills = await new HardSkillsRepository().getAll();
    return NextResponse.json(hardSkills, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
 
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

