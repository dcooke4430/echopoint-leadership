// 1. Add the import at the top
import CultureDiagnostic from './components/CultureDiagnostic';

// 2. Update the return statement order
export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <AnimatedSection><Hero /></AnimatedSection>
        <TrustBar />
        <AnimatedSection><AuthorityStrip /></AnimatedSection>
        <AnimatedSection><ProgramsOverview /></AnimatedSection>
        
        {/* New Diagnostic Section */}
        <AnimatedSection><CultureDiagnostic /></AnimatedSection>
        
        <AnimatedSection><PublishedWorks /></AnimatedSection>

        <div id="programs-page" />
        <AnimatedSection><ProgramsPage /></AnimatedSection>
        
        {/* Moved Restricted Resources here */}
        <AnimatedSection><RestrictedResources /></AnimatedSection>

        <div id="contact-page" />
        <AnimatedSection><ContactPage /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}