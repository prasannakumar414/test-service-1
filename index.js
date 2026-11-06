import { greet } from "test-service-2";

console.log(greet(process.argv[2] ?? "world"));
