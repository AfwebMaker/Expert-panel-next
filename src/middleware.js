import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req) {
    let isLogin = req.cookies.get('TOKEN') ? true : false
    let loginRoute = ['/expert/notification', '/expert/tickets', '/expert/profile', '/expert/qualification', '/expert/deputy', '/expert/service', '/expert/services', '/expert/home']
    let logoutRoute = ['/expert/login', '/expert/register']

    if (!isLogin && loginRoute.some(item => req.nextUrl.pathname.startsWith(item))) {
        return NextResponse.redirect(new URL('/expert/login', req.url))
    }

    if (isLogin && logoutRoute.some(item => req.nextUrl.pathname.startsWith(item))) {
        return NextResponse.redirect(new URL('/expert/home', req.url))
    }
}