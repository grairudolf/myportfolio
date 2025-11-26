import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";

const BlogsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20">
        <Blogs />
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
