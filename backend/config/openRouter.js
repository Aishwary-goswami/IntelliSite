
export const generateResponse = async (prompt) => {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'openrouter/free',
            messages: [
                {
                    role: "system",
                    content: `
You are an expert web developer.

Return ONLY valid JSON.

Do NOT wrap the JSON in markdown.
Do NOT use triple backticks.
Do NOT include explanations.
The response must be directly parseable using JSON.parse().

The "code" field must contain valid HTML with all quotes and newlines properly escaped as valid JSON.
`
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: 0.2
        }),
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error("openrouter error" + err);
    }
    const data = await res.json();
    return data.choices[0].message.content;
}

// model: ""