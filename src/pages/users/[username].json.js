const usernames = ["void_oli", "jessiowe", "jakahashi21", "changojuje", "malditoAndress", "NonuxCs"];

export function GET({ params }) {
    const { username } = params;

    return new Response(JSON.stringify({ name: username }));
}

export function getStaticPaths() {
    return usernames.map((username) => ({ params: { username } }));
}
