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
  },
  {
    id: "hezbollah",
    name: "Hezbollah",
    aliases: ["Party of God", "Hizbullah", "Islamic Resistance"],
    status: "active",
    regions: ["Lebanon", "Syria", "Middle East"],
    yearEstablished: "1985",
    leadership: [
      {
        name: "Hassan Nasrallah",
        title: "Secretary-General",
        source: "UN Security Council reports; regional media",
        lastVerified: "2025-01-15"
      },
      {
        name: "Naim Qassem",
        title: "Deputy Secretary-General",
        source: "Official Hezbollah statements",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Shia Islamist political party and militant group founded during Lebanese Civil War. Opposes Israeli presence and Western influence in Middle East. Operates as both political party with parliamentary representation and armed militia.",
    knownOperatives: ["[See U.S. Treasury OFAC designations and UN reports]"],
    notableAttacks: [
      {
        date: "1983-10-23",
        location: "Beirut, Lebanon",
        summary: "Suicide truck bombings of U.S. Marine and French paratrooper barracks",
        casualties: "299 deaths (241 U.S., 58 French)",
        source: "U.S. Department of Defense; FBI reports"
      },
      {
        date: "1994-07-18",
        location: "Buenos Aires, Argentina",
        summary: "Bombing of AMIA Jewish community center",
        casualties: "85 deaths, hundreds injured",
        source: "Argentine court proceedings; Interpol notices"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "1997-10-08",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "U.S. Treasury OFAC",
        date: "1995",
        documentLink: "Specially Designated Global Terrorist"
      }
    ],
    summary: "Hezbollah is a Shia Islamist political party and militant group based in Lebanon, founded in 1985 with Iranian backing. The organization operates as both a political party with seats in Lebanese parliament and an armed militia. Hezbollah has conducted numerous attacks against Israeli and Western targets and maintains significant military capabilities. The group provides social services in Lebanon including healthcare and education. Hezbollah receives substantial support from Iran and has been involved in Syrian Civil War supporting Assad government.",
    references: [
      {
        title: "Hezbollah: A Short History",
        author: "Augustus Richard Norton",
        publication: "Princeton University Press",
        url: "ISBN: 0691168202",
        accessDate: "2025-01-15"
      },
      {
        title: "Hezbollah: Terrorism, National Liberation, or Menace?",
        author: "Matthew Levitt",
        publication: "Washington Institute for Near East Policy",
        url: "ISBN: 0300228279",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 89,
    confidenceNote: "Well-documented through U.S. and international sanctions, UN reports, and academic research. Dual nature as political party and militia creates complex classification issues.",
    relatedEntities: ["Iranian Revolutionary Guard Corps (IRGC)", "Amal Movement"],
    conflictNotes: "Status as terrorist organization vs. legitimate political party disputed internationally. Some countries list only military wing."
  },
  {
    id: "hamas",
    name: "Hamas",
    aliases: ["Islamic Resistance Movement", "Harakat al-Muqawama al-Islamiya"],
    status: "active",
    regions: ["Gaza Strip", "West Bank", "Palestinian Territories"],
    yearEstablished: "1987",
    leadership: [
      {
        name: "Ismail Haniyeh",
        title: "Political Bureau Chief",
        source: "Hamas official communications; regional media",
        lastVerified: "2025-01-15"
      },
      {
        name: "Yahya Sinwar",
        title: "Gaza Strip Leader",
        source: "Israeli intelligence assessments",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Palestinian Sunni Islamist nationalist organization with political and military wings. Seeks establishment of Palestinian state and opposes Israeli occupation. Operates as de facto governing authority in Gaza Strip since 2007.",
    knownOperatives: ["[See Israeli and U.S. terrorism designations]"],
    notableAttacks: [
      {
        date: "1996-02-25",
        location: "Jerusalem, Israel",
        summary: "Bus bombing during morning commute",
        casualties: "26 deaths, over 40 injured",
        source: "Israeli Ministry of Foreign Affairs; Shin Bet records"
      },
      {
        date: "2001-06-01",
        location: "Tel Aviv, Israel",
        summary: "Suicide bombing at Dolphinarium discotheque",
        casualties: "21 deaths, 132 injured",
        source: "Israeli police reports; court documents"
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
        date: "2001",
        documentLink: "EU Council Decision"
      },
      {
        authority: "Israel",
        date: "1989",
        documentLink: "Israeli Defense Forces designation"
      }
    ],
    summary: "Hamas is a Palestinian Islamist nationalist organization founded in 1987 during the First Intifada. The group combines armed resistance against Israel with governance responsibilities in Gaza Strip, where it has exercised de facto control since 2007. Hamas provides social services including schools, hospitals, and welfare programs. The organization has conducted numerous suicide bombings and rocket attacks against Israeli targets. Hamas's charter calls for establishment of Islamic state in historical Palestine. International community remains divided on engagement with Hamas.",
    references: [
      {
        title: "Hamas: Politics, Charity, and Terrorism in the Service of Jihad",
        author: "Matthew Levitt",
        publication: "Yale University Press",
        url: "ISBN: 0300122586",
        accessDate: "2025-01-15"
      },
      {
        title: "Hamas: A History from Within",
        author: "Azzam Tamimi",
        publication: "Olive Branch Press",
        url: "ISBN: 1566567033",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 90,
    confidenceNote: "Extensively documented through Israeli, U.S., and international sources. Status as terrorist organization vs. resistance movement politically contested.",
    relatedEntities: ["Palestinian Islamic Jihad", "Muslim Brotherhood"],
    conflictNotes: "International classification varies significantly. Some countries recognize only military wing as terrorist organization, others the entire entity."
  },
  {
    id: "taliban",
    name: "Taliban",
    aliases: ["Islamic Emirate of Afghanistan", "Tehrik-i-Taliban"],
    status: "active",
    regions: ["Afghanistan", "Pakistan border regions"],
    yearEstablished: "1994",
    leadership: [
      {
        name: "Hibatullah Akhundzada",
        title: "Supreme Leader (Amir al-Mu'minin)",
        source: "Taliban official statements; Afghan media",
        lastVerified: "2025-01-15"
      },
      {
        name: "Abdul Ghani Baradar",
        title: "Deputy Prime Minister for Economic Affairs",
        source: "Taliban government announcements",
        lastVerified: "2025-01-15"
      },
      {
        name: "Sirajuddin Haqqani",
        title: "Interior Minister",
        source: "Taliban cabinet appointments",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Sunni Islamist militant and political movement following Deobandi interpretation of Islam. Seeks to establish Islamic emirate under strict Sharia law. Currently functions as de facto government of Afghanistan since August 2021.",
    knownOperatives: ["[See UN Security Council sanctions list]"],
    notableAttacks: [
      {
        date: "2001-03-11",
        location: "Bamiyan Province, Afghanistan",
        summary: "Destruction of ancient Buddha statues using explosives",
        casualties: "Cultural heritage destruction",
        source: "UNESCO documentation; international media coverage"
      },
      {
        date: "2021-08-26",
        location: "Kabul Airport, Afghanistan",
        summary: "ISIS-K suicide bombing during evacuation operations (Taliban security failure)",
        casualties: "170+ deaths including 13 U.S. service members",
        source: "U.S. Department of Defense; Pentagon reports"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "UN Security Council",
        date: "1999-10-15",
        documentLink: "UNSC Resolution 1267"
      },
      {
        authority: "U.S. Treasury OFAC",
        date: "2002",
        documentLink: "Specially Designated Global Terrorist"
      }
    ],
    summary: "The Taliban is a Sunni Islamist militant and political movement that originated in Afghanistan in 1994. The group ruled Afghanistan from 1996 to 2001, imposing strict interpretation of Islamic law. Following U.S.-led invasion after 9/11, Taliban waged insurgency for two decades. In August 2021, Taliban regained control of Afghanistan following U.S. military withdrawal. The group enforces strict social restrictions, particularly affecting women and girls' rights to education and employment. No country currently grants formal diplomatic recognition to Taliban government.",
    references: [
      {
        title: "Taliban: Militant Islam, Oil and Fundamentalism in Central Asia",
        author: "Ahmed Rashid",
        publication: "Yale University Press",
        url: "ISBN: 0300089023",
        accessDate: "2025-01-15"
      },
      {
        title: "The Taliban at War: 2001-2018",
        author: "Antonio Giustozzi",
        publication: "Oxford University Press",
        url: "ISBN: 0190915544",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 92,
    confidenceNote: "Extensively documented through UN reports, U.S. government assessments, and academic research. Current governance structure documented through Taliban official announcements.",
    relatedEntities: ["Haqqani Network", "Al-Qaeda", "Tehrik-i-Taliban Pakistan (TTP)"],
    conflictNotes: "International recognition status disputed. Taliban claims to be legitimate government while most countries maintain sanctions and non-recognition."
  },
  {
    id: "isis",
    name: "Islamic State",
    aliases: ["ISIS", "ISIL", "Daesh", "Islamic State of Iraq and Syria"],
    status: "active",
    regions: ["Iraq", "Syria", "Global affiliates in Africa, Asia, Europe"],
    yearEstablished: "2013",
    leadership: [
      {
        name: "Abu Hafs al-Hashimi al-Qurashi (alleged)",
        title: "Caliph (disputed, identity unconfirmed)",
        source: "ISIS propaganda channels; intelligence assessments",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Salafi jihadist militant organization that proclaimed worldwide caliphate in 2014. Seeks to establish Islamic state under strict interpretation of Sharia law. Known for extreme brutality, mass executions, and use of social media for propaganda and recruitment.",
    knownOperatives: ["[See UN sanctions list and international terrorism designations]"],
    notableAttacks: [
      {
        date: "2015-11-13",
        location: "Paris, France",
        summary: "Coordinated attacks including Bataclan theatre massacre, stadium bombing, café shootings",
        casualties: "130 deaths, hundreds injured",
        source: "French government reports; court proceedings"
      },
      {
        date: "2016-03-22",
        location: "Brussels, Belgium",
        summary: "Suicide bombings at airport and metro station",
        casualties: "32 deaths, over 300 injured",
        source: "Belgian federal police; European Parliament reports"
      },
      {
        date: "2014-08-03",
        location: "Sinjar, Iraq",
        summary: "Genocide against Yazidi population including mass killings and enslavement",
        casualties: "Thousands killed, thousands enslaved",
        source: "UN Commission of Inquiry; Yazda documentation"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "2004-12-17",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "UN Security Council",
        date: "2013-05-30",
        documentLink: "UNSC Resolution 2083"
      },
      {
        authority: "European Union",
        date: "2014",
        documentLink: "EU terrorist list"
      }
    ],
    summary: "Islamic State is a Salafi jihadist militant organization that emerged from al-Qaeda in Iraq. In 2014, the group seized large territories in Iraq and Syria, declaring a caliphate. ISIS became notorious for mass executions, beheadings, destruction of cultural heritage, and use of sexual violence as weapon of war. The group's territorial control was largely eliminated by 2019 through international coalition efforts, but ISIS continues operations through insurgent cells and international affiliates. The organization pioneered sophisticated social media propaganda and inspired attacks globally.",
    references: [
      {
        title: "ISIS: Inside the Army of Terror",
        author: "Michael Weiss & Hassan Hassan",
        publication: "Regan Arts",
        url: "ISBN: 1941393578",
        accessDate: "2025-01-15"
      },
      {
        title: "The ISIS Apocalypse",
        author: "William McCants",
        publication: "St. Martin's Press",
        url: "ISBN: 1250080347",
        accessDate: "2025-01-15"
      },
      {
        title: "They Came to Destroy: ISIS Crimes Against the Yazidis",
        author: "UN Independent Commission of Inquiry on Syria",
        publication: "UN Human Rights Council",
        url: "https://www.ohchr.org/en/hr-bodies/hrc/iici-syria",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 94,
    confidenceNote: "Extensively documented through UN investigations, international coalition reports, court proceedings across multiple countries, and ISIS's own propaganda materials.",
    relatedEntities: ["Al-Qaeda", "ISIS-K (Afghanistan)", "ISIS-WA (West Africa)", "Boko Haram (former affiliate)"],
    conflictNotes: "Current leadership structure unclear following deaths of previous leaders. Organization operates in decentralized manner with regional affiliates."
  },
  {
    id: "al-shabaab",
    name: "Al-Shabaab",
    aliases: ["Harakat al-Shabaab al-Mujahideen", "The Youth"],
    status: "active",
    regions: ["Somalia", "Kenya", "East Africa"],
    yearEstablished: "2006",
    leadership: [
      {
        name: "Ahmad Umar (Abu Ubaidah)",
        title: "Emir",
        source: "U.S. intelligence assessments; UN monitoring reports",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Somali militant Islamist group affiliated with al-Qaeda. Seeks to establish Islamic state in Somalia under strict Sharia law and expel foreign military forces. Controls rural territories in southern and central Somalia.",
    knownOperatives: ["[See U.S. terrorism designations and UN reports]"],
    notableAttacks: [
      {
        date: "2013-09-21",
        location: "Nairobi, Kenya",
        summary: "Westgate shopping mall siege",
        casualties: "67 deaths, over 200 injured",
        source: "Kenyan government reports; investigative journalism"
      },
      {
        date: "2017-10-14",
        location: "Mogadishu, Somalia",
        summary: "Truck bombing at busy intersection (deadliest attack in Somali history)",
        casualties: "Over 500 deaths, hundreds injured",
        source: "Somali government statements; hospital records"
      },
      {
        date: "2015-04-02",
        location: "Garissa, Kenya",
        summary: "University attack targeting Christian students",
        casualties: "148 deaths",
        source: "Kenyan police reports; university records"
      }
    ],
    sanctionsDesignations: [
      {
        authority: "U.S. Department of State",
        date: "2008-02-26",
        documentLink: "https://www.state.gov/foreign-terrorist-organizations/"
      },
      {
        authority: "UN Security Council",
        date: "2010",
        documentLink: "UNSC Al-Qaida Sanctions List"
      }
    ],
    summary: "Al-Shabaab is a Somali jihadist militant group that emerged from the Islamic Courts Union in 2006. The group formally affiliated with al-Qaeda in 2012. Al-Shabaab controls territory in rural southern Somalia and conducts frequent attacks in Somalia and neighboring Kenya. The organization operates a shadow governance system including courts and taxation in controlled areas. Despite sustained military pressure from African Union forces and U.S. airstrikes, the group maintains significant operational capacity and has shown resilience.",
    references: [
      {
        title: "Al-Shabaab in Somalia: The History and Ideology of a Militant Islamist Group",
        author: "Stig Jarle Hansen",
        publication: "Oxford University Press",
        url: "ISBN: 0199327742",
        accessDate: "2025-01-15"
      },
      {
        title: "Somalia Country Report on Terrorism",
        author: "U.S. Department of State",
        publication: "Country Reports on Terrorism",
        url: "https://www.state.gov/reports/country-reports-on-terrorism/",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 88,
    confidenceNote: "Well-documented through UN monitoring, U.S. and Kenyan government reports, and investigative journalism. Some casualty figures in remote areas difficult to verify independently.",
    relatedEntities: ["Al-Qaeda", "Islamic Courts Union", "Hizbul Islam"],
    conflictNotes: "Territorial control fluctuates. Group demonstrates adaptability despite leadership losses and military pressure."
  },
  {
    id: "pkk",
    name: "Kurdistan Workers' Party",
    aliases: ["PKK", "Partiya Karkerên Kurdistanê", "KADEK", "Kongra-Gel"],
    status: "active",
    regions: ["Turkey", "Iraq", "Syria", "Iran"],
    yearEstablished: "1978",
    leadership: [
      {
        name: "Abdullah Öcalan (imprisoned since 1999)",
        title: "Founder, ideological leader",
        source: "Turkish government records; court documents",
        lastVerified: "2025-01-15"
      },
      {
        name: "Cemil Bayik",
        title: "KCK Co-Chair",
        source: "PKK statements; Turkish intelligence reports",
        lastVerified: "2025-01-15"
      },
      {
        name: "Duran Kalkan",
        title: "KCK Executive Council member",
        source: "Regional media; analyst assessments",
        lastVerified: "2025-01-15"
      }
    ],
    ideologyGoals: "Kurdish nationalist militant organization founded on Marxist-Leninist ideology, later shifting toward democratic confederalism. Seeks Kurdish autonomy or independence and improved rights for Kurdish populations in Turkey and neighboring countries.",
    knownOperatives: ["[See Turkish and EU terrorism designations]"],
    notableAttacks: [
      {
        date: "2016-12-10",
        location: "Istanbul, Turkey",
        summary: "Dual bombing targeting police outside Besiktas football stadium",
        casualties: "48 deaths, over 150 injured",
        source: "Turkish Interior Ministry; court proceedings"
      },
      {
        date: "2015-10-10",
        location: "Ankara, Turkey",
        summary: "Suicide bombing at peace rally (attributed to ISIS but PKK context relevant)",
        casualties: "109 deaths",
        source: "Turkish government investigation"
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
        documentLink: "EU Council Decision"
      },
      {
        authority: "Turkey",
        date: "1984",
        documentLink: "Turkish terrorism designation"
      }
    ],
    summary: "PKK is a Kurdish militant organization founded in 1978 that has waged an armed insurgency against Turkish state since 1984. The conflict has resulted in over 40,000 deaths. PKK originally followed Marxist-Leninist ideology but shifted toward Abdullah Öcalan's democratic confederalism after his 1999 capture. The group maintains training camps in northern Iraq and operates through affiliated organizations including YPG in Syria. PKK has alternated between armed conflict and ceasefire periods. Turkish government pursues aggressive counter-insurgency while Kurdish rights remain contentious political issue.",
    references: [
      {
        title: "Blood and Belief: The PKK and the Kurdish Fight for Independence",
        author: "Aliza Marcus",
        publication: "NYU Press",
        url: "ISBN: 0814796982",
        accessDate: "2025-01-15"
      },
      {
        title: "The Kurdish Question in Turkey",
        author: "Human Rights Watch",
        publication: "HRW Reports",
        url: "https://www.hrw.org/reports/2005/turkey1105/",
        accessDate: "2025-01-15"
      }
    ],
    lastVerified: "2025-01-15",
    confidenceScore: 86,
    confidenceNote: "Documented through Turkish government sources, EU reports, and academic research. Attack attributions sometimes disputed. Relationship with Syrian YPG complicates classification.",
    relatedEntities: ["YPG (People's Protection Units)", "PYD", "KCK (Kurdistan Communities Union)"],
    conflictNotes: "Status as terrorist organization vs. freedom fighters highly politicized. Many countries distinguish between PKK and Syrian Kurdish YPG, which Turkey considers synonymous."
  }
];
