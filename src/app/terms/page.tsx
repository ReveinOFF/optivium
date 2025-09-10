import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — SpreadHunt | User Agreement and Guidelines",
  description:
    "Review SpreadHunt’s Terms of Service to understand the rules, responsibilities, and legal agreements for using our crypto arbitrage platform.",
  keywords: [
    "SpreadHunt terms of service",
    "user agreement",
    "legal terms",
    "platform rules",
    "crypto arbitrage terms",
    "user responsibilities",
    "service conditions",
  ],
  openGraph: {
    title: "Terms of Service — SpreadHunt | User Agreement and Guidelines",
    description:
      "Learn about the terms and conditions that govern your use of SpreadHunt’s crypto arbitrage services.",
    url: "http://localhost:3000/terms",
  },
  twitter: {
    title: "Terms of Service — SpreadHunt | User Agreement and Guidelines",
    description:
      "Understand the legal terms and user responsibilities when using SpreadHunt.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function TermsPolicy() {
  return (
    <>
      <h1 className="title text-center uppercase">Terms of Service</h1>
      <p className="mb-4 italic text-sm desc text-right max-sm:text-center">
        Effective Date: Sep 20, 2025
      </p>
      <p className="mb-15 text-center max-w-3xl mx-auto max-sm:text-[13px]">
        These Terms of Service govern your use of our website and services. By
        accessing or using our Service, you agree to be bound by these Terms. If
        you do not agree with any part of these Terms, please do not use the
        Service.
      </p>

      <section className="mb-4">
        <h2 className="subtitle h2">1. Acceptance of Terms</h2>
        <p className="content">
          By accessing or using our Service, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">2. Use of the Service</h2>
        <p className="content">
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms. You must not:
        </p>
        <ul className="list">
          <li>Violate any applicable laws or regulations.</li>
          <li>Use the Service for any fraudulent or harmful purposes.</li>
          <li>Attempt to gain unauthorized access to our systems or data.</li>
          <li>Interfere with the proper functioning of the Service.</li>
        </ul>
        <p className="content">
          <strong>Subscription and Access:</strong> SpreadHunt is available in a
          free version with limited functionality without requiring a
          subscription. To access all features, you can purchase a{" "}
          <Link href="/subscription">Subscription</Link>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">3. Subscription and Access</h2>
        <p className="content">
          SpreadHunt is available in a free version with limited functionality
          without requiring a subscription.
        </p>
        <p className="content">
          To access all features, you may purchase a subscription via{" "}
          <Link href="/subscription">Subscription</Link>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">4. Intellectual Property</h2>
        <p className="content">
          All content on the Service, including text, graphics, logos, icons,
          and software, is the property of Spread Hunt or its licensors and is
          protected by intellectual property laws.
        </p>
        <p className="content">
          You may not copy, reproduce, distribute, or create derivative works
          from any content without prior written permission.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">5. User Content (if applicable)</h2>
        <p className="content">
          If you submit or post any content (e.g. comments, feedback, media),
          you grant us a worldwide, royalty-free, non-exclusive license to use,
          reproduce, modify, and display that content in connection with the
          Service.
        </p>
        <p className="content">
          You are solely responsible for the content you submit and must not:
        </p>
        <ul className="list">
          <li>Infringe on any intellectual property rights.</li>
          <li>Post harmful, abusive, or unlawful material.</li>
          <li>Impersonate another person or misrepresent your affiliation.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">6. Termination</h2>
        <p className="content">
          We may suspend or terminate your access to the Service at any time
          without prior notice if we believe you have violated these Terms or
          engaged in any harmful behavior.
        </p>
        <p className="content">
          You may also stop using the Service at any time.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">7. Disclaimer of Warranties</h2>
        <p className="content">
          The Service is provided "as is" and "as available" without warranties
          of any kind, either express or implied. We do not guarantee that the
          Service will be error-free, secure, or continuously available.
        </p>
        <p className="content">
          Use of our parser does not guarantee any profit. Our service is a tool
          for spread monitoring and providing arbitrage information, but does
          not ensure guaranteed income. You are solely responsible for assessing
          risks and performing your own analysis before making any trading
          decisions. We are not liable for any financial losses related to your
          use of our service.
        </p>
        <p className="content">
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the Service.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">8. Limitation of Liability</h2>
        <p className="content">
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the Service.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">9. Links to Other Websites</h2>
        <p className="content">
          Our Service may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of any third-party
          sites or services.
        </p>
        <p className="content">
          We strongly recommend reviewing the terms and privacy policies of
          those websites.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">10. Changes to These Terms</h2>
        <p className="content">
          We reserve the right to modify these Terms at any time. Updated
          versions will be posted on this page with a new effective date.
        </p>
        <p className="content">
          We may also notify users of significant changes through the Posts
          section of our website.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">11. Governing Law</h2>
        <p className="content">
          These Terms are governed by the laws of Ukraine, without regard to its
          conflict of law provisions.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="subtitle h2">12. Contact Us</h2>
        <p className="content">
          If you have any questions or concerns about these Terms, feel free to
          contact us:
        </p>
        <ul className="list">
          <li>
            <Link href="mailto:support@example.com" className="link">
              support@example.com
            </Link>
          </li>
          <li>
            <Link href="https://t.me/SpreadHuntBot" className="link">
              @SpreadHuntBot
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
