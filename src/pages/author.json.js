const content = {
    name: "VOID_OLI",
    role: "student",
    site: "https://www.twitch.tv/void_oli",
};

export function GET() {
    return new Response(JSON.stringify(content));
}
