import { About } from "@/components/About";
import { EntrySection } from "@/components/EntrySection";
import { Header } from "@/components/Header";
import { PageShell } from "@/components/PageShell";
import { getEntriesBySection } from "@/content/entries";

export default function Home() {
  return (
    <PageShell>
      <Header />
      <About />
      <EntrySection
        title="Work"
        entries={getEntriesBySection("work")}
        showHint
      />
      {/* Projects section hidden for now — re-enable once real projects
          replace the placeholders in src/content/entries.ts */}
      {/* <EntrySection title="Projects" entries={getEntriesBySection("project")} /> */}
    </PageShell>
  );
}
