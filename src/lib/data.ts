export const projects = [
  {
    title: "Nokia 5G PPE Safety Detection System",
    description:
      "AI-powered mobile safety monitoring using YOLOv11 computer vision on Nokia's 360° cameras mounted on autonomous Temi robots. Achieved 94% mAP50 accuracy with sub-250ms latency via Nokia's RXRM platform and 5G URLLC connectivity.",
    tags: ["YOLOv11", "Nokia RXRM", "5G URLLC", "Computer Vision"],
    icon: "🦺",
    link: "#",
  },
  {
    title: "LTE-Based Water Level Sensing",
    description:
      "Thesis research leveraging 4G LTE signal characteristics (RSRP, RSRQ, SINR) for environmental sensing in NSW Mid North Coast. Achieved 4-6cm water level accuracy using signal propagation analysis for flood monitoring.",
    tags: ["4G LTE", "Signal Processing", "Environmental Sensing", "Python"],
    icon: "🌊",
    link: "#",
  },
  {
    title: "3-Beam Pattern-Reconfigurable Antenna",
    description:
      "Designed and simulated a beam-steering antenna at 4.98 GHz using ANSYS HFSS with electronically switchable parasitic directors. Achieved ±30° beam steering with 6.6 dBi peak gain and S₁₁ ≤ -15dB impedance matching.",
    tags: ["HFSS", "Antenna Design", "RF Engineering", "Beam Steering"],
    icon: "📶",
    link: "#",
  },
  {
    title: "2x2 MIMO-OFDMA Simulator",
    description:
      "Built a complete MATLAB simulator for multi-user MIMO-OFDM systems over frequency-selective Rayleigh fading channels. Implemented QPSK modulation, subband allocation, and zero-forcing equalization with BER analysis.",
    tags: ["MATLAB", "MIMO", "OFDMA", "Wireless Communications"],
    icon: "📡",
    link: "#",
  },
  {
    title: "5G Homelab & ML Energy Optimization",
    description:
      "Complete 5G network simulation using Open5GS core, srsRAN gNB/UE with ZeroMQ virtual radios. Implementing machine learning pipelines for network energy optimization without licensed spectrum.",
    tags: ["Open5GS", "srsRAN", "5G Core", "Machine Learning", "Work in Progress"],
    icon: "🏠",
    link: "#",
  },
];

export const skills = [
  {
    category: "Telecommunications",
    items: [
      "5G/4G LTE Networks & Architecture",
      "MIMO-OFDM Systems",
      "Network Slicing & QoS",
      "Open5GS & srsRAN Simulation",
      "Signal Processing & Analysis",
      "Shannon Capacity & Link Budget",
      "Fixed Wireless Access (FWA)",
    ],
  },
  {
    category: "RF & Antenna Engineering",
    items: [
      "ANSYS HFSS Simulation",
      "Antenna Design & Optimization",
      "Beam Steering & Phased Arrays",
      "S-Parameter Analysis",
      "Impedance Matching",
      "Pattern Reconfiguration",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Computer Vision (YOLOv8/v11)",
      "Object Detection & Tracking",
      "TensorFlow / PyTorch",
      "MLOps & Edge Deployment",
      "Prompt Engineering",
      "Model Evaluation",
    ],
  },
  {
    category: "Programming & Tools",
    items: [
      "Python (NumPy, Pandas, OpenCV)",
      "MATLAB & Simulink",
      "SQL & Databases",
      "Bash/Shell Scripting",
      "Git/GitHub",
      "Docker & Kubernetes",
    ],
  },
  {
    category: "Electronics & Hardware",
    items: [
      "CMOS Analog IC Design",
      "Tanner EDA (S-Edit, L-Edit)",
      "SPICE Circuit Simulation",
      "MEMS & Sensor Systems",
      "Embedded Systems",
      "PCB Design Fundamentals",
    ],
  },
  {
    category: "Research & Professional",
    items: [
      "Academic Writing & Publication",
      "Statistical Analysis",
      "Risk Assessment (ISO 31000)",
      "FMECA Methodology",
      "Technical Documentation",
      "Project Management",
    ],
  },
];

export const experience = [
  {
    date: "Nov 2025 - Feb 2026",
    title: "Engineering Intern",
    company: "Nokia / UTS TechLab via Optik Consultancy",
    description:
      "Leading development of AI-powered safety systems using Nokia's 5G infrastructure. Building YOLOv11 computer vision for PPE detection with 94% accuracy, integrating with Nokia RXRM edge platform and Temi autonomous robots.",
    logos: ["/Nokia.jpeg", "/Optik.jpeg"],
  },
  {
    date: "Mar 2025 - Present",
    title: "AI Evaluation Specialist",
    company: "Scale AI (Remote)",
    description:
      "Contributing to AI model evaluation and prompt engineering for large language models. Developing evaluation rubrics and providing training data quality assurance.",
    logos: ["/Scale.png", "/Outlier.jpeg"],
  },
  {
    date: "Aug 2017 - Oct 2017",
    title: "Network Operations Intern",
    company: "Safaricom PLC, Kenya",
    description:
      "Hands-on experience with mobile network infrastructure at East Africa's largest telco. Supported network monitoring and performance optimization for 4G LTE networks.",
    logos: ["/SAF-MAIN-LOGO.jpg"],
  },
  {
    date: "May 2016 - Jul 2016",
    title: "IT & Telecommunications Intern",
    company: "Kenya Power & Lighting Company",
    description:
      "Worked on utility telecommunications infrastructure supporting power grid operations. Gained experience in SCADA communications and fiber optic networks.",
    logos: ["/kenyapower.png"],
  },
];

export const socialLinks = {
  email: "tueikipkorirk@gmail.com",
  linkedin: "https://www.linkedin.com/in/kevin-kipkorir-a3b71298/",
  github: "https://github.com/tueikipkorir",
  phone: "0414 037 255",
  location: "Sydney, NSW, Australia",
};
