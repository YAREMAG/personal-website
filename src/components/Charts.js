import React, { useState } from 'react';
import './Charts.css';
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

// Main Charts component
function Charts() {
  return (
    <div>
      <div>
      <h1>
        Podcasts I like
      </h1>
      <BentoGridDemo />
      </div>
      <div>
      <h2> </h2>
    </div>
    </div>
    
  );
}

export default Charts;

// BentoGridDemo component
function BentoGridDemo() {
  const [podcastItems] = useState([
    {
      title: "Wall Street Breakfast",
      description: "Seeking Alpha's flagship Wall Street Breakfast provides investors an overview of key investment news every morning and afternoon.",
      url: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/05uLjJxkVgQsRk8LWLCLpx?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', },
    {
      title: "Acquired",
      description: "Every company has a story. Learn the playbooks that built the world's greatest companies — and how you can apply them as a founder, operator, or investor.",
      url: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/7Fj0XEuUQLUqoMZQdsLXqp/video?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' 
    },
    {
      title: "Planet Money",
      description: "Wanna see a trick? Give us any topic and we can tie it back to the economy. At Planet Money, we explore the forces that shape our lives and bring you along for the ride. Don't just understand the economy – understand the world.",
      url: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/4FYpq3lSeQMAhqNI81O0Cn?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
      title: "The Stack Overflow Podcast",
      description: "For more than a dozen years, the Stack Overflow Podcast has been exploring what it means to be a software developer and how the art and practice of programming is changing our world. From Rails to React, from Java to Node.js, join the Stack home team for conversations with fascinating guests to help you understand how technology is made and where it’s headed.",
      url:'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/0e5eoM6w7eW9Wu7wMA04Tr?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
      title: "Goldman Sachs The Markets",
      description: "Goldman Sachs leaders and analysts break down the key issues moving markets in this weekly podcast.",
      url: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/4QYK5hxHNeXnevtUTsn5a7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
      title: "The Indicator",
      description: "A little show about big ideas. From the people who make Planet Money, The Indicator helps you make sense of what's happening today. It's a quick hit of insight into work, business, the economy, and everything else. Listen weekday afternoons.",
      url:'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/4X3yDKgVTWRjSd6r0vhgo4?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
      title: "The blind Ambition with Jack Kelly",
      description: "The Blind Ambition with Jack Kelly provides a candid look into the top companies in business and tech. Go behind the scenes with industry and workplace leaders and explore work culture, what it takes to land a role at these companies, and how to build, scale and thrive in your career. Hosted by Jack Kelly and Rick Chen and presented by the professional social network Blind.",
      url: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/6BYgG9cHlRTGokf5oz7Fpm?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    
  ]);

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {podcastItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            // Dangerously set the inner HTML to include the Spotify iframe
            <div
              dangerouslySetInnerHTML={{ __html: item.url }}
            ></div>
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// Skeleton component (placeholder)
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
