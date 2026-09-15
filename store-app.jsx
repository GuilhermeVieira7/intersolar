const { useState, useEffect } = React;

/*
 * Roteamento simples baseado em window.location.pathname — sem biblioteca de
 * roteamento, consistente com o restante do site (multi-página estática).
 * /loja            -> catálogo
 * /loja/<slug>      -> página de produto
 */
const parseRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  const parts = path.split('/').filter(Boolean); // ['loja', 'slug?']
  const slug = parts.length > 1 ? parts[1] : null;
  return { slug };
};

const AppLoja = () => {
  const [cursorState, setCursorState] = useState({ text: null });
  const [route, setRoute] = useState(parseRoute());

  useEffect(() => {
    const onPop = () => setRoute(parseRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.slug]);

  return (
    <div className="app-loja-wrapper">
      <Cursor cursorState={cursorState} />
      <FloatingWhatsApp />
      <Nav setCursorState={setCursorState} />

      <main>
        {route.slug ? (
          <window.ProductPage slug={route.slug} setCursorState={setCursorState} />
        ) : (
          <window.StoreCatalog setCursorState={setCursorState} />
        )}
      </main>

      <Footer setCursorState={setCursorState} />
    </div>
  );
};

window.AppLoja = AppLoja;
