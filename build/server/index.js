import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Github, Linkedin, Mail, MapPin, Code, Database, Cloud, Smartphone, Award, Calendar, ExternalLink } from "lucide-react";
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
function meta({}) {
  return [{
    title: "Jason Paulraj - Full Stack Developer"
  }, {
    name: "description",
    content: "Experienced Full Stack Developer specializing in web development, cloud computing, and mobile applications."
  }];
}
const skillCategories = [{
  icon: Code,
  title: "Programming",
  color: "blue",
  skills: ["PHP", "JavaScript", "TypeScript", "Scala", "HTML", "CSS", "jQuery"]
}, {
  icon: Database,
  title: "Databases",
  color: "green",
  skills: ["MySQL", "PostgreSQL", "Microsoft SQL Server"]
}, {
  icon: Cloud,
  title: "Cloud & DevOps",
  color: "purple",
  skills: ["AWS", "GCP", "SQL", "NoSQL", "Microservices"]
}, {
  icon: Smartphone,
  title: "Mobile & Tools",
  color: "orange",
  skills: ["Android", "iOS", "React Native", "Apache", "Tomcat"]
}];
const workExperience = [{
  title: "Senior Software Engineer",
  company: "[Company Name Hidden]",
  period: "September 2018 - Present",
  duration: "Current",
  responsibilities: ["Improved site operational process by enhancing its feature based web workflow system", "Optimized workflow working by designing an efficient requirement workflow, saving significant time", "Collaborated with cross-functional teams to deliver high-quality software solutions", "Developed Python-based content portal leveraging GraphQL for enhanced data processing", "Implemented advanced filtering systems to improve user experience and data accessibility"]
}, {
  title: "Software Industry Engineer",
  company: "[Company Name Hidden]",
  period: "July 2017 - August 2018",
  duration: "1 year",
  responsibilities: ["Collaborated with an agile team to develop and maintain enterprise applications", "Implemented responsive design principles to ensure optimal user experience across devices", "Participated in code reviews and maintained high coding standards", "Contributed to system architecture decisions and technical documentation"]
}, {
  title: "Senior Backend Engineer",
  company: "[Company Name Hidden]",
  period: "June 2016 - April 2017",
  duration: "10 months",
  responsibilities: ["Led development team in creating robust backend systems and APIs", "Designed and implemented scalable database architectures", "Optimized application performance and implemented caching strategies", "Mentored junior developers and established coding best practices"]
}, {
  title: "Web Developer",
  company: "[Company Name Hidden]",
  period: "March 2016 - March 2020",
  duration: "4 years",
  responsibilities: ["Managed a team of developers, overseeing project requirements, development workflows, and delivery timelines", "Led project management initiatives to ensure timely delivery of software solutions", "Implemented comprehensive testing strategies and quality assurance processes", "Developed and maintained multiple web applications using modern frameworks", "Established development workflows and deployment processes"]
}];
const companies = [{
  name: "Techie Goose Solution",
  url: "https://techiegoose.com",
  domain: "techiegoose.com",
  logo: "🦆",
  gradient: "from-blue-500 to-purple-600",
  description: "Innovative technology solutions provider specializing in custom software development, cloud infrastructure, and digital transformation services for businesses of all sizes."
}, {
  name: "NexaSEA",
  url: "https://nexasea.com",
  domain: "nexasea.com",
  logo: "🌊",
  gradient: "from-emerald-500 to-teal-600",
  description: "Southeast Asian technology hub focused on connecting regional markets through innovative digital platforms, e-commerce solutions, and cross-border technology initiatives."
}];
const socialLinks = [{
  icon: Github,
  href: "#",
  label: "GitHub"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Mail,
  href: "#",
  label: "Email"
}];
const SkillBadge = ({
  skill,
  color
}) => {
  const colorClasses = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
  };
  return /* @__PURE__ */ jsx("span", {
    className: `px-3 py-1 rounded-full text-sm font-medium ${colorClasses[color]}`,
    children: skill
  });
};
const SkillCard = ({
  category
}) => {
  const Icon = category.icon;
  const iconColors = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    purple: "text-purple-600 dark:text-purple-400",
    orange: "text-orange-600 dark:text-orange-400"
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex items-center space-x-3 mb-4",
      children: [/* @__PURE__ */ jsx(Icon, {
        className: `w-6 h-6 ${iconColors[category.color]}`
      }), /* @__PURE__ */ jsx("h4", {
        className: "font-semibold text-slate-900 dark:text-white",
        children: category.title
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "flex flex-wrap gap-2",
      children: category.skills.map((skill) => /* @__PURE__ */ jsx(SkillBadge, {
        skill,
        color: category.color
      }, skill))
    })]
  });
};
const ExperienceCard = ({
  experience
}) => /* @__PURE__ */ jsxs("div", {
  className: "bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300",
  children: [/* @__PURE__ */ jsxs("div", {
    className: "flex items-start justify-between mb-4",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex-1",
      children: [/* @__PURE__ */ jsx("h4", {
        className: "text-xl font-semibold text-slate-900 dark:text-white mb-2",
        children: experience.title
      }), /* @__PURE__ */ jsxs("p", {
        className: "text-slate-600 dark:text-slate-300 mb-2",
        children: [experience.company, " • ", experience.period]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex items-center space-x-2 text-slate-500 dark:text-slate-400 ml-4",
      children: [/* @__PURE__ */ jsx(Calendar, {
        className: "w-4 h-4"
      }), /* @__PURE__ */ jsx("span", {
        className: "text-sm",
        children: experience.duration
      })]
    })]
  }), /* @__PURE__ */ jsx("ul", {
    className: "space-y-2 text-slate-600 dark:text-slate-300",
    children: experience.responsibilities.map((responsibility, index) => /* @__PURE__ */ jsxs("li", {
      children: ["• ", responsibility]
    }, index))
  })]
});
const CompanyCard = ({
  company
}) => /* @__PURE__ */ jsxs("div", {
  className: "bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 group",
  children: [/* @__PURE__ */ jsxs("div", {
    className: "flex items-center space-x-4 mb-4",
    children: [/* @__PURE__ */ jsx("div", {
      className: `w-16 h-16 bg-gradient-to-br ${company.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`,
      children: company.logo
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h4", {
        className: "text-xl font-semibold text-slate-900 dark:text-white mb-1",
        children: company.name
      }), /* @__PURE__ */ jsxs("a", {
        href: company.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors",
        children: [/* @__PURE__ */ jsx("span", {
          children: company.domain
        }), /* @__PURE__ */ jsx(ExternalLink, {
          className: "w-3 h-3"
        })]
      })]
    })]
  }), /* @__PURE__ */ jsx("p", {
    className: "text-slate-600 dark:text-slate-300 leading-relaxed",
    children: company.description
  })]
});
const SocialLink = ({
  link
}) => {
  const Icon = link.icon;
  return /* @__PURE__ */ jsx("a", {
    href: link.href,
    className: "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800",
    "aria-label": link.label,
    children: /* @__PURE__ */ jsx(Icon, {
      className: "w-5 h-5"
    })
  });
};
const Section = ({
  title,
  children,
  className = ""
}) => /* @__PURE__ */ jsxs("section", {
  className: `mb-16 ${className}`,
  children: [/* @__PURE__ */ jsx("h3", {
    className: "text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center",
    children: title
  }), children]
});
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800",
    children: [/* @__PURE__ */ jsx("header", {
      className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50",
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-6xl mx-auto px-6 py-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "text-2xl font-bold text-slate-900 dark:text-white",
            children: "Jason Paulraj"
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-center space-x-2",
            children: socialLinks.map((link) => /* @__PURE__ */ jsx(SocialLink, {
              link
            }, link.label))
          })]
        })
      })
    }), /* @__PURE__ */ jsxs("main", {
      className: "max-w-6xl mx-auto px-6 py-12",
      children: [/* @__PURE__ */ jsxs("section", {
        className: "text-center mb-16",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "mb-8",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-5xl font-bold text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
            children: "Full Stack Developer"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed",
            children: "Results-driven Software Engineer with extensive experience in full-stack development, cloud computing, and mobile applications. Passionate about creating innovative solutions and leading technical teams."
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-center space-x-6 text-slate-600 dark:text-slate-300",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex items-center space-x-2",
            children: [/* @__PURE__ */ jsx(MapPin, {
              className: "w-4 h-4"
            }), /* @__PURE__ */ jsx("span", {
              children: "[Location Hidden]"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center space-x-2",
            children: [/* @__PURE__ */ jsx(Mail, {
              className: "w-4 h-4"
            }), /* @__PURE__ */ jsx("span", {
              children: "[Email Hidden]"
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx(Section, {
        title: "Technical Skills",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: skillCategories.map((category) => /* @__PURE__ */ jsx(SkillCard, {
            category
          }, category.title))
        })
      }), /* @__PURE__ */ jsx(Section, {
        title: "Education",
        children: /* @__PURE__ */ jsx("div", {
          className: "bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-start space-x-4",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex-shrink-0",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center",
                children: /* @__PURE__ */ jsx(Award, {
                  className: "w-6 h-6 text-blue-600 dark:text-blue-400"
                })
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex-1",
              children: [/* @__PURE__ */ jsx("h4", {
                className: "text-xl font-semibold text-slate-900 dark:text-white mb-2",
                children: "BSc in Information Technology"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-slate-600 dark:text-slate-300 mb-2",
                children: "[University Name Hidden] • August 2013 - November 2016"
              }), /* @__PURE__ */ jsxs("div", {
                className: "space-y-1",
                children: [/* @__PURE__ */ jsxs("p", {
                  className: "text-slate-600 dark:text-slate-300",
                  children: [/* @__PURE__ */ jsx("strong", {
                    children: "South Australian International:"
                  }), " January 2013 - November 2013"]
                }), /* @__PURE__ */ jsxs("p", {
                  className: "text-slate-600 dark:text-slate-300",
                  children: [/* @__PURE__ */ jsx("strong", {
                    children: "Transfer Credits:"
                  }), " January 2013 - November 2013"]
                })]
              })]
            })]
          })
        })
      }), /* @__PURE__ */ jsx(Section, {
        title: "Work Experience",
        children: /* @__PURE__ */ jsx("div", {
          className: "space-y-8",
          children: workExperience.map((experience, index) => /* @__PURE__ */ jsx(ExperienceCard, {
            experience
          }, index))
        })
      }), /* @__PURE__ */ jsx(Section, {
        title: "Company Partnerships",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid md:grid-cols-2 gap-8",
          children: companies.map((company) => /* @__PURE__ */ jsx(CompanyCard, {
            company
          }, company.name))
        })
      }), /* @__PURE__ */ jsx("section", {
        className: "text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden",
          children: [/* @__PURE__ */ jsx("div", {
            className: "absolute inset-0 bg-black/10"
          }), /* @__PURE__ */ jsxs("div", {
            className: "relative z-10",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-bold mb-4",
              children: "Let's Work Together"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-blue-100 mb-6 max-w-2xl mx-auto",
              children: "I'm always interested in discussing new opportunities, innovative projects, and ways to create impactful technology solutions."
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex justify-center space-x-4",
              children: [/* @__PURE__ */ jsxs("a", {
                href: "#",
                className: "bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105",
                children: [/* @__PURE__ */ jsx(Mail, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */ jsx("span", {
                  children: "Get in Touch"
                })]
              }), /* @__PURE__ */ jsxs("a", {
                href: "#",
                className: "bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105",
                children: [/* @__PURE__ */ jsx(Github, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */ jsx("span", {
                  children: "View Projects"
                })]
              })]
            })]
          })]
        })
      })]
    }), /* @__PURE__ */ jsx("footer", {
      className: "bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-8",
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-6xl mx-auto px-6 text-center",
        children: /* @__PURE__ */ jsx("p", {
          className: "text-slate-600 dark:text-slate-400",
          children: "© 2024 Jason Paulraj. Built with React Router and Tailwind CSS."
        })
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-WabgBupn.js", "imports": ["/assets/chunk-QMGIS6GS-hoMvXFpG.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CH1dcddQ.js", "imports": ["/assets/chunk-QMGIS6GS-hoMvXFpG.js"], "css": ["/assets/root-CMrWrhuW.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-D2SHXfAQ.js", "imports": ["/assets/chunk-QMGIS6GS-hoMvXFpG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-ab470155.js", "version": "ab470155", "sri": void 0 };
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
