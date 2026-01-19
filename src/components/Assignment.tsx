"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const coverLetter = {
  title: "Cover Letter",
  recipient: "Industrus Engineering - Graduate Engineer Position",
  content: [
    {
      heading: null,
      text: "Dear Hiring Manager,\n\nI am writing to apply for the Graduate Engineer position at Industrus Engineering. I am particularly drawn to Industrus's innovative approach, from advising on Australia's largest lithium-ion battery to using digital technology to restore transport access after natural disasters. As a Master of Professional Engineering graduate (Telecommunications & Electronics) from UTS, with hands-on experience developing AI-powered safety systems during my Nokia 5G internship, I am confident my skills align well with your graduate program.",
    },
    {
      heading:
        "A commitment to ethical conduct and the highest standards of professional accountability (3.1)",
      text: "During my Nokia internship, I was developing a PPE detection system for construction site safety. While testing, I discovered the AI model was producing false readings under certain lighting conditions, which could lead to incorrect safety compliance reports. Despite project deadlines, I documented and reported the issue to my supervisor with a detailed analysis. I then collected additional training data under varied conditions and retrained the model. As a result, detection accuracy improved from 78% to 94%, and the system was approved for demonstration to industry partners.",
    },
    {
      heading:
        "Demonstrated ability to effectively communicate both with other engineers and with stakeholders from different fields (3.2)",
      text: "My Nokia project required communicating with both technical teams and non-technical stakeholders. I presented progress to Nokia engineers using metrics and system diagrams, while demonstrating the project's safety benefits to visiting construction industry representatives through live robot demonstrations. I also prepared documentation explaining AI detection concepts in accessible language. This approach ensured all parties understood the system's capabilities, resulting in positive feedback from both engineering supervisors and industry visitors.",
    },
    {
      heading:
        "The ability to engage with a creative, innovative and proactive environment (3.3)",
      text: "The original project scope focused on general crowd monitoring. After initial research, I proactively proposed refocusing on PPE detection for construction sites, as it addressed a specific industry need with clearer success metrics. I integrated multiple technologies not previously combined in our lab, including computer vision, 5G connectivity, and mobile robotics. When I encountered performance challenges, I experimented with different approaches rather than accepting limitations. The result was a working prototype that achieved real-time detection with sub-250ms response times.",
    },
    {
      heading: "Demonstrated ability to use and manage information (3.4)",
      text: "Managing technical information for my project required systematic organisation. I created annotated image databases with over 1,000 training samples categorised by equipment type and lighting conditions. I maintained version control for all model iterations, documenting settings and results for reproducibility. I also consolidated platform documentation into accessible reference materials. This organised approach reduced troubleshooting time by approximately 40% and enabled team members to quickly understand and build upon my work.",
    },
    {
      heading:
        "The ability to manage your own performance in a professional environment (3.5)",
      text: "I managed my internship deliverables alongside my thesis research on mobile network-based water level sensing. I implemented weekly planning with dedicated time blocks and measurable milestones for each project. When my initial approach took longer than anticipated, I sought supervisor feedback and adjusted my methodology to accelerate development. This self-management approach enabled me to successfully deliver my internship project while also achieving strong results in my thesis research, which demonstrated 4-6cm measurement accuracy for flood monitoring applications.",
    },
    {
      heading:
        "A demonstrated ability to work as part of a team and to show leadership when required (3.6)",
      text: "Approaching a demonstration deadline, I identified that our team lacked a clear integration plan. I organised a planning session where we mapped requirements, identified bottlenecks, and assigned tasks based on each member's strengths. I established a shared project board and testing schedule. When a colleague encountered difficulties with camera calibration, I worked alongside them to resolve the issue. Through this collaborative approach, we completed integration two days ahead of schedule and delivered a successful demonstration to industry partners.",
    },
    {
      heading: null,
      text: "I am enthusiastic about the opportunity to contribute to Industrus Engineering's innovative projects and would welcome the chance to discuss how my experience aligns with your graduate program. I am available for an interview at your convenience and look forward to hearing from you.\n\nYours sincerely,\nKevin Kipkorir",
    },
  ],
};

