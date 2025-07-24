import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const BlogPostList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const MdFetch = async (name: string) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${name}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch blog posts");
      }

      const resJson = await res.json();
      setPosts(resJson["items"] || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load blog posts"
      );
      console.error("Error fetching blog posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    MdFetch("david-nagarpowers");
  }, []);

  return (
    <section className="section-padding border-b border-border/30" id="blog">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="heading-gradient">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and technical deep-dives from my journey
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading blog posts...</span>
            </div>
          </div>
        ) : error ? (
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                Unable to load blog posts at this time. Please check back later.
              </p>
            </CardContent>
          </Card>
        ) : posts.length > 0 ? (
          <div className="grid gap-8 md:gap-12">
            {posts.map((post, index) => (
              <BlogPost key={index} post={post} index={index} />
            ))}
          </div>
        ) : (
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No blog posts available.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default BlogPostList;
