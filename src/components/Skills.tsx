
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Material UI"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    name: "Mobile Development",
    skills: ["Kotlin", "Java"]
  },
  {
    name: "Artificial Inteligence",
    skills: ["Python"]
  },
  {
    name: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Figma", "AWS", "CI/CD", "RESTful APIs"]
  },
  {
    name: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Leadership", "Time Management", "Adaptability", "Critical Thinking"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient inline-block">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-portfolio-mid-blue/10 border-portfolio-mid-blue/40 card-hover"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      className={
                        category.name === "Soft Skills" 
                          ? "bg-purple-800/20 hover:bg-purple-800/30 text-purple-300" 
                          : "bg-portfolio-mid-blue/30 hover:bg-portfolio-mid-blue/40"
                      }
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