const reflections = [
  {
    title: "Reflection 1: Principles of Sustainability to Create Viable Systems",
    content: [
      {
        heading: "Situation",
        text: "During my current internship at UTS TechLab working on a Nokia 5G safety monitoring system, I was tasked with developing an AI model that could detect personal protective equipment (PPE) compliance on construction sites. The initial approach involved processing all video feeds through cloud-based servers, which consumed significant bandwidth and introduced latency issues that made real-time safety alerts impractical.",
      },
      {
        heading: "Feelings",
        text: "Initially, I felt concerned about the system's viability. The bandwidth consumption was not only technically limiting but also economically unsustainable for deployment across multiple construction sites. I questioned whether the entire project approach needed reconsideration, which felt daunting given the timeline and expectations from my supervisors.",
      },
      {
        heading: "Beliefs",
        text: "I strongly believe that engineering solutions must be sustainable from both environmental and economic perspectives. Inefficient systems that consume excessive resources—whether energy, bandwidth, or computational power—are fundamentally flawed regardless of their technical sophistication. This belief stems from my experiences in Kenya, where resource constraints demand efficient engineering from the outset.",
      },
      {
        heading: "Actions & Challenges",
        text: "The primary difficulty I encountered was balancing detection accuracy with processing efficiency. Guided by Dowling et al.'s (2016) Strategy 5 on conserving resources, I decided to implement edge computing to process video locally rather than transmitting raw feeds to the cloud. This theoretical framework directly informed my decision to move computation closer to the data source. Additionally, applying Strategy 3 on stakeholder consultation, I engaged with construction site managers early in the redesign process. Their input revealed that latency below 500 milliseconds was critical for effective safety interventions—a requirement I would not have prioritised without this consultation. I spent considerable time testing different model configurations and compression techniques before achieving acceptable performance.",
      },
      {
        heading: "Outcomes",
        text: "By implementing edge computing guided by these sustainability principles, we reduced bandwidth consumption by approximately 80% while maintaining detection accuracy above 89% mAP50. The system achieved response times under 250 milliseconds, well within the threshold identified through stakeholder consultation.",
      },
      {
        heading: "Learning",
        text: "This experience taught me that sustainability in engineering extends beyond environmental considerations to encompass the efficient use of all resources, including network bandwidth and computational capacity. My belief in resource-efficient design was reinforced, but I also learned the importance of defining efficiency criteria through stakeholder engagement rather than assumptions. In future projects, I will evaluate resource efficiency as a primary design criterion from the initial planning stages, applying Dowling et al.'s (2016) framework proactively rather than reactively. I will also engage stakeholders early to understand the practical constraints that define what constitutes a truly viable system.",
      },
    ],
  },
  {
    title: "Reflection 2: Professional Practice within Intercultural and Global Contexts",
    content: [
      {
        heading: "Situation",
        text: "During a critical project review meeting at UTS TechLab, a specific incident highlighted the intercultural challenges within our diverse team. A colleague from China had completed significant work on the camera integration component, but when I provided direct feedback suggesting improvements to the code structure, he became visibly withdrawn and disengaged from the discussion. Later, an Indian team member explained that my feedback style, while normal in Australian workplace culture, may have been perceived as publicly critical in a way that caused loss of face. This single incident threatened to derail our collaboration just two weeks before our demonstration deadline.",
      },
      {
        heading: "Feelings",
        text: "In this situation, I initially felt confused and frustrated. I had intended my feedback to be helpful and constructive, and I did not understand why it had caused offence. However, as I reflected on the incident, my frustration shifted to genuine curiosity about how cultural backgrounds shape communication expectations. I also felt concerned that my actions had inadvertently damaged a working relationship that was essential to our project's success.",
      },
      {
        heading: "Beliefs",
        text: "I believe that effective engineering teams must actively cultivate intercultural competence, particularly as the profession becomes increasingly globalised. Prior to this incident, I held the assumption that direct, honest feedback was universally appreciated in professional settings. This belief was directly challenged by the experience, forcing me to recognise that my communication style, shaped by both Kenyan and Australian workplace norms, was not universally appropriate.",
      },
      {
        heading: "Theoretical Framework",
        text: "Bennett's (2004) developmental model of intercultural sensitivity provides a framework for understanding this experience. Bennett describes the progression from ethnocentrism, where one's own cultural perspective is seen as central, to ethnorelativism, where cultural differences are recognised and valued. I realised that despite my previous international experience, I had been operating from an ethnocentric position—assuming my feedback style was the professional standard rather than one approach among many. Bennett (2004, p. 68) emphasises that adaptation 'is not assimilation'; effective intercultural practice involves adjusting behaviour while maintaining one's own identity.",
      },
      {
        heading: "Actions & Outcomes",
        text: "To address the situation, I first apologised privately to my colleague, explaining that I had not intended to cause offence and asking him to help me understand how I could communicate more effectively. I then proposed to the team that we establish explicit norms for feedback sessions, including written comments circulated before verbal discussions. This allowed team members to process feedback privately before group conversations. As a result, my colleague re-engaged with the project, our working relationship improved, and we successfully delivered our demonstration on schedule.",
      },
      {
        heading: "Learning",
        text: "From this experience, I learned that intercultural competence is a practical skill that directly affects project outcomes, not merely a social consideration. My belief in direct communication was not wrong, but it required adaptation to be effective across cultural contexts. In future collaborative projects, I will invest time early in establishing communication norms that accommodate different cultural preferences, as Bennett (2004) suggests. I also recognised that my international background is an asset I can use to help bridge cultural gaps in diverse teams, positioning myself as a facilitator when intercultural tensions arise rather than inadvertently contributing to them.",
      },
    ],
  },
];

