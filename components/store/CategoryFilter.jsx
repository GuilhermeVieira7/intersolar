const CategoryFilter = ({ active, onChange }) => {
  return (
    <div className="category-filter" role="tablist" aria-label="Filtrar por categoria">
      {window.STORE_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={active === cat.id}
          className={`category-pill ${active === cat.id ? 'is-active' : ''}`}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}

      <style>{`
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          min-width: 0;
        }

        .category-pill {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-text);
          background: var(--color-white);
          border: 1.5px solid var(--color-border);
          border-radius: 9999px;
          padding: 0.65rem 1.25rem;
          cursor: pointer;
          white-space: nowrap;
          transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
        }

        .category-pill:hover { border-color: var(--color-green); color: var(--color-green); }

        .category-pill.is-active {
          background: var(--color-green-deep);
          border-color: var(--color-green-deep);
          color: var(--color-yellow);
        }

        @media (max-width: 700px) {
          .category-filter {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 0.35rem;
            scrollbar-width: none;
          }
          .category-filter::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </div>
  );
};

window.CategoryFilter = CategoryFilter;
