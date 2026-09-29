const extractJson = (text) => {
    if (!text) return null;

    const cleaned = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (start === -1 || end === -1) return null;

    const jsonString = cleaned.slice(start, end + 1);

    try {
        return JSON.parse(jsonString);
    } catch (err) {
        console.error("JSON Parse Error:");
        console.error(jsonString);
        return null;
    }
};

export default extractJson;