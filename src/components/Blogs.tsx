import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  mediumUrl?: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    title: "Why I Started Building",
    date: "Nov 2025",
    tags: ["Journey", "Mindset"],
    summary:
      "A short story about how I got into coding, what keeps me motivated, and what I want to build next.",
    mediumUrl: "",
    content: `Back in Form Three (9th grade), I was just a kid fascinated by games, apps, and software. But the big question that kept disturbing me was simple: How do people even create these things?

One childhood friend mentioned something to me — "programming." He told me games were programmed. That single word flipped a switch in me. I became curious.

That curiosity led to what I jokingly call my first internship.

During the summer holidays of 2019, I got the chance to work as an apprentice phone repairer at a small technician’s shop. I spent months there without owning a phone or a laptop, just learning by watching and touching real devices. By the end of that apprenticeship, I could open up smart devices, troubleshoot problems, and understand how hardware worked.

But programming? Still a mystery.

Fast-forward to Form Four: still stubbornly curious, I grabbed my dad’s phone and searched "What is programming?" online.

Boom — JavaScript.

I had no roadmap, no mentor, nothing. Just vibes and a long YouTube tutorial. I learned all the concepts blindly, not even understanding what JavaScript was used for. When it came time to build something, I was completely lost.

After more research, the next year I picked up HTML and CSS. Suddenly, things clicked. I could build basic websites and finally apply the JavaScript I’d learned. That feeling of power — the feeling that I can create something — was addictive.

By Lower Sixth, I picked up Python and felt unstoppable. My stack was growing, and so was my confidence.

But everything changed in Upper Sixth.

I was invited by a classmate to join his team for the TIC Summit. Three of us walked in full of confidence, thinking we’d win. We didn’t. But that loss became one of my biggest turning points.

I didn’t just learn to code — I learned how to turn code into solutions, how to design ideas that solve real problems, how to pitch, and how to make someone believe in what you’re building. That experience stretched me, shaped me, and humbled me. Even now, I’m ready to talk about any of my projects in front of whoever because of that life-shaping experience.

I also credit Knowledge Center for planting in me their “Dare to Be Different” ideology. It pushed me to aim higher. By my final year of high school, I became bold enough to apply for jobs and internships abroad — many rejections, yes, but each one made me sharper.

Eventually, by the grace of God, I landed some internships.

I met great people.
I discovered opportunities I never imagined.
I even got to share God’s Word and serve Him through the skills He gave me.

Today, I don't only turn ideas into code, I contribute to building a future-ready nexus people, and paramount of all, I am serving God in the domain of his call upon my life.

So here’s the truth:

Why do I build now?
Because I want to make the most of what God has given me.
Because building is how I grow, how I serve, and how I give back.

And honestly, I’m quite ambitious — for the sake of human attention span, I'll end by saying this: my journey is only just beginning.`,
  },
  {
    title: "Lessons From Recent Projects",
    date: "Nov 2025",
    tags: ["Projects", "Learning"],
    summary:
      "Some of the most important things I learned while working on my recent web projects and hackathons.",
    mediumUrl: "",
    content:
      "A deeper breakdown of the wins, mistakes, and lessons from my latest projects. Full article coming soon.",
  },
  {
    title: "Dare to Be Different: Not for Attention, But for Growth",
    date: "Nov 2025",
    tags: ["Mindset", "Growth", "Faith"],
    summary:
      "Why choosing the harder, uncommon path isn’t about attention, but about becoming who God designed you to be.",
    mediumUrl: "",
    content: `I’ll be honest with you: I’m not the type who naturally loves hard things. I don’t wake up excited to face challenges, and I definitely don’t chase discomfort for fun. If I had it my way, I’d avoid the difficult route most of the time.

But even with that, I’ve never been someone who follows the norm blindly. Whenever everyone accepts something as “the usual way,” something in me questions it. Why is this the norm? Why can’t we try something else? It’s not rebellion. It’s not an attempt to stand out. It’s simply my instinct to look deeper, because every time I step outside the predictable, I grow.

I’ve realized that I don’t chase difficulty — I chase growth. I’m tired of being limited by comfort. Playing safe looks attractive, but I know what it leads to: stagnation. And honestly, staying the same scares me more than any challenge ever will.

While many of my coursemates focus mainly on studying, I often find myself building — apps, systems, small tools. Not because I think I’m smarter or trying to impress anyone, but because my priorities are different. I want what I learn to work in the real world. I want to test it, break it, fix it, rebuild it. Books alone can’t give me that experience. Projects can.

That same mindset shows up in other areas of my life. When I teach students, when I apply for programs I’m uncertain about, even when I preach on the streets — I choose the path that stretches me. Not because I enjoy pressure, but because that pressure shapes me. Being different isn’t my personality; it’s my process. It’s how I avoid becoming a spectator in my own life.

I’m not extraordinary or fearless. I’m not naturally drawn to hard things. But I’ve learned something important: you don’t need to love the hard path to choose it. You just need to understand what it does to you. And the truth is simple — it transforms you.

As humans, God wired us with almost unlimited potential. He didn’t create us to blend into the background or hide in comfort zones. He blessed us with gifts, strength, creativity, and a mind capable of far more than we often allow ourselves to attempt. If we don’t dare to be different, how will we ever discover what He placed inside us?

So don’t choose the uncommon path to look special or gain attention. Choose it because it will change you. Choose it because it forces you to grow. Choose it because it unlocks what God has already invested in you.

Most people run from challenges. Be the one who uses them — not because you enjoy difficulty, but because you value who you become through it.

Dare to be different.
Not for the spotlight, but to make the most of what God has put in you.`,
  },
  {
    title: "The One Thing That Truly Defines You",
    date: "Nov 2025",
    tags: ["Purpose", "Faith", "Life"],
    summary:
      "A reflection on why purpose — especially God-given purpose — is what truly defines a person beyond success or failure.",
    mediumUrl: "",
    content: `Life, as we all know, is not easy. It tests us, shapes us, and sometimes breaks us. But it becomes even more difficult during life’s transitions — those in-between moments where one chapter closes and the next hasn’t yet begun.

Some people believe that life is just a simulation, a system running without a real purpose. But I’ve learned through experience that life isn’t random at all. There’s a thread that ties everything together — and that thread is purpose.

Growing up, I’ve faced my share of challenges, setbacks, and failures. Many of them came from trying to always be five steps ahead — to stay sharp, ready, and ahead of everyone around me. Some people saw that as natural talent. But it wasn’t. It was my awareness of the kind of person I wanted to become, and more importantly, the kind of person I wanted to be for God.

What Defines a Man
If you strip everything else away — achievements, status, wealth, and recognition — what remains?
What defines a man?
It’s not talent. It’s not intellect.
It’s purpose.

“For everything God created has a purpose.” — 1 Timothy 4:4 (NIV)

When something functions according to its purpose, it thrives. The same is true for people. Purpose is the quiet fire that gives direction in chaos. It’s what separates those who wander from those who walk with intention.

I don’t know what battles you’re facing right now — I have mine too — but the difference between a life that drifts and a life that transforms is purpose. And the truest, deepest kind of purpose begins and ends with God.

The Model of Purpose: Jesus
Our perfect example is the Lord Jesus Christ. His entire life on earth was driven by one mission — to fulfill the will of His Father.

“My food,” said Jesus, “is to do the will of Him who sent me and to finish His work.” — John 4:34 (NIV)

That’s purpose in its purest form — living not for yourself, but for God’s intention through you.

Before you chase after success, status, or recognition, seek first to do the will of your Heavenly Father.

Maybe you don’t yet know how. That’s okay. God is patient and kind, and He has a plan for you too. Wherever you are right now, pause — bow your head and speak honestly to Him.

“For all have sinned and fall short of the glory of God.” — Romans 3:23 (NIV)

Sin distances us from the One who created us. It hurts not only us, but the God who loves us beyond measure. Yet in His mercy, He gave us a way back through Jesus Christ.

Right now, you can make the most important decision of your life — to surrender completely. Confess your sins to God. Tell Him everything. Be honest. Decide to turn away from sin and invite Jesus into your heart.

If you’ve done that, congratulations — this is the beginning of your new life in Christ. Mark this moment. Cherish it. It’s the day your true purpose begins.

Walking in Purpose
When you give your life to Christ, you inherit a divine purpose — the same that all of God’s children share:

“Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.” — Matthew 28:19 (NIV)

But within that great mission, God also gives each of us a unique calling — something special that only you can do. It’s woven into your gifts, passions, and the burdens He places on your heart.

To uncover it, ask yourself three simple but powerful questions:
Who am I?
What do I want to become?
How will I become that?

Clarity gives you direction.
But direction alone is not enough. You need discipline.

Purpose without discipline is just a dream — a spark that never becomes a flame.

Set goals. Think long-term, but start short-term. Ask yourself, “Where do I want to be in two months? In two years? In five?”
Then take small, faithful steps every day.

Because purpose isn’t a single discovery — it’s a daily decision to keep walking with God, no matter how hard the road gets.

The One Thing That Truly Defines You
Life will never be without challenges. There will be seasons of confusion, doubt, and pain. But when your life is anchored in purpose — especially one rooted in God — even your struggles gain meaning.

You start to realize that every delay was preparation, every disappointment was redirection, and every closed door was grace in disguise.

“And we know that in all things God works for the good of those who love Him, who have been called according to His purpose.” — Romans 8:28 (NIV)

Purpose doesn’t make life easier.
It makes life meaningful.

So, if you remember one thing from this:
Let purpose define you — not fear, not failure, not the past, but your God-given reason for being.

Live intentionally.
Live purposefully.
Live for God.

God bless you.
— By Grai Rudolf`,
  },
];

const Blogs: React.FC = () => {
  return (
    <section
      id="blogs"
      className="py-20 px-6 md:px-10 bg-portfolio-dark-blue/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-200 w-fit">
            Writing & Reflections
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient inline-block">
            Blogs
          </h2>
        </div>

        <p className="text-gray-300 mb-10 max-w-2xl">
          Here I share thoughts about my journey in tech, projects I am working on,
          and lessons I am learning along the way. These posts are meant to be
          honest, simple, and practical.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="relative overflow-hidden bg-gradient-to-br from-portfolio-mid-blue/30 via-portfolio-mid-blue/10 to-portfolio-dark-blue/60 border border-portfolio-mid-blue/60 card-hover hover:-translate-y-1 transform transition-transform duration-200 cursor-pointer shadow-md hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-white mb-1">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-3 text-[11px] font-medium text-blue-200/80">
                      <span className="uppercase tracking-wide">{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4 line-clamp-4">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-blue-400/40 bg-blue-500/15 text-blue-100 text-[11px] px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-1">
                      {post.mediumUrl ? (
                        <a
                          href={post.mediumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-black font-semibold text-sm">
                            M
                          </span>
                          <span className="text-[11px] md:text-xs underline underline-offset-2">
                            Read full post on Medium
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black font-semibold text-sm">
                            M
                          </span>
                          <span className="text-[11px] md:text-xs">
                            Medium version coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full bg-gradient-to-br from-portfolio-dark-blue via-portfolio-mid-blue/20 to-black text-white border border-portfolio-mid-blue/70">
                <DialogHeader>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                        <DialogTitle className="text-2xl md:text-3xl font-bold text-white">
                          {post.title}
                        </DialogTitle>
                        <DialogDescription className="mt-1 text-[11px] md:text-xs uppercase tracking-wide text-blue-300 flex items-center gap-3">
                          <span>{post.date}</span>
                        </DialogDescription>
                      </div>
                      {post.mediumUrl ? (
                        <a
                          href={post.mediumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden md:inline-flex items-center gap-2 text-xs text-gray-300 bg-black/30 border border-blue-500/30 rounded-full px-3 py-1 hover:text-white hover:border-blue-400/60"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-black font-semibold text-sm">
                            M
                          </span>
                          <span>Open on Medium</span>
                        </a>
                      ) : (
                        <div className="hidden md:inline-flex items-center gap-2 text-xs text-gray-400 bg-black/20 border border-blue-500/20 rounded-full px-3 py-1">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black font-semibold text-sm">
                            M
                          </span>
                          <span>No Medium link yet</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-blue-400/40 bg-blue-500/15 text-blue-100 text-[11px] px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </DialogHeader>
                <ScrollArea className="mt-4 max-h-[70vh] pr-4">
                  <div className="space-y-4 text-gray-200 text-sm md:text-[15px] leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
