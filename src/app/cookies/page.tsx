import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy — SpreadHunt | Your Privacy and Data Usage",
  description:
    "Learn how SpreadHunt uses cookies to enhance your experience, manage preferences, and analyze site traffic. Understand your privacy rights and cookie controls.",
  keywords: [
    "SpreadHunt cookies policy",
    "cookie usage",
    "privacy policy",
    "data collection",
    "user preferences",
    "website cookies",
    "tracking and analytics",
  ],
  openGraph: {
    title: "Cookies Policy — SpreadHunt | Your Privacy and Data Usage",
    description:
      "Read about how SpreadHunt manages cookies to improve your experience and protect your privacy.",
    url: "http://localhost:3000/cookies",
  },
  twitter: {
    title: "Cookies Policy — SpreadHunt | Your Privacy and Data Usage",
    description:
      "Understand SpreadHunt’s cookie usage and your options for managing cookie preferences.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function CookiesPolicy() {
  return (
    <>
      <h1 className="title h1-main text-center uppercase">Cookies Policy</h1>
      <p className="mb-4 italic text-sm desc text-right max-sm:text-center">
        Effective Date: July 20, 2025
      </p>
      <p className="mb-15 text-center max-w-3xl mx-auto max-sm:text-[13px]">
        This Cookies Policy explains how we use cookies and similar tracking
        technologies on our website. By continuing to browse or use our Service,
        you agree to the use of cookies as described in this policy.
      </p>

      <section className="mb-4">
        <h2 className="subtitle h2">1. What Are Cookies?</h2>
        <p className="content">
          Cookies are small text files stored on your device when you visit a
          website. They help the website remember your actions and preferences
          over time, making your experience more efficient and personalized.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">2. Types of Cookies We Use</h2>
        <p className="content">We may use the following types of cookies:</p>
        <ul className="list">
          <li>
            <strong>Essential Cookies:</strong> These are necessary for the
            proper functioning of our website. Without them, some services may
            not be available.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These collect information
            about how users interact with our website, such as pages visited and
            errors encountered. This data helps us improve the performance of
            our Service.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These remember your preferences
            and settings (like language or region) to provide a more
            personalized experience.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These help us understand how our
            site is being used and help us improve user experience. We may use
            third-party analytics tools (like Google Analytics).
          </li>
          <li>
            <strong>Advertising Cookies</strong> (if applicable): These are used
            to show ads that are more relevant to you. We may share this data
            with third-party advertisers.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">3. How We Use Cookies</h2>
        <p className="content">We use cookies to:</p>
        <ul className="list">
          <li>Remember your preferences and settings.</li>
          <li>Improve website performance and functionality.</li>
          <li>Understand how visitors use our site.</li>
          <li>Provide relevant content and advertising (if applicable).</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">4. Managing Cookies</h2>
        <p className="content">
          You can control or delete cookies through your browser settings. You
          can:
        </p>
        <ul className="list">
          <li>Delete all cookies stored on your device.</li>
          <li>Block all or some cookies.</li>
          <li>Set your browser to notify you when cookies are being used.</li>
        </ul>
        <p className="content">
          Note that disabling cookies may affect the functionality and features
          of our website.
        </p>
        <p className="content">Browser help links:</p>
        <ul className="list">
          <li>
            <Link
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              className="link"
            >
              Chrome
            </Link>
          </li>
          <li>
            <Link
              href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
              target="_blank"
              className="link"
            >
              Firefox
            </Link>
          </li>
          <li>
            <Link
              href="https://support.apple.com/en-us/HT201265"
              target="_blank"
              className="link"
            >
              Safari
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              className="link"
            >
              Edge
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">5. Third-Party Cookies</h2>
        <p className="content">
          Some cookies may be set by third-party services used on our website.
          These third parties may collect information about your online
          activities over time and across different websites.
        </p>
        <p className="content">
          We do not have access to or control over these cookies. We recommend
          that you review their privacy and cookie policies.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">6. Changes to This Cookies Policy</h2>
        <p className="content">
          We may update this Cookies Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
        <p className="content">
          We may also notify users about significant updates via the Posts
          section of our site.
        </p>
        <p className="content">
          We recommend checking this page periodically to stay informed about
          how we use cookies.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="subtitle h2">7. Contact Us</h2>
        <p className="content">
          If you have any questions about this Cookies Policy, feel free to
          contact us at:
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
