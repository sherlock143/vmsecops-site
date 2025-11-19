"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen">

      {/* ENTRY SPLASH SCREEN */}
      <section className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-cyan-300 drop-shadow-lg">
          Welcome to VM SecOps
        </h1>
        <p className="mt-3 text-lg text-gray-400">
          Choose what you want to explore
        </p>

        <div className="mt-8 flex gap-6">
          <a href="#profile"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-semibold shadow-lg">
            About Vasu
          </a>

          <a href="#services"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold shadow-lg">
            Security Services
          </a>
        </div>
      </section>

      {/* HERO PROFILE */}
      <section id="profile" className="pt-32 pb-24 flex flex-col md:flex-row items-center gap-12 px-8 max-w-7xl mx-auto">

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-cyan-300 drop-shadow-md">
            Vasu Melipaka
          </h2>
          <p className="mt-2 text-gray-300">
            Senior Security Analyst • Mobile • Web • API • DevSecOps • Cloud
          </p>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            I help companies secure mobile, web, and API applications through 
            advanced manual penetration testing aligned with OWASP, MASVS, and PCI DSS.
            I translate findings into actionable fixes engineering teams understand.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-5 py-3 bg-cyan-500 text-black rounded-xl hover:bg-cyan-600">
              Download Resume
            </button>
            <a href="#contact"
              className="px-5 py-3 bg-emerald-500 text-black rounded-xl hover:bg-emerald-600">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/vasu.jpg"
            width={350}
            height={350}
            alt="Vasu Melipaka"
            className="rounded-3xl shadow-[0_0_50px_#00E5FF50]"
          />
        </div>
      </section>

      {/* PROFILE SUMMARY */}
      <section className="py-20 bg-[#0A0F1F]/40 backdrop-blur-xl">
        <h3 className="text-center text-3xl font-bold text-cyan-300">Profile Summary</h3>

        <div className="mt-12 grid md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto">
          
          <div className="p-6 bg-[#050B16]/60 rounded-2xl border border-cyan-900">
            <h4 className="text-xl font-semibold text-cyan-300">Who I Am</h4>
            <p className="mt-3 text-gray-300 leading-relaxed">
              A Senior Security Analyst with deep expertise in mobile, web & API pentesting.
              I convert technical vulnerabilities into business risks and guide engineering
              teams with accurate, reproducible PoCs.
            </p>
          </div>

          <div className="p-6 bg-[#050B16]/60 rounded-2xl border border-emerald-900">
            <h4 className="text-xl font-semibold text-emerald-300">What I Deliver</h4>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>• High-impact manual pentesting</li>
              <li>• OWASP / MASVS / PCI DSS aligned reporting</li>
              <li>• CVSS scoring with business explanation</li>
              <li>• Developer-ready remediation guidance</li>
              <li>• Retesting & validation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
        <h3 className="text-center text-3xl font-bold text-cyan-300">Security Services</h3>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            ["Web Application Testing", "OWASP Top 10, session, IDOR, business logic."],
            ["Mobile App Testing (Android/iOS)", "Static + Dynamic testing, MASVS M1–M10."],
            ["API Security Testing", "JWT, auth, access control, rate limits."],
            ["DevSecOps & CI/CD Security", "SAST, SCA, secrets scanning, IaC security."],
            ["Cloud Security Review", "AWS/Azure misconfig assessment."],
            ["Red Team Lite", "Recon, phishing simulation, attack-path discovery."]
          ].map(([title, desc]) => (
            <div key={title} className="p-6 bg-[#050B16]/60 border border-cyan-800 rounded-2xl hover:bg-[#0A142A] transition">
              <h4 className="text-xl font-semibold text-cyan-300">{title}</h4>
              <p className="mt-3 text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h3 className="text-3xl font-bold text-cyan-300">Get in Touch</h3>

        <p className="mt-4 text-gray-400">Let’s discuss your security needs.</p>

        <div className="mt-8 flex gap-6 justify-center">
          <a href="mailto:vasumelipaka@gmail.com" className="px-6 py-3 bg-cyan-500 text-black rounded-xl">
            Email Me
          </a>
          <a href="https://wa.me/918523860577" className="px-6 py-3 bg-emerald-500 text-black rounded-xl">
            WhatsApp
          </a>
          <a href="https://linkedin.com/in/vasu-melipaka" className="px-6 py-3 bg-gray-700 text-white rounded-xl">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
