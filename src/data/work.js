/**
 * All work-page content.
 *
 * IMAGES — every `image` field is null until you supply one. A null renders a
 * designed plate (numeral + caption) instead of a broken frame, so the page is
 * complete either way. To add one: drop the file in `public/plates/` and set
 * image: '/plates/shop-ai.jpg'. Add `alt` whenever you add an image.
 */

export const profile = {
  name: 'Karthik Gogisetty',
  role: 'Senior Machine Learning Engineer',
  company: 'IDfy',
  location: 'India',
  years: '2022 — 2026',
  summary:
    'Senior AI Engineer with 3+ years of experience in orchestrating production-grade AI/ML platforms and intelligent automation solutions. Expert in building and deploying production-grade AI systems at scale across computer vision, NLP, and generative AI.',
  email: 'karthikgogisetty@gmail.com',
  githubUrl: 'https://github.com/karthikgogisetty',
  linkedinUrl: 'https://www.linkedin.com/in/karthik-gogisetty-a6772915b/',
  mediumUrl: 'https://medium.com/@karthikgogisetty',
};

export const cover = {
  kicker: 'Selected work',
  title: 'Production AI for identity verification',
  standfirst:
    'Fraud detection, document forensics and multilingual extraction — six systems built at IDfy and put in front of real traffic.',
  image: '/plates/fig-lead.svg',
  alt: 'System overview: documents and merchant images flow through validation, extraction and classification into fraud analysis and a decision',
  w: 2100,
  h: 900,
};

export const cases = [
  {
    id: 'shop-ai',
    numeral: 'I',
    title: 'Shop AI',
    subtitle: 'Merchant image classification',
    standfirst:
      'Production merchant image classification system achieving 90% accuracy, processing 100K+ images monthly.',
    body: [
      'Built and deployed as an API that sits directly in the merchant onboarding path, classifying shopfront photographs at the point of submission.',
      'The system runs continuously against live traffic, which shaped every decision about latency, failure modes and how much confidence was needed before a result could be trusted.',
    ],
    facts: [
      ['Role', 'Design, training, deployment'],
      ['Year', '2023 — 2025'],
      ['Stack', 'Computer Vision, Classification'],
      ['Result', '90% accuracy · 100K+ images / month'],
    ],
    image: '/plates/fig-shop-ai.svg',
    alt: 'Schematic figure',
    w: 1200,
    h: 900,
  },
  {
    id: 'forgery-detection',
    numeral: 'II',
    title: 'Forgery Detection Service',
    subtitle: 'Document tampering',
    standfirst:
      'High-precision document tampering detection service with 95% precision, integrated into core identity verification pipelines.',
    body: [
      'Tampering detection is a precision problem before it is an accuracy problem — a false accusation costs far more than a missed edit, so the model was tuned against that asymmetry.',
      'It runs inside the core verification pipeline rather than as an offline check, alongside 90% recall.',
    ],
    facts: [
      ['Role', 'Model development, integration'],
      ['Year', '2023 — 2025'],
      ['Stack', 'Deep Learning, Computer Vision'],
      ['Result', '95% precision · 90% recall'],
    ],
    image: '/plates/fig-forgery.svg',
    alt: 'Schematic figure',
    w: 1200,
    h: 900,
  },
  {
    id: 'document-ocr',
    numeral: 'III',
    title: 'Document OCR',
    subtitle: 'Multilingual extraction',
    standfirst:
      'Multilingual information extraction system for Southeast Asian markets with 15% accuracy improvement and 8s latency reduction.',
    body: [
      'Extraction across Southeast Asian scripts, where the same field can appear in several writing systems and layouts vary by issuing authority.',
      'The eight seconds removed from the request path mattered as much as the accuracy gain — it moved the service from noticeably slow to unremarkable.',
    ],
    facts: [
      ['Role', 'Optimisation, evaluation'],
      ['Year', '2024'],
      ['Stack', 'NLP, OCR, Information Extraction'],
      ['Result', '+15% accuracy · −8s latency'],
    ],
    image: '/plates/fig-ocr.svg',
    alt: 'Schematic figure',
    w: 1200,
    h: 900,
  },
  {
    id: 'document-validation',
    numeral: 'IV',
    title: 'Document Validation',
    subtitle: 'Identification and versioning',
    standfirst:
      'In-house classifiers using YOLOv8 models for document identification and version detection, with an LLM fallback for unrecognised document types.',
    body: [
      'Identity documents are reissued in new versions constantly, so the classifier needed to recognise not just the document type but which edition of it was on the page.',
      'Anything the classifiers could not place falls through to an LLM rather than failing outright.',
    ],
    facts: [
      ['Role', 'Architecture, training'],
      ['Year', '2024 — 2025'],
      ['Stack', 'YOLOv8, LLMs'],
      ['Result', 'Type and version detection with fallback'],
    ],
    image: '/plates/fig-validation.svg',
    alt: 'Schematic figure',
    w: 1200,
    h: 900,
  },
  {
    id: 'dsl-generator',
    numeral: 'V',
    title: 'DSL Generator Bot',
    subtitle: 'Workflow automation',
    standfirst:
      'An LLM-based tool to automate orchestrator workflow creation, reducing configuration time by 70%.',
    body: [
      'Orchestrator workflows were written by hand in a domain-specific language — accurate, but slow and easy to get subtly wrong.',
      'The tool turns that authoring step into a described intent, cutting configuration time by roughly two thirds.',
    ],
    facts: [
      ['Role', 'Design, implementation'],
      ['Year', '2025'],
      ['Stack', 'LLM, Python, Automation'],
      ['Result', '70% less configuration time'],
    ],
    image: '/plates/fig-dsl.svg',
    alt: 'Schematic figure',
    w: 1200,
    h: 900,
  },
  {
    id: 'melanoma',
    numeral: 'VI',
    title: 'Melanoma Classification',
    subtitle: 'Dermatoscopic imaging',
    standfirst:
      'Deep learning models for melanoma detection using 3,000+ dermatoscopic images with data augmentation.',
    body: [
      'A study in working from a small clinical dataset, where augmentation carries much of the weight that additional data would otherwise provide.',
    ],
    facts: [
      ['Role', 'Research, modelling'],
      ['Year', '2022'],
      ['Stack', 'PyTorch, Computer Vision'],
      ['Result', '3,000+ images, augmented'],
    ],
    image: '/plates/fig-melanoma.svg',
    alt: 'Schematic figure',
    w: 1200,
    h: 900,
  },
];

