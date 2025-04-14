import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/provider/api";

export async function GET(req: NextRequest) {
    const session = await getSession();
    if (!session) {
        return NextResponse.redirect(new URL("/login", req.nextUrl.origin).toString());
    }

    try {
            return NextResponse.json({
                message: "Data berhasil ditemukan",
                data: [], 
                status: 'found'
            }, {status: 200});
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ data: [], status: 'Error', message: errorMessage}, {status: 500});
    }
}
