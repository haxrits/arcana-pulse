// SAMPLE DATA - Historical/Educational Examples
// All data must be verified against reputable sources before production use
// These are simplified examples for demonstration purposes

export interface OrganizationData {
  id: string;
  name: string;
  aliases: string[];
  status: "active" | "defunct" | "disputed";
  regions: string[];
  yearEstablished: string;
  leadership: Array<{
    name: string;
    title: string;
    source: string;
    lastVerified: string;
  }>;
  ideologyGoals: string;
  knownOperatives: string[];
  notableAttacks: Array<{
    date: string;
    location: string;
    summary: string;
    casualties?: string;
    source: string;
  }>;
  sanctionsDesignations: Array<{
    authority: string;
    date: string;
    documentLink: string;
  }>;
  summary: string;
  references: Array<{
    title: string;
    author: string;
    publication: string;
    url: string;
    accessDate: string;
  }>;
  lastVerified: string;
  confidenceScore: number;
  confidenceNote: string;
  relatedEntities: string[];
  conflictNotes?: string;
}

// Using historical examples that are well-documented in public records
export const sampleOrganizations: OrganizationData[] = [
  {
    id: "aum-shinrikyo",
    name: "Aum Shinrikyo (Aleph)",
    aliases: ["Aleph", "Aum Supreme Truth"],
    status: "defunct",
    regions: ["Japan", "East Asia"],
    yearEstablished: "1984",
    leadership: [
      {
        name: "Shoko Asahara (deceased)",
        title: "Founder",
        source: "Japanese Ministry of Justice Records",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Apocalyptic millennialist cult that combined Buddhist and Hindu beliefs with apocalyptic prophecies. Sought to hasten societal collapse through acts of terrorism.",
    knownOperatives: ["[Redacted for privacy - see court records]"],
    notableAttacks: [
      {
        date: "1995-03-20",
        location: "Tokyo Metro, Japan",
        summary: "Sarin gas attack on Tokyo subway system during morning rush hour",
        casualties: "13 deaths, over 1,000 injured (public record)",
        source: "National Police Agency of Japan, 1995 Reports; BBC News Archives"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "1997-10-08",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "Japanese Government (surveillance)",
        date: "1999-12-27",
        documentLink: "Public Security Intelligence Agency records"
      }
    ],
    summary: "Aum Shinrikyo was a Japanese doomsday cult founded by Shoko Asahara in 1984. The group is most notorious for carrying out the 1995 Tokyo subway sarin gas attack, which killed 13 people and injured thousands. The organization combined elements of Buddhism, Hinduism, and apocalyptic Christianity, believing in an imminent Armageddon. Following the attack, Japanese authorities arrested key members; Asahara was executed in 2018. Successor organizations exist under surveillance.",
    references: [
      {
        title: "Underground: The Tokyo Gas Attack and the Japanese Psyche",
        author: "Haruki Murakami",
        publication: "Vintage Books",
        url: "ISBN: 0375725806",
        accessDate: "2025-01-15"
      },
      {
        title: "Aum Shinrikyo: Once and Future Threat?",
        author: "James K. Campbell",
        publication: "Emerging Threats Paper, Air War College",
        url: "https://www.globalsecurity.org/wmd/library/report/2002/aum_shinrikyo.pdf",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 95,
    confidenceNote: "Extensively documented through Japanese court proceedings, government reports, and investigative journalism. Primary sources include official trial records and PSIA reports.",
    relatedEntities: ["Aleph (successor)", "Hikari no Wa"],
    conflictNotes: "None - facts are well-established through legal proceedings."
  },
  {
    id: "red-army-faction",
    name: "Red Army Faction (RAF)",
    aliases: ["Baader-Meinhof Group", "Rote Armee Fraktion"],
    status: "defunct",
    regions: ["West Germany", "Western Europe"],
    yearEstablished: "1970",
    leadership: [
      {
        name: "Andreas Baader (deceased)",
        title: "Co-founder",
        source: "German Federal Criminal Police Office",
        lastVerified: "2025-01-15"
      },
      {
        name: "Ulrike Meinhof (deceased)",
        title: "Co-founder",
        source: "German Federal Criminal Police Office",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Far-left militant organization that opposed what it perceived as fascist elements in West German government and American imperialism. Sought revolutionary change through armed struggle and targeted attacks on government and corporate figures.",
    knownOperatives: ["[See West German court records for convicted members]"],
    notableAttacks: [
      {
        date: "1977-09-05",
        location: "Cologne, West Germany",
        summary: "Kidnapping of Hanns Martin Schleyer, prominent industrialist and former SS officer",
        casualties: "5 deaths (including Schleyer)",
        source: "German Federal Archives; Der Spiegel historical coverage"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "West German Government",
        date: "1970",
        documentLink: "BKA Historical Records"
      },
      {
        authority: "Self-dissolved",
        date: "1998-04-20",
        documentLink: "RAF final communiqué (archived)"
      }
    ],
    summary: "The Red Army Faction was a West German far-left militant organization active from 1970 to 1998. Founded by Andreas Baader and Ulrike Meinhof, the group conducted bombings, assassinations, and kidnappings targeting government officials, business leaders, and NATO facilities. The RAF viewed itself as anti-imperialist and anti-fascist, opposing perceived authoritarian tendencies in post-war Germany. The group officially dissolved in 1998, having lost public support and facing sustained law enforcement pressure.",
    references: [
      {
        title: "The Baader-Meinhof Complex",
        author: "Stefan Aust",
        publication: "Oxford University Press",
        url: "ISBN: 0199392617",
        accessDate: "2025-01-15"
      },
      {
        title: "Red Army Faction: A Documentary History",
        author: "J. Smith & André Moncourt",
        publication: "PM Press",
        url: "ISBN: 1604860286",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 92,
    confidenceNote: "Well-documented through German government records, extensive media coverage, and academic research. Some operational details remain classified.",
    relatedEntities: ["Red Brigades (Italy)", "Action Directe (France)"],
    conflictNotes: "Historical interpretations vary regarding motivations and legacy, but operational facts are documented."
  },
  {
    id: "shining-path",
    name: "Shining Path",
    aliases: ["Sendero Luminoso", "Communist Party of Peru"],
    status: "active",
    regions: ["Peru", "South America"],
    yearEstablished: "1969",
    leadership: [
      {
        name: "Abimael Guzmán (deceased 2021)",
        title: "Founder, imprisoned 1992-2021",
        source: "Peruvian Ministry of Interior",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Maoist revolutionary organization seeking to overthrow the Peruvian government and establish a communist state. Advocated for agrarian revolution and viewed violence as necessary for societal transformation.",
    knownOperatives: ["[Current members unknown - fragmented organization]"],
    notableAttacks: [
      {
        date: "1992-07-16",
        location: "Lima, Peru",
        summary: "Tarata bombing in affluent neighborhood using truck bomb",
        casualties: "25 deaths, over 200 injured",
        source: "Truth and Reconciliation Commission of Peru (CVR) Final Report"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "1997-10-08",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "European Union",
        date: "2002",
        documentLink: "EU terrorist list historical records"
      }
    ],
    summary: "Shining Path is a Peruvian Maoist guerrilla insurgent organization founded by Abimael Guzmán in the late 1960s. The group waged a brutal internal conflict against the Peruvian state from 1980 to the late 1990s, resulting in an estimated 69,000 deaths according to Peru's Truth and Reconciliation Commission. Following Guzmán's capture in 1992, the organization significantly weakened but remnants continue limited operations in rural coca-growing regions. The group is known for targeting civilian populations and using extreme violence.",
    references: [
      {
        title: "Shining Path: A History of the Millennial War in Peru",
        author: "Gustavo Gorriti",
        publication: "University of North Carolina Press",
        url: "ISBN: 0807844551",
        accessDate: "2025-01-15"
      },
      {
        title: "Truth and Reconciliation Commission Final Report",
        author: "CVR Peru",
        publication: "Peruvian Government",
        url: "http://www.cverdad.org.pe/ingles/ifinal/index.php",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 88,
    confidenceNote: "Extensively documented through Peruvian CVR and government sources. Current operational capacity is disputed; some sources indicate only fragmented cells remain.",
    relatedEntities: ["MRTA (Túpac Amaru Revolutionary Movement)"],
    conflictNotes: "Current strength estimates vary. Some sources classify as 'largely defunct' while others note continued minor activity in VRAEM region."
  }
];
