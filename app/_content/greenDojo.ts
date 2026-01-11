export const greenDojo = {
  name: "Green Dojo",
  
  // Identidad de marca y visión global
  tagline: "The World is our Dojo: Leading the Sustainable Transformation of Global Karate.",

  // Propuesta de valor para socios (One-pager style)
  oneLinePitch: "A strategic Erasmus+ initiative to establish the first European sustainability standard for Martial Arts through ISO 20121 governance, digital footprint tracking, and elite pilot validation.",

  // Detalles técnicos de la convocatoria (Transparencia para socios)
  fundingCall: {
    programme: "Erasmus+ Sport - Cooperation Partnerships",
    action: "Lump Sum Type II (High Impact)",
    status: "Proposal Phase",
    submissionDeadline: "March 5, 2025",
    projectDuration: "18 Months",
    totalBudget: "€250,000",
    euContribution: "80-100% funding for eligible activities",
    priority: "Environmental sustainability and social inclusion through sport."
  },

  // Mapa del Consorcio (Status actual para búsqueda de socios)
  consortium: {
    lead: {
      entity: "World Karate Federation (WKF)",
      role: "Project Coordinator & Global Governance",
      status: "Confirmed"
    },
    technical: {
      entity: "ACERTA / ACE-RTA",
      role: "ISO 20121 Quality Assurance & Grant Management",
      status: "Confirmed"
    },
    pilots: [
      { country: "Italy", entity: "FIJLKAM", role: "Elite Event Host & Pilot Validation", status: "Under Validation" },
      { country: "Poland", entity: "Polish Karate Union", role: "Elite Event Host & Pilot Validation", status: "Under Validation" }
    ],
    openProfiles: [
      { 
        profile: "Tech & Academic Partner", 
        target: "University or Research Center (Central Europe preferred)", 
        mission: "Development of digital tools, LCA analysis, and scientific impact measurement." 
      },
      { 
        profile: "Associated Partners", 
        target: "Regional Federations or Sustainability NGOs", 
        mission: "Dissemination, youth engagement, and knowledge transfer." 
      }
    ]
  },

  // Pilares Estratégicos (Work Packages)
  pillars: [
    {
      id: "WP1",
      title: "Green Governance Framework",
      desc: "Adapting the ISO 20121 standard to the specific needs of Martial Arts federations. Setting the strategic baseline for the 'Green Dojo' label.",
      keyOutput: "Sustainable Event Management Handbook"
    },
    {
      id: "WP2",
      title: "Digital Sustainability Toolbox",
      desc: "Development of user-friendly digital tools: Carbon footprint calculators, Water usage trackers, and a Digital Solutions Catalogue for clubs.",
      keyOutput: "Open-source Environmental Calculator"
    },
    {
      id: "WP3",
      title: "Pilot Lab & Implementation",
      desc: "Executing real-world pilots in top-tier events (Venice/Bielsko-Biała) to validate sustainability measures against baseline data.",
      keyOutput: "Pilot Impact Case Studies"
    },
    {
      id: "WP4",
      title: "The World is our Dojo: Legacy",
      desc: "Large-scale dissemination, training for youth leaders, and creating a replication kit for other Olympic sports.",
      keyOutput: "European Replication Blueprint"
    }
  ],

  // Beneficios para los Socios (Por qué unirse)
  partnerBenefits: [
    {
      title: "Full Funding",
      desc: "Eligible costs for event sustainability upgrades and staff time are covered by the EU grant."
    },
    {
      title: "Strategic Positioning",
      desc: "Be among the first federations to adopt the upcoming EU Green Deal standards for sport."
    },
    {
      title: "Technological Edge",
      desc: "Exclusive access to digital tools developed during the project for your own national events."
    },
    {
      title: "Institutional Prestige",
      desc: "Collaboration at the highest level with the WKF and leading sustainability experts."
    },
    {
      title: "Scientific Validation",
      desc: "Concrete data proving the environmental and social ROI of your sports activities."
    }
  ],

  // Roadmap de la Propuesta (Hitos clave)
  milestones: [
    { date: "Immediate", action: "Partner OID Registration (Organisation ID)", status: "Critical" },
    { date: "Jan 20", action: "Letters of Intent & Mandates signing", status: "Pending" },
    { date: "Feb 10", action: "Final Budget & Work Package allocation", status: "Planned" },
    { date: "Mar 5", action: "Official Submission to the European Commission", status: "Deadline" }
  ],

  // Llamadas a la Acción (CTAs)
  cta: {
    primary: { 
      label: "Join the Consortium", 
      href: "/join-us",
      description: "Request the Partner Onboarding Pack"
    },
    secondary: { 
      label: "Stakeholder Survey", 
      href: "/compliance",
      description: "Contribute to the Needs Analysis"
    }
  }
};