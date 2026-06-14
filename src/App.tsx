/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Valuation } from './pages/Valuation';
import { Contact } from './pages/Contact';
import { ContentPage } from './components/ContentPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valuation" element={<Valuation />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/property-management" element={
            <ContentPage 
              title="Full Property Management" 
              subtitle="End-to-end management designed for maximum yield and zero stress."
            >
              <h2>Comprehensive Asset Management</h2>
              <p>We don't just collect rent; we manage your asset. From routine compliance checks to handling major maintenance, our full management service is built for landlords who want the returns of property investment without the day-to-day headaches.</p>
              <h3>What's Included?</h3>
              <ul>
                <li>Comprehensive valuation and yield advice</li>
                <li>Professional photography and marketing</li>
                <li>Rigorous tenant referencing</li>
                <li>Rent collection and monthly statements</li>
                <li>24/7 maintenance coordination</li>
                <li>Quarterly property inspections</li>
                <li>Compliance tracking (EPC, Gas Safety, EICR)</li>
              </ul>
            </ContentPage>
          } />

          <Route path="/landlords" element={
            <ContentPage 
              title="Landlord Services" 
              subtitle="Tailored solutions for every type of investor."
            >
              <h2>Flexible Services to Suit Your Needs</h2>
              <p>Whether you're a hands-on landlord just looking for the right tenant, or an overseas investor needing full portfolio management, we have a service tier tailored to your requirements.</p>
              <h3>Let Only Service</h3>
              <p>Perfect for experienced landlords. We market the property, conduct viewings, rigorously vet the tenants, and handle the initial tenancy agreement and deposit registration.</p>
              <h3>Rent Collection</h3>
              <p>We find the tenant and handle the monthly financial administration, including chasing arrears, ensuring you receive your income promptly.</p>
            </ContentPage>
          } />

          <Route path="/tenants" element={
            <ContentPage 
              title="Tenant Services" 
              subtitle="Find your next home with an agency that respects you."
            >
              <h2>Premium Properties. Professional Service.</h2>
              <p>We manage some of the finest rental properties in the area. Our tenant application process is straightforward, transparent, and fair.</p>
              <h3>Reporting Maintenance</h3>
              <p>All our managed tenants have access to a dedicated 24/7 online maintenance portal. Report issues instantly, upload photos, and track the progress of repairs in real-time.</p>
            </ContentPage>
          } />

          <Route path="/about" element={
            <ContentPage 
              title="About Sher Gul" 
              subtitle="Redefining property management standards in the UK."
            >
              <h2>Our Story</h2>
              <p>Founded on the principle that property management should be transparent, professional, and data-driven, Sher Gul Ltd has grown into a trusted partner for portfolio landlords across the region.</p>
               <h2>Our Values</h2>
              <ul>
                <li><strong>Radical Transparency:</strong> No hidden markups on maintenance. Clear statements. Honest advice.</li>
                <li><strong>Proactive Management:</strong> We don't wait for things to break. We maintain to prevent.</li>
                <li><strong>Local Expertise:</strong> We know our markets intimately, allowing us to push for the best yields.</li>
              </ul>
            </ContentPage>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}
