import React, { useState, useEffect } from 'react';
import './Charts.css';
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { getLatestEpisodeSnippet } from './spotifyService';

// Main Charts component
function Charts() {
  return (
    <div>
      <BentoGridDemo />
    </div>
  );
}

export default Charts;

// BentoGridDemo component
function BentoGridDemo() {
  const [podcastItems, setPodcastItems] = useState([]);

  const podcastIds = [
    '05uLjJxkVgQsRk8LWLCLpx?si=c5fb8ab394ed424f',  // Replace with actual podcast IDs
    '4FYpq3lSeQMAhqNI81O0Cn?si=8d4c8403645c48a8',
    '7Fj0XEuUQLUqoMZQdsLXqp?si=c4f7f1ff01d44498',
    'spotify_podcast_id_4',
    'spotify_podcast_id_5',
    'spotify_podcast_id_6',
    'spotify_podcast_id_7'
  ];

  useEffect(() => {
    async function fetchPodcastData() {
      const podcastData = await Promise.all(
        podcastIds.map(async (id) => {
          const snippet = await getLatestEpisodeSnippet(id);
          return {
            title: snippet.name,
            description: snippet.description,
          };
        })
      );
      setPodcastItems(podcastData);
    }

    fetchPodcastData();
  }, []);

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {podcastItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton />}  // Optional: Can replace with real data if available
          icon={null}  // Add icon if needed
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
