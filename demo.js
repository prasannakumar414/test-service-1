const base = process.env.GREETING_URL ?? "http://127.0.0.1:3002";
const url = new URL("/greet", base);
url.searchParams.set("name", process.argv[2] ?? "world");
const response = await fetch(url);
if (!response.ok) throw new Error(`Greeting request failed: ${response.status}`);
console.log((await response.json()).message);
