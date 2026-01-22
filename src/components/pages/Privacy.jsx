import React from "react";

function Privacy() {
  return (
    <div className="max-w-full mx-auto px-6 py-10 text-gray-800 mt-24 bg-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: Jan 2026
      </p>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Traxo India respects your privacy and is
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, store, and safeguard information when
          you use our automation, GPS tracking, fleet management, IoT devices,
          websites, and applications (collectively, the “Services”).
        </p>
      </section>

      {/* Company Info */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Company Information</h2>
        <p>
          <strong>Traxo India — Automation, GPS & Live Tracking Solutions</strong>
        </p>
        <p>Founded in 2019</p>
        <p className="mt-2">
          <strong>Manufacturing & Office Address:</strong><br />
          Plot No: 443/4516, ITI Chowk,<br />
          Near RTO Office, Angargadia,<br />
          Balasore, Odisha – 756001, India
        </p>
      </section>

      {/* Information Collected */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Information We Collect</h2>

        <h3 className="font-semibold mt-4">a) Personal Information</h3>
        <ul className="list-disc ml-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company or business details</li>
          <li>Billing and delivery address</li>
          <li>Payment and transaction information</li>
        </ul>

        <h3 className="font-semibold mt-4">b) GPS & Device Data</h3>
        <ul className="list-disc ml-6">
          <li>Real-time and historical location data</li>
          <li>GPS coordinates and route history</li>
          <li>Speed, geo-fencing alerts, ignition status</li>
          <li>Device ID, IMEI number, SIM information</li>
          <li>Driver behavior and fleet analytics</li>
        </ul>

        <h3 className="font-semibold mt-4">c) Technical Data</h3>
        <ul className="list-disc ml-6">
          <li>IP address</li>
          <li>Browser and device type</li>
          <li>Usage logs and diagnostics</li>
        </ul>
      </section>

      {/* Use of Data */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>Provide GPS tracking and automation services</li>
          <li>Enable real-time monitoring and alerts</li>
          <li>Manage subscriptions and payments</li>
          <li>Improve product performance and reliability</li>
          <li>Provide customer support and troubleshooting</li>
          <li>Ensure security, fraud detection, and compliance</li>
        </ul>
      </section>

      {/* Legal Basis */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Legal Basis for Processing</h2>
        <p>
          We process personal data based on user consent, contractual necessity,
          legal obligations under Indian law, and legitimate business interests.
        </p>
      </section>

      {/* Data Sharing */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Sharing of Information</h2>
        <p>
          We may share your data with authorized employees, technology partners,
          telecom operators, payment gateways, and government authorities where
          legally required.
        </p>
        <p className="mt-2 font-semibold">
          Traxo does not sell personal data to third parties.
        </p>
      </section>

      {/* Security */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
        <p>
          We use reasonable physical, electronic, and administrative safeguards
          including encryption, access controls, and secure servers. However,
          internet data transmission is not completely secure and users accept
          inherent risks.
        </p>
      </section>

      {/* Data Retention */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Data Retention</h2>
        <p>
          Personal data is retained only as long as necessary to fulfill service
          purposes or comply with legal obligations. Anonymous data may be kept
          for analytics and research.
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Cookies</h2>
        <p>
          We use cookies to improve platform performance, analyze traffic, and
          enhance user experience. You may disable cookies via browser settings,
          though some features may be limited.
        </p>
      </section>

      {/* User Rights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Your Rights</h2>
        <ul className="list-disc ml-6">
          <li>Access and update personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent (subject to service limitations)</li>
        </ul>
      </section>

      {/* Children */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">11. Children’s Privacy</h2>
        <p>
          Our services are not intended for individuals under 18 years of age.
          We do not knowingly collect personal data from minors.
        </p>
      </section>

      {/* Changes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">12. Changes to This Policy</h2>
        <p>
          Traxo may update this Privacy Policy periodically. Updates will be
          posted on this page with a revised date.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-2">13. Contact & Grievance</h2>
        <p>
          For questions, concerns, or privacy-related requests, contact us at:
        </p>
        <p className="mt-2">
          📧 <strong>Email:</strong> info@traxoindia.in
        </p>
      </section>
    </div>
  );
}

export default Privacy;
