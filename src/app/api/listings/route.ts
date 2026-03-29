import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract potential filters
    const city = searchParams.get("city");
    const type = searchParams.get("type"); // APARTMENT, VILLA, etc
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const bhk = searchParams.get("bhk");
    const furnished = searchParams.get("furnished");
    
    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Prisma query object
    const where: Prisma.ListingWhereInput = {
      status: "ACTIVE", // Only show active listings publicly
    };

    if (city) where.city = { contains: city };
    if (type) where.type = type as any;
    if (furnished) where.furnished = furnished as any;
    if (bhk) where.bhk = parseInt(bhk);

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice);
      if (maxPrice) where.price.lte = parseFloat(maxPrice);
    }

    // Execute query
    const [listings, total] = await Promise.all([
      prisma.listing.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          postedBy: {
            select: { id: true, name: true, image: true }
          }
        }
      }),
      prisma.listing.count({ where })
    ]);

    return NextResponse.json({
      success: true,
      data: listings,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error: any) {
    console.error("Listing GET error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}

// Scaffold for POSTing new properties
export async function POST(request: Request) {
  try {
    // We will protect this route with NextAuth in Phase 2
    const body = await request.json();
    
    // Ensure all required fields are present (validation will be expanded with Zod later)
    if (!body.title || !body.price || !body.city) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const listing = await prisma.listing.create({
      data: {
        ...body,
        // Mocking user ID for now until Auth is integrated
        userId: "clq_mock_user_id_001" 
      }
    });

    return NextResponse.json({ success: true, data: listing }, { status: 201 });

  } catch (error: any) {
    console.error("Listing POST error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create listing" },
      { status: 500 }
    );
  }
}
