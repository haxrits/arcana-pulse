import { useState, useEffect } from "react";
import {
  Shield,
  MapPin,
  Calendar,
  Users,
  Target,
  AlertTriangle,
  ExternalLink,
  FileText,
  Download,
  Flag,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentWarning } from "./ContentWarning";
import { OrganizationData } from "@/data/sampleOrgs";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface OrgProfileProps {
  data: OrganizationData;
  reducedMotion?: boolean;
}

export const OrgProfile = ({ data, reducedMotion = false }: OrgProfileProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!reducedMotion) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  }, [reducedMotion]);

  const statusColors = {
    active: "border-destructive/40 bg-destructive/10 text-destructive",
    defunct: "border-muted-foreground/40 bg-muted text-muted-foreground",
    disputed: "border-accent/40 bg-accent/10 text-accent",
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${data.id}-profile.json`;
    link.click();
  };

  return (
    <div className={`max-w-7xl mx-auto p-6 ${!reducedMotion && isVisible ? "animate-fade-in" : ""}`}>
      <ContentWarning />

      {/* Header Section */}
      <div className="glass-panel p-8 rounded-xl mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="font-display text-4xl font-bold cyber-heading mb-2">
                {data.name}
              </h1>
              <code className="text-sm text-muted-foreground font-mono">{data.id}</code>
              
              {data.aliases.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Also known as:</span>
                  {data.aliases.map((alias, idx) => (
                    <Badge key={idx} variant="outline" className="font-mono text-xs">
                      {alias}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            <Badge className={`${statusColors[data.status]} font-mono text-sm px-4 py-2`}>
              {data.status.toUpperCase()}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Region</p>
                <p className="font-semibold">{data.regions.join(", ")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Established</p>
                <p className="font-semibold">{data.yearEstablished}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Verified</p>
                <p className="font-semibold font-mono text-sm">{data.lastVerified}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Confidence Score:</span>
            <Badge variant="secondary" className="font-mono">
              {data.confidenceScore}%
            </Badge>
            <span className="text-xs text-muted-foreground italic">
              {data.confidenceNote}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">{data.summary}</p>
          </div>

          {/* Ideology & Goals */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Ideology & Goals
            </h2>
            <p className="text-muted-foreground leading-relaxed">{data.ideologyGoals}</p>
          </div>

          {/* Notable Attacks */}
          {data.notableAttacks.length > 0 && (
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1" />
                <div>
                  <h2 className="font-display text-xl font-semibold text-destructive">
                    Notable Incidents
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Documented attacks from public records
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {data.notableAttacks.map((attack, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-4 py-2">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-mono text-sm text-primary">{attack.date}</p>
                        <p className="font-semibold">{attack.location}</p>
                      </div>
                      {attack.casualties && (
                        <Badge variant="destructive" className="text-xs">
                          {attack.casualties}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{attack.summary}</p>
                    <a
                      href={attack.source}
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Source
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              References & Sources
            </h2>
            <div className="space-y-3">
              {data.references.map((ref, idx) => (
                <div key={idx} className="border-l-2 border-primary/30 pl-4 py-2">
                  <p className="font-semibold text-sm">{ref.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {ref.author} — {ref.publication}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={ref.url}
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {ref.url}
                    </a>
                    <span className="text-xs text-muted-foreground">
                      (Accessed: {ref.accessDate})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <div className="glass-panel p-6 rounded-xl sticky top-6">
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Quick Facts
            </h3>

            <div className="space-y-4">
              {/* Leadership */}
              {data.leadership.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Leadership
                  </p>
                  <div className="space-y-2">
                    {data.leadership.map((leader, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-semibold">{leader.name}</p>
                        <p className="text-xs text-muted-foreground">{leader.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              {/* Designations */}
              {data.sanctionsDesignations.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Official Designations
                  </p>
                  <div className="space-y-2">
                    {data.sanctionsDesignations.map((designation, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-semibold">{designation.authority}</p>
                          <p className="text-xs text-muted-foreground">{designation.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              {/* Related Entities */}
              {data.relatedEntities.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Related Entities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.relatedEntities.map((entity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {entity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Separator className="my-4" />

            {/* Actions */}
            <div className="space-y-2">
              <Button
                onClick={handleExportJSON}
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 border-primary/30 hover:bg-primary/10"
              >
                <Download className="h-4 w-4" />
                Export JSON
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 border-destructive/30 hover:bg-destructive/10 text-destructive"
              >
                <Flag className="h-4 w-4" />
                Report Error
              </Button>
            </div>

            {/* Citation */}
            <div className="mt-4 p-3 bg-background/30 rounded border border-border/50">
              <p className="text-xs text-muted-foreground mb-1">Cite this entry (APA):</p>
              <code className="text-xs font-mono text-foreground block">
                Extremist Organizations Archive. ({data.lastVerified.split('-')[0]}). {data.name}.
                Retrieved {data.lastVerified}.
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Conflict Notes */}
      {data.conflictNotes && (
        <div className="glass-panel p-6 rounded-xl mt-6 border-accent/30">
          <h3 className="font-display text-lg font-semibold mb-2 flex items-center gap-2 text-accent">
            <AlertTriangle className="h-5 w-5" />
            Source Discrepancies
          </h3>
          <p className="text-sm text-muted-foreground">{data.conflictNotes}</p>
        </div>
      )}
    </div>
  );
};
