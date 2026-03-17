/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import AnimatedSection from './components/AnimatedSection';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AuthorityStrip from './components/AuthorityStrip';
import ProgramsOverview from './components/ProgramsOverview';
import CultureDiagnostic from './components/CultureDiagnostic';
import RestrictedResources from './components/RestrictedResources';
import PublishedWorks from './components/PublishedWorks';
import ProgramsPage from './components/ProgramsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Homepage Sections */}
        <AnimatedSection><Hero /></AnimatedSection>
        <TrustBar />
        <AnimatedSection><AuthorityStrip /></AnimatedSection>
        <AnimatedSection><ProgramsOverview /></AnimatedSection>
        <AnimatedSection><CultureDiagnostic /></AnimatedSection>
        <AnimatedSection><PublishedWorks /></AnimatedSection>

        <div id="programs-page" />
        <AnimatedSection><ProgramsPage /></AnimatedSection>
        
        <AnimatedSection><RestrictedResources /></AnimatedSection>

        <div id="contact-page" />
        <AnimatedSection><ContactPage /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
