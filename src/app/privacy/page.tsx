import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — SpreadHunt | Protecting Your Personal Data",
  description:
    "Read SpreadHunt’s Privacy Policy to understand how we collect, use, and protect your personal information while you use our crypto arbitrage platform.",
  keywords: [
    "SpreadHunt privacy policy",
    "personal data protection",
    "data privacy",
    "user information security",
    "crypto platform privacy",
    "data collection policy",
    "privacy rights",
  ],
  openGraph: {
    title: "Privacy Policy — SpreadHunt | Protecting Your Personal Data",
    description:
      "Learn about SpreadHunt’s commitment to your privacy and how we safeguard your personal data.",
    url: "http://localhost:3000/privacy",
  },
  twitter: {
    title: "Privacy Policy — SpreadHunt | Protecting Your Personal Data",
    description:
      "Understand how SpreadHunt handles your personal information and protects your privacy.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-[#031827] text-center py-4 rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container grid gap-2">
          <h1 className="title">Privacy Policy</h1>
          <p className="content max-w-[700px] mx-auto">
            We value your privacy and are committed to protecting your personal
            data. This privacy policy explains what data we collect, how we use
            it, and what rights you have.
          </p>
          <p className="mb-4 italic text-sm desc text-right max-sm:text-center">
            Effective Date: Sep 20, 2025
          </p>
        </div>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          0. Introduction
        </h2>
        <p className="content">
          Welcome to our website. We respect your privacy and are committed to
          protecting any information you may provide while using our Service.
        </p>
        <p className="content">
          This Privacy Policy explains how we handle information, what we
          collect (if anything), and how we use it. By using the Service, you
          agree to the terms of this policy.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          1. Information We Collect
        </h2>
        <p className="content">
          Our website does not collect any personal data from users. We may
          collect non-personal information that does not identify individual
          users, solely to improve the functionality of our Service.
        </p>
        <p className="content">
          While we do not directly collect personal data, some non-personal data
          collected via third-party analytics tools (such as IP addresses or
          device identifiers) may be classified as personal information under
          certain privacy laws.
        </p>
        <p className="content">
          This data may include browser type, operating system, referring pages,
          time and date of visits, and other technical information. We use this
          information to analyze traffic, enhance user experience, and ensure
          the proper operation of our Service.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          2. How We Use Your Information
        </h2>
        <p className="content">Your data is used for the following purposes:</p>
        <ul className="list">
          <li>To provide, improve, and maintain our services</li>
          <li>To respond to inquiries and communicate with you</li>
          <li>To analyze usage and improve user experience</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          3. Data Sharing
        </h2>
        <p className="content">
          We do not sell your personal data. However, we may share your data
          with trusted third parties:
        </p>
        <ul className="list">
          <li>
            Service providers acting on our behalf (e.g. hosting, analytics)
          </li>
          <li>To provide and maintain our Service</li>
          <li>
            To collect analysis or valuable information so that we can improve
            our Service
          </li>
          <li>To monitor the use of our Service</li>
          <li>To detect, prevent and resolve technical problems</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          4. Your Rights
        </h2>
        <p className="content">
          Depending on your jurisdiction, you have the right to:
        </p>
        <ul className="list">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for data processing</li>
          <li>Request data portability (where applicable)</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          5. Data Retention
        </h2>
        <p className="content">
          We retain your personal data only as long as necessary for the
          purposes described above, or as required by law.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          6. Data Security
        </h2>
        <p className="content">
          We value the security of your personal data. However, please remember
          that no method of transmission over the Internet or method of
          electronic storage is 100% secure. While we strive to use commercially
          acceptable means to protect your data, we cannot guarantee its
          absolute security.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          7. Links to Other Websites
        </h2>
        <p className="content">
          Our Service may contain links to third-party websites that are not
          operated by us. If you click on a third-party link, you will be
          directed to that party’s website. We strongly advise you to review the
          Privacy Policy of every site you visit.
        </p>
        <p className="content">
          We have no control over and assume no responsibility for the content,
          privacy policies, or practices of any third-party sites or services.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          8. Cookies and Tracking
        </h2>
        <p className="content">
          We use cookies and similar tracking technologies to enhance your
          experience. Cookies are small text files stored on your device. You
          can control the use of cookies in your browser settings.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          9. GDPR and CCPA Compliance
        </h2>
        <p className="content">
          If you are a resident of the European Union (EU), European Economic
          Area (EEA), or California (USA), you are ensubtitled to additional
          protections under the General Data Protection Regulation (GDPR) or the
          California Consumer Privacy Act (CCPA), respectively.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          10. Changes to This Policy
        </h2>
        <p>
          <span className="content">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date. We recommend
            reviewing this policy periodically. Additionally, we may notify
            users about significant updates via announcements in the
          </span>{" "}
          <Link href="/posts" className="underline hover:text-[#9ADE20]">
            Posts
          </Link>{" "}
          <span className="content">section of our website.</span>
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          11. Contact Us
        </h2>
        <p className="content">
          If you have any questions or concerns regarding this privacy policy,
          feel free to contact us at:
        </p>
        <ul className="list">
          <li>
            <Link
              href="mailto:support@example.com"
              className="underline hover:text-[#9ADE20]"
            >
              support@example.com
            </Link>
          </li>
          <li>
            <Link
              href="https://t.me/SpreadHuntBot"
              className="underline hover:text-[#9ADE20]"
            >
              @SpreadHuntBot
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
