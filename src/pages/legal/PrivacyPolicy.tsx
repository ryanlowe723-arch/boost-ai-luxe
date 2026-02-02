import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Account Information: When you create an account, we collect your name, email address, phone number, and business information.",
      "Usage Data: We collect information about how you interact with our services, including call logs, analytics data, and feature usage.",
      "Payment Information: If you subscribe to paid services, we collect billing details through our secure payment processor.",
      "Communications: We store messages and communications you send through our platform or to our support team."
    ]
  },
  {
    title: "How We Use Your Information",
    content: [
      "Provide, maintain, and improve our services",
      "Process transactions and send related information",
      "Send technical notices, updates, and support messages",
      "Respond to your comments, questions, and customer service requests",
      "Train and improve our AI systems (using anonymized data only)"
    ]
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell your personal information to third parties.",
      "We may share information with service providers who help us operate our platform.",
      "We may disclose information if required by law or to protect our rights.",
      "In the event of a merger or acquisition, your information may be transferred to the new entity."
    ]
  },
  {
    title: "Data Security",
    content: [
      "We use industry-standard encryption to protect data in transit and at rest.",
      "Access to personal information is restricted to employees who need it.",
      "We regularly audit our security practices and update them as needed.",
      "We maintain SOC 2 Type II compliance for enterprise customers."
    ]
  },
  {
    title: "Your Rights",
    content: [
      "Access: You can request a copy of your personal data at any time.",
      "Correction: You can update or correct inaccurate information in your account.",
      "Deletion: You can request deletion of your account and associated data.",
      "Portability: You can export your data in a machine-readable format."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy, please contact us at privacy@oryx.ai or through our contact page."
    ]
  }
];

const PrivacyPolicy = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Last updated: February 1, 2026. This policy describes how Oryx collects, uses, and protects your information."
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
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
