"use client";
import { motion } from "framer-motion";
import Video from "../videos";
function VideoGallery() {
  return (
    <>
      <section
        id="gallery"
        className="w-full h-full py-10 bg-background-gray dark:bg-foreground overflow-hidden"
      >
        <div className="max-container h-full flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className=""
          >
            <Video />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default VideoGallery;
