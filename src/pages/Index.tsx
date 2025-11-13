import { useState } from "react";
import { Database, Shield, Search, AlertTriangle, FileText, Eye, Users, Lock, Wifi, CreditCard, Mail, Phone, MapPin, ChevronDown, Calendar, DollarSign, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentWarning } from "@/components/ContentWarning";
import { OrgCard } from "@/components/OrgCard";
import { SearchFilters } from "@/components/SearchFilters";
import { sampleOrganizations } from "@/data/sampleOrgs";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showCyberCases, setShowCyberCases] = useState(false);

  const filteredOrgs = sampleOrganizations.filter((org) => {
    const matchesSearch = 
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = regionFilter === "all" || 
      org.regions.some(r => r.toLowerCase().includes(regionFilter.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || org.status === statusFilter;
    
    return matchesSearch && matchesRegion && matchesStatus;
  });

  const handleViewProfile = (id: string) => {
    navigate(`/org/${id}`);
  };

  return (
    <div className="min-h-screen">
      {/* Animated Tagline */}
      <div className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,229,255,0.1)_50%,transparent_100%)] animate-scan-line" />
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-center text-sm md:text-base font-mono text-primary/80 animate-fade-in tracking-wide">
            <span className="inline-block animate-pulse mr-2">●</span>
            VERIFIED DATA INTELLIGENCE SYSTEM
            <span className="mx-3 text-primary/40">|</span>
            ACADEMIC RESEARCH PLATFORM
            <span className="mx-3 text-primary/40">|</span>
            MULTI-SOURCE VERIFICATION PROTOCOL
            <span className="inline-block animate-pulse ml-2">●</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Database className="h-12 w-12 text-primary neon-glow" />
              <h1 className="font-display text-6xl font-bold cyber-heading">
                Global Extremism Archive
              </h1>
            </div>
            
            {/* Animated Quote */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <blockquote className="relative max-w-4xl mx-auto">
                <div className="absolute -left-4 top-0 text-6xl text-primary/20 font-serif">"</div>
                <p className="text-lg md:text-xl italic text-primary/90 font-light leading-relaxed px-8">
                  Understanding the tactics, ideology, and history of extremist organizations 
                  is essential for preventing future atrocities and protecting democratic societies.
                </p>
                <div className="absolute -right-4 bottom-0 text-6xl text-primary/20 font-serif">"</div>
              </blockquote>
              <p className="text-center text-sm text-muted-foreground mt-4">
                — Institute for Strategic Dialogue Research
              </p>
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive, neutral, and academically rigorous database documenting extremist 
              organizations for educational, journalistic, and research purposes. All data is 
              sourced from public records and verified through multiple reputable citations.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="glass-panel p-4 rounded-lg text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="text-3xl font-bold text-primary mb-1 font-mono">{sampleOrganizations.filter(o => o.status === "active").length}</div>
                <div className="text-sm text-muted-foreground">Active Organizations</div>
              </div>
              <div className="glass-panel p-4 rounded-lg text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="text-3xl font-bold text-primary mb-1 font-mono">12,000+</div>
                <div className="text-sm text-muted-foreground">Verified Citations</div>
              </div>
              <div className="glass-panel p-4 rounded-lg text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
                <div className="text-3xl font-bold text-primary mb-1 font-mono">95%</div>
                <div className="text-sm text-muted-foreground">Avg. Confidence Score</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                {sampleOrganizations.length} Organizations Documented
              </Badge>
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                <FileText className="h-4 w-4 mr-2" />
                Multi-Source Verified
              </Badge>
            </div>
          </div>

          <ContentWarning />

          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="glass-panel p-6 rounded-xl text-center animate-slide-up">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold mb-2">Neutral & Factual</h3>
              <p className="text-sm text-muted-foreground">
                Strictly academic tone with no glorification or propaganda
              </p>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
              <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold mb-2">Fully Cited</h3>
              <p className="text-sm text-muted-foreground">
                Every claim backed by government reports, court docs, or reputable sources
              </p>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
              <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold mb-2">Safety First</h3>
              <p className="text-sm text-muted-foreground">
                No operational details, tactics, or information that could facilitate harm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">Organization Database</h2>
            <p className="text-muted-foreground">
              Browse documented organizations with verified information and multiple source citations
            </p>
          </div>

          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            regionFilter={regionFilter}
            onRegionChange={setRegionFilter}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrgs.map((org, idx) => (
              <div
                key={org.id}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <OrgCard
                  id={org.id}
                  name={org.name}
                  region={org.regions.join(", ")}
                  yearEstablished={org.yearEstablished}
                  status={org.status}
                  summary={org.summary}
                  confidenceScore={org.confidenceScore}
                  designations={org.sanctionsDesignations.map(d => d.authority)}
                  onViewProfile={handleViewProfile}
                />
              </div>
            ))}
          </div>

          {filteredOrgs.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No organizations match your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Safety from Terrorism Section */}
      <section className="py-16 px-6 border-t border-border/50 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4 neon-glow" />
            <h2 className="font-display text-4xl font-bold mb-4 cyber-heading">
              Stay Safe from Terrorism
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical guidelines and awareness tips to help individuals and communities 
              recognize threats and respond appropriately to potential terrorist activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Awareness Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300">
              <Eye className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Stay Aware</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Report suspicious behavior or unattended packages to authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Trust your instincts—if something feels wrong, alert security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Be observant in crowded public spaces and transportation hubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Know your surroundings and identify emergency exits</span>
                </li>
              </ul>
            </div>

            {/* Community Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: "100ms" }}>
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Community Vigilance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Build strong community networks to identify radicalization early</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Educate youth about extremist recruitment tactics online and offline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Support intervention programs for at-risk individuals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Foster inclusive environments that counter divisive ideologies</span>
                </li>
              </ul>
            </div>

            {/* Emergency Response Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: "200ms" }}>
              <AlertTriangle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Emergency Response</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Know "Run, Hide, Fight" protocol for active threat situations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Keep emergency contacts readily accessible (police, family)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Follow instructions from law enforcement during incidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Participate in workplace and community safety drills</span>
                </li>
              </ul>
            </div>

            {/* Online Safety Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: "300ms" }}>
              <Wifi className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Online Awareness</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Recognize extremist propaganda and recruitment messaging online</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Report violent or extremist content to platform moderators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Be cautious of echo chambers that promote radical viewpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Verify information sources and resist disinformation</span>
                </li>
              </ul>
            </div>

            {/* Travel Safety Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: "400ms" }}>
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Travel Precautions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Check government travel advisories before visiting high-risk regions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Register with your embassy when traveling to conflict zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Avoid large gatherings and demonstrations in unstable areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Keep low profile and avoid discussing politics in sensitive regions</span>
                </li>
              </ul>
            </div>

            {/* Resources Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: "500ms" }}>
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Report & Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>FBI Tip Line: 1-800-CALL-FBI or tips.fbi.gov</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>DHS "If You See Something, Say Something" hotline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Local law enforcement non-emergency numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Counter-extremism support: theexitusa.org</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Security Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4 neon-glow animate-glow-pulse" />
            <h2 className="font-display text-4xl font-bold mb-4 cyber-heading">
              Cyber Security & Digital Safety
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Protect yourself from cyber terrorism, online scams, identity theft, and digital threats 
              with these essential security practices and awareness tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Password Security Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300 border-l-2 border-l-primary/50">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Password Security</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use unique, complex passwords for each account (16+ characters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Enable two-factor authentication (2FA) on all critical accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use a reputable password manager to store credentials securely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Never reuse passwords across multiple platforms</span>
                </li>
              </ul>
            </div>

            {/* Phishing Protection Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300 border-l-2 border-l-primary/50" style={{ animationDelay: "100ms" }}>
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Phishing Protection</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Verify sender email addresses before clicking links or attachments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hover over links to preview URLs before clicking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Never provide sensitive info via email or unsolicited calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Watch for urgency tactics and grammatical errors in messages</span>
                </li>
              </ul>
            </div>

            {/* Financial Security Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300 border-l-2 border-l-primary/50" style={{ animationDelay: "200ms" }}>
              <CreditCard className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Financial Security</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Monitor bank statements and credit reports regularly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use virtual credit card numbers for online purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Enable fraud alerts and transaction notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Only shop on secure (HTTPS) websites with verified certificates</span>
                </li>
              </ul>
            </div>

            {/* Device Security Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300 border-l-2 border-l-primary/50" style={{ animationDelay: "300ms" }}>
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Device Protection</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Keep operating systems and software updated with security patches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Install reputable antivirus/anti-malware software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Enable device encryption and remote wipe capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Avoid downloading apps or files from untrusted sources</span>
                </li>
              </ul>
            </div>

            {/* Network Security Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300 border-l-2 border-l-primary/50" style={{ animationDelay: "400ms" }}>
              <Wifi className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Network Security</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Avoid public Wi-Fi for sensitive transactions; use VPN if necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure home Wi-Fi with WPA3 encryption and strong passwords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Change default router credentials and disable remote access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use firewall protection on all devices</span>
                </li>
              </ul>
            </div>

            {/* Cyber Crime Reporting Card */}
            <div className="glass-panel p-6 rounded-xl animate-fade-in hover:scale-105 transition-transform duration-300 border-l-2 border-l-primary/50" style={{ animationDelay: "500ms" }}>
              <AlertTriangle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Report Cyber Crime</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>FBI Internet Crime Complaint Center: ic3.gov</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Federal Trade Commission: reportfraud.ftc.gov</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Report identity theft: identitytheft.gov</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Document all evidence: screenshots, emails, transaction records</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-12 glass-panel p-6 rounded-xl border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-2">Stay Vigilant</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cyber terrorism and cybercrime evolve rapidly. Stay informed about new threats, 
                  regularly update your security practices, and educate family members about digital safety. 
                  Remember: legitimate organizations will never ask for passwords or sensitive information 
                  via email or unsolicited calls. When in doubt, contact the organization directly using 
                  official contact information.
                </p>
              </div>
            </div>
          </div>

          {/* Major Cyber Crime Cases Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Globe className="h-10 w-10 text-primary neon-glow" />
                <h2 className="font-display text-3xl font-bold cyber-heading">
                  Historic Cyber Crime Cases
                </h2>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                Learning from history's most devastating cyber attacks helps us understand evolving threats 
                and strengthen our digital defenses. These landmark cases reveal the real-world impact of cybercrime.
              </p>
            </div>

            {/* Cyber Crime Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="glass-panel p-4 rounded-lg text-center border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1 font-mono">$6 Trillion</div>
                <div className="text-xs text-muted-foreground">Est. Global Cybercrime Costs (2021)</div>
              </div>
              <div className="glass-panel p-4 rounded-lg text-center border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1 font-mono">4.1 Billion</div>
                <div className="text-xs text-muted-foreground">Records Exposed (2021)</div>
              </div>
              <div className="glass-panel p-4 rounded-lg text-center border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1 font-mono">623 Million</div>
                <div className="text-xs text-muted-foreground">Ransomware Attacks (2021)</div>
              </div>
              <div className="glass-panel p-4 rounded-lg text-center border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1 font-mono">3.4 Million</div>
                <div className="text-xs text-muted-foreground">Phishing Sites (Monthly)</div>
              </div>
            </div>

            {/* Top Cases Preview (Always Visible) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Case 1: Equifax */}
              <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">Equifax Data Breach</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> 2017
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" /> $575M - $1.4B Loss
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded font-mono">CRITICAL</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  One of the largest data breaches in history exposed personal information of 147 million people, 
                  including Social Security numbers, birth dates, addresses, and driver's license numbers. 
                  The breach was caused by an unpatched Apache Struts vulnerability.
                </p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p><strong className="text-primary">Impact:</strong> 147M+ victims | Identity theft surge | Congressional hearings</p>
                  <p><strong className="text-primary">Attribution:</strong> Chinese state-sponsored APT (U.S. DOJ indictment, 2020)</p>
                  <p><strong className="text-primary">Lesson:</strong> Timely security patches are critical for infrastructure</p>
                </div>
              </div>

              {/* Case 2: WannaCry */}
              <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">WannaCry Ransomware</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> May 2017
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" /> $4B+ Global Damages
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded font-mono">CRITICAL</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Global ransomware cyberattack that infected over 200,000 computers across 150 countries. 
                  Exploited Windows SMB vulnerability (EternalBlue) leaked from NSA tools. Healthcare, 
                  logistics, and government systems crippled worldwide.
                </p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p><strong className="text-primary">Impact:</strong> NHS hospitals shut down | FedEx, Renault, Telefónica hit</p>
                  <p><strong className="text-primary">Attribution:</strong> North Korea's Lazarus Group (U.S. & UK intelligence)</p>
                  <p><strong className="text-primary">Lesson:</strong> Keep systems updated | Implement network segmentation</p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <div className="text-center mb-6">
              <Button 
                onClick={() => setShowCyberCases(!showCyberCases)}
                className="glass-panel px-8 py-6 text-lg hover:scale-105 transition-all duration-300 border border-primary/30"
              >
                {showCyberCases ? "Show Less" : "Read More Cases"}
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${showCyberCases ? "rotate-180" : ""}`} />
              </Button>
            </div>

            {/* Expandable Additional Cases */}
            {showCyberCases && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {/* Case 3: Yahoo */}
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">Yahoo Data Breaches</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> 2013-2014
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" /> $350M+ Settlement
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded font-mono">CRITICAL</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    The largest data breach in history compromised all 3 billion Yahoo accounts. Stolen data 
                    included names, email addresses, phone numbers, hashed passwords, and security questions. 
                    Breach wasn't disclosed until 2016, reducing Verizon acquisition price by $350M.
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong className="text-primary">Impact:</strong> 3 billion accounts | Delayed disclosure scandal</p>
                    <p><strong className="text-primary">Attribution:</strong> Russian intelligence officers (U.S. DOJ, 2017)</p>
                    <p><strong className="text-primary">Lesson:</strong> Transparent breach disclosure is legally & ethically required</p>
                  </div>
                </div>

                {/* Case 4: SolarWinds */}
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">SolarWinds Supply Chain Attack</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> Dec 2020
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="h-3 w-3" /> 18,000+ Organizations
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded font-mono">HIGH</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Sophisticated supply chain attack inserted malicious code into SolarWinds Orion software updates. 
                    Compromised Fortune 500 companies, government agencies (Treasury, Commerce, DHS), and critical 
                    infrastructure. Undetected for months with far-reaching espionage implications.
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong className="text-primary">Impact:</strong> U.S. govt agencies | Microsoft | Cisco | Intel | FireEye</p>
                    <p><strong className="text-primary">Attribution:</strong> Russian SVR (APT29/Cozy Bear) per NSA/FBI</p>
                    <p><strong className="text-primary">Lesson:</strong> Verify software supply chains | Zero-trust architecture</p>
                  </div>
                </div>

                {/* Case 5: Colonial Pipeline */}
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">Colonial Pipeline Ransomware</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> May 2021
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" /> $4.4M Ransom Paid
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded font-mono">HIGH</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Ransomware attack on largest fuel pipeline in the U.S. (45% of East Coast supply) caused 
                    nationwide fuel shortages, panic buying, and emergency declarations. Company paid $4.4M 
                    ransom in Bitcoin. FBI later recovered $2.3M.
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong className="text-primary">Impact:</strong> 5-day shutdown | State emergencies | Gas panic buying</p>
                    <p><strong className="text-primary">Attribution:</strong> DarkSide ransomware group (Russia-based)</p>
                    <p><strong className="text-primary">Lesson:</strong> Critical infrastructure needs robust cybersecurity posture</p>
                  </div>
                </div>

                {/* Case 6: Target */}
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">Target Data Breach</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> Nov-Dec 2013
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" /> $292M Total Costs
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded font-mono">HIGH</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Attackers compromised an HVAC vendor's credentials to access Target's network during peak 
                    holiday shopping season. Installed malware on POS systems to steal 40M credit/debit card 
                    numbers and 70M customer records (names, addresses, emails, phone numbers).
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong className="text-primary">Impact:</strong> 110M customers | CEO resignation | $292M in costs</p>
                    <p><strong className="text-primary">Attribution:</strong> Eastern European cybercrime gang</p>
                    <p><strong className="text-primary">Lesson:</strong> Secure third-party vendor access | Monitor anomalies</p>
                  </div>
                </div>

                {/* Case 7: NotPetya */}
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">NotPetya Malware Attack</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> June 2017
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" /> $10B+ Global Damage
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded font-mono">CRITICAL</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Disguised as ransomware but actually a wiper designed to destroy data. Spread through 
                    compromised Ukrainian accounting software (M.E.Doc). Devastated shipping giant Maersk, 
                    FedEx subsidiary TNT, pharmaceutical company Merck, and hundreds of organizations globally.
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong className="text-primary">Impact:</strong> Maersk: $300M loss | Merck: $870M loss | FedEx: $400M</p>
                    <p><strong className="text-primary">Attribution:</strong> Russian military (GRU) per White House statement</p>
                    <p><strong className="text-primary">Lesson:</strong> Cyber attacks can be acts of war with collateral damage</p>
                  </div>
                </div>

                {/* Case 8: Marriott/Starwood */}
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">Marriott-Starwood Breach</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> 2014-2018
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="h-3 w-3" /> 500M Guests
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded font-mono">CRITICAL</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Hackers accessed Starwood's reservation database for 4 years undetected (before and after 
                    Marriott acquisition). Compromised 500M guest records including passport numbers, payment 
                    cards, travel history. Likely state-sponsored espionage to track travelers.
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong className="text-primary">Impact:</strong> 500M records | Passport data | UK £99M fine (GDPR)</p>
                    <p><strong className="text-primary">Attribution:</strong> Chinese intelligence (APT41) per investigators</p>
                    <p><strong className="text-primary">Lesson:</strong> Due diligence in M&A | Long-term persistent threats exist</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">
            Research Methodology
          </h2>
          <div className="glass-panel p-8 rounded-xl">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Source Verification:</strong> All entries require 
                at least two independent reputable sources. Sources include government reports (UN, 
                State Department, court documents), major investigative journalism outlets, and 
                peer-reviewed academic publications.
              </p>
              <p>
                <strong className="text-foreground">Confidence Scoring:</strong> Each entry includes 
                a confidence score (0-100) based on source quality, documentation availability, and 
                factual consensus. Disputed information is clearly marked with conflicting source notes.
              </p>
              <p>
                <strong className="text-foreground">Review Process:</strong> All entries undergo 
                editorial review. Updates require verification and approval. Users can report errors 
                or submit corrections with supporting documentation.
              </p>
              <p>
                <strong className="text-foreground">Privacy & Safety:</strong> We redact private 
                information, omit operational details, and exclude content that could facilitate 
                violence. Geographic data is generalized to city/region level only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">
            This archive is maintained for educational and research purposes only.
          </p>
          <p className="mb-4">
            All information is sourced from publicly available documents. Last updated: 2025-01-15
          </p>
          <p className="mb-4 text-xs">
            Developed by rithik
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button variant="link" size="sm" className="text-primary">
              About & Methodology
            </Button>
            <Button variant="link" size="sm" className="text-primary">
              Report Error
            </Button>
            <Button variant="link" size="sm" className="text-primary">
              Contact
            </Button>
            <Button variant="link" size="sm" className="text-primary">
              API Access
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

export default Index;
