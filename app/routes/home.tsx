import type { Route } from "../../.react-router/types/+routes.tsx";
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Database, Cloud, Smartphone, Server, Globe, Users, Award, Calendar, Building2, Briefcase, ArrowRight, Sparkles, Zap, Sun, Moon, User, Download, Eye, ToolCaseIcon, AppWindow } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jason Paulraj" },
    { name: "description", content: "Experienced Full Stack Developer specializing in web development, cloud computing, and mobile applications." },
    { name: "keywords", content: "Full Stack Developer, Software Engineer, React, TypeScript, Cloud Computing" },
    { name: "author", content: "Jason Paulraj" },
  ];
}

// Theme hook
function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return { theme, toggleTheme };
}

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    color: "blue",
    skills: ['PHP', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'jQuery', 'React Web', 'Laravel', 'FastAPI']
  },
  {
    icon: Database,
    title: "Databases",
    color: "emerald",
    skills: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server']
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "violet",
    skills: ['AWS', 'GCP', 'CI/CD', 'Docker', 'Terraform', 'Networking']
  },
  {
    icon: AppWindow,
    title: "Tools",
    color: "orange",
    skills: ['JIRA', 'Confluence', 'MacOS', 'Windows', 'Linux', 'Proxmox']
  }
];

const workExperience = [
  {
    company: "Scismic Inc.",
    totalPeriod: "April 2023 - Present",
    positions: [
      {
        title: "Senior Software Engineer",
        period: "April 2023 - Present",
        duration: "Current",
        responsibilities: [
          "Improved site operational process by enhancing its feature based web workflow system",
          "Optimized workflow working by designing an efficient requirement workflow, saving significant time",
          "Collaborated with cross-functional teams to deliver high-quality software solutions",
          "Developed Python-based content portal leveraging GraphQL for enhanced data processing",
          "Implemented advanced filtering systems to improve user experience and data accessibility"
        ]
      }
    ]
  },
  {
    company: "iPriceGroup",
    totalPeriod: "April 2022 - April 2023",
    positions: [
      {
        title: "Software Engineer",
        period: "April 2022 - April 2023",
        duration: "1 year",
        responsibilities: [
          "Collaborated with an agile team to develop and maintain enterprise applications",
          "Implemented responsive design principles to ensure optimal user experience across devices",
          "Participated in code reviews and maintained high coding standards",
          "Contributed to system architecture decisions and technical documentation"
        ]
      }
    ]
  },
  {
    company: "PoetFarmer",
    totalPeriod: "July 2020 - April 2022",
    positions: [
      {
        title: "Senior Backend Engineer",
        period: "July 2020 - April 2022",
        duration: "1 year 10 months",
        responsibilities: [
          "Led development team in creating robust backend systems and APIs",
          "Designed and implemented scalable database architectures",
          "Optimized application performance and implemented caching strategies",
          "Mentored junior developers and established coding best practices"
        ]
      }
    ]
  },
  {
    company: "DCI Digital",
    totalPeriod: "November 2017 - March 2020",
    positions: [
      {
        title: "Tech Lead",
        period: "September 2019 - March 2020",
        duration: "7 months",
        responsibilities: [
          "Led project management initiatives to ensure timely delivery of software solutions",
          "Managed a team of developers, overseeing project requirements, development workflows, and delivery timelines",
          "Implemented comprehensive testing strategies and quality assurance processes",
          "Established development workflows and deployment processes"
        ]
      },
      {
        title: "Web Developer",
        period: "November 2017 - August 2019",
        duration: "1 year 10 months",
        responsibilities: [
          "Developed and maintained multiple web applications using modern frameworks",
          "Collaborated with design team to implement responsive user interfaces",
          "Participated in code reviews and maintained coding standards",
          "Contributed to technical documentation and knowledge sharing"
        ]
      }
    ]
  }
];

const companies = [
  {
    name: "Techie Goose Solution",
    url: "https://techiegoose.com",
    domain: "techiegoose.com",
    logo: "/techiegoose-logo.svg",
    description: "Innovative technology solutions provider specializing in custom software development, cloud infrastructure, and digital transformation services for businesses of all sizes."
  },
  {
    name: "NexaSEA",
    url: "https://nexasea.com",
    domain: "nexasea.com",
    logo: "/nexasea-logo.svg",
    description: "Southeast Asian technology hub focused on connecting regional markets through innovative digital platforms, e-commerce solutions, and cross-border technology initiatives."
  }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/jasonpaulraj", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/jasonpaulraj", label: "LinkedIn" },
];

