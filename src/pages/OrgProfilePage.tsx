import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrgProfile } from "@/components/OrgProfile";
import { sampleOrganizations } from "@/data/sampleOrgs";

const OrgProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const org = sampleOrganizations.find(o => o.id === id);

  if (!org) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Organization Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The organization you're looking for doesn't exist in our database.
          </p>
          <Button onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Database
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Database
          </Button>
        </div>
      </div>
      
      <OrgProfile data={org} />
    </div>
  );
};

export default OrgProfilePage;
