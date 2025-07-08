import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { Github, Linkedin, Moon, Sun, MapPin, Mail, Download, Code, Database, Cloud, AppWindow, Briefcase, Building2, Sparkles, ArrowRight, Globe, ExternalLink } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function meta({}) {
  return [{
    title: "Jason Paulraj"
  }, {
    name: "description",
    content: "Experienced Full Stack Developer specializing in web development, cloud computing, and mobile applications."
  }, {
    name: "keywords",
    content: "Full Stack Developer, Software Engineer, React, TypeScript, Cloud Computing"
  }, {
    name: "author",
    content: "Jason Paulraj"
  }];
}
function useTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return {
    theme,
    toggleTheme
  };
}
const skillCategories = [{
  icon: Code,
  title: "Programming",
  color: "blue",
  skills: ["PHP", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "jQuery", "React Web", "Laravel", "FastAPI"]
}, {
  icon: Database,
  title: "Databases",
  color: "emerald",
  skills: ["MySQL", "PostgreSQL", "Microsoft SQL Server"]
}, {
  icon: Cloud,
  title: "Cloud & DevOps",
  color: "violet",
  skills: ["AWS", "GCP", "CI/CD", "Docker", "Terraform", "Networking"]
}, {
  icon: AppWindow,
  title: "Tools",
  color: "orange",
  skills: ["JIRA", "Confluence", "MacOS", "Windows", "Linux", "Proxmox"]
}];
const workExperience = [{
  company: "Scismic Inc.",
  totalPeriod: "April 2023 - Present",
  positions: [{
    title: "Senior Software Engineer",
    period: "April 2023 - Present",
    duration: "Current",
    responsibilities: ["Improved site operational process by enhancing its feature based web workflow system", "Optimized workflow working by designing an efficient requirement workflow, saving significant time", "Collaborated with cross-functional teams to deliver high-quality software solutions", "Developed Python-based content portal leveraging GraphQL for enhanced data processing", "Implemented advanced filtering systems to improve user experience and data accessibility"]
  }]
}, {
  company: "iPriceGroup",
  totalPeriod: "April 2022 - April 2023",
  positions: [{
    title: "Software Engineer",
    period: "April 2022 - April 2023",
    duration: "1 year",
    responsibilities: ["Collaborated with an agile team to develop and maintain enterprise applications", "Implemented responsive design principles to ensure optimal user experience across devices", "Participated in code reviews and maintained high coding standards", "Contributed to system architecture decisions and technical documentation"]
  }]
}, {
  company: "PoetFarmer",
  totalPeriod: "July 2020 - April 2022",
  positions: [{
    title: "Senior Backend Engineer",
    period: "July 2020 - April 2022",
    duration: "1 year 10 months",
    responsibilities: ["Led development team in creating robust backend systems and APIs", "Designed and implemented scalable database architectures", "Optimized application performance and implemented caching strategies", "Mentored junior developers and established coding best practices"]
  }]
}, {
  company: "DCI Digital",
  totalPeriod: "November 2017 - March 2020",
  positions: [{
    title: "Tech Lead",
    period: "September 2019 - March 2020",
    duration: "7 months",
    responsibilities: ["Led project management initiatives to ensure timely delivery of software solutions", "Managed a team of developers, overseeing project requirements, development workflows, and delivery timelines", "Implemented comprehensive testing strategies and quality assurance processes", "Established development workflows and deployment processes"]
  }, {
    title: "Web Developer",
    period: "November 2017 - August 2019",
    duration: "1 year 10 months",
    responsibilities: ["Developed and maintained multiple web applications using modern frameworks", "Collaborated with design team to implement responsive user interfaces", "Participated in code reviews and maintained coding standards", "Contributed to technical documentation and knowledge sharing"]
  }]
}];
const companies = [{
  name: "Techie Goose Solution",
  url: "https://techiegoose.com",
  domain: "techiegoose.com",
  logo: "/techiegoose-logo.svg",
  description: "Innovative technology solutions provider specializing in custom software development, cloud infrastructure, and digital transformation services for businesses of all sizes."
}, {
  name: "NexaSEA",
  url: "https://nexasea.com",
  domain: "nexasea.com",
  logo: "/nexasea-logo.svg",
  description: "Southeast Asian technology hub focused on connecting regional markets through innovative digital platforms, e-commerce solutions, and cross-border technology initiatives."
}];
const socialLinks = [{
  icon: Github,
  href: "https://github.com/jasonpaulraj",
  label: "GitHub"
}, {
  icon: Linkedin,
  href: "https://linkedin.com/in/jasonpaulraj",
  label: "LinkedIn"
}];
const SkillCard = ({
  category,
  index
}) => {
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
  return /* @__PURE__ */ jsxs(Card, {
    className: `group hover:shadow-lg transition-all duration-300 hover:scale-105 ${colorClasses[category.color]}`,
    children: [/* @__PURE__ */ jsx(CardHeader, {
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex items-center space-x-3",
        children: [/* @__PURE__ */ jsx("div", {
          className: `p-2 rounded-lg ${colorClasses[category.color]}`,
          children: /* @__PURE__ */ jsx(Icon, {
            className: `w-6 h-6 ${iconColors[category.color]}`
          })
        }), /* @__PURE__ */ jsx(CardTitle, {
          className: "text-lg",
          children: category.title
        })]
      })
    }), /* @__PURE__ */ jsx(CardContent, {
      children: /* @__PURE__ */ jsx("div", {
        className: "flex flex-wrap gap-2",
        children: category.skills.map((skill) => /* @__PURE__ */ jsx(Badge, {
          variant: "secondary",
          className: "hover:scale-105 transition-transform",
          children: skill
        }, skill))
      })
    })]
  });
};
const ExperienceCard = ({
  experience,
  index
}) => /* @__PURE__ */ jsxs(Card, {
  className: "group hover:shadow-lg transition-all duration-300",
  children: [/* @__PURE__ */ jsx(CardHeader, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex items-start justify-between",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex-1",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex items-center space-x-3 mb-2",
          children: [/* @__PURE__ */ jsx("div", {
            className: "p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50",
            children: /* @__PURE__ */ jsx(Building2, {
              className: "w-5 h-5 text-blue-600 dark:text-blue-400"
            })
          }), /* @__PURE__ */ jsx(CardTitle, {
            className: "text-xl",
            children: experience.company
          })]
        }), /* @__PURE__ */ jsx(CardDescription, {
          className: "text-sm font-medium",
          children: experience.totalPeriod
        })]
      }), /* @__PURE__ */ jsx(Badge, {
        variant: "outline",
        className: "ml-4",
        children: experience.positions.length > 1 ? `${experience.positions.length} positions` : experience.positions[0].duration
      })]
    })
  }), /* @__PURE__ */ jsx(CardContent, {
    children: /* @__PURE__ */ jsx("div", {
      className: "space-y-6",
      children: experience.positions.map((position, posIndex) => /* @__PURE__ */ jsxs("div", {
        className: "border-l-2 border-blue-200 dark:border-blue-800 pl-4 relative",
        children: [/* @__PURE__ */ jsx("div", {
          className: "absolute -left-2 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900"
        }), /* @__PURE__ */ jsxs("div", {
          className: "mb-3",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "font-semibold text-slate-900 dark:text-white mb-1",
            children: position.title
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400",
            children: [/* @__PURE__ */ jsx("span", {
              children: position.period
            }), /* @__PURE__ */ jsx("span", {
              children: "•"
            }), /* @__PURE__ */ jsx("span", {
              children: position.duration
            })]
          })]
        }), /* @__PURE__ */ jsx("ul", {
          className: "space-y-2 text-slate-600 dark:text-slate-300",
          children: position.responsibilities.map((responsibility, respIndex) => /* @__PURE__ */ jsxs("li", {
            className: "flex items-start space-x-3",
            children: [/* @__PURE__ */ jsx(ArrowRight, {
              className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
            }), /* @__PURE__ */ jsx("span", {
              className: "leading-relaxed text-sm",
              children: responsibility
            })]
          }, respIndex))
        })]
      }, posIndex))
    })
  })]
});
const CompanyCard = ({
  company,
  index
}) => /* @__PURE__ */ jsxs(Card, {
  className: "group hover:shadow-lg transition-all duration-300 hover:scale-105",
  children: [/* @__PURE__ */ jsx(CardHeader, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex items-center space-x-4",
      children: [/* @__PURE__ */ jsx("div", {
        className: "w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
        children: /* @__PURE__ */ jsx("img", {
          src: company.logo,
          alt: `${company.name} logo`,
          className: "w-10 h-10 object-contain"
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex-1",
        children: [/* @__PURE__ */ jsx(CardTitle, {
          className: "text-lg mb-1",
          children: company.name
        }), /* @__PURE__ */ jsxs("a", {
          href: company.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-2 group-hover:underline transition-all duration-300 text-sm",
          children: [/* @__PURE__ */ jsx(Globe, {
            className: "w-4 h-4"
          }), /* @__PURE__ */ jsx("span", {
            children: company.domain
          }), /* @__PURE__ */ jsx(ExternalLink, {
            className: "w-3 h-3"
          })]
        })]
      })]
    })
  }), /* @__PURE__ */ jsx(CardContent, {
    children: /* @__PURE__ */ jsx(CardDescription, {
      className: "leading-relaxed",
      children: company.description
    })
  })]
});
const SocialLink = ({
  link
}) => {
  const Icon = link.icon;
  return /* @__PURE__ */ jsx(Button, {
    variant: "ghost",
    size: "sm",
    asChild: true,
    className: "hover:scale-110 transition-transform",
    children: /* @__PURE__ */ jsx("a", {
      href: link.href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": link.label,
      children: /* @__PURE__ */ jsx(Icon, {
        className: "w-5 h-5"
      })
    })
  });
};
const Section = ({
  title,
  children,
  className = "",
  icon
}) => {
  const Icon = icon;
  return /* @__PURE__ */ jsxs("section", {
    className: `mb-16 ${className}`,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "text-center mb-8",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex items-center justify-center space-x-3 mb-4",
        children: [Icon && /* @__PURE__ */ jsx("div", {
          className: "p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50",
          children: /* @__PURE__ */ jsx(Icon, {
            className: "w-6 h-6 text-blue-600 dark:text-blue-400"
          })
        }), /* @__PURE__ */ jsx("h3", {
          className: "text-3xl font-bold text-slate-900 dark:text-white",
          children: title
        })]
      }), /* @__PURE__ */ jsx(Separator, {
        className: "w-24 mx-auto"
      })]
    }), children]
  });
};
const home = UNSAFE_withComponentProps(function Home() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300",
    children: [/* @__PURE__ */ jsx("header", {
      className: "sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 shadow-sm",
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-6xl mx-auto px-6 py-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex justify-between",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex space-x-2",
            children: [socialLinks.map((link) => /* @__PURE__ */ jsx(SocialLink, {
              link
            }, link.label)), /* @__PURE__ */ jsx(Button, {
              variant: "ghost",
              size: "sm",
              onClick: toggleTheme,
              className: "ml-2",
              children: theme === "light" ? /* @__PURE__ */ jsx(Moon, {
                className: "w-5 h-5"
              }) : /* @__PURE__ */ jsx(Sun, {
                className: "w-5 h-5"
              })
            })]
          })
        })
      })
    }), /* @__PURE__ */ jsxs("main", {
      className: "max-w-6xl mx-auto px-6 py-12",
      children: [/* @__PURE__ */ jsx("section", {
        className: "text-center mb-20",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mb-8",
          children: [/* @__PURE__ */ jsx("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsx("div", {
              className: "relative inline-block",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center border-4 border-blue-100 dark:border-blue-900 shadow-lg overflow-hidden",
                children: /* @__PURE__ */ jsx("img", {
                  src: "https://avatars.githubusercontent.com/u/9050721?v=4",
                  alt: "Jason Paul Raj",
                  className: "w-full h-full object-cover rounded-full"
                })
              })
            })
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8",
            children: "Results-driven Software Engineer with extensive experience in full-stack development and cloud computing. Passionate about creating innovative solutions and leading technical teams."
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-wrap items-center justify-center gap-4 mb-8",
            children: [/* @__PURE__ */ jsx(Card, {
              className: "p-4",
              children: /* @__PURE__ */ jsxs("div", {
                className: "flex items-center space-x-3",
                children: [/* @__PURE__ */ jsx(MapPin, {
                  className: "w-5 h-5 text-blue-500"
                }), /* @__PURE__ */ jsx("span", {
                  className: "font-medium text-slate-700 dark:text-slate-300",
                  children: "Kuala Lumpur, Malaysia"
                })]
              })
            }), /* @__PURE__ */ jsx(Card, {
              className: "p-4",
              children: /* @__PURE__ */ jsxs("div", {
                className: "flex items-center space-x-3",
                children: [/* @__PURE__ */ jsx(Mail, {
                  className: "w-5 h-5 text-violet-500"
                }), /* @__PURE__ */ jsx("span", {
                  className: "font-medium text-slate-700 dark:text-slate-300",
                  children: "work@jasonpaulraj.my"
                })]
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "flex flex-wrap justify-center gap-4",
            children: /* @__PURE__ */ jsx(Button, {
              size: "lg",
              className: "bg-blue-600 hover:bg-blue-700",
              asChild: true,
              children: /* @__PURE__ */ jsxs("a", {
                href: "https://drive.google.com/uc?export=download&id=1d0DvBfAwjbnt9jrJpSAfe0WrhthP9SKa",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [/* @__PURE__ */ jsx(Download, {
                  className: "w-4 h-4 mr-2"
                }), "Download Resume"]
              })
            })
          })]
        })
      }), /* @__PURE__ */ jsx(Section, {
        title: "Technical Skills",
        icon: Code,
        children: /* @__PURE__ */ jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: skillCategories.map((category, index) => /* @__PURE__ */ jsx(SkillCard, {
            category,
            index
          }, category.title))
        })
      }), /* @__PURE__ */ jsx(Section, {
        title: "Work Experience",
        icon: Briefcase,
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-6",
          children: workExperience.map((experience, index) => /* @__PURE__ */ jsx(ExperienceCard, {
            experience,
            index
          }, index))
        })
      }), /* @__PURE__ */ jsx(Section, {
        title: "Company Partnerships",
        icon: Building2,
        children: /* @__PURE__ */ jsx("div", {
          className: "grid md:grid-cols-2 gap-6",
          children: companies.map((company, index) => /* @__PURE__ */ jsx(CompanyCard, {
            company,
            index
          }, company.name))
        })
      }), /* @__PURE__ */ jsx("section", {
        className: "text-center",
        children: /* @__PURE__ */ jsxs(Card, {
          className: "p-8 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800",
          children: [/* @__PURE__ */ jsx(CardHeader, {
            children: /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-center space-x-3 mb-4",
              children: [/* @__PURE__ */ jsx(Sparkles, {
                className: "w-8 h-8 text-blue-600 dark:text-blue-400"
              }), /* @__PURE__ */ jsx(CardTitle, {
                className: "text-3xl text-blue-900 dark:text-blue-100",
                children: "Let's Work Together"
              }), /* @__PURE__ */ jsx(Sparkles, {
                className: "w-8 h-8 text-blue-600 dark:text-blue-400"
              })]
            })
          }), /* @__PURE__ */ jsxs(CardContent, {
            children: [/* @__PURE__ */ jsx(CardDescription, {
              className: "text-blue-700 dark:text-blue-300 mb-6 text-lg max-w-2xl mx-auto",
              children: "I'm always interested in discussing new opportunities, innovative projects, and ways to create impactful technology solutions."
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-wrap justify-center gap-4",
              children: /* @__PURE__ */ jsx(Button, {
                size: "lg",
                className: "bg-blue-600 hover:bg-blue-700",
                asChild: true,
                children: /* @__PURE__ */ jsxs("a", {
                  href: "mailto:work@jasonpaulraj.my",
                  children: [/* @__PURE__ */ jsx(Mail, {
                    className: "w-4 h-4 mr-2"
                  }), "Get in Touch", /* @__PURE__ */ jsx(ArrowRight, {
                    className: "w-4 h-4 ml-2"
                  })]
                })
              })
            })]
          })]
        })
      })]
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8 mt-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-6xl mx-auto px-6 text-center",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-center space-x-3 mb-4",
          children: [/* @__PURE__ */ jsx("div", {
            className: "w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center",
            children: /* @__PURE__ */ jsx(Sparkles, {
              className: "w-4 h-4 text-white"
            })
          }), /* @__PURE__ */ jsxs("p", {
            className: "text-slate-600 dark:text-slate-400",
            children: ["© ", (/* @__PURE__ */ new Date()).getFullYear(), " Jason Paulraj"]
          })]
        }), /* @__PURE__ */ jsx("p", {
          className: "text-slate-500 dark:text-slate-500 text-sm",
          children: "Sometimes being delulu is not always the solulu."
        })]
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Cjshd4bI.js", "imports": ["/assets/chunk-QMGIS6GS-hoMvXFpG.js", "/assets/index-B23AMYOI.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BaGiNl5Z.js", "imports": ["/assets/chunk-QMGIS6GS-hoMvXFpG.js", "/assets/index-B23AMYOI.js"], "css": ["/assets/root-DUgzKXNY.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-B8dADs0x.js", "imports": ["/assets/chunk-QMGIS6GS-hoMvXFpG.js", "/assets/index-B23AMYOI.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-9d261c9f.js", "version": "9d261c9f", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
