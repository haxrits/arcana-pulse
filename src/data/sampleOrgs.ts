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
  },
  {
    id: "eta-basque",
    name: "Euskadi Ta Askatasuna (ETA)",
    aliases: ["ETA", "Basque Homeland and Freedom"],
    status: "defunct",
    regions: ["Spain", "France", "Basque Country"],
    yearEstablished: "1959",
    leadership: [
      {
        name: "Organization dissolved",
        title: "N/A",
        source: "Spanish Ministry of Interior",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Basque nationalist and separatist organization that sought independence for the Basque Country through armed struggle. Combined Marxist-Leninist ideology with Basque nationalism.",
    knownOperatives: ["[See Spanish court records for convicted members]"],
    notableAttacks: [
      {
        date: "1973-12-20",
        location: "Madrid, Spain",
        summary: "Assassination of Spanish Prime Minister Luis Carrero Blanco via car bomb",
        casualties: "3 deaths",
        source: "Spanish National Court records; El País archives"
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
        documentLink: "EU Council Decision 2002/334/EC"
      },
      {
        authority: "Self-dissolved",
        date: "2018-05-02",
        documentLink: "ETA dissolution announcement"
      }
    ],
    summary: "ETA was a Basque nationalist and separatist organization active from 1959 to 2018. During its armed campaign, the group was responsible for over 800 deaths. ETA targeted Spanish government officials, security forces, and politicians, as well as conducting bombings against civilian targets. The organization's activities significantly decreased in the 2000s following international cooperation and peace initiatives. In 2011, ETA announced a definitive cessation of armed activity, and formally dissolved in 2018.",
    references: [
      {
        title: "Endgame for ETA: Elusive Peace in the Basque Country",
        author: "Teresa Whitfield",
        publication: "Oxford University Press",
        url: "ISBN: 0190844388",
        accessDate: "2025-01-15"
      },
      {
        title: "The Basque Conflict: ETA Historical Overview",
        author: "Spanish Ministry of Interior",
        publication: "Government Report",
        url: "http://www.interior.gob.es/",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 94,
    confidenceNote: "Extensively documented through Spanish and French legal proceedings, government reports, and decades of investigative journalism.",
    relatedEntities: ["Terra Lliure", "IRA (support relationship)"],
    conflictNotes: "Political interpretations vary regarding legitimacy of armed struggle, but operational facts are well-documented."
  },
  {
    id: "al-qaeda",
    name: "Al-Qaeda",
    aliases: ["The Base", "Al-Qa'ida", "International Front for Jihad"],
    status: "active",
    regions: ["Global", "Middle East", "North Africa", "South Asia"],
    yearEstablished: "1988",
    leadership: [
      {
        name: "Ayman al-Zawahiri (reported deceased 2022)",
        title: "Emir",
        source: "U.S. Intelligence reports",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Sunni Islamist militant organization advocating global jihad against Western influence and governments it considers apostate. Seeks establishment of a pan-Islamic caliphate under strict interpretation of Sharia law.",
    knownOperatives: ["[See U.S. Most Wanted Terrorists list and UN Security Council designations]"],
    notableAttacks: [
      {
        date: "2001-09-11",
        location: "New York, Washington DC, Pennsylvania, USA",
        summary: "Coordinated hijacking of four commercial aircraft targeting World Trade Center, Pentagon, and other targets",
        casualties: "2,977 deaths (public record)",
        source: "9/11 Commission Report; FBI records"
      },
      {
        date: "1998-08-07",
        location: "Nairobi, Kenya and Dar es Salaam, Tanzania",
        summary: "Simultaneous truck bombings of U.S. embassies",
        casualties: "224 deaths, over 4,000 injured",
        source: "FBI investigation records; U.S. court documents"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "1999-10-08",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "UN Security Council",
        date: "1999-10-15",
        documentLink: "UNSC Resolution 1267"
      }
    ],
    summary: "Al-Qaeda is a global Sunni Islamist militant organization founded by Osama bin Laden in 1988. The group is responsible for numerous high-profile terrorist attacks, most notably the September 11, 2001 attacks in the United States. Following sustained military pressure and the deaths of key leaders including bin Laden (2011) and al-Zawahiri (2022), the organization has become decentralized with regional affiliates operating semi-autonomously. Despite leadership losses, affiliated networks remain active.",
    references: [
      {
        title: "The 9/11 Commission Report",
        author: "National Commission on Terrorist Attacks",
        publication: "U.S. Government Printing Office",
        url: "https://www.9-11commission.gov/report/",
        accessDate: "2025-01-15"
      },
      {
        title: "Al-Qaeda: Profile and Threat Assessment",
        author: "Congressional Research Service",
        publication: "CRS Report for Congress",
        url: "https://fas.org/sgp/crs/terror/",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 96,
    confidenceNote: "Extensively documented through U.S. court proceedings, intelligence reports, UN documentation, and the 9/11 Commission Report.",
    relatedEntities: ["Al-Qaeda in the Arabian Peninsula (AQAP)", "Al-Qaeda in the Islamic Maghreb (AQIM)", "Al-Shabaab", "Taliban"],
    conflictNotes: "Current operational capacity and leadership structure subject to ongoing intelligence assessment."
  },
  {
    id: "pira",
    name: "Provisional Irish Republican Army",
    aliases: ["Provisional IRA", "PIRA", "Provos"],
    status: "defunct",
    regions: ["Northern Ireland", "Republic of Ireland", "United Kingdom"],
    yearEstablished: "1969",
    leadership: [
      {
        name: "Leadership transitioned to political structures",
        title: "Organization stood down",
        source: "Independent International Commission on Decommissioning",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Irish republican paramilitary organization that sought to end British rule in Northern Ireland and reunify Ireland. Combined Irish nationalism with socialist ideology.",
    knownOperatives: ["[See UK court records and Historical Enquiries Team reports]"],
    notableAttacks: [
      {
        date: "1987-11-08",
        location: "Enniskillen, Northern Ireland",
        summary: "Remembrance Day bombing during memorial ceremony",
        casualties: "12 deaths, 63 injured",
        source: "Historical Enquiries Team; Police Service of Northern Ireland archives"
      },
      {
        date: "1996-02-09",
        location: "London Docklands, England",
        summary: "Large truck bomb ending 17-month ceasefire",
        casualties: "2 deaths, over 100 injured",
        source: "Metropolitan Police records; BBC archives"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "1997-10-08",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "UK Proscribed Organizations",
        date: "1974",
        documentLink: "UK Terrorism Act 2000"
      },
      {
        authority: "Ceasefire and decommissioning",
        date: "2005-07-28",
        documentLink: "Independent International Commission on Decommissioning reports"
      }
    ],
    summary: "The Provisional IRA was an Irish republican paramilitary organization active from 1969 to 2005. Formed during the Troubles in Northern Ireland, the group conducted a sustained armed campaign against British security forces and carried out bombings in Northern Ireland, England, and continental Europe. The conflict resulted in approximately 1,800 deaths attributed to the Provisional IRA. Following the 1998 Good Friday Agreement, the organization officially ended its armed campaign in 2005 and completed weapons decommissioning.",
    references: [
      {
        title: "Armed Struggle: The History of the IRA",
        author: "Richard English",
        publication: "Oxford University Press",
        url: "ISBN: 0195177533",
        accessDate: "2025-01-15"
      },
      {
        title: "Lost Lives: The Stories of the Men, Women and Children Who Died in the Northern Ireland Troubles",
        author: "David McKittrick et al.",
        publication: "Mainstream Publishing",
        url: "ISBN: 1840188529",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 93,
    confidenceNote: "Extensively documented through UK inquiries, court records, Historical Enquiries Team reports, and the Independent International Commission on Decommissioning.",
    relatedEntities: ["Sinn Féin", "Real IRA", "Continuity IRA"],
    conflictNotes: "Political interpretations of the conflict vary significantly, but operational facts are well-documented through official inquiries and court proceedings."
  },
  {
    id: "boko-haram",
    name: "Boko Haram",
    aliases: ["Jama'atu Ahlis Sunna Lidda'awati wal-Jihad", "Islamic State West Africa Province (ISWAP faction)"],
    status: "active",
    regions: ["Nigeria", "Niger", "Chad", "Cameroon"],
    yearEstablished: "2002",
    leadership: [
      {
        name: "Abubakar Shekau (reported deceased 2021)",
        title: "Former leader",
        source: "Nigerian security sources; ISWAP propaganda",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Islamist insurgent group seeking to establish Islamic state in northeastern Nigeria and surrounding regions. Opposes Western education and influence, advocates strict interpretation of Sharia law.",
    knownOperatives: ["[See Nigerian court records and UN reports]"],
    notableAttacks: [
      {
        date: "2014-04-14",
        location: "Chibok, Borno State, Nigeria",
        summary: "Mass abduction of 276 schoolgirls from Government Secondary School",
        casualties: "Ongoing trauma; many remain missing",
        source: "Nigerian government reports; Human Rights Watch documentation"
      },
      {
        date: "2015-01-03",
        location: "Baga, Nigeria",
        summary: "Massacre during capture of town and military base",
        casualties: "Estimates vary from hundreds to 2,000 deaths",
        source: "Amnesty International reports; satellite imagery analysis"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "2013-11-13",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "UN Security Council",
        date: "2014-05-22",
        documentLink: "UNSC Al-Qaida Sanctions List"
      }
    ],
    summary: "Boko Haram is an Islamist insurgent group based in northeastern Nigeria, founded by Mohammed Yusuf in 2002. The group gained international attention following the 2014 Chibok schoolgirls kidnapping. Boko Haram has conducted numerous attacks on civilian populations, government institutions, and security forces. In 2015, a faction pledged allegiance to ISIS, becoming Islamic State West Africa Province. The insurgency has resulted in tens of thousands of deaths and displaced millions. The group has fractured into competing factions following leadership conflicts.",
    references: [
      {
        title: "Boko Haram: The History of an African Jihadist Movement",
        author: "Alexander Thurston",
        publication: "Princeton University Press",
        url: "ISBN: 0691172870",
        accessDate: "2025-01-15"
      },
      {
        title: "Nigeria: Boko Haram Crisis Update",
        author: "Human Rights Watch",
        publication: "HRW Reports",
        url: "https://www.hrw.org/tag/boko-haram",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 87,
    confidenceNote: "Documented through Nigerian government sources, UN reports, NGO investigations, and media coverage. Some attack casualty figures disputed due to remote locations and ongoing conflict.",
    relatedEntities: ["Islamic State West Africa Province (ISWAP)", "Ansaru"],
    conflictNotes: "Current organizational structure is fragmented. Casualty estimates for some attacks vary significantly between sources."
  },
  {
    id: "farc",
    name: "Revolutionary Armed Forces of Colombia",
    aliases: ["FARC", "FARC-EP", "Fuerzas Armadas Revolucionarias de Colombia"],
    status: "defunct",
    regions: ["Colombia", "South America"],
    yearEstablished: "1964",
    leadership: [
      {
        name: "Organization transitioned to political party",
        title: "Demobilized 2017",
        source: "Colombian Government Peace Accord",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Marxist-Leninist guerrilla organization that sought to overthrow the Colombian government and redistribute land to peasants. Funded operations through drug trafficking, kidnapping, and extortion.",
    knownOperatives: ["[See Colombian peace process documentation and court records]"],
    notableAttacks: [
      {
        date: "2002-02-20",
        location: "Various locations, Colombia",
        summary: "Presidential inauguration bombings in Bogotá and other cities",
        casualties: "Approximately 20 deaths, over 60 injured",
        source: "Colombian Ministry of Defense; El Tiempo archives"
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
        documentLink: "EU terrorist list"
      },
      {
        authority: "Peace Accord and demobilization",
        date: "2016-11-24",
        documentLink: "Colombian Peace Agreement"
      }
    ],
    summary: "FARC was Colombia's largest guerrilla organization, active from 1964 to 2017. The group waged Latin America's longest-running insurgency, involving armed conflict with Colombian government forces, right-wing paramilitaries, and drug cartels. The conflict resulted in over 220,000 deaths and displaced millions. After years of negotiations, FARC signed a peace accord in 2016 and completed demobilization in 2017, transitioning to a political party. Dissident factions that rejected the peace process continue limited operations.",
    references: [
      {
        title: "Colombian Peace Agreement Final Text",
        author: "Colombian Government and FARC-EP",
        publication: "Official Peace Accord",
        url: "https://peaceaccords.nd.edu/accord/colombian-final-agreement",
        accessDate: "2025-01-15"
      },
      {
        title: "FARC: The Longest Insurgency",
        author: "Gary Leech",
        publication: "Zed Books",
        url: "ISBN: 1842778935",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 91,
    confidenceNote: "Extensively documented through Colombian government records, UN verification mission reports, and peace process documentation. Some historical casualty figures subject to ongoing investigation.",
    relatedEntities: ["ELN (National Liberation Army)", "FARC dissidents"],
    conflictNotes: "While main organization demobilized, dissident groups continue operations. Peace process implementation remains incomplete."
  }
];