export const experience = [
  {
    role: 'Senior Machine Learning Engineer',
    company: 'IDfy',
    period: 'Oct 2025 — Present',
    summary: 'Spearheading AI-powered fraud detection initiatives across KYC & KYB workflows.',
    points: [
      'Improving detection precision by 20% and reducing manual review overhead by 35%.',
      'Architecting scalable ML infrastructure leveraging LLMs, computer vision, and NLP.',
      'Leading technical roadmap planning and sprint execution.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'IDfy',
    period: 'Jul 2023 — Oct 2025',
    summary: 'Engineered and deployed production-grade AI systems for classification and verification.',
    points: [
      'Engineered and deployed Shop AI API, a merchant classification system with 90% accuracy.',
      'Built document tampering detection service with 95% precision and 90% recall.',
      'Optimized Information Extraction APIs for Southeast Asian markets, reducing latency by 8 seconds.',
      'Automated support workflows using LLM-powered agents, accelerating resolution by 3x.',
    ],
  },
  {
    role: 'Technology Intern, Machine Learning',
    company: 'IDfy',
    period: 'Jan 2023 — Jul 2023',
    summary: 'Conducted benchmarking and developed MLOps infrastructure.',
    points: [
      'Achieved 92% mAP for production deployment using YOLO and Faster R-CNN.',
      'Improved PII masking accuracy from 89% to 99% for CKYC verification.',
      'Implemented MLOps infrastructure across 10+ production projects.',
    ],
  },
  {
    role: 'Mechatronics Intern',
    company: 'InfinityX Innovations',
    period: 'Jun 2022 — Aug 2022',
    summary: 'Developed embedded automation systems for battery management.',
    points: [
      'Developed embedded systems using Arduino and Raspberry Pi for real-time control.',
      'Designed and tested IoT-enabled hardware-software interfaces for autonomous BMS.',
    ],
  },
];

export const articles = [
  {
    id: 1,
    title: "Schrödinger's Cat Lives Inside Your Neural Network",
    summary:
      'A deep dive into superposition — exploring how quantum concepts manifest in neural networks and machine learning models.',
    href: 'https://medium.com/@karthikgogisetty/schrödingers-cat-lives-inside-your-neural-network-a-deep-dive-into-superposition-f5a5ce164c7f',
    date: '2024-12-30',
  },
  {
    id: 2,
    title: 'Geometry of Superposition inside a Neural Network',
    summary:
      'Second article exploring the geometry of contents & concepts of the first article in a more mathematically rigorous way.',
    href: null,
    date: null,
  },
];

export const index = [
  ['AI / ML', ['LLMs', 'Computer Vision', 'NLP', 'RAG', 'Agentic Workflows', 'Deep Learning', 'MLOps']],
  ['Languages', ['Python', 'C++', 'SQL', 'JavaScript', 'TypeScript']],
  ['Cloud & DevOps', ['GCP', 'AWS', 'Kubernetes', 'Docker', 'Vertex AI', 'CI/CD']],
  ['Frameworks', ['PyTorch', 'TensorFlow', 'Hugging Face', 'FastAPI', 'React', 'Git']],
];
