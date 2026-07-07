// Hugo static site: use inject() instead of @vercel/analytics/next (Next.js only).
import { inject } from "@vercel/analytics";

inject({
  mode: 'production',
});
