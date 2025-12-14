import { NextResponse } from "next/server";

export async function middleware(request) {

    const user = false;
    if (!user) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    console.log("Middleware ran");
    return NextResponse.next();
};

export const config = {
    matcher: ["/"]
}