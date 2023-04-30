import Head from "next/head";

interface PageHead {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogUrl?: string;
  ogImage?: string;
  ogType?: string;
}

import React from "react";

const PageHead: React.FC<PageHead> = ({
  title,
  description,
  ogTitle,
  ogUrl,
  ogImage,
  ogType,
}) => {
  if (!title) {
    title = "Savan Patel";
  }

  if (!description) {
    description =
      "Hi, I'm Savan, a Full-Stack software engineer with over three years of experience in web development, coding, and lean-agile practices. I enjoy working remotely in fast-paced start-ups and collaborative teams. I'm a quick learner and have experience with TypeScript, SQL, Node.js, MongoDB, React.js.";
  }

  if (!ogTitle) {
    ogTitle = "Savan Patel - Full Stack MERN Developer";
  }
  if (!ogUrl) {
    ogUrl = "https://github.com/psavan1655";
  }
  if (!ogImage) {
    ogImage = "/assets/icons/india.svg";
  }
  if (!ogType) {
    ogType = "image/png";
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};

export default PageHead;
