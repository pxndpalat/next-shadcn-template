import type { HomePageContent } from "./types";

export const MOCK_HOME_PAGE_CONTENT = {
  th: {
    brandName: "Logo",
    navigation: {
      ariaLabel: "เมนูหลัก",
      items: [
        { label: "หน้าแรก", href: "#top" },
        { label: "โซลูชัน", href: "#solutions" },
        { label: "อุตสาหกรรม", href: "#industries" },
        { label: "เกี่ยวกับเรา", href: "#about" },
        { label: "บทความ", href: "#articles" },
      ],
      signInLabel: "เข้าสู่ระบบ",
      contactLabel: "คุยโปรเจกต์กับเรา",
      compactContactLabel: "ติดต่อเรา",
    },
    hero: {
      eyebrow: "Software development & AI implementation",
      title: "พัฒนาซอฟต์แวร์ให้ตรงธุรกิจ",
      titleContinuation: "พร้อมต่อยอด AI ได้จริง",
      description:
        "ออกแบบและพัฒนาระบบให้เหมาะกับการทำงานจริงของธุรกิจ ตั้งแต่ระบบภายในองค์กร ไปจนถึงการเชื่อมต่อข้อมูลและ AI",
      primaryActionLabel: "คุยโปรเจกต์กับเรา",
      secondaryActionLabel: "ดูโซลูชัน",
      proofPoints: ["เข้าใจงานจริง", "ออกแบบให้ใช้งานได้จริง", "พร้อมต่อยอด AI"],
      imageAlt: "แล็ปท็อปแสดงแดชบอร์ดธุรกิจ พร้อมสรุปคลังสินค้าและข้อมูลจาก AI",
    },
    process: {
      title: "จากโจทย์ธุรกิจ สู่ระบบที่ใช้งานได้จริง",
      description: "เริ่มจากทำความเข้าใจงาน แล้วค่อยออกแบบ พัฒนา และต่อยอดอย่างเป็นระบบ",
      steps: [
        {
          number: "01",
          title: "วิเคราะห์กระบวนการทำงาน",
          description: "เข้าใจปัญหา จุดคอขวด และเป้าหมายของทีม",
          icon: "file-text",
        },
        {
          number: "02",
          title: "ออกแบบระบบให้เหมาะกับงาน",
          description: "วางโครงสร้างและประสบการณ์ใช้งานที่ตอบโจทย์",
          icon: "settings",
        },
        {
          number: "03",
          title: "พัฒนาและเชื่อมต่อข้อมูล",
          description: "เชื่อม workflow และระบบเดิมเข้าด้วยกัน",
          icon: "database",
        },
        {
          number: "04",
          title: "ต่อยอดด้วย AI",
          description: "เพิ่มประสิทธิภาพการทำงานและการตัดสินใจ",
          icon: "chart",
        },
      ],
    },
    solutions: {
      title: "Industry Solutions",
      subtitle: "ประสบการณ์พัฒนาระบบในหลายอุตสาหกรรม",
      description:
        "โครงสร้างระบบยืดหยุ่นตามลักษณะงาน พร้อมวางรากฐานสำหรับการเชื่อมต่อข้อมูลและ AI",
      itemDescription: "พื้นที่สำหรับรายละเอียดโซลูชันแบบย่อ",
      items: [
        { title: "Warehouse & Logistics", icon: "boxes" },
        { title: "Manufacturing & Operations", icon: "settings" },
        { title: "Retail & Order Management", icon: "shopping-cart" },
        { title: "Project & Internal Tools", icon: "file-text" },
        { title: "Quality Control", icon: "package-check" },
        { title: "AI & Data Automation", icon: "sparkles" },
      ],
    },
    differentiators: {
      title: "โซลูชันที่ออกแบบตามธุรกิจ ไม่ใช่ระบบสำเร็จรูปที่ต้องฝืนใช้",
      items: [
        { title: "พัฒนาตาม workflow จริง", icon: "users" },
        { title: "เชื่อมต่อข้อมูลง่าย", icon: "database" },
        { title: "พร้อมขยายต่อได้", icon: "chart" },
        { title: "ต่อยอด AI ได้จริง", icon: "sparkles" },
      ],
    },
    contact: {
      eyebrow: "Ready for what’s next",
      title: "พร้อมสร้างระบบที่พาธุรกิจไปต่อได้ไกลกว่าเดิม?",
      description: "คุยกับเราเพื่อวางแนวทางซอฟต์แวร์และ AI ที่เหมาะกับธุรกิจของคุณ",
      actionLabel: "เริ่มต้นโปรเจกต์",
      email: "hello@example.com",
    },
    footer: {
      companyName: "Company name",
      links: [
        { label: "หน้าแรก", href: "#top" },
        { label: "โซลูชัน", href: "#solutions" },
        { label: "เกี่ยวกับเรา", href: "#about" },
        { label: "ติดต่อเรา", href: "#contact" },
      ],
    },
  },
  en: {
    brandName: "Logo",
    navigation: {
      ariaLabel: "Main navigation",
      items: [
        { label: "Home", href: "#top" },
        { label: "Solutions", href: "#solutions" },
        { label: "Industries", href: "#industries" },
        { label: "About", href: "#about" },
        { label: "Articles", href: "#articles" },
      ],
      signInLabel: "Sign in",
      contactLabel: "Discuss your project",
      compactContactLabel: "Contact us",
    },
    hero: {
      eyebrow: "Software development & AI implementation",
      title: "Software tailored to your business",
      titleContinuation: "ready to grow with AI",
      description:
        "We design and build software around real business workflows, from internal systems to data integrations and AI.",
      primaryActionLabel: "Discuss your project",
      secondaryActionLabel: "View solutions",
      proofPoints: [
        "Built around real work",
        "Designed for practical use",
        "Ready to grow with AI",
      ],
      imageAlt:
        "Laptop showing a business dashboard with warehouse and AI insight cards",
    },
    process: {
      title: "From business challenge to working software",
      description:
        "We understand the work first, then design, build, and extend the system deliberately.",
      steps: [
        {
          number: "01",
          title: "Analyze the workflow",
          description:
            "Understand your team’s problems, bottlenecks, and goals.",
          icon: "file-text",
        },
        {
          number: "02",
          title: "Design for the work",
          description:
            "Shape a system and experience that fits the real process.",
          icon: "settings",
        },
        {
          number: "03",
          title: "Build and connect data",
          description:
            "Connect workflows and existing systems into one solution.",
          icon: "database",
        },
        {
          number: "04",
          title: "Extend with AI",
          description: "Improve productivity and support better decisions.",
          icon: "chart",
        },
      ],
    },
    solutions: {
      title: "Industry Solutions",
      subtitle: "Experience building systems across industries",
      description:
        "Flexible foundations that fit the work and prepare your business for connected data and AI.",
      itemDescription: "Space for a concise solution overview.",
      items: [
        { title: "Warehouse & Logistics", icon: "boxes" },
        { title: "Manufacturing & Operations", icon: "settings" },
        { title: "Retail & Order Management", icon: "shopping-cart" },
        { title: "Project & Internal Tools", icon: "file-text" },
        { title: "Quality Control", icon: "package-check" },
        { title: "AI & Data Automation", icon: "sparkles" },
      ],
    },
    differentiators: {
      title:
        "Solutions designed around your business—not software you have to work around",
      items: [
        { title: "Built for real workflows", icon: "users" },
        { title: "Easy data integration", icon: "database" },
        { title: "Ready to scale", icon: "chart" },
        { title: "Practical AI extensions", icon: "sparkles" },
      ],
    },
    contact: {
      eyebrow: "Ready for what’s next",
      title: "Ready to build a system that moves your business forward?",
      description:
        "Talk with us about the software and AI approach that fits your business.",
      actionLabel: "Start a project",
      email: "hello@example.com",
    },
    footer: {
      companyName: "Company name",
      links: [
        { label: "Home", href: "#top" },
        { label: "Solutions", href: "#solutions" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
} satisfies Record<string, HomePageContent>;
