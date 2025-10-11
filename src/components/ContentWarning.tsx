import { AlertTriangle } from "lucide-react";

export const ContentWarning = () => {
  return (
    <div className="glass-panel border-destructive/30 bg-destructive/5 p-4 rounded-lg mb-8 animate-fade-in">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-display font-semibold text-destructive text-sm">
            Content Warning
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This archive contains factual descriptions of violent incidents and extremist organizations 
            for educational, journalistic, and research purposes only. All information is sourced from 
            publicly available government reports, court documents, and reputable news outlets. This 
            resource is strictly neutral and does not endorse, glorify, or facilitate any form of violence.
          </p>
        </div>
      </div>
    </div>
  );
};
