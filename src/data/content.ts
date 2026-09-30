// Single source of truth for landing page copy.
// Content follows the Envis8ge Meta Ads Landing Page SOP verbatim where the SOP
// provides exact wording. Sections requiring verified business data that has not
// been supplied yet use bracketed placeholders (e.g. [CASE STUDY DATA REQUIRED])
// per the SOP's content rule. Search this file for "REQUIRED" to find every gap.

export const brand = {
  name: "Envis8ge",
  siteTitle: "Envis8ge Meta Ads | Turn Meta Ads Into Qualified Leads",
  metaDescription:
    "Envis8ge helps businesses plan, launch and optimise Meta Ads campaigns designed to attract the right audience, generate better-quality leads and turn ad spend into measurable business opportunities.",
};

export const cta = {
  primary: "Book a Free Consultation",
  secondary: "Get Your Meta Ads Reviewed",
  finalHeadline: "Ready to Make Your Meta Ads Work Harder for Your Business?",
  finalSupporting:
    "Find out what's stopping your campaigns from generating better leads and what you can improve across your ads, targeting and conversion journey.",
  finalCta: "Book Your Free Meta Ads Consultation",
  assessmentSupporting:
    "Not sure why your Meta Ads aren't performing? We'll look at your current setup and identify where improvements can be made.",
};

export const hero = {
  eyebrow: "Meta Ads Strategy & Lead Generation",
  headline: "Turn Meta Ads Into a Consistent Source of Qualified Leads",
  supporting:
    "Stop spending on ads that generate clicks but no real opportunities. Envis8ge helps businesses plan, launch and optimise Meta Ads campaigns designed to attract the right audience, generate better-quality leads and turn advertising spend into measurable business opportunities.",
  primaryCta: cta.primary,
  secondaryCta: cta.secondary,
  journey: ["Audience", "Creative", "Ad", "Landing Page", "Lead", "Qualified Lead", "Customer"],
};

export const primaryMessage =
  "Meta Ads shouldn't just generate clicks. They should generate opportunities for your business.";

export const credibility = {
  headline: "What We Focus On",
  pills: ["Meta Ads Strategy", "Lead Generation", "Funnel Optimisation", "Campaign Management"],
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "$5,000+", label: "Ad Spend Managed" },
    { value: "42+", label: "Industries Served" },
  ],
};

export const caseStudies = {
  headline: "Client Results",
  supporting: "Real campaign outcomes, not projections.",
  items: [
    {
      name: "e2i",
      client: "Employment & Employability · Corporate / Institutional",
      challenge:
        "Promote multiple employment and career events to different audiences and industries across Singapore, while supporting e2i’s employment and employability initiatives.",
      whatWeChanged:
        "Developed dedicated social media ad campaigns for individual events, with audience targeting tailored to each campaign's requirements.",
      result: {
        value: "250+",
        label: "Individual ad campaigns and counting",
        detail: "Supporting e2i's event promotion efforts through ongoing campaign management.",
      },
    },
    {
      name: "Inspire Immigration",
      client: "Immigration Consultancy · Professional Services",
      challenge:
        "Build brand awareness and establish trust with prospective clients seeking Singapore PR and citizenship application services.",
      whatWeChanged:
        "Launched targeted advertising campaigns featuring client success stories and insights from the founder to showcase the consultancy’s expertise and application process.",
      result: {
        value: "$43.14",
        label: "Cost per acquisition",
        detail: "High-quality leads and good conversions in just 3 months.",
      },
    },
  ],
};

export const problem = {
  headline: "Running Meta Ads But Not Getting Enough Leads?",
  points: [
    "You're getting clicks but not enquiries.",
    "Your CPL keeps increasing.",
    "You're attracting leads who aren't qualified.",
    "You're unsure which ads are actually working.",
    "Your campaigns depend on constant guesswork.",
    "Your landing page isn't converting traffic.",
    "You're spending more without seeing better results.",
  ],
  reframe:
    "The problem is not always Meta Ads itself. Results depend on the full journey:",
  journey: ["Offer", "Messaging", "Creative", "Audience", "Landing Page", "Follow-up"],
};

export const approach = {
  headline: "We Build Meta Ads Around the Entire Customer Journey",
  supporting: "Envis8ge doesn't simply launch campaigns and leave them running.",
  steps: [
    {
      number: "01",
      title: "Strategy",
      items: [
        "Understand the business and offer",
        "Identify the target audience",
        "Clarify customer pain points",
        "Review existing marketing and sales process",
        "Define the campaign objective",
      ],
    },
    {
      number: "02",
      title: "Messaging & Creative",
      items: ["Ad hooks", "Ad copy", "Creative angles", "Static / video recommendations", "CTA strategy"],
    },
    {
      number: "03",
      title: "Campaign Setup",
      items: [
        "Lead generation campaigns",
        "Website conversion campaigns",
        "Retargeting",
        "Awareness campaigns that support lead generation",
      ],
    },
    {
      number: "04",
      title: "Landing Page / Funnel",
      items: [
        "Review headline and offer",
        "Review CTA and form",
        "Assess page structure",
        "Remove conversion friction",
        "Ensure the landing page matches the ad promise",
      ],
    },
    {
      number: "05",
      title: "Tracking",
      items: ["CTR", "CPC", "Landing page conversion rate", "CPL", "Lead quality"],
    },
    {
      number: "06",
      title: "Optimisation",
      items: ["Audience performance", "Creative performance", "Messaging", "CPL", "CTR", "Conversion rate", "Lead quality"],
    },
  ],
};

