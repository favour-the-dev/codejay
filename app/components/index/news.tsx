"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NewsService from "@/services/News";
import NewsCard from "../newsCard";
import { Article } from "@/app/types/types";

function News() {
  const [news, setNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const data = (await NewsService.GetAllNews()) as Article[];
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section
      id="news"
      className="w-full py-10 bg-background-gray dark:bg-foreground"
    >
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <h2 className="font-Inter font-bold text-3xl md:text-4xl text-center">
            Latest Crypto{" "}
            <span className="text-forestgreen dark:text-secondary">News</span>
          </h2>
          <p className="text-base lg:text-lg mx-auto text-gray-500 dark:text-gray-400 md:max-w-[70%] text-center">
            Stay informed with the latest updates in cryptocurrency, forex
            trading, and financial markets
          </p>
        </motion.div>

        {isLoading ? (
          // Loading skeleton
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-darkLighter rounded-xl overflow-hidden shadow-md h-[400px] animate-pulse"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700" />
                <div className="p-4 space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : news.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </motion.div>
        ) : (
          <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
            No news articles available at the moment.
          </div>
        )}
      </div>
    </section>
  );
}

export default News;
