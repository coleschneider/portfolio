import db from '../../db';

db.initialize().then((ds) => {
  console.log(ds);
});
export async function GET(request: Request) {
  return new Response('Hello, Next.js!');
}
