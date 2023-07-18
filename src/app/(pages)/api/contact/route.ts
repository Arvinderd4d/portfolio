import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, name, content, phone } = await request.json();

    if (!email || !name || !content || !phone) {
      throw new Error('Missing parameters');
    }

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'arvinder.d4d@gmail.com',
        pass: 'ndwluirpqsxsvjaf'
        //pass: 'ytqmtkpurgejxmbv' (for localhost)
      }
    });
    // transporter.sendMail({
    //   from: 'arvinder.d4d@gmail.com',
    //   to: email,
    //   subject: name,
    //   text: name + ' ' + email + ' ' + content + ' ' + phone
    // });
    transporter.sendMail({
      from: name,
      to: 'arvinder.d4d@gmail.com',
      subject: name,
      text: name + ' ' + email + ' ' + content + ' ' + phone
    });
    transporter.sendMail({
      from: 'arvinder.d4d@gmail.com',
      to: email,
      subject: name,
      text: name + ' ' + email + ' ' + content + ' ' + phone
    });

    return NextResponse.json({ success: true, message: 'Message sent' });
  }
  catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Bad request' }), {
      status: 400,
    });
  }
}