"use client";
import { Article } from "@/app/types/types";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function NewsCard({ article }: { article: Article }) {
  // Format the date to a relative time (e.g., "2 hours ago")
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000)
      return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return past.toLocaleDateString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col bg-white dark:bg-darkLighter rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 p-4 flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{getTimeAgo(article.date)}</span>
        </div>

        <Link href={article.url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-lg font-bold text-foreground dark:text-background hover:text-forestgreen dark:hover:text-secondary transition-colors duration-200">
            {article.title}
          </h2>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {article.description}
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 pt-0 mt-auto">
        <Link
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-forestgreen dark:text-secondary hover:opacity-80 text-sm font-medium transition-opacity duration-200"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default NewsCard;
