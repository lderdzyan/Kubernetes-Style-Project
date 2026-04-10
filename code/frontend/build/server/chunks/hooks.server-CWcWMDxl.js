const handle = async ({ event, resolve }) => {
  const lang = event.cookies.get("lang") || "hy";
  event.locals.lang = lang;
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", lang)
  });
};

export { handle };
//# sourceMappingURL=hooks.server-CWcWMDxl.js.map
