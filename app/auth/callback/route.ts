import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { Database } from '@/types/database';

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
      const response = NextResponse.redirect(requestUrl.origin);
      const supabase = createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll() {
              return request.cookies.getSetCookie().map((cookie) => {
                const [name, ...rest] = cookie.split('=');
                const value = rest.join('=');
                return { name, value };
              });
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) => {
                response.cookies.set(name, value, options);
              });
            },
          },
        }
      );

      await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(new URL('/auth/error', request.url));
  }
}
