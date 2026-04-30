import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { locale } = await request.json();
  
  const response = NextResponse.json({ success: true, locale });
  
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });
  
  return response;
}

export async function GET(request: NextRequest) {
  const validLocales = ['it', 'en', 'de', 'es', 'pt'];
  const cookieLocale = request.cookies.get('locale')?.value;
  const locale = cookieLocale && validLocales.includes(cookieLocale) ? cookieLocale : 'it';
  return NextResponse.json({ locale });
}
