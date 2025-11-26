import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

const posts: BlogPost[] = [
  {
    title: "Why I Started Building",
    date: "Nov 2025",
    tags: ["Journey", "Mindset"],
    summary:
      "A short story about how I got into coding, what keeps me motivated, and what I want to build next.",
  },
  {
    title: "Lessons From Recent Projects",
    date: "Nov 2025",
    tags: ["Projects", "Learning"],
    summary:
      "Some of the most important things I learned while working on my recent web projects and hackathons.",
  },
];

const Blogs: React.FC = () => {
  return (
    <section
      id="blogs"
      className="py-20 px-6 md:px-10 bg-portfolio-dark-blue/40"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient inline-block">
          Blogs
        </h2>

        <p className="text-gray-300 mb-10 max-w-2xl">
          Here I share thoughts about my journey in tech, projects I am working on,
          and lessons I am learning along the way. These posts are meant to be
          honest, simple, and practical.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="bg-portfolio-mid-blue/20 border-portfolio-mid-blue/40 card-hover hover:-translate-y-1 transform transition-transform duration-200"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white mb-1">
                  {post.title}
                </CardTitle>
                <p className="text-xs uppercase tracking-wide text-blue-300">
                  {post.date}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-blue-500/40 bg-blue-500/10 text-blue-100 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-8">
          To add or edit posts, update the <code>posts</code> array inside
          <code> Blogs.tsx</code>.
        </p>
      </div>
    </section>
  );
};

export default Blogs;
