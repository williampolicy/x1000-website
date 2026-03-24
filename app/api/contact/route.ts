// X1000.ai Contact Form API
// Handles form submissions

import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company?: string
  type: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In production, this would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM (HubSpot, Salesforce, etc.)
    // 4. Send confirmation email to user

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company || 'Not provided',
      type: body.type,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you within 4 hours.',
      data: {
        id: `contact_${Date.now()}`,
        timestamp: new Date().toISOString(),
      }
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: '/api/contact',
    method: 'POST',
    description: 'Submit contact form',
    requiredFields: ['name', 'email', 'message'],
    optionalFields: ['company', 'type'],
  })
}