export const howItWorks = {
  headline: "Here's What Happens When You Work With Us",
  steps: [
    { number: "01", title: "Discovery", description: "Understand the business, audience, offer and existing advertising." },
    { number: "02", title: "Strategy", description: "Identify campaign objectives, audiences, messaging and creative directions." },
    { number: "03", title: "Build", description: "Prepare campaigns, tracking and the landing-page journey." },
    { number: "04", title: "Launch", description: "Launch campaigns and begin gathering usable performance data." },
    { number: "05", title: "Optimise", description: "Analyse performance and adjust audiences, creatives, messaging and funnel elements." },
    { number: "06", title: "Scale", description: "Shift more budget toward stronger-performing campaigns when the data supports it." },
  ],
};

export const funnel = {
  headline: "More Traffic Doesn't Always Mean More Sales",
  supporting:
    "A campaign can generate many clicks and still fail if the wrong people are clicking or the landing page doesn't convert.",
  stages: ["Impressions", "Clicks", "Landing Page Visitors", "Leads", "Qualified Leads", "Customers"],
};

export const comparison = {
  headline: "Typical Approach vs the Envis8ge Approach",
  columnA: "Running Ads Without a Strategy",
  columnB: "The Envis8ge Approach",
  rows: [
    { typical: "Post random creatives", envis8ge: "Clear campaign objective" },
    { typical: "Target audiences without a testing plan", envis8ge: "Audience testing" },
    { typical: "Focus only on cheap CPL", envis8ge: "Strategic creative angles" },
    { typical: "Send traffic to a weak landing page", envis8ge: "Conversion-focused landing pages" },
    { typical: "Judge success mainly by reach or impressions", envis8ge: "Proper tracking" },
    { typical: "Keep spending without reviewing lead quality", envis8ge: "Lead-quality analysis and continuous optimisation" },
  ],
};

export const testimonials = {
  headline: "What Clients Say",
  // Screenshots of real Google reviews in public/Testimonials/ (path is case-sensitive on Linux hosts).
  // Alt text is a verbatim transcription of each screenshot, original spelling kept.
  images: [
    {
      src: "/Testimonials/67aee6a111feb9be26ce88a2.png",
      width: 657,
      height: 145,
      alt: "5-star Google review from Allan Lee: “We had engaged Envis8ge to manage our Leads Generation, Social Media Campaigns and we had received excellent results and responses, to which many had translated into actual sales for our institute. We are grateful for Envis8ge's professionalism and expertise that had helped us and many other businesses. Good Job Envis8ge!”",
    },
    {
      src: "/Testimonials/67aee6a12ba94e39f1a18df9.png",
      width: 636,
      height: 178,
      alt: "5-star Google review from Qisti Putra: “I am extremely impressed with their services. They were professional, efficient, and incredibly knowledgeable. Envis8ge helped me to develop a comprehensive marketing strategy that was tailored to my specific needs and goals. They also provided me with valuable insights into the Singapore market and helped me to develop a strong brand presence.”",
    },
    {
      src: "/Testimonials/67aee6a12ba94e5acaa18df8.png",
      width: 648,
      height: 139,
      alt: "5-star Google review from Cherlynn Cheong: “It's always a pleasure to work with Shawn and his team. Their level of professionalism and go-the-extra-mile attitude to help push for win-win social media marketing outcomes is very commendable. Will recommend companies who are keen to tap on the team's expertise on ad buy strategy and management! :)”",
    },
    {
      src: "/Testimonials/67aee6a12ba94e7c02a18df7.png",
      width: 638,
      height: 123,
      alt: "5-star Google review from Jennie Loh: “Had a very good experience with Envisage. They are so professional and a trusted media company to work with. We engage them for our F&B outlets. Most importantly they are experienced and independent. Thank you very much for your help!”",
    },
    {
      src: "/Testimonials/67aee6a145496e198c516b08.png",
      width: 647,
      height: 124,
      alt: "5-star Google review from edger lim: “Shawn Yeo is very knowledgeable, approachable, helpful and friendly. Recommended and could start a no obligation chat to find out more about their services before deciding to engage. Thumbs up to his team too!”",
    },
    {
      src: "/Testimonials/67aee6a145496e1de1516b06.png",
      width: 641,
      height: 125,
      alt: "5-star Google review from Lucas Lee: “Highly recommend working with Shaun to boost your social media awareness and sales. It has been a smooth sailing journey and Will be comtinuing with them. Boosted the page for my company Inspire immigration.”",
    },
    {
      src: "/Testimonials/67aee6a145496e2a22516b07.png",
      width: 656,
      height: 157,
      alt: "5-star Google review from Adelle Khang: “Having worked with Shawn and Felicia over the past 8 months, I would like to commend them for their responsiveness and willingness to go the extra mile. Despite already having an active Social Media presence, we've achieved 2X Reach and 1.5X Link Clicks for our brand.”",
    },
    {
      src: "/Testimonials/67af19c39b4e262bddb2cda7.png",
      width: 654,
      height: 159,
      alt: "5-star Google review from Bao Zhen Kuah: “The collaboration with Envis8ge is consistently enjoyable. Having partnered with them on numerous ad campaigns, the team's expertise and positive attitude have been exceptional. They exhibit a strong command of their field, offering valuable insights and advice for any requests or queries. I highly recommend Envis8ge to companies seeking to leverage their expertise – a truly commendable experience!”",
    },
  ],
};

