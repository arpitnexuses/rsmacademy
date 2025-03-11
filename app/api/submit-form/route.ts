import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  const formData = await request.json()

  const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
        }
        .header {
          background-color: #D3D3D3;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          padding: 20px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0 0 8px 8px;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          color: #15803d;
        }
        .value {
          margin-top: 5px;
          color: #1f2937;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          font-size: 12px;
          color: #64748b;
        }
        .logo {
          max-width: 200px;
          margin-bottom: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/rsm-international-vector-logo_2_eb7fb9d1-228a-426a-b682-c0d24dc736fa.jpg" alt="RSM Logo" class="logo" />
          <h1>New Training Needs Assessment Request</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${formData.fullName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${formData.email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${formData.phone}</div>
          </div>
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${formData.company}</div>
          </div>
          <div class="field">
            <div class="label">Position:</div>
            <div class="value">${formData.position}</div>
          </div>
          <div class="field">
            <div class="label">Company Size:</div>
            <div class="value">${formData.companySize} employees</div>
          </div>
          <div class="field">
            <div class="label">Training Needs:</div>
            <div class="value">${formData.trainingNeeds || "Not specified"}</div>
          </div>
        </div>
        <div class="footer">
          <p>This is an automated message from the RSM Training Needs Assessment System.</p>
          <p>© ${new Date().getFullYear()} RSM Saudi. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: "New Training Needs Assessment Request",
    html: emailContent,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}

