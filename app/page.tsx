// https://chat.deepseek.com/share/wr71kn431g4exfwwzd
// https://chat.deepseek.com/share/ouuwcarxqrc7an0si2



// 'use client';
// But we  lose SEO benefits when using use-Client so changed to server component 

// a client component by default
// Adding 'use client' here would break metadata and server fetches

// But here's the important part: Your code doesn't actually NEED to be a Client Component! You're only using useState for the active section, which is minimal client-side interactivity.
// Your code will run without crashing, but there's a design pattern issue:

// You're forcing the entire page to be a Client Component when you don't need to
// This prevents you from using Next.js features like:

// metadata API (SEO)
// Server-side data fetching
// Better performance


// NO 'use client' at the top - this is now a Server Component!
// NO 'use client' here - this stays a Server Component!


import NavBar from '../components/NavBar';
import AnimatedContent from '../components/AnimatedContent';

// Define types
interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  image: string;
}

export default function Portfolio() {
  // Data fetching stays on the server (better for SEO)
  const projects: Project[] = [
    {
      title: "Movie Discovery",
      desc: "A React TypeScript movie discovery app with style",
      tech: ["React.js", "TypeScript", "Vite", "CSS", "npm"],
      link: "https://github.com/HIMANSHUgg75/agency-ai",
      image: "/images/MovieDiscovery.png"
    },
    {
      title: "Agency Ai",
      desc: "A React-based digital agency website showcasing my skills and experience",
      tech: ["React.js", "Vite", "Bootstrap", "JavaScript (JS)"],
      link: "https://github.com/HIMANSHUgg75/agency-ai",
      image: "/images/agency.png"
    },
    {
      title: "Agent_API",
      desc: "AI-Native API built with FastAPI and Ollama that processes natural language and executes functions intelligently",
      tech: ["Python", "FastAPI", "Ollama", "Pydantic", "Uvicorn"],
      link: "https://github.com/HIMANSHUgg75/agent_api",
      image: "/images/agent_ai.png"
    }
  ];

  const skills: string[] = ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Node.js"];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <NavBar />
      <AnimatedContent projects={projects} skills={skills} />
    </div>
  );
}

// trace pattern
// error 
// > portfolio@0.1.0 dev
// > next dev

// ▲ Next.js 16.2.2 (Turbopack)
// - Local:         http://localhost:3000
// ✓ Ready in 270ms
// ⚠ `images.domains` is deprecated in favor of `images.remotePatterns`. Please update next.config.js to protect your application from malicious users.

// ⨯ ./app/layout.tsx
// Specified module format (CommonJs) is not matching the module format of the source code (EcmaScript Modules)
// The CommonJs module format was specified in the package.json that is affecting this source file or by using an special extension, but Ecmascript import/export syntax is used in the source code.
// The module was automatically converted to an EcmaScript module, but that is in conflict with the specified module format. Either change the "type" field in the package.json or replace EcmaScript import/export syntax with CommonJs syntas in the source file.
// In some cases EcmaScript import/export syntax is added by an transform and isn't actually part of the source code. In these cases revisit transformation options to inject the correct syntax.



// ./app/page.tsx
// Specified module format (CommonJs) is not matching the module format of the source code (EcmaScript Modules)
// The CommonJs module format was specified in the package.json that is affecting this source file or by using an special extension, but Ecmascript import/export syntax is used in the source code.
// The module was automatically converted to an EcmaScript module, but that is in conflict with the specified module format. Either change the "type" field in the package.json or replace EcmaScript import/export syntax with CommonJs syntas in the source file.
// In some cases EcmaScript import/export syntax is added by an transform and isn't actually part of the source code. In these cases revisit transformation options to inject the correct syntax.

// Import traces:
//   Client Component Browser:
//     ./app/page.tsx [Client Component Browser]
//     ./app/page.tsx [Server Component]

//   Client Component SSR:
//     ./app/page.tsx [Client Component SSR]
//     ./app/page.tsx [Server Component]


//  GET / 500 in 95ms (next.js: 49ms, application-code: 46ms)
// [browser] Uncaught Error: ./app/layout.tsx
// Specified module format (CommonJs) is not matching the module format of the source code (EcmaScript Modules)
// The CommonJs module format was specified in the package.json that is affecting this source file or by using an special extension, but Ecmascript import/export syntax is used in the source code.
// The module was automatically converted to an EcmaScript module, but that is in conflict with the specified module format. Either change the "type" field in the package.json or replace EcmaScript import/export syntax with CommonJs syntas in the source file.
// In some cases EcmaScript import/export syntax is added by an transform and isn't actually part of the source code. In these cases revisit transformation options to inject the correct syntax.


