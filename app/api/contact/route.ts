// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // 简单验证
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: '所有字段都是必填的' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: Number(process.env.EMAIL_PORT), 
    secure: process.env.EMAIL_SECURE === 'true', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, 
    to: process.env.MAIL_TO || process.env.EMAIL_USER, 
    subject: `📩 来自 ${name} 的联系表单消息`,
    text: `
      名称: ${name}
      邮箱: ${email}
      消息内容:
      ${message}
    `,
    html: `
      <h2>新表单信息</h2>
      <p><strong>姓名：</strong> ${name}</p>
      <p><strong>邮箱：</strong> ${email}</p>
      <p><strong>消息：</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: '邮件发送成功！' });
  } catch (error) {
    console.error('发送失败:', error);
    return NextResponse.json({ success: false, message: '邮件发送失败，请稍后再试。' }, { status: 500 });
  }
}
