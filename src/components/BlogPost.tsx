import moment from "moment";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

interface BlogPostProps {
  post: Post;
  index: number;
}

interface Post {
  title: string;
  pubDate?: string;
  link: string;
  thumbnail?: string;
  description: string;
  categories?: string[];
}

const BlogPost = ({ post, index }: BlogPostProps) => {
  const isEven = index % 2 === 0;

  return (
    <Card className="project-card group overflow-hidden">
      <CardContent className="p-0">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } min-h-[400px]`}
        >
          {/* Post Image */}
          {post.thumbnail && (
            <div className="lg:w-1/2 relative overflow-hidden bg-muted/30">
              <img
                src={post.thumbnail}
                alt={`${post.title} thumbnail`}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden"></div>
            </div>
          )}

          {/* Post Content */}
          <div
            className={`${
              post.thumbnail ? "lg:w-1/2" : "w-full"
            } p-6 lg:p-8 flex flex-col justify-center`}
          >
            <div className="space-y-4">
              {/* Date */}
              {post.pubDate && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{moment(post.pubDate).format("MMMM Do, YYYY")}</span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories
                    .slice(0, 3)
                    .map((category, categoryIndex) => (
                      <Badge
                        key={categoryIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        <a
                          href={`https://medium.com/tag/${category}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {category}
                        </a>
                      </Badge>
                    ))}
                  {post.categories.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.categories.length - 3} more
                    </Badge>
                  )}
                </div>
              )}

              {/* Description */}
              {post.description && (
                <p className="text-muted-foreground leading-relaxed text-base line-clamp-3">
                  {post.description.replace(/<[^>]*>/g, "").substring(0, 200)}
                  ...
                </p>
              )}

              {/* Read more button */}
              <div className="pt-4">
                <Button asChild>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read on Medium
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
