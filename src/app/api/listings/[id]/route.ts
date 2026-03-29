import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const listingId = (await params).id;

    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
      include: {
        postedBy: {
          select: { id: true, name: true, image: true, phone: true }
        }
      }
    });

    if (!listing) {
      return NextResponse.json(
        { success: false, error: "Listing not found" },
        { status: 404 }
      );
    }

    // Optionally increment view count asynchronously without blocking
    prisma.listing.update({
      where: { id: listingId },
      data: { views: { increment: 1 } }
    }).catch(console.error);

    return NextResponse.json({ success: true, data: listing });

  } catch (error: any) {
    console.error("Listing Detail GET error:", error);
    return NextResponse.json(
      { success: false, error: "Server error retrieving listing" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // TODO: Verify ownership via NextAuth session

    const updated = await prisma.listing.update({
      where: { id },

      data: body,
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error("Listing PUT error:", error);
    return NextResponse.json(
      { success: false, error: "Server error updating listing" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // TODO: Verify ownership or admin via NextAuth session

    await prisma.listing.delete({
      where: { id }
    });

    return NextResponse.json({ success: true, message: "Listing deleted" });
  } catch (error: any) {
    console.error("Listing DELETE error:", error);
    return NextResponse.json(
      { success: false, error: "Server error deleting listing" },
      { status: 500 }
    );
  }
}
