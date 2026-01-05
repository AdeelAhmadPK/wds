import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, email, phone, country, service } = data;
    
    if (!name || !email || !phone || !country || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email via SendGrid, Resend, or similar service
    // 2. Save to database
    // 3. Send to CRM system
    
    // For now, just log the data (in production, replace with actual email/database logic)
    console.log('Contact form submission:', data);

    // Simulate email sending
    // await sendEmail({
    //   to: 'info@wdsfinance.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Country:</strong> ${country}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
    //   `
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
