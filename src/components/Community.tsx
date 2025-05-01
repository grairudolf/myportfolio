import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CommunityItem {
  name: string;
  role: string;
  description: string;
  period: string;
  link: string; // Added link property
}

const communityItems: CommunityItem[] = [
  {
    name: "Tech Innovation Center (TiC)",
    role: "Volunteer and Mentor",
    description:
      "I actively contribute to shaping the next generation of great minds and techpreneurs in Cameroon, helping students become problem solvers and innovators who create meaningful change in their communities and beyond.",
    period: "2024 - Present",
    link: "https://www.ticsummit.org",
  },
  {
    name: "FET AI Club",
    role: "Member",
    description:
      "Active member of my Faculty’s Artificial Intelligence Club, where I grow and collaborate with peers to develop practical skills, share ideas, and explore the future of intelligent systems.",
    period: "2025 - Present",
    link: "https://example.com/fet-ai-club", // Replace with the actual link
  },
  {
    name: "Knowledge Center (KC)",
    role: "Scholar",
    description:
      "One of the things I’m most grateful for is the gift of KC — an organization that challenges societal norms and champions meritocracy, all while empowering the next generation of global leaders and visionaries.",
    period: "2024 - Present",
    link: "https://kccameroon.com/",
  },
  {
    name: "Tutoring",
    role: "Teacher",
    description:
      "After high school, I developed a passion for teaching to help other students learn more easily by guiding them through the same challenges I once faced. My goal has been to make learning accessible, relatable, and empowering for those who need support.",
    period: "2024 - Present",
    link: "https://example.com/tutoring", // Replace with the actual link
  },
  {
    name: "CMFI (Christian Missionary Fellowship International)",
    role: "Disciple",
    description:
      "I am a disciple of the Lord Jesus Christ, devoted to following Him and obeying His commands — the very reason we were created. My life’s mission is to glorify God by living in obedience to His Word and sharing the gospel, so that as many souls as possible may come to the knowledge of salvation.",
    period: "2024 - Present",
    link: "https://cmfionline.org", 
  },
];

const Community: React.FC = () => {
  return (
    <section
      id="community"
      className="py-20 px-6 md:px-10 bg-portfolio-dark-blue/30"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient inline-block">
          Communities & Volunteering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityItems.map((item, index) => (
            <Card
              key={index}
              className="bg-portfolio-mid-blue/10 border-portfolio-mid-blue/40 card-hover h-full"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-purple-400"
                  >
                    {item.name}
                  </a>
                </CardTitle>
                <div className="text-purple-400 text-sm font-medium">
                  {item.role}
                </div>
                <div className="text-gray-400 text-xs">{item.period}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
