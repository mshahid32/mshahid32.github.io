export const stats = [
  { n: '4+', label: 'Years building mobile apps' },
  { n: '500K+', label: 'Downloads on My Fitness Coach' },
  { n: '1000+', label: 'Network sites in Jazz FiberLive' },
  { n: '6', label: 'Apps in my portfolio' },
];

export const projects = [
  { tag: 'Fintech and crypto', name: 'Normies', text: 'A self-custody wallet that brings banking, crypto, debit cards and savings together, with no seed phrase required.', tech: 'React Native, TypeScript, KYC onboarding, real-time transaction feeds', meta: 'Funavry Technologies' },
  { tag: 'Telecom', name: 'Jazz FiberLive', text: 'Real-time management of fiber optic infrastructure across 1000+ network sites, with live alarms and an interactive map.', tech: 'Mapbox, WebSockets, Firebase Cloud Messaging, GeoServer', meta: 'Softoo, Google Play and App Store' },
  { tag: 'Childcare', name: 'The Nursery App', text: 'Nursery management for attendance, billing and staff, with parent updates, daily reports and in-app messaging.', tech: 'React Native, real-time updates, billing and payment flows', meta: 'Softoo, nursery.app' },
  { tag: 'Investing', name: 'Manzil Invest', text: 'A Sharia-compliant, goal-based investing app where users set targets and fund accounts through Alpaca Securities.', tech: 'React Native, Alpaca Securities APIs, onboarding and funding flows', meta: 'ZZ Technologies, manzil.co' },
  { tag: 'Health and fitness', name: 'My Fitness Coach', text: 'A home workout planner and nutrition tracker that adapts to your fitness level. Over 500K downloads.', tech: 'HealthKit, Google Fit, Fitbit, Polar, AsyncStorage, SQLite', meta: 'Google Play and App Store, myfitnesscoach.fit' },
  { tag: 'Marketplace', name: 'FGMP', text: 'A freelance job aggregator that pulls listings from Upwork, Freelancer and Fiverr into one searchable feed.', tech: 'Job aggregation APIs, search, filters, notifications', meta: 'Cross-platform mobile app' },
];

export const services = [
  { title: 'Cross-platform apps', text: 'One codebase for Android and iOS with React Native and TypeScript, with offline support through AsyncStorage and SQLite where it helps.', icon: 'phone' },
  { title: 'Real-time and maps', text: 'Live data with WebSockets and Firebase Cloud Messaging, plus map views built on Mapbox and GeoServer.', icon: 'pulse' },
  { title: 'Store releases', text: 'Google Play Console and App Store Connect, from release cycles and versioning to store listing optimization.', icon: 'upload' },
  { title: 'Third-party integrations', text: 'Apple HealthKit, Google Fit, Fitbit, Polar and Alpaca Securities, connected cleanly to your app.', icon: 'plug' },
] as const;

export const steps = [
  { n: '01', title: 'Idea and research', text: 'Understanding what players and users want, and spotting concepts worth building.' },
  { n: '02', title: 'Design and development', text: 'Creating clear interfaces and building mechanics that feel good to use.' },
  { n: '03', title: 'Testing and optimization', text: 'Improving performance, usability and gameplay quality before release.' },
  { n: '04', title: 'Launch and improvement', text: 'Publishing to Google Play and the App Store, then improving with every update.' },
];

export const jobs = [
  { dates: 'Feb 2026 – Present', place: 'Islamabad, Pakistan', role: 'Senior Software Engineer', company: 'Funavry Technologies', text: 'Leading cross-platform development with React Native and TypeScript, architecting real-time data flows and self-custody crypto features, and mentoring junior developers.' },
  { dates: 'Aug 2024 – Feb 2026', place: 'Islamabad, Pakistan', role: 'Software Engineer', company: 'Softoo', text: 'Built enterprise apps including Jazz FiberLive and The Nursery App, with real-time geospatial network visualization using Mapbox, WebSockets and GeoServer.' },
  { dates: 'Jul 2023 – Aug 2024', place: 'Islamabad, Pakistan', role: 'React Native Developer', company: 'ZZ Technologies', text: 'Built Manzil Invest and managed deployment on Google Play Console and App Store Connect, including release cycles, versioning and store listings.' },
  { dates: 'Apr 2022 – Jul 2023', place: 'Islamabad, Pakistan', role: 'Software Engineer', company: 'HA Technologies', text: 'Developed React Native apps alongside web work in React and Vue, collaborating with designers and product managers.' },
];

