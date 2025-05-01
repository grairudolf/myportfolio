import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS. Features a dark theme with smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://myportfoilio-indol.vercel.app",
    githubLink: "https://github.com/grairudolf/myportfoilio",
    image: "/website_img/port.png",
  },
  {
    title: "Cameroonian Budget Manager",
    description:
      "A full-stack budget management application designed to meet the everyday financial needs of the average Cameroonian.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
    ],
    liveLink: "https://cameroon-budget-boss.vercel.app",
    githubLink: "https://github.com/grairudolf/cameroon-budget-boss",
    image: "/website_img/cambud.png"
  },
  {
    title: "Task Management App",
    description:
      "A productivity application designed to help users manage tasks, set clear priorities, and track progress across multiple projects with ease and efficiency.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
    ],
    liveLink: "https://taskify-liard-iota.vercel.app",
    githubLink: "",
    image: "/website_img/taskify.png",
  },
  {
    title: "Astrophysics Career Guide",
    description:
      "Born from my passion for astronomy, I strongly encourage dreaming big — because great dreams add meaning, direction, and color to life.",
    technologies: ["HTML", "CSS", "JavaScript", "SCSS"],
    liveLink: "https://astro-physics-career.vercel.app",
    githubLink: "https://github.com/grairudolf/AstroPhysics",
    image: "/website_img/astro.png",
  },
  {
    title: "NetBoltZ",
    description:
      "NetBoltZ — developed by me and my teammates, Ayafor Bill and Tazuh Faith — was created in response to the widespread issue of slow internet connectivity. The app is designed to enhance browsing speed and significantly improve the overall internet experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "SCSS",
      "PHP",
      "XML",
      "Java",
      "SSH and Networking tools",
    ],
    liveLink: "https://netboltz.vercel.app",
    githubLink: "https://github.com/basedcatx/NetBoltZ",
    image: "/website_img/netboltz.png",
  },
  {
    title: "JS Snake Game",
    description:
      "Due to my love for games, I decided to build a simple snake game using JavaScript. The game is simple and fun to play.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://snakegame-ruddy-eight.vercel.app",
    githubLink: "https://github.com/grairudolf/snakegame",
    image: "/website_img/snake.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-10 bg-portfolio-dark-blue/30"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient inline-block">
          Projects
        </h2>

        {/* Add your introductory text here */}
        <p className="text-gray-300 mb-8">
          Below is a collection of a few of my  projects that showcase my skills and passion
          for software development. Each project highlights unique challenges
          and solutions, demonstrating my ability to create functional and
          visually appealing applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-portfolio-mid-blue/10 border-portfolio-mid-blue/40 card-hover overflow-hidden"
            >
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-purple-500/40 bg-purple-500/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.githubLink && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-portfolio-mid-blue/30"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                )}

                {project.liveLink && (
                  <Button
                    className="bg-gradient-portfolio hover:bg-gradient-portfolio-hover"
                    asChild
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Preview
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