const references = [
  "Bennett, MJ 2004, 'Becoming interculturally competent', in JS Wurzel (ed.), Toward multiculturalism: a reader in multicultural education, 2nd edn, Intercultural Resource Corporation, Newton, MA, pp. 62–77.",
  "Dowling, D, Hadgraft, R, Carew, A, McCarthy, T, Hargreaves, D & Baillie, C 2016, Engineering your future: an Australasian guide, 3rd edn, Wiley, Milton, QLD.",
];

export default function Assignment() {
  const [activeTab, setActiveTab] = useState<"cover" | "reflection1" | "reflection2">("cover");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="assignment" className="section-container">
      <SectionHeader
        tag="// ASSIGNMENT SUBMISSION"
        title="Cover Letter & Reflections"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab("cover")}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              activeTab === "cover"
                ? "bg-accent-cyan text-primary"
                : "bg-primary-light text-text-secondary hover:text-white"
            }`}
          >
            Cover Letter
          </button>
          <button
            onClick={() => setActiveTab("reflection1")}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              activeTab === "reflection1"
                ? "bg-accent-cyan text-primary"
                : "bg-primary-light text-text-secondary hover:text-white"
            }`}
          >
            Reflection 1
          </button>
          <button
            onClick={() => setActiveTab("reflection2")}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              activeTab === "reflection2"
                ? "bg-accent-cyan text-primary"
                : "bg-primary-light text-text-secondary hover:text-white"
            }`}
          >
            Reflection 2
          </button>
        </div>

        {/* Content */}
        <div className="card p-6 md:p-8">
          {activeTab === "cover" && (
            <div>
              <h3 className="text-2xl font-bold mb-2">{coverLetter.title}</h3>
              <p className="text-accent-cyan mb-6">{coverLetter.recipient}</p>
              <div className="space-y-6">
                {coverLetter.content.map((section, index) => (
                  <div key={index}>
                    {section.heading && (
                      <h4 className="text-accent-magenta font-semibold mb-2">
                        {section.heading}
                      </h4>
                    )}
                    <p className="text-text-secondary whitespace-pre-line leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reflection1" && (
            <div>
              <h3 className="text-2xl font-bold mb-6">{reflections[0].title}</h3>
              <div className="space-y-6">
                {reflections[0].content.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-accent-magenta font-semibold mb-2">
                      {section.heading}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reflection2" && (
            <div>
              <h3 className="text-2xl font-bold mb-6">{reflections[1].title}</h3>
              <div className="space-y-6">
                {reflections[1].content.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-accent-magenta font-semibold mb-2">
                      {section.heading}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {(activeTab === "reflection1" || activeTab === "reflection2") && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-sm font-mono text-accent-cyan mb-3">References</h4>
              <ul className="space-y-2">
                {references.map((ref, index) => (
                  <li key={index} className="text-sm text-text-secondary">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