// Reusable Components
const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const Icon = category.icon;
  const colorClasses = {
    blue: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50",
    emerald: "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50",
    violet: "border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50",
    orange: "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/50"
  };

  const iconColors = {
    blue: "text-blue-600 dark:text-blue-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    violet: "text-violet-600 dark:text-violet-400",
    orange: "text-orange-600 dark:text-orange-400"
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]}`}>
            <Icon className={`w-6 h-6 ${iconColors[category.color as keyof typeof iconColors]}`} />
          </div>
          <CardTitle className="text-lg">{category.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ExperienceCard = ({ experience, index }: { experience: typeof workExperience[0]; index: number }) => (
  <Card className="group hover:shadow-lg transition-all duration-300">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-xl">{experience.company}</CardTitle>
          </div>
          <CardDescription className="text-sm font-medium">
            {experience.totalPeriod}
          </CardDescription>
        </div>
        <Badge variant="outline" className="ml-4">
          {experience.positions.length > 1 ? `${experience.positions.length} positions` : experience.positions[0].duration}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        {experience.positions.map((position, posIndex) => (
          <div key={posIndex} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4 relative">
            <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900"></div>
            <div className="mb-3">
              <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                {position.title}
              </h5>
              <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                <span>{position.period}</span>
                <span>•</span>
                <span>{position.duration}</span>
              </div>
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              {position.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="flex items-start space-x-3">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed text-sm">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const CompanyCard = ({ company, index }: { company: typeof companies[0]; index: number }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={company.logo} alt={`${company.name} logo`} className="w-10 h-10 object-contain" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg mb-1">{company.name}</CardTitle>
          <a href={company.url} target="_blank" rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-2 group-hover:underline transition-all duration-300 text-sm">
            <Globe className="w-4 h-4" />
            <span>{company.domain}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="leading-relaxed">
        {company.description}
      </CardDescription>
    </CardContent>
  </Card>
);

const SocialLink = ({ link }: { link: typeof socialLinks[0] }) => {
  const Icon = link.icon;
  return (
    <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
        <Icon className="w-5 h-5" />
      </a>
    </Button>
  );
};

const Section = ({ title, children, className = "", icon }: { title: string; children: React.ReactNode; className?: string; icon?: React.ComponentType<any> }) => {
  const Icon = icon;
  return (
    <section className={`mb-16 ${className}`}>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {Icon && (
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          )}
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
        </div>
        <Separator className="w-24 mx-auto" />
      </div>
      {children}
    </section>
  );
};

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} link={link} />
              ))}
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="ml-2">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <div className="mb-8">
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center border-4 border-blue-100 dark:border-blue-900 shadow-lg overflow-hidden">
                  <img 
                    src="https://avatars.githubusercontent.com/u/9050721?v=4" 
                    alt="Jason Paul Raj" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Results-driven Software Engineer with extensive experience in full-stack development and cloud computing.
              Passionate about creating innovative solutions and leading technical teams.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">Kuala Lumpur, Malaysia</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-violet-500" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">work@jasonpaulraj.my</span>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://drive.google.com/uc?export=download&id=1d0DvBfAwjbnt9jrJpSAfe0WrhthP9SKa" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <Section title="Technical Skills" icon={Code}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience" icon={Briefcase}>
          <div className="space-y-6">
            {workExperience.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </Section>

        {/* Company Partnerships */}
        <Section title="Company Partnerships" icon={Building2}>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <CompanyCard key={company.name} company={company} index={index} />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="p-8 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-3xl text-blue-900 dark:text-blue-100">Let's Work Together</CardTitle>
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-700 dark:text-blue-300 mb-6 text-lg max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects,
                and ways to create impactful technology solutions.
              </CardDescription>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="mailto:work@jasonpaulraj.my">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Jason Paulraj
            </p>
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            Sometimes being delulu is not always the solulu.
          </p>
        </div>
      </footer>
    </div>
  );
}