export const techGroups = [
  { name: 'Mobile', items: 'React Native, Android Studio, Xcode' },
  { name: 'Web', items: 'React.js, Vue.js' },
  { name: 'Languages', items: 'JavaScript, TypeScript, Java, Kotlin' },
  { name: 'Real-time and APIs', items: 'WebSockets, Socket.IO, REST, GraphQL, Firebase (FCM), GeoServer' },
  { name: 'Integrations', items: 'Alpaca Securities, Apple HealthKit, Google Fit, Fitbit, Polar' },
  { name: 'Maps', items: 'Mapbox, GeoServer' },
  { name: 'Tools', items: 'Redux, Git, Google Play Console, App Store Connect' },
];

export const faqs = [
  { q: 'Which platforms do you build for?', a: 'Android and iOS, mostly with React Native and TypeScript. I also work in Java and Kotlin with Android Studio and Xcode, and build web apps with React and Vue.' },
  { q: 'Can you handle store releases?', a: 'Yes. I have managed Google Play Console and App Store Connect, including release cycles, versioning and store listing optimization.' },
  { q: 'When will Word Fuse and Hue Dive launch?', a: 'Both games are in development and coming soon to Google Play and the App Store. This page will link to the store listings once they are live.' },
  { q: 'What integrations have you built?', a: 'Health data from Apple HealthKit, Google Fit, Fitbit and Polar, investing through Alpaca Securities, real-time alerts with WebSockets and Firebase Cloud Messaging, and maps with Mapbox and GeoServer.' },
  { q: 'How can I get in touch?', a: 'Email muhammadshahidaslam73@gmail.com or message me on LinkedIn. I am always happy to talk with other developers and hear about new opportunities.' },
];

export const games = {
  wordFuse: {
    title: 'Word Fuse',
    description: 'Spell fast, clear the board and chase a bigger score. Long words score big and the fuse burns faster as you go. Pick Classic, Endless or Zen and play at your own pace.',
    banner: '/images/wf-feature.jpg',
    highlights: ['Three modes: Classic 90 seconds, Endless and Zen', 'A daily challenge with one board for everyone', 'Unlockable tile themes, earned by playing', 'Colorblind mode, high-contrast tiles and reduced motion'],
    screenshots: [
      { src: '/images/wf-game.jpg', small: '/images/wf-game-540.jpg', alt: 'Word Fuse gameplay: a board of letter tiles with a fuse timer' },
      { src: '/images/wf-modes.jpg', small: '/images/wf-modes-540.jpg', alt: 'Word Fuse home screen with Classic, Endless and Zen modes' },
      { src: '/images/wf-results.jpg', small: '/images/wf-results-540.jpg', alt: 'Word Fuse round results with score and best word' },
      { src: '/images/wf-themes.jpg', small: '/images/wf-themes-540.jpg', alt: 'Word Fuse tile themes screen' },
    ],
  },
  hueDive: {
    title: 'Hue Dive',
    description: 'Tap everything that appears except the one color that keeps changing. One touch, pure reflex, and a daily dive that is the same sea for everyone.',
    highlights: ['The color to avoid changes during the run', 'Build a combo with every correct tap', 'A new daily dive, the same sea for everyone', 'Packs, records and a streak to keep you coming back'],
    screenshots: [
      { src: '/images/hd-home.jpg', small: '/images/hd-home-540.jpg', alt: 'Hue Dive home screen with Play button and daily challenge' },
      { src: '/images/hd-play.jpg', small: '/images/hd-play-540.jpg', alt: 'Hue Dive gameplay: tap every sea creature except red' },
      { src: '/images/hd-rule.jpg', small: '/images/hd-rule-540.jpg', alt: 'Hue Dive rule change screen announcing a new color to avoid' },
      { src: '/images/hd-over.jpg', small: '/images/hd-over-540.jpg', alt: 'Hue Dive run over screen with a new best score' },
    ],
  },
};
