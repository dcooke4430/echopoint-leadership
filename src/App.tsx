/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import AnimatedSection from './components/AnimatedSection';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthorityStrip from './components/AuthorityStrip';
import ProgramsOverview from './components/ProgramsOverview';
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
        <AnimatedSection><AuthorityStrip /></AnimatedSection>
        <AnimatedSection><ProgramsOverview /></AnimatedSection>
        <AnimatedSection><RestrictedResources /></AnimatedSection>
        <AnimatedSection><PublishedWorks /></AnimatedSection>

        {/* Page Blueprints (as sections) */}
        <div className="preview-divider" id="programs-page">
          --- Programs Page Blueprint ---
        </div>
        <AnimatedSection><ProgramsPage /></AnimatedSection>
        <div className="preview-divider" id="contact-page">
          --- Contact Page Blueprint ---
        </div>
        <AnimatedSection><ContactPage /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
