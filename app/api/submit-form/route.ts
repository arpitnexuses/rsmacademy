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

  // Admin notification email template
  const adminEmailContent = `
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
          <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/logo@2x_3b9854c2-8947-469c-a45b-6b82a085e016.png" alt="RSM Logo" class="logo" />
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

  // Thank you email template for the user
  const userThankYouEmail = `
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
          background-color: #7C7C7C;
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
        .thank-you {
          font-size: 24px;
          color: #15803d;
          text-align: center;
          margin-bottom: 20px;
        }
        .next-steps {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 15px;
          border-radius: 8px;
          margin: 20px 0;
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
        .summary {
          background: #f8fafc;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/rsm-international-vector-logo_2_eb7fb9d1-228a-426a-b682-c0d24dc736fa.jpg" alt="RSM Logo" class="logo" />
          <h1>Thank You for Your Interest in RSM Saudi Arabia Professional Acdemy</h1>
        </div>
        <div class="content">
          <div class="thank-you">
            Thank you, ${formData.fullName}!
          </div>
          <p>We appreciate your interest in RSM's Training Needs Assessment service. Your request has been successfully received.</p>
          
          <div class="next-steps">
            <h3>What's Next?</h3>
            <ul>
              <li>Our team will review your submission within 24-48 business hours</li>
              <li>A dedicated RSM Saudi Arabia Professional Acdemy consultant will contact you to schedule your complimentary assessment</li>
              <li>We'll prepare a customized training needs analysis based on your organization's requirements</li>
            </ul>
          </div>

          <div class="summary">
            <h3>Your Submission Summary:</h3>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Position:</strong> ${formData.position}</p>
            <p><strong>Company Size:</strong> ${formData.companySize} employees</p>
          </div>

          <p>If you have any immediate questions, please don't hesitate to reach out to our team.</p>
        </div>
        <div class="footer">
          <p>This is an automated message from the RSM Training Needs Assessment System.</p>
          <p>© ${new Date().getFullYear()} RSM Saudi. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    // Send notification email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Training Needs Assessment Request",
      html: adminEmailContent,
    })

    // Send thank you email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: "Thank You for Your Interest in RSM Saudi Arabia Professional Acdemy",
      html: userThankYouEmail,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}

