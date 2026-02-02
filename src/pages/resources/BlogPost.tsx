import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  content: string[];
}> = {
  "ai-receptionists-small-business": {
    title: "How AI Receptionists Are Transforming Small Business Operations",
    excerpt: "Discover how small businesses are using AI-powered receptionists to capture more leads.",
    date: "January 28, 2026",
    category: "AI Technology",
    author: "Sarah Chen",
    readTime: "5 min read",
    content: [
      "For small businesses, every missed call is a missed opportunity. Studies show that up to 85% of callers who can't reach a business won't call back. That's where AI receptionists come in—providing 24/7 call handling without the cost of round-the-clock staffing.",
      "Unlike traditional voicemail or basic auto-attendants, modern AI receptionists can engage in natural conversations, answer common questions, qualify leads, and even schedule appointments. They learn from each interaction, getting better at handling your specific business needs over time.",
      "The ROI is compelling: businesses using AI receptionists report capturing 40% more leads on average, while reducing staff time spent on phone duties by up to 60%. For service businesses where after-hours calls are common, the impact is even more dramatic.",
      "Implementation is simpler than most business owners expect. Most AI receptionist systems integrate with existing phone lines and can be set up in under an hour. Training the AI on your business's specific needs typically takes another few days of fine-tuning."
    ]
  },
  "google-reviews-local-seo": {
    title: "The Complete Guide to Google Reviews for Local SEO",
    excerpt: "Learn proven strategies to generate more positive reviews.",
    date: "January 22, 2026",
    category: "Marketing",
    author: "Michael Torres",
    readTime: "8 min read",
    content: [
      "Google reviews are one of the most powerful—and underutilized—tools for local business visibility. They directly impact your search rankings, build trust with potential customers, and provide valuable feedback for improvement.",
      "The businesses that succeed at review generation share a common trait: they make leaving a review easy and timely. The best time to ask for a review is immediately after a positive interaction, when the experience is fresh in the customer's mind.",
      "Automation is key to consistent review generation. Manual processes inevitably fall through the cracks when teams get busy. A systematic approach that triggers review requests after specific events ensures you're always building your reputation.",
      "Responding to reviews—both positive and negative—is equally important. It shows potential customers that you value feedback and are actively engaged with your community. For negative reviews, a thoughtful response can turn a critic into an advocate."
    ]
  },
  "website-conversion-optimization": {
    title: "10 Website Changes That Can Double Your Conversion Rate",
    excerpt: "Simple but powerful optimizations that turn more visitors into leads.",
    date: "January 15, 2026",
    category: "Web Design",
    author: "Emma Rodriguez",
    readTime: "7 min read",
    content: [
      "Most websites leave significant money on the table through simple, fixable mistakes. The good news is that small changes can have outsized impacts on your conversion rate.",
      "Speed is perhaps the most critical factor. Every second of additional load time reduces conversions by 7%. Optimizing images, leveraging browser caching, and using a content delivery network can dramatically improve performance.",
      "Clear calls-to-action are essential. Your visitors should never have to guess what to do next. Use contrasting colors, action-oriented language, and strategic placement to guide users toward conversion.",
      "Trust signals like reviews, testimonials, and security badges reduce friction at the decision point. Placing them near your call-to-action can significantly increase completion rates for forms and purchases."
    ]
  },
  "business-automation-roi": {
    title: "Calculating the ROI of Business Automation",
    excerpt: "How to measure the real impact of automation on your bottom line.",
    date: "January 8, 2026",
    category: "Automation",
    author: "David Kim",
    readTime: "6 min read",
    content: [
      "Automation projects often fail not because they don't deliver value, but because businesses don't properly measure that value. A clear ROI framework is essential for justifying investment and prioritizing initiatives.",
      "Start by measuring the true cost of manual processes. This includes not just direct labor costs, but also error rates, inconsistency, delays, and opportunity costs. Most businesses underestimate these hidden costs significantly.",
      "Time savings translate directly to cost savings—but the bigger win is often capacity. Automation frees up your team to focus on higher-value activities that drive growth rather than just maintenance.",
      "Track both leading and lagging indicators. Leading indicators like process completion time show if automation is working. Lagging indicators like revenue growth and customer satisfaction show the business impact."
    ]
  },
  "customer-experience-ai": {
    title: "Balancing AI Efficiency with Human Touch in Customer Experience",
    excerpt: "Finding the sweet spot between automation and personal connection.",
    date: "December 30, 2025",
    category: "Customer Experience",
    author: "Sarah Chen",
    readTime: "5 min read",
    content: [
      "The most successful businesses don't view AI and human service as an either/or choice. They strategically combine both to create experiences that are both efficient and personal.",
      "AI excels at handling routine inquiries quickly and consistently. It never has a bad day, never puts customers on hold, and can scale instantly. For common questions and simple transactions, customers often prefer the speed of AI.",
      "Human interaction becomes more valuable when reserved for complex situations, high-stakes decisions, and relationship building. By freeing staff from routine tasks, AI allows them to focus on moments that truly require human judgment and empathy.",
      "The handoff between AI and human needs to be seamless. Customers shouldn't have to repeat information or start over when escalating. Smart routing and context preservation are essential for a smooth experience."
    ]
  },
  "2026-business-tech-trends": {
    title: "5 Business Technology Trends to Watch in 2026",
    excerpt: "What's shaping the future of business technology.",
    date: "December 20, 2025",
    category: "Industry Trends",
    author: "Michael Torres",
    readTime: "6 min read",
    content: [
      "The pace of technological change continues to accelerate, with AI leading the charge. Here are the trends that will have the biggest impact on businesses in the coming year.",
      "AI agents are moving beyond simple chatbots to become true digital workers. They can now handle complex, multi-step tasks with minimal supervision, from scheduling to data analysis to customer service.",
      "No-code and low-code platforms are democratizing technology. Business users can now build sophisticated automations and applications without writing a line of code, reducing dependence on IT departments.",
      "Hyper-personalization at scale is becoming possible. AI can now analyze vast amounts of customer data to deliver truly individualized experiences across all touchpoints.",
      "Integration is becoming seamless. The walls between business applications are coming down, enabling real-time data flow and unified customer views across all systems."
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <PageLayout
        title="Post Not Found"
        subtitle="The blog post you're looking for doesn't exist."
        showCTA={false}
      >
        <div className="container mx-auto px-6 py-16 text-center">
          <Link 
            to="/resources/blog"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={post.title}
      subtitle={post.excerpt}
    >
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back Link */}
          <Link 
            to="/resources/blog"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default BlogPost;
