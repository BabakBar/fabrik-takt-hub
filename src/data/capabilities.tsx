import { Brain, Camera, Database, Cloud, Workflow, Code } from 'lucide-react';

export const capabilities = [
  { 
    title: "AI/ML", 
    bullets: [
      "Model design & evaluation", 
      "LLM orchestration for ops"
    ], 
    icon: <Brain /> 
  },
  { 
    title: "Computer Vision", 
    bullets: [
      "Visual inspection & detection", 
      "OCR / doc intelligence"
    ], 
    icon: <Camera /> 
  },
  { 
    title: "Data & Analytics", 
    bullets: [
      "Pipelines & warehousing", 
      "BI dashboards & metrics"
    ], 
    icon: <Database /> 
  },
  { 
    title: "Cloud & DevOps", 
    bullets: [
      "Cloud architecture", 
      "Containers, CI/CD"
    ], 
    icon: <Cloud /> 
  },
  { 
    title: "ERP & Integration", 
    bullets: [
      "Implementation & migration", 
      "Workflow automation"
    ], 
    icon: <Workflow /> 
  },
  { 
    title: "Custom Applications", 
    bullets: [
      "Web/mobile applications", 
      "Secure, scalable design"
    ], 
    icon: <Code /> 
  }
];