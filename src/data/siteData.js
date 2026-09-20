const LOGO_DARK_URL = "/logo-dark.webp";
const LOGO_LIGHT_URL = "/logo-light.webp";

export const siteData = {
  brand: {
    name: "Somnath Infotech",
    tagline: "HARDWARE & SYSTEM LAB",
    logoDark: LOGO_DARK_URL,
    logoLight: LOGO_LIGHT_URL,
    statusBadge: "Lab Open Today | Free Diagnostics",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "PC Builds", href: "#pc-builds" },
    { label: "Process", href: "#process" },
    { label: "Accessories", href: "#accessories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    badge: "Certified PC Hardware & System Engineers",
    headlinePart1: "Your Trusted",
    headlinePart2: "Computer & PC Experts",
    description: "Computer repair, custom PC building, reselling, and complete computer accessories & peripheral solutions engineered with rigorous diagnostic precision.",
    stats: [
      { value: "4.9/5", label: "500+ Local Clients" },
      { value: "Certified", label: "Bench Technicians" },
      { value: "< 24h", label: "Fast Diagnostics" },
      { value: "Genuine", label: "Parts Warranty" },
    ],
  },
  trustPillars: [
    { icon: "home_repair_service", title: "Computer Repair", desc: "Chip-Level & Component Fix" },
    { icon: "developer_board", title: "PC Building", desc: "Tailored Rig Architecture" },
    { icon: "laptop_chromebook", title: "Computer Sales", desc: "Certified Tested Systems" },
    { icon: "keyboard", title: "Accessories & Peripherals", desc: "Authorized Genuine Parts" },
  ],
  services: [
    {
      icon: "build",
      title: "Computer Repairing",
      desc: "Professional diagnosis, troubleshooting, upgrades and repair services.",
      features: [
        "Chip-level motherboard repair",
        "OS & malware / virus cleanup",
        "Broken screen & hinge fix",
        "Thermal repasting & acoustic tuning"
      ],
      color: "cyan",
      link: "#contact"
    },
    {
      icon: "sync",
      title: "Computer Reselling",
      desc: "Quality computers and components for home, office and professional use.",
      features: [
        "Certified 40-point tested pre-owned",
        "Refurbished enterprise laptops",
        "Warranty-backed hardware units",
        "Fair exchange & trade-in value"
      ],
      color: "cyan",
      link: "#contact"
    },
    {
      icon: "precision_manufacturing",
      title: "PC Building / Assembling",
      desc: "Custom-built PCs designed around your performance and budget requirements.",
      features: [
        "Clean stealth cable management",
        "Tuned BIOS, XMP/EXPO profiles",
        "Acoustic & thermal optimization",
        "24-Hour stress testing burn-in"
      ],
      color: "indigo",
      link: "#pc-builds"
    },
    {
      icon: "devices",
      title: "Accessories & Peripherals",
      desc: "Computer accessories and peripherals for work, gaming and everyday use.",
      features: [
        "Mechanical custom keyboards",
        "Ergonomic mice & desks",
        "144Hz+ high refresh rate monitors",
        "High-speed NVMe & Thunderbolt docks"
      ],
      color: "sky",
      link: "#accessories"
    },
  ],
  pcBuilds: [
    {
      tier: "01",
      icon: "desk",
      title: "Office & Productivity",
      desc: "Silent, instantaneous operation for multi-taskers, finance, spreadsheets, and seamless corporate operations.",
      specs: ["Ultra-quiet acoustic profile", "Multi-display 4K support", "Instantaneous NVMe boot", "Compact discrete chassis"],
      ideal: "Small Business",
      featured: false,
    },
    {
      tier: "02",
      icon: "sports_esports",
      title: "High-Performance Gaming",
      desc: "Maximum frames, low latency, advanced ray tracing performance, and synchronized ambient ARGB airflow.",
      specs: ["High-refresh rate 1440p / 4K", "Advanced AIO liquid cooling", "High-clocked DDR5 memory", "Tempered glass showcase"],
      ideal: "Enthusiasts",
      featured: true,
    },
    {
      tier: "03",
      icon: "movie_edit",
      title: "Creator & Workstation",
      desc: "Multi-threaded rendering, 10-bit HDR color grading, AI training, and professional compute workflows.",
      specs: ["ECC memory support ready", "Multi-GPU NVLink capable", "Thunderbolt 4 front panel", "Whisper-quiet under load"],
      ideal: "Creators & Editors",
      featured: false,
    },
    {
      tier: "04",
      icon: "dns",
      title: "Enterprise & Server",
      desc: "24/7 uptime, RAID-backed redundancy, remote IPMI management, and rack-mountable server solutions.",
      specs: ["Dual Xeon / EPYC support", "Hot-swappable drive bays", "Redundant PSU rails", "Enterprise SAS/NVMe"],
      ideal: "IT Infrastructure",
      featured: false,
    },
  ],
  stats: [
    { value: 500, suffix: "+", label: "Happy Clients Served", icon: "groups" },
    { value: 1200, suffix: "+", label: "Systems Repaired & Built", icon: "build" },
    { value: 50, suffix: "+", label: "Enterprise Partners", icon: "handshake" },
    { value: 99, suffix: "%", label: "Customer Satisfaction", icon: "thumb_up" },
  ],
  processSteps: [
    { step: "01", icon: "search", title: "Diagnose", desc: "Comprehensive multi-point hardware, voltage, and thermal diagnostic inspection.", stage: "Intake Stage" },
    { step: "02", icon: "request_quote", title: "Recommend", desc: "Clear fault report with transparent pricing options and turnaround timeline.", stage: "Approval Stage" },
    { step: "03", icon: "precision_manufacturing", title: "Repair", desc: "Precision bench repair, genuine component replacement, and ultrasonic dust cleaning.", stage: "Bench Work" },
    { step: "04", icon: "thermostat", title: "Test", desc: "Extensive hardware stress testing, benchmark loops, and temperature checks.", stage: "Burn-In Validation" },
    { step: "05", icon: "verified", title: "Deliver", desc: "System returned in peak working condition with warranty documentation.", stage: "Dispatch Ready" },
  ],
  accessories: [
    { icon: "keyboard", title: "Keyboards", desc: "Mechanical switches, hot-swappable boards, low-profile wireless, and stealth office editions.", stock: "IN STOCK" },
    { icon: "mouse", title: "Mice", desc: "Ergonomic productivity contours, ultralight optical sensors, and precision scroll wheels.", stock: "IN STOCK" },
    { icon: "monitor", title: "Monitors", desc: "High-refresh 144Hz-240Hz Fast IPS, curved ultrawides, and 100% sRGB color-accurate displays.", stock: "CUSTOM ORDER" },
    { icon: "hard_drive", title: "Storage", desc: "Gen4 & Gen5 NVMe SSDs with heatsinks, enterprise NAS hard drives, and portable backup drives.", stock: "IN STOCK" },
    { icon: "memory", title: "RAM Modules", desc: "High-frequency DDR4 and DDR5 dual-channel performance kits with verified Intel XMP & AMD EXPO profiles.", stock: "IN STOCK" },
    { icon: "grid_view", title: "Graphics Cards", desc: "NVIDIA GeForce RTX 40-series and AMD Radeon RX GPUs with zero-RPM fan modes and high TDP headroom.", stock: "IN STOCK" },
    { icon: "developer_board", title: "Motherboards", desc: "Intel & AMD chipset boards featuring reinforced PCIe 5.0 slots, Wi-Fi 6E/7, and robust power stages.", stock: "IN STOCK" },
    { icon: "cable", title: "Cables & Adapters", desc: "Braided HDMI 2.1, DisplayPort 1.4, multi-port USB-C hubs, PCIe riser cables, and modular power extensions.", stock: "IN STOCK" },
    { icon: "headset", title: "Other Peripherals", desc: "High-grade thermal compounds, spatial audio gaming headsets, 1080p/4K webcams, and surge protection strips.", stock: "IN STOCK" },
  ],
  contact: {
    phone1: "+91 98765 43210",
    phone2: "+91 91234 56789",
    email1: "support@somnathinfotech.com",
    email2: "sales@somnathinfotech.com",
    address: "Shop No. 4, Tech Plaza, Main Road",
    addressLine2: "Opp. City Center",
    hours: "Mon - Sat: 9:30 AM - 8:30 PM",
    hoursAlt: "Sunday: On Appointment",
  },
};