export const whoItsFor = {
  headline: "Is Envis8ge Meta Ads Right for Your Business?",
  goodFitTitle: "Good Fit",
  goodFit: [
    "You already have a clear product or service.",
    "You want to generate leads or enquiries.",
    "You're ready to invest consistently in advertising.",
    "You want to understand what's working and why.",
    "You want your ads, landing page and lead-generation process to work together.",
  ],
  notFitTitle: "May Not Be Suitable",
  notFit: [
    "You're looking for guaranteed overnight results.",
    "You only want vanity metrics such as likes or followers.",
    "You do not have a clear offer yet.",
    "You're unwilling to test different messages or creatives.",
    "You're looking for the absolute cheapest leads regardless of quality.",
  ],
};

export const faq = {
  headline: "Frequently Asked Questions",
  items: [
    {
      question: "What does Envis8ge manage?",
      answer:
        "We manage the full Meta Ads process: campaign strategy, setup, targeting, creative direction, ongoing optimisation, performance reporting and relevant recommendations for your landing page and funnel.",
    },
    {
      question: "How much should I spend on Meta Ads?",
      answer:
        "There's no single figure that works for every business. The recommended budget depends on your offer, industry, audience size and campaign goals — we'll walk through this in your consultation.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Performance depends on your offer, audience, creative, budget and existing funnel. We don't provide guaranteed timelines; our focus is on testing, tracking and optimising toward better results.",
    },
    {
      question: "Can you help if my ads are already running?",
      answer: "Yes. We review existing campaigns before recommending any changes.",
    },
    {
      question: "Do you create the ads?",
      answer: "[CONFIRM ENVIS8GE'S CREATIVE PRODUCTION SCOPE — copy, static design, video editing, in-house vs. partner]",
    },
    {
      question: "Do you build landing pages?",
      answer: "[CONFIRM WHETHER LANDING PAGE BUILD IS INCLUDED, AN ADD-ON, OR RECOMMENDATION-ONLY]",
    },
    {
      question: "Can you guarantee leads?",
      answer:
        "No responsible advertising partner can guarantee an exact number of leads or sales. The goal is to improve performance through testing, data and optimisation.",
    },
  ],
};

export const leadForm = {
  headline: "Book Your Free Meta Ads Consultation",
  supporting: cta.assessmentSupporting,
  submitLabel: cta.primary,
  sendingLabel: "Sending…",
  errorMessage: "Something went wrong sending your request. Please try again.",
  fields: {
    name: { label: "Name", type: "text", required: true },
    company: { label: "Company Name", type: "text", required: true },
    email: { label: "Email", type: "email", required: true },
    phone: { label: "Contact Number", type: "tel", required: true },
    website: { label: "Website / Social Media", type: "text", required: true },
    offer: { label: "What service or product do you offer?", type: "text", required: true },
    goal: { label: "What is your main advertising goal?", type: "text", required: true },
  } as const,
  qualification: {
    runningAds: {
      label: "Are you currently running Meta Ads?",
      options: ["Yes", "No", "Previously"],
    },
    budget: {
      label: "Approximate monthly Meta Ads budget",
      options: ["Not running yet", "Under $1,000", "$1,000–$3,000", "$3,000–$5,000", "$5,000+"],
    },
    challenge: {
      label: "Biggest challenge",
      options: [
        "Not enough leads",
        "CPL too high",
        "Poor lead quality",
        "Ads aren't converting",
        "Unsure how to scale",
        "Need help setting up",
        "Other",
      ],
    },
  },
};

// Shown inline in place of the form after a successful submission (no separate thank-you page).
export const thankYou = {
  headline: "Thanks — We've Received Your Request",
  points: [
    "Our team reviews your information.",
    "We'll contact you regarding your Meta Ads goals.",
    "We'll discuss your current challenges and suitable next steps.",
  ],
  // SOP: "If Envis8ge uses calendar booking, add a CTA such as: 'Choose a Time for Your Consultation.'"
  // [CONFIRM WHETHER A CALENDAR BOOKING TOOL IS USED — CTA below is inactive until confirmed]
  calendarCta: "Choose a Time for Your Consultation",
};