// [browser] ./app/layout.tsx
// Specified module format (CommonJs) is not matching the module format of the source code (EcmaScript Modules)
// The CommonJs module format was specified in the package.json that is affecting this source file or by using an special extension, but Ecmascript import/export syntax is used in the source code.
// The module was automatically converted to an EcmaScript module, but that is in conflict with the specified module format. Either change the "type" field in the package.json or replace EcmaScript import/export syntax with CommonJs syntas in the source file.
// In some cases EcmaScript import/export syntax is added by an transform and isn't actually part of the source code. In these cases revisit transformation options to inject the correct syntax. 
// [browser] ./app/page.tsx
// Specified module format (CommonJs) is not matching the module format of the source code (EcmaScript Modules)
// The CommonJs module format was specified in the package.json that is affecting this source file or by using an special extension, but Ecmascript import/export syntax is used in the source code.
// The module was automatically converted to an EcmaScript module, but that is in conflict with the specified module format. Either change the "type" field in the package.json or replace EcmaScript import/export syntax with CommonJs syntas in the source file.
// In some cases EcmaScript import/export syntax is added by an transform and isn't actually part of the source code. In these cases revisit transformation options to inject the correct syntax.

// Import traces:
//   Client Component Browser:
//     ./app/page.tsx [Client Component Browser]
//     ./app/page.tsx [Server Component]

//   Client Component SSR:
//     ./app/page.tsx [Client Component SSR]
//     ./app/page.tsx [Server Component] 
// [browser] ./app/layout.tsx
// Specified module format (CommonJs) is not matching the module format of the source code (EcmaScript Modules)
// The CommonJs module format was specified in the package.json that is affecting this source file or by using an special extension, but Ecmascript import/export syntax is used in the source code.
// The module was automatically converted to an EcmaScript module, but that is in conflict with the specified module format. Either change the "type" field in the package.json or replace EcmaScript import/export syntax with CommonJs syntas in the source file.
// In some cases EcmaScript import/export syntax is added by an transform and isn't actually part of the source code. In these cases revisit transformation options to inject the correct syntax. 
// [browser] ./app/page.tsx
// Specified module format (CommonJs) is not matching the module format of the source code (EcmaScript Modules)
// The CommonJs module format was specified in the package.json that is affecting this source file or by using an special extension, but Ecmascript import/export syntax is used in the source code.
// The module was automatically converted to an EcmaScript module, but that is in conflict with the specified module format. Either change the "type" field in the package.json or replace EcmaScript import/export syntax with CommonJs syntas in the source file.
// In some cases EcmaScript import/export syntax is added by an transform and isn't actually part of the source code. In these cases revisit transformation options to inject the correct syntax.

// Import traces:
//   Client Component Browser:
//     ./app/page.tsx [Client Component Browser]
//     ./app/page.tsx [Server Component]

//   Client Component SSR:
//     ./app/page.tsx [Client Component SSR]
//     ./app/page.tsx [Server Component] 

// This error typically arises from how Next.js handles Client Components during Server-Side Rendering (SSR).

// Even with the 'use client' directive, these components still run on the server initially to generate the HTML

//  The problem occurs when a Client Component—or something it imports—attempts to use server-only code (like next/headers or Node.js modules) or relies on browser APIs (like window or document) during this server render phase.


// A Client Component in modern web frameworks (especially React and Next.js) refers to a component that runs and renders on the client side (the user's browser) rather than on the server.

// Key Characteristics:

// Rendered in the browser – The component's HTML, interactivity, and JavaScript execute on the client after the initial page load.
// Can use browser APIs – Such as window, document, localStorage, addEventListener, etc.
// Can handle interactivity – Click handlers, state changes (useState, useEffect), and real-time updates.
// Can be hydrated – Server-rendered HTML becomes interactive once client JavaScript loads.

// Interactive elements – Buttons, forms, modals, sliders
// State management – Hooks like useState, useReducer
// Browser-specific features – Geolocation, local storage, media queries
// Event listeners – Click, scroll, resize
// Third-party libraries that rely on window or DOM

// When to avoid (use Server Components instead):

// Fetching data from a database (use Server Components for direct access)
// Large dependencies that aren't needed for interactivity
// Static content that doesn't change


// Benefits of Client Components:

// Rich interactivity
// Full access to browser APIs
// Faster subsequent navigation (after initial load)


// Trade-offs:

// Larger bundle size sent to the client
// Slower initial page load
// SEO may be less optimal compared to server-rendered content
// The modern approach (React 18+ / Next.js App Router) encourages Server Components by default, using Client Components only where interactivity is needed. This improves performance and reduces JavaScript shipped to the browser.



// ❌ Incorrect Pattern (Causes Errors)

// typescript
// // 'app/page.tsx' - This is a Server Component by default
// 'use client'; // Adding 'use client' here would break metadata and server fetches

// import ClientComponent from './client-component'; // This is fine
// import { getServerData } from './server-data'; // Assume this uses server-only code

// export default function Page() {
//   // This won't work if ClientComponent is a client component
//   // that tries to import and run server-only code itself.
//   return <ClientComponent />;
// }
// ✅ Correct Pattern (Passing Data Down)

// typescript
// // 'app/page.tsx' (Server Component)
// import ClientComponent from './client-component';
// import { getServerData } from './server-data';

// export default async function Page() {
//   // Fetch data on the server
//   const data = await getServerData();

//   // Pass the fetched data as a prop to the client component
//   return <ClientComponent initialData={data} />;


// Key Takeaway

// Remember the golden rule: Server Components cannot be imported into Client Components. Always keep your data fetching and server-only logic in Server Components (which are the default in the App Router) and pass the result down to Client Components for interactivity

