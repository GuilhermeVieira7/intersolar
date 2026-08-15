/* INTERSOLAR — Ícones SVG compartilhados (padrão Lucide, stroke-based) */

const IconBase = ({ children, size = 24, strokeWidth = 1.75, className = '', style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ display: 'block', flexShrink: 0, ...style }}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconSun = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" /><path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </IconBase>
);

const IconHouse = (props) => (
  <IconBase {...props}>
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </IconBase>
);

const IconZap = (props) => (
  <IconBase {...props}>
    <path d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z" />
  </IconBase>
);

const IconBatteryCharging = (props) => (
  <IconBase {...props}>
    <path d="m11 7-3 5h4l-3 5" />
    <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
    <path d="M22 14v-4" />
    <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
  </IconBase>
);

const IconGauge = (props) => (
  <IconBase {...props}>
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </IconBase>
);

const IconShieldCheck = (props) => (
  <IconBase {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

const IconArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </IconBase>
);

const IconArrowUpRight = (props) => (
  <IconBase {...props}>
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </IconBase>
);

const IconTrendingDown = (props) => (
  <IconBase {...props}>
    <path d="M16 17h6v-6" /><path d="m22 17-8.5-8.5-5 5L2 7" />
  </IconBase>
);

const IconLeaf = (props) => (
  <IconBase {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </IconBase>
);

const IconCircleDollarSign = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </IconBase>
);

const IconBuilding2 = (props) => (
  <IconBase {...props}>
    <path d="M10 12h4" /><path d="M10 8h4" />
    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
  </IconBase>
);

const IconFactory = (props) => (
  <IconBase {...props}>
    <path d="M12 16h.01" /><path d="M16 16h.01" />
    <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
    <path d="M8 16h.01" />
  </IconBase>
);

const IconChevronDown = (props) => (
  <IconBase {...props}><path d="m6 9 6 6 6-6" /></IconBase>
);

const IconPlus = (props) => (
  <IconBase {...props}><path d="M5 12h14" /><path d="M12 5v14" /></IconBase>
);

const IconMinus = (props) => (
  <IconBase {...props}><path d="M5 12h14" /></IconBase>
);

const IconCheck = (props) => (
  <IconBase {...props}><path d="M20 6 9 17l-5-5" /></IconBase>
);

const IconMapPin = (props) => (
  <IconBase {...props}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

const IconPhone = (props) => (
  <IconBase {...props}>
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </IconBase>
);

const IconInstagram = (props) => (
  <IconBase {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </IconBase>
);

const IconMessageCircle = (props) => (
  <IconBase {...props}>
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  </IconBase>
);

const IconMenu = (props) => (
  <IconBase {...props}><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></IconBase>
);

const IconX = (props) => (
  <IconBase {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></IconBase>
);

const IconWrench = (props) => (
  <IconBase {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
  </IconBase>
);

/* Ícone autoral: painel solar (não existe no set padrão do Lucide) */
const IconSolarPanel = (props) => (
  <IconBase {...props}>
    <path d="M3 9.5 12 4l9 5.5" />
    <path d="M4.5 10.5v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9" />
    <path d="M4.5 14.5h15" />
    <path d="M9.5 10.5v10" />
    <path d="M14.5 10.5v10" />
  </IconBase>
);

window.Icons = {
  Sun: IconSun,
  House: IconHouse,
  Zap: IconZap,
  BatteryCharging: IconBatteryCharging,
  Gauge: IconGauge,
  ShieldCheck: IconShieldCheck,
  ArrowRight: IconArrowRight,
  ArrowUpRight: IconArrowUpRight,
  TrendingDown: IconTrendingDown,
  Leaf: IconLeaf,
  CircleDollarSign: IconCircleDollarSign,
  Building2: IconBuilding2,
  Factory: IconFactory,
  ChevronDown: IconChevronDown,
  Plus: IconPlus,
  Minus: IconMinus,
  Check: IconCheck,
  MapPin: IconMapPin,
  Phone: IconPhone,
  Instagram: IconInstagram,
  MessageCircle: IconMessageCircle,
  Menu: IconMenu,
  X: IconX,
  Wrench: IconWrench,
  SolarPanel: IconSolarPanel,
};
