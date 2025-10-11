import { Shield, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OrgCardProps {
  id: string;
  name: string;
  region: string;
  yearEstablished: string;
  status: "active" | "defunct" | "disputed";
  summary: string;
  confidenceScore: number;
  designations: string[];
  onViewProfile: (id: string) => void;
}

export const OrgCard = ({
  id,
  name,
  region,
  yearEstablished,
  status,
  summary,
  confidenceScore,
  designations,
  onViewProfile,
}: OrgCardProps) => {
  const statusColors = {
    active: "border-destructive/40 bg-destructive/10 text-destructive",
    defunct: "border-muted-foreground/40 bg-muted text-muted-foreground",
    disputed: "border-accent/40 bg-accent/10 text-accent",
  };

  return (
    <div className="glass-panel p-6 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:neon-glow group animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <code className="text-xs text-muted-foreground font-mono">{id}</code>
        </div>
        <Badge className={`${statusColors[status]} font-mono text-xs`}>
          {status.toUpperCase()}
        </Badge>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{region}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          <span>Est. {yearEstablished}</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {designations.map((designation, idx) => (
          <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
            <Shield className="h-3 w-3 mr-1" />
            {designation}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">Confidence:</span>
          <Badge variant="secondary" className="font-mono text-xs">
            {confidenceScore}%
          </Badge>
        </div>
        <Button
          onClick={() => onViewProfile(id)}
          size="sm"
          className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-display gap-2 transition-all hover:neon-glow"
        >
          View Profile
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
