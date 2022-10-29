import { About } from "@/components/About/About";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { Contact } from "@/components/Contact/Contact";
import { Welcome } from "@/components/Welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <About />
      <Contact />
      <ColorSchemeToggle />
    </>
  );
}
