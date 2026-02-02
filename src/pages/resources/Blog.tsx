import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    slug: "ai-receptionists-small-business",
    title: "How AI Receptionists Are Transforming Small Business Operations",
    excerpt: "Discover how small businesses are using AI-powered receptionists to capture more leads, reduce costs, and provide 24/7 customer service.",
    date: "January 28, 2026",
    category: "AI Technology"
  },
  {
    slug: "google-reviews-local-seo",
    title: "The Complete Guide to Google Reviews for Local SEO",
    excerpt: "Learn proven strategies to generate more positive reviews and leverage them to dominate local search results.",
    date: "January 22, 2026",
    category: "Marketing"
  },
  {
    slug: "website-conversion-optimization",
    title: "10 Website Changes That Can Double Your Conversion Rate",
    excerpt: "Simple but powerful optimizations that turn more of your website visitors into leads and customers.",
    date: "January 15, 2026",
    category: "Web Design"
  },
  {
    slug: "business-automation-roi",
    title: "Calculating the ROI of Business Automation",
    excerpt: "How to measure the real impact of automation on your bottom line, with examples from actual businesses.",
    date: "January 8, 2026",
    category: "Automation"
  },
  {
    slug: "customer-experience-ai",
    title: "Balancing AI Efficiency with Human Touch in Customer Experience",
    excerpt: "Finding the sweet spot between automation and personal connection to create exceptional customer experiences.",
    date: "December 30, 2025",
    category: "Customer Experience"
  },
  {
    slug: "2026-business-tech-trends",
    title: "5 Business Technology Trends to Watch in 2026",
    excerpt: "From advanced AI to new automation tools, here's what's shaping the future of business technology.",
    date: "December 20, 2025",
    category: "Industry Trends"
  }
];

const Blog = () => {
  return (
    <PageLayout
      title="Blog"
      subtitle="Insights, guides, and news to help you grow your business with AI and automation."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to={`/resources/blog/${blogPosts[0].slug}`}>
            <Card className="border-border/50 bg-card/50 hover:border-primary/30 transition-colors overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/10 h-48 md:h-auto" />
                  <div className="p-6 md:p-8">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <h2 className="text-2xl font-display font-bold mt-4 mb-2">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </span>
                      <span className="text-primary font-medium text-sm flex items-center gap-1">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/resources/blog/${post.slug}`}>
                <Card className="border-border/50 bg-card/50 hover:border-primary/30 transition-colors h-full">
                  <CardContent className="p-6">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-display font-semibold mt-4 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-display font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Get the latest insights on AI, automation, and business growth delivered to your inbox.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Blog;
