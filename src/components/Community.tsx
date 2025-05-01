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
      "Participate building the next generation of great minds and techprenuers of Cameroon to the global stage. Students get the opportunity to become problem solvers and innovators in their societies.",
    period: "2024 - Present",
    link: "https://www.ticsummit.org",
  },
  {
    name: "FET AI Club",
    role: "Member",
    description:
      "Active member of the Faculty's Artificial Intelligence club. Building and developing skills along with fellow club members",
    period: "2025 - Present",
    link: "https://example.com/fet-ai-club", // Replace with the actual link
  },
  {
    name: "Knowledge Center (KC)",
    role: "Scholar",
    description:
      "One of the things Im happy about is the gift of KC. An organisition that goes against the goes against the norms of the society and gives birth meritocracy all in empowerin the next generation of global Leaders and visionaries.",
    period: "2024 - Present",
    link: "https://kccameroon.com/",
  },
  {
    name: "Tutoring",
    role: "Teacher",
    description:
      "I developed a teaching habit after highschool to help other kids who needed help to be able to learn easily by tackling similar issues I faced aswell.",
    period: "2024 - Present",
    link: "https://example.com/tutoring", // Replace with the actual link
  },
  {
    name: "CMFI (Christian Missionary Fellowship International)",
    role: "Disciple",
    description:
      "Well, I am a disciple of the Lord Jesus and I have as a duty to follow my master and obey his commads as that is the main purpose for which human beings ar even alive. I witness the gospel to others so as to ensure that as many people as possible are saved.",
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
