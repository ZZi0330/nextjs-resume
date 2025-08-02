import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

 
  const validEmail = "test@example.com";
  const validPassword = "123456";

  if (email === validEmail && password === validPassword) {
    // 生成一个假 token
    const fakeToken = "abc123xyz";

    return NextResponse.json({ success: true, token: fakeToken });
  } else {
    return NextResponse.json({ success: false, message: "Invalid credentials" });
  }
}
