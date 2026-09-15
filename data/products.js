/*
 * INTERSOLAR — Catálogo da loja (dados de demonstração)
 *
 * ATENÇÃO: os produtos abaixo são EXEMPLOS PLACEHOLDER para viabilizar a
 * primeira versão da loja. Preços, links de pagamento Asaas, fichas técnicas
 * e imagens reais ainda precisam ser fornecidos pela equipe da InterSolar e
 * substituídos aqui antes de publicar em produção.
 *
 * Para adicionar um novo produto, basta incluir um novo objeto neste array —
 * nenhum outro arquivo precisa ser tocado.
 */

window.STORE_CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'modulos', label: 'Módulos solares' },
  { id: 'inversores', label: 'Inversores' },
  { id: 'microinversores', label: 'Microinversores' },
  { id: 'kits', label: 'Kits solares' },
  { id: 'estruturas', label: 'Estruturas' },
  { id: 'acessorios', label: 'Acessórios' },
];

window.PRODUCTS = [
  {
    id: 1,
    slug: 'modulo-solar-610w-canadian',
    category: 'modulos',
    brand: 'Canadian Solar',
    model: 'CS7N-610MS',
    title: 'Módulo Solar 610W N-Type',
    shortDescription: 'Módulo fotovoltaico de alta potência com tecnologia N-Type TOPCon, indicado para projetos residenciais e comerciais.',
    description: 'Módulo solar de alta eficiência com célula N-Type TOPCon, desenvolvido para entregar mais geração de energia por metro quadrado. Indicado tanto para instalações residenciais quanto comerciais que buscam otimizar o uso do telhado disponível.',
    price: 899,
    pixPrice: 809.1,
    installments: { count: 12, value: 84.16 },
    power: '610 W',
    efficiency: '22,6%',
    warranty: '30 anos de garantia de desempenho*',
    images: [],
    features: [
      'Tecnologia N-Type TOPCon',
      'Alta densidade de potência',
      'Baixo coeficiente de temperatura',
      'Moldura reforçada para maior resistência mecânica',
    ],
    specifications: [
      { label: 'Potência nominal', value: '610 W *' },
      { label: 'Eficiência do módulo', value: '22,6% *' },
      { label: 'Tecnologia de célula', value: 'N-Type TOPCon *' },
      { label: 'Tensão de circuito aberto (Voc)', value: 'sob consulta *' },
      { label: 'Corrente de curto-circuito (Isc)', value: 'sob consulta *' },
      { label: 'Dimensões', value: 'sob consulta *' },
      { label: 'Peso', value: 'sob consulta *' },
      { label: 'Garantia de produto', value: '15 anos *' },
      { label: 'Garantia de desempenho', value: '30 anos *' },
    ],
    datasheetUrl: '',
    asaasPaymentUrl: '',
  },
  {
    id: 2,
    slug: 'modulo-solar-550w-jinko',
    category: 'modulos',
    brand: 'Jinko Solar',
    model: 'Tiger Neo 550',
    title: 'Módulo Solar 550W N-Type',
    shortDescription: 'Módulo fotovoltaico N-Type de alta confiabilidade, com ótimo custo-benefício para sistemas residenciais.',
    description: 'Módulo solar de 550W com célula N-Type, equilibrando eficiência de geração e custo-benefício. Uma opção sólida para quem busca qualidade InterSolar sem abrir mão de performance ao longo dos anos.',
    price: 749,
    pixPrice: 674.1,
    installments: { count: 12, value: 70.14 },
    power: '550 W',
    efficiency: '21,4%',
    warranty: '30 anos de garantia de desempenho*',
    images: [],
    features: [
      'Tecnologia N-Type de alta eficiência',
      'Boa performance em baixa luminosidade',
      'Resistente a condições climáticas adversas',
      'Excelente relação custo-benefício',
    ],
    specifications: [
      { label: 'Potência nominal', value: '550 W *' },
      { label: 'Eficiência do módulo', value: '21,4% *' },
      { label: 'Tecnologia de célula', value: 'N-Type *' },
      { label: 'Tensão de circuito aberto (Voc)', value: 'sob consulta *' },
      { label: 'Corrente de curto-circuito (Isc)', value: 'sob consulta *' },
      { label: 'Dimensões', value: 'sob consulta *' },
      { label: 'Peso', value: 'sob consulta *' },
      { label: 'Garantia de produto', value: '15 anos *' },
      { label: 'Garantia de desempenho', value: '30 anos *' },
    ],
    datasheetUrl: '',
    asaasPaymentUrl: '',
  },
  {
    id: 3,
    slug: 'inversor-5kw-growatt',
    category: 'inversores',
    brand: 'Growatt',
    model: 'MIN 5000TL-X',
    title: 'Inversor 5kW Monofásico',
    shortDescription: 'Inversor string monofásico de 5kW, indicado para sistemas residenciais de pequeno e médio porte.',
    description: 'Inversor solar monofásico com alta eficiência de conversão, monitoramento remoto via aplicativo e proteções elétricas completas. Projetado para operar com estabilidade em sistemas fotovoltaicos residenciais.',
    price: 3490,
    pixPrice: 3141,
    installments: { count: 12, value: 326.30 },
    power: '5 kW',
    efficiency: '97,6%',
    warranty: '5 anos de garantia de fábrica*',
    images: [],
    features: [
      'Monitoramento remoto via aplicativo',
      'Alta eficiência de conversão',
      'Proteção contra surtos e curto-circuito',
      'Instalação e configuração simplificadas',
    ],
    specifications: [
      { label: 'Potência nominal de saída', value: '5 kW *' },
      { label: 'Eficiência máxima', value: '97,6% *' },
      { label: 'Número de entradas MPPT', value: 'sob consulta *' },
      { label: 'Tensão de operação', value: 'sob consulta *' },
      { label: 'Grau de proteção', value: 'IP65 *' },
      { label: 'Peso', value: 'sob consulta *' },
      { label: 'Garantia de fábrica', value: '5 anos (extensível) *' },
    ],
    datasheetUrl: '',
    asaasPaymentUrl: '',
  },
  {
    id: 4,
    slug: 'microinversor-dual-mppt',
    category: 'microinversores',
    brand: 'Deye',
    model: 'SUN-M80G3',
    title: 'Microinversor Dual MPPT',
    shortDescription: 'Microinversor com dois rastreadores MPPT independentes, ideal para telhados com sombreamento parcial.',
    description: 'Microinversor com dois canais MPPT independentes, permitindo maior aproveitamento de energia em telhados com múltiplas orientações ou sombreamento parcial. Monitoramento individual por módulo.',
    price: 1290,
    pixPrice: 1161,
    installments: { count: 12, value: 120.65 },
    power: 'até 2 módulos',
    efficiency: '96,5%',
    warranty: '10 anos de garantia de fábrica*',
    images: [],
    features: [
      'Monitoramento individual por módulo',
      'Dois rastreadores MPPT independentes',
      'Maior segurança elétrica (baixa tensão DC)',
      'Ideal para telhados com sombreamento parcial',
    ],
    specifications: [
      { label: 'Canais MPPT', value: '2 *' },
      { label: 'Eficiência máxima', value: '96,5% *' },
      { label: 'Módulos compatíveis por unidade', value: 'até 2 *' },
      { label: 'Grau de proteção', value: 'IP67 *' },
      { label: 'Garantia de fábrica', value: '10 anos *' },
    ],
    datasheetUrl: '',
    asaasPaymentUrl: '',
  },
  {
    id: 5,
    slug: 'kit-solar-residencial-3-3kwp',
    category: 'kits',
    brand: 'InterSolar',
    model: 'Kit Residencial 3,3 kWp',
    title: 'Kit Solar Residencial 3,3 kWp',
    shortDescription: 'Kit completo para pequenos sistemas residenciais, com módulos, inversor e estrutura de fixação inclusos.',
    description: 'Kit solar pensado para residências com consumo de energia mais enxuto. Inclui módulos fotovoltaicos, inversor e estrutura de fixação selecionados pela equipe técnica da InterSolar para garantir compatibilidade e desempenho do sistema.',
    price: 12900,
    pixPrice: 11610,
    installments: { count: 12, value: 1204.60 },
    power: '3,3 kWp',
    efficiency: '—',
    warranty: 'Garantia dos fabricantes inclusos*',
    images: [],
    features: [
      'Módulos, inversor e estrutura inclusos',
      'Dimensionado para consumo residencial menor',
      'Componentes selecionados pela equipe técnica InterSolar',
      'Suporte da InterSolar durante todo o processo',
    ],
    specifications: [
      { label: 'Potência do sistema', value: '3,3 kWp *' },
      { label: 'Módulos inclusos', value: 'sob consulta *' },
      { label: 'Inversor incluso', value: 'sob consulta *' },
      { label: 'Estrutura de fixação', value: 'telha cerâmica / metálica *' },
      { label: 'Geração média estimada', value: 'sob consulta *' },
    ],
    datasheetUrl: '',
    asaasPaymentUrl: '',
  },
];

/* Utilitários simples de consulta ao catálogo — usados pelas páginas da loja. */
window.StoreData = {
  getAll() {
    return window.PRODUCTS;
  },
  getBySlug(slug) {
    return window.PRODUCTS.find((p) => p.slug === slug) || null;
  },
  getByCategory(categoryId) {
    if (!categoryId || categoryId === 'todos') return window.PRODUCTS;
    return window.PRODUCTS.filter((p) => p.category === categoryId);
  },
  getRelated(product, limit = 3) {
    if (!product) return [];
    return window.PRODUCTS
      .filter((p) => p.id !== product.id && p.category === product.category)
      .concat(window.PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category))
      .slice(0, limit);
  },
  formatBRL(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },
};
