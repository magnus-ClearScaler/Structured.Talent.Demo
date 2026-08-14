import { NextRequest, NextResponse } from 'next/server';

const PASSWORD = '120226';
const COOKIE = 'demo-auth';

function gate(error: boolean) {
  const body = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Preview</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Inter",system-ui,sans-serif;background:#0a0a0a;color:#fafafa;min-height:100vh;display:grid;place-items:center;padding:1.5rem}
  form{width:100%;max-width:340px}
  label{display:block;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:#888;margin-bottom:.75rem}
  input{width:100%;padding:.85rem 1rem;background:#0a0a0a;border:1px solid #2a2a2a;color:#fafafa;font-size:1rem;font-family:inherit}
  input:focus{outline:none;border-color:#fafafa}
  button{width:100%;margin-top:.75rem;padding:.85rem;background:#fafafa;color:#0a0a0a;border:0;font-weight:500;font-size:.95rem;cursor:pointer;font-family:inherit}
  .err{color:#ff7b7b;font-size:.85rem;margin-top:.75rem;min-height:1.2em}
</style>
</head>
<body>
<form method="POST">
  <label for="p">Password</label>
  <input id="p" name="p" type="password" autofocus required>
  <button type="submit">Continue</button>
  <div class="err">${error ? 'Incorrect password.' : ''}</div>
</form>
</body>
</html>`;
  return new NextResponse(body, {
    status: 401,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

export async function middleware(req: NextRequest) {
  if (req.cookies.get(COOKIE)?.value === PASSWORD) {
    return NextResponse.next();
  }
  if (req.method === 'POST') {
    const form = await req.formData();
    if (form.get('p') === PASSWORD) {
      const url = new URL(req.nextUrl.pathname + req.nextUrl.search, req.url);
      const res = NextResponse.redirect(url, 303);
      res.cookies.set(COOKIE, PASSWORD, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 60 * 60 * 24 * 30,
      });
      return res;
    }
    return gate(true);
  }
  return gate(false);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)'],
};
