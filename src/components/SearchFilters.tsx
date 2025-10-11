import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  regionFilter: string;
  onRegionChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
}

export const SearchFilters = ({
  searchQuery,
  onSearchChange,
  regionFilter,
  onRegionChange,
  statusFilter,
  onStatusChange,
}: SearchFiltersProps) => {
  return (
    <div className="glass-panel p-6 rounded-xl mb-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="font-display text-lg font-semibold">Search & Filter</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search organizations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background/50 border-border/50 focus:border-primary transition-colors"
          />
        </div>

        <Select value={regionFilter} onValueChange={onRegionChange}>
          <SelectTrigger className="bg-background/50 border-border/50">
            <SelectValue placeholder="Filter by region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="middle-east">Middle East</SelectItem>
            <SelectItem value="south-asia">South Asia</SelectItem>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="americas">Americas</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="bg-background/50 border-border/50">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="defunct">Defunct</SelectItem>
            <SelectItem value="disputed">Disputed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
