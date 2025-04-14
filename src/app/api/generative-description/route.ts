// app/api/generative-description/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, imageFiles } = body;

    console.log("Title received:", title);

    if (!title || !imageFiles || !Array.isArray(imageFiles) || imageFiles.length === 0) {
      return NextResponse.json({ error: "Missing title or image files." }, { status: 400 });
    }

    const imageParts = await Promise.all(
      imageFiles.map(async (imageFile: string) => {
        const base64Data = imageFile.split(",")[1];
        const mimeType = imageFile.split(";")[0].split(":")[1];

        return {
          inlineData: {
            mimeType,
            data: base64Data,
          },
        };
      })
    );

    const prompt = `Generate a concise and engaging description for a ${title} featuring the following images: in 150-200 words`;

    const result = await model.generateContent([prompt, ...imageParts]);
    const responseText = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    // const responseText = "HEY"

    if (responseText) {
      return NextResponse.json({ description: responseText });
    } else {
      return NextResponse.json({ error: "Failed to generate description." }, { status: 500 });
    }
  } catch (error) {
    console.error("Error generating description:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
