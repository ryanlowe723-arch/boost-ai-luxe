import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "What Are Cookies",
    content: [
      "Cookies are small text files stored on your device when you visit a website.",
      "They help websites remember your preferences and understand how you use the site.",
      "Cookies can be 'session' (deleted when you close your browser) or 'persistent' (remain until they expire or you delete them)."
    ]
  },
  {
    title: "How We Use Cookies",
    content: [
      "Essential Cookies: Required for the website to function properly, such as keeping you logged in.",
      "Analytics Cookies: Help us understand how visitors interact with our website to improve the experience.",
      "Functional Cookies: Remember your preferences like language and region settings.",
      "Marketing Cookies: Track your activity across websites to deliver relevant advertisements."
    ]
  },
  {
    title: "Cookie Categories",
    content: [
      "Strictly Necessary: These cannot be disabled as they are essential for site functionality.",
      "Performance: Collect anonymous data about how you use the site.",
      "Functionality: Enable enhanced features and personalization.",
      "Targeting: Used for advertising purposes and may be set by our partners."
    ]
  },
  {
    title: "Third-Party Cookies",
    content: [
      "We use services from third parties that may set their own cookies.",
      "Google Analytics: For understanding website traffic and usage patterns.",
      "Payment Processors: For secure payment processing.",
      "Social Media: If you interact with social sharing features."
    ]
  },
  {
    title: "Managing Cookies",
    content: [
      "Most browsers allow you to control cookies through their settings.",
      "You can delete existing cookies and block new ones from being set.",
      "Blocking essential cookies may affect website functionality.",
      "You can opt out of analytics cookies through our cookie preferences panel."
    ]
  },
  {
    title: "Your Choices",
    content: [
      "When you first visit our site, you'll see a cookie banner with options to accept or customize.",
      "You can change your preferences at any time through the cookie settings link in our footer.",
      "Note that some features may not work properly if you disable certain cookies.",
      "For more information about your rights, see our Privacy Policy."
    ]
  }
];

const CookiePolicy = () => {
  return (
    <PageLayout
      title="Cookie Policy"
      subtitle="Last updated: February 1, 2026. This policy explains how Oryx uses cookies and similar technologies."
      showCTA={false}
    >
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-10"
            >
              <h2 className="text-xl font-display font-bold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Cookie Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-muted/30 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl font-display font-bold mb-4">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold">Name</th>
                    <th className="text-left py-3 px-2 font-semibold">Purpose</th>
                    <th className="text-left py-3 px-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2">session_id</td>
                    <td className="py-3 px-2">Maintains login session</td>
                    <td className="py-3 px-2">Session</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2">preferences</td>
                    <td className="py-3 px-2">Stores user preferences</td>
                    <td className="py-3 px-2">1 year</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2">_ga</td>
                    <td className="py-3 px-2">Google Analytics tracking</td>
                    <td className="py-3 px-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2">cookie_consent</td>
                    <td className="py-3 px-2">Remembers consent choice</td>
                    <td className="py-3 px-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default CookiePolicy;
