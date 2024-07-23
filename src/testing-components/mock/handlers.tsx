import { http } from "msw";

export const handlers = [
    http.get('https://google.com', (req, res, ctx) => {
      return res(ctx.json([{id: 1, title: 'Mock Photo'}]));
    }),
  ];
  