import { NextResponse } from "next/server"


export async function POST(request) {
  const { text } = await request.json()

  // // --- Gemini (commented out, may use later) ---
  // const response = await fetch(
  //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
  //   {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       contents: [
  //         {
  //           parts: [
  //             {
  //               text: `You are a financial data formatter for Indian financial data. The following is a raw response from a financial RAG system. All financial figures are in Indian Rupees in crores (₹ crores).
  //
  // IMPORTANT: Every number in your response MUST have "₹" before it and "crores" after it. Do not write any number without these units.
  //
  // Rewrite the response as clean, well-structured markdown:
  // - Use bullet points for each component, each showing: Component Name: ₹ [value] crores
  // - Show the calculation clearly
  // - Bold the final answer with ₹ and crores
  //
  // Raw response:
  // ${text}`,
  //             },
  //           ],
  //         },
  //       ],
  //     }),
  //   }
  // )
  // const data = await response.json()
  // const formatted = data?.candidates?.[0]?.content?.parts?.[0]?.text || text

  // --- OpenAI GPT ---
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a financial data formatter for Indian financial data. All financial figures are in Indian Rupees in crores (₹ crores).
IMPORTANT: Every number in your response MUST have "₹" before it and "crores" after it. Do not write any number without these units.
Rewrite the response as clean, well-structured markdown:
- Use bullet points for each component, each showing: Component Name: ₹ [value] crores
- Show the calculation clearly
- Bold the final answer with ₹ and crores`,
        },
        {
          role: "user",
          content: text,
        },
      ],
    }),
  })

  const data = await response.json()
  const formatted = data?.choices?.[0]?.message?.content || text

  return NextResponse.json({ formatted })
}
