export type Category = 'vehicle' | 'department' | 'technology' | 'person' | 'location' | 'project';

export interface JLRNode {
  id: string;
  category: Category;
  description: string;
  details: string;
}

export const CATEGORY_COLORS: Record<Category, string> = {
  vehicle:    '#005A2B',
  department: '#1A1A2E',
  technology: '#0057B8',
  person:     '#7B2D8B',
  location:   '#C65102',
  project:    '#9B1B30',
};

export const jlrNodes: JLRNode[] = [
  // ── Vehicles ──────────────────────────────────────────────────────────────
  {
    id: 'Range Rover',
    category: 'vehicle',
    description: 'Flagship luxury SUV',
    details: `<b>Range Rover</b> is JLR's pinnacle luxury SUV, first launched in 1970 and now in its fifth generation.
      Built at Solihull, it pioneered the premium SUV segment and continues to define Modern Luxury.
      Powertrain options include Mild Hybrid (MHEV), Plug-in Hybrid (PHEV), and the forthcoming all-electric SV variant on the MLA platform.`,
  },
  {
    id: 'Range Rover Sport',
    category: 'vehicle',
    description: 'Performance luxury SUV',
    details: `<b>Range Rover Sport</b> combines luxury and performance with a driver-focused character.
      The third-generation model (L461) is built on the MLA Flex platform, offering MHEV, PHEV and a twin-turbocharged V8.
      It is also manufactured at Solihull alongside the Range Rover and Defender.`,
  },
  {
    id: 'Range Rover Velar',
    category: 'vehicle',
    description: 'Design-forward mid-size luxury SUV',
    details: `<b>Range Rover Velar</b> sits between the Evoque and Sport in the Range Rover family.
      Celebrated for its flush door handles and clean silhouette, it was designed in collaboration with Gerry McGovern.
      Built at Solihull on the PLA platform with MHEV and PHEV options.`,
  },
  {
    id: 'Range Rover Evoque',
    category: 'vehicle',
    description: 'Compact luxury SUV',
    details: `<b>Range Rover Evoque</b> brought luxury SUV style to a compact footprint.
      Manufactured at Halewood, Merseyside, the second-generation model introduced a 48V MHEV system.
      It remains JLR's best-selling model globally.`,
  },
  {
    id: 'Defender',
    category: 'vehicle',
    description: 'Iconic off-road SUV',
    details: `<b>Defender</b> is Land Rover's original off-road icon, reimagined for the modern era.
      Launched in 2020, the L663 generation is available as 90, 110 and 130 body styles.
      Built at Solihull, it carries the Pivi Pro infotainment system and advanced Wade Sensing technology.`,
  },
  {
    id: 'Discovery',
    category: 'vehicle',
    description: 'Family adventure SUV',
    details: `<b>Discovery</b> is Land Rover's 7-seat family adventure vehicle, known for its versatility and capability.
      The fifth generation uses an aluminium-intensive architecture and is built at Solihull.
      Features include Terrain Response 2 and a configurable seven-seat interior.`,
  },
  {
    id: 'Discovery Sport',
    category: 'vehicle',
    description: 'Compact family SUV',
    details: `<b>Discovery Sport</b> is Land Rover's entry-level 7-seat SUV, manufactured at Halewood.
      Updated in 2020 with a MHEV powertrain and Pivi Pro infotainment.
      Shares underpinnings with the Range Rover Evoque on the EUCD platform.`,
  },
  {
    id: 'Jaguar XE',
    category: 'vehicle',
    description: 'Performance compact saloon',
    details: `<b>Jaguar XE</b> is a rear-wheel-drive biased performance saloon built on an aluminium-intensive architecture.
      Features include adaptive dynamics, all-wheel drive options, and a 48V MHEV system.
      Assembled at Castle Bromwich, it competes with the BMW 3 Series and Mercedes C-Class.`,
  },
  {
    id: 'Jaguar XF',
    category: 'vehicle',
    description: 'Executive performance saloon',
    details: `<b>Jaguar XF</b> is Jaguar's executive saloon, blending a sporting character with business-class comfort.
      The second-generation model uses an aluminium monocoque and is available as saloon and Sportbrake estate.
      Produced at Castle Bromwich with MHEV powertrains.`,
  },
  {
    id: 'Jaguar F-PACE',
    category: 'vehicle',
    description: 'Performance SUV',
    details: `<b>Jaguar F-PACE</b> is Jaguar's first ever SUV and its best-selling model.
      The updated 2021 model features Pivi Pro infotainment, MHEV and PHEV powertrains.
      Built at Castle Bromwich, it combines Jaguar's sports-car DNA with everyday practicality.`,
  },
  {
    id: 'Jaguar E-PACE',
    category: 'vehicle',
    description: 'Compact performance SUV',
    details: `<b>Jaguar E-PACE</b> is Jaguar's compact SUV manufactured at Halewood.
      Shares a platform with the Range Rover Evoque and offers a 48V MHEV system.
      Known for its roll-and-twist world-record car launch in 2017.`,
  },
  {
    id: 'Jaguar F-TYPE',
    category: 'vehicle',
    description: 'Two-seat sports car',
    details: `<b>Jaguar F-TYPE</b> is Jaguar's flagship two-seat sports car, the spiritual successor to the E-Type.
      Available as coupe and convertible, it features a supercharged V8 in SVR trim.
      Production ends in 2024 as Jaguar transitions to an all-electric brand under Reimagine.`,
  },

  // ── Departments ───────────────────────────────────────────────────────────
  {
    id: 'Advanced Research & Engineering',
    category: 'department',
    description: 'Future technologies & innovation hub',
    details: `<b>Advanced Research & Engineering</b> is JLR's innovation engine, headquartered at Gaydon.
      The team develops next-generation propulsion, autonomous driving, and lightweight materials.
      It leads JLR's partnerships with academic institutions and technology companies globally.`,
  },
  {
    id: 'Design Studio',
    category: 'department',
    description: 'Global design and creative direction',
    details: `<b>Design Studio</b> is led by Chief Creative Officer Gerry McGovern OBE.
      Studios operate in Gaydon, London, and Los Angeles, developing the visual language for all JLR brands.
      The team is responsible for the Modern Luxury aesthetic and the Reimagined Jaguar design direction.`,
  },
  {
    id: 'Propulsion & E-Systems',
    category: 'department',
    description: 'Powertrain and electrification engineering',
    details: `<b>Propulsion & E-Systems</b> engineers JLR's petrol, hybrid and electric powertrains.
      Responsible for the Ingenium engine family, the 48V MHEV system, and the emerging battery electric vehicle platforms.
      Key facilities are at Whitley, Gaydon and the Engine Manufacturing Centre in Wolverhampton.`,
  },
  {
    id: 'Vehicle Dynamics & Chassis',
    category: 'department',
    description: 'Handling, ride and comfort engineering',
    details: `<b>Vehicle Dynamics & Chassis</b> is responsible for the driving character of every JLR vehicle.
      The team calibrates suspension, steering, braking and Terrain Response systems.
      Works closely with Propulsion to integrate torque vectoring on all-wheel drive models.`,
  },
  {
    id: 'Software & Connected Services',
    category: 'department',
    description: 'In-car software and digital connectivity',
    details: `<b>Software & Connected Services</b> develops Pivi Pro, InControl and over-the-air update capabilities.
      Project Symphony targets a software-defined vehicle architecture across future JLR models.
      The team is scaling rapidly as JLR shifts to an in-house software development model.`,
  },
  {
    id: 'Manufacturing Operations',
    category: 'department',
    description: 'Global vehicle production',
    details: `<b>Manufacturing Operations</b> oversees all JLR production plants globally.
      Led by Barbara Bergmeier, the function covers Solihull, Halewood, Castle Bromwich and international contract manufacturing.
      A key focus is transitioning plants to EV-ready production lines by 2030.`,
  },
  {
    id: 'Procurement & Supply Chain',
    category: 'department',
    description: 'Supplier management and sourcing',
    details: `<b>Procurement & Supply Chain</b> manages JLR's £16bn+ annual spend with over 7,000 suppliers.
      Post-pandemic, the team has focused on semiconductor supply resilience and battery cell sourcing.
      Critical supplier partnerships include Samsung SDI and Wolfspeed for EV battery and power electronics.`,
  },
  {
    id: 'Sustainability & ESG',
    category: 'department',
    description: 'Environmental, social and governance strategy',
    details: `<b>Sustainability & ESG</b> drives JLR's Destination Zero ambition — zero emissions, zero accidents, zero congestion.
      The team owns the 2039 Carbon Net Zero target and oversees sustainability reporting.
      Key programmes include responsible sourcing, water stewardship and circular economy initiatives.`,
  },

  // ── Technologies ──────────────────────────────────────────────────────────
  {
    id: 'MHEV',
    category: 'technology',
    description: '48V Mild Hybrid Electric Vehicle system',
    details: `<b>MHEV (Mild Hybrid Electric Vehicle)</b> uses a 48-volt belt-integrated starter generator (BISG) to harvest energy under braking.
      Deployed across JLR's Ingenium petrol and diesel engines, it reduces CO₂ by up to 16g/km.
      Available on Range Rover Evoque, Discovery Sport, Defender, Range Rover and Jaguar XE/XF.`,
  },
  {
    id: 'PHEV',
    category: 'technology',
    description: 'Plug-in Hybrid Electric Vehicle system',
    details: `<b>PHEV (Plug-in Hybrid)</b> combines an Ingenium petrol engine with a 31.8 kWh battery (P400e spec) for up to 66 miles of electric range.
      Available on Range Rover, Range Rover Sport, Range Rover Velar and Jaguar F-PACE.
      Charging supports up to 22 kW AC and 50 kW DC on certain variants.`,
  },
  {
    id: 'Pivi Pro',
    category: 'technology',
    description: 'Next-generation infotainment platform',
    details: `<b>Pivi Pro</b> is JLR's latest infotainment system, featuring a curved OLED touchscreen and dual-core processor.
      Supports over-the-air (OTA) software updates, Apple CarPlay, Android Auto and Amazon Alexa integration.
      First launched on the Range Rover Evoque in 2019; now standard across the JLR range.`,
  },
  {
    id: 'Terrain Response 2',
    category: 'technology',
    description: 'Automatic terrain management system',
    details: `<b>Terrain Response 2</b> automatically selects the optimum settings for traction, stability and suspension across different surfaces.
      The system analyses inputs from accelerometers, steering and wheel sensors to configure the drivetrain in real time.
      Standard on Defender 110, Discovery and Range Rover; optional on other models.`,
  },
  {
    id: 'Air Suspension',
    category: 'technology',
    description: 'Adaptive air spring suspension',
    details: `<b>Air Suspension with Adaptive Dynamics</b> continuously monitors vehicle dynamics and adjusts damper stiffness in under 5ms.
      It provides class-leading ride comfort on-road and increased ground clearance off-road (up to 291mm on Range Rover).
      Works in conjunction with Terrain Response 2 and Electronic Air Suspension sensors.`,
  },
  {
    id: 'InControl',
    category: 'technology',
    description: 'Connected car services platform',
    details: `<b>InControl</b> is JLR's suite of connected services, including remote vehicle control, live traffic, and emergency SOS.
      The Remote app allows owners to pre-condition cabin temperature, lock/unlock doors and check fuel/charge status.
      Fleet management and corporate mobility solutions are also offered through InControl Fleet.`,
  },
  {
    id: 'MLA Platform',
    category: 'technology',
    description: 'Modular Longitudinal Architecture',
    details: `<b>MLA (Modular Longitudinal Architecture)</b> is JLR's new vehicle platform underpinning the fifth-generation Range Rover and Range Rover Sport.
      Designed for pure ICE, MHEV, PHEV and full Battery Electric Vehicle (BEV) powertrains from the outset.
      The aluminium-intensive structure reduces weight vs the previous platform and supports next-gen automated driving features.`,
  },
  {
    id: 'JEA Platform',
    category: 'technology',
    description: 'Jaguar Electric Architecture for BEV',
    details: `<b>JEA (Jaguar Electric Architecture)</b> is the dedicated all-electric platform for the new Jaguar brand, developed under Project Panthera.
      Targets a range of over 430 miles (WLTP) and supports 800V charging for ultra-fast top-ups.
      First vehicle to use JEA is the new all-electric Jaguar GT, expected from 2025.`,
  },
  {
    id: 'ClearSight',
    category: 'technology',
    description: 'Camera-based visibility systems',
    details: `<b>ClearSight</b> encompasses JLR's suite of camera-based technologies, including the Ground View camera, Rear View mirror camera and 360° surround view.
      Ground View projects a virtual view beneath the vehicle on the infotainment screen for obstacle awareness.
      Standard on Range Rover; available as an option on Defender and Range Rover Sport.`,
  },
  {
    id: 'Wade Sensing',
    category: 'technology',
    description: 'Water wading depth detection',
    details: `<b>Wade Sensing</b> uses ultrasonic sensors in the door mirrors to measure water depth in real time.
      Alerts the driver if depth exceeds the vehicle's wading limit (up to 900mm on Defender).
      Part of JLR's off-road technology suite alongside Terrain Response 2 and Hill Descent Control.`,
  },
  {
    id: 'Ingenium Engines',
    category: 'technology',
    description: 'JLR in-house engine family',
    details: `<b>Ingenium</b> is JLR's family of modular 4-cylinder petrol and diesel engines, designed entirely in-house.
      All-aluminium construction makes them approximately 80 kg lighter than previous cast-iron units.
      Manufactured at the Engine Manufacturing Centre (EMC) in Wolverhampton and at Shannon, Ireland.`,
  },

  // ── People ────────────────────────────────────────────────────────────────
  {
    id: 'PB Balaji',
    category: 'person',
    description: 'Group CEO, Jaguar Land Rover',
    details: `<b>PB Balaji</b> is Group CEO of Jaguar Land Rover, appointed in 2024.
      Previously CFO of Tata Motors, he brings deep financial and strategic expertise to JLR's transformation.
      He is steering the Reimagine strategy, overseeing JLR's pivot to an all-electric luxury brand and a return to sustained profitability.`,
  },
  {
    id: 'Gerry McGovern OBE',
    category: 'person',
    description: 'Chief Creative Officer',
    details: `<b>Gerry McGovern OBE</b> is JLR's Chief Creative Officer, responsible for the design of all Jaguar and Land Rover vehicles.
      He joined JLR in 1999 and has led the design of the Range Rover (L405/L460), Defender, and is now directing the reimagined Jaguar brand.
      Awarded an OBE for services to the British automotive industry in 2021.`,
  },
  {
    id: 'Nick Rogers',
    category: 'person',
    description: 'Chief Engineering Officer',
    details: `<b>Nick Rogers</b> is Chief Engineering Officer at JLR, overseeing all vehicle engineering and product development.
      He leads the technical strategy for electrification, ADAS and software-defined vehicles.
      Previously executive director of Product Engineering; a key figure in the MLA and JEA platform development.`,
  },
  {
    id: 'Barbara Bergmeier',
    category: 'person',
    description: 'Executive Director, Industrial Operations',
    details: `<b>Barbara Bergmeier</b> is Executive Director of Industrial Operations at JLR.
      She oversees global manufacturing across Solihull, Halewood, Castle Bromwich and international facilities.
      A champion of Industry 4.0 practices, she is leading JLR's transition to EV-compatible manufacturing lines.`,
  },
  {
    id: 'Prof. Sir Ralf Speth',
    category: 'person',
    description: 'Non-Executive Director; former CEO',
    details: `<b>Prof. Sir Ralf Speth</b> served as JLR's CEO from 2010 to 2020, transforming the company from a loss-making unit into a global luxury brand.
      Under his tenure, JLR launched the Range Rover Evoque, Jaguar F-PACE, and the aluminium-intensive architecture.
      He now serves as a Non-Executive Director and is on the board of Tata Sons.`,
  },
  {
    id: 'Rawdon Glover',
    category: 'person',
    description: 'Managing Director, Jaguar',
    details: `<b>Rawdon Glover</b> is Managing Director of the Jaguar brand within JLR.
      He leads the commercial and strategic direction of Jaguar's transition to an all-electric, ultra-luxury brand.
      Previously MD of JLR UK; instrumental in positioning the reimagined Jaguar for a new ultra-premium customer.`,
  },

  // ── Locations ─────────────────────────────────────────────────────────────
  {
    id: 'Gaydon',
    category: 'location',
    description: 'Global headquarters & engineering centre',
    details: `<b>Gaydon, Warwickshire</b> is the global headquarters of Jaguar Land Rover, home to the main engineering and design campus.
      The 1.3 million sq ft site houses the Design Studio, Advanced Research, Vehicle Dynamics and Corporate Functions.
      Over 12,000 engineers and designers work on-site, making it one of the UK's largest engineering campuses.`,
  },
  {
    id: 'Solihull',
    category: 'location',
    description: 'Primary Range Rover & Defender manufacturing plant',
    details: `<b>Solihull, West Midlands</b> is JLR's primary UK manufacturing site, producing Range Rover, Range Rover Sport, Range Rover Velar, Defender and Discovery.
      The plant has been producing Land Rovers since 1948 and employs over 10,000 people.
      Investment of over £1bn has been committed to prepare Solihull for EV production.`,
  },
  {
    id: 'Halewood',
    category: 'location',
    description: 'Range Rover Evoque & Discovery Sport plant',
    details: `<b>Halewood, Merseyside</b> manufactures the Range Rover Evoque and Discovery Sport.
      The site employs approximately 4,000 people and has a production capacity of around 100,000 vehicles per year.
      JLR is investing £250m in Halewood to produce the first all-electric Land Rover model from 2024.`,
  },
  {
    id: 'Castle Bromwich',
    category: 'location',
    description: 'Jaguar saloon & F-PACE plant (closing)',
    details: `<b>Castle Bromwich, Birmingham</b> has been a JLR manufacturing site since 2005, producing Jaguar XE, XF and F-PACE.
      Following the Reimagine strategy, Jaguar saloon production is winding down.
      The future of the site is under review, with JLR consulting unions and government on alternative uses.`,
  },
  {
    id: 'Whitley',
    category: 'location',
    description: 'Jaguar engineering & product development centre',
    details: `<b>Whitley, Coventry</b> is JLR's primary Jaguar engineering centre, focusing on powertrain, chassis and vehicle integration.
      The site is the home of Propulsion & E-Systems and houses advanced NVH and acoustic labs.
      Whitley works closely with Gaydon on cross-brand engineering programmes.`,
  },
  {
    id: 'Graz, Austria',
    category: 'location',
    description: 'Contract manufacturing partner (Magna Steyr)',
    details: `<b>Graz, Austria</b> is the location of Magna Steyr's contract manufacturing facility, which builds the Jaguar E-PACE and Jaguar I-PACE for JLR.
      Magna Steyr also assembles the INEOS Grenadier at the same site.
      JLR uses Graz for flexible overflow capacity when demand exceeds UK plant output.`,
  },
  {
    id: 'Shannon, Ireland',
    category: 'location',
    description: 'Ingenium engine manufacturing',
    details: `<b>Shannon, County Clare, Ireland</b> produces Ingenium engine components for JLR vehicles.
      The facility complements the main Engine Manufacturing Centre (EMC) in Wolverhampton.
      Shannon specialises in precision machining of aluminium engine blocks and cylinder heads.`,
  },

  // ── Projects / Initiatives ────────────────────────────────────────────────
  {
    id: 'Reimagine',
    category: 'project',
    description: 'JLR electrification & transformation strategy',
    details: `<b>Reimagine</b> is JLR's long-term strategic plan announced in February 2021.
      It commits JLR to becoming a fully electric company by 2025 for Jaguar and introducing electric variants of all Land Rover nameplates by 2030.
      The strategy also refocuses Jaguar as a pure ultra-luxury EV brand and positions Land Rover as a leading all-electric adventure brand.`,
  },
  {
    id: 'Modern Luxury',
    category: 'project',
    description: 'Land Rover brand positioning & design philosophy',
    details: `<b>Modern Luxury</b> is Land Rover's brand positioning framework, articulating the quality, design and customer experience ambition.
      It informs product design, retail environment, customer journeys and digital touchpoints.
      The fifth-generation Range Rover (L460) is seen as the definitive expression of Modern Luxury.`,
  },
  {
    id: 'Project Artemis',
    category: 'project',
    description: 'All-electric Range Rover development',
    details: `<b>Project Artemis</b> is JLR's fast-track programme to develop the first fully electric Range Rover.
      Led as a separate agile team within JLR, it uses the MLA platform in full BEV configuration.
      The electric Range Rover is expected to launch in 2024 and will be manufactured at Solihull.`,
  },
  {
    id: 'Project Panthera',
    category: 'project',
    description: 'All-electric Jaguar GT development',
    details: `<b>Project Panthera</b> is the programme to develop the new all-electric Jaguar GT on the JEA platform.
      A complete departure from the current Jaguar lineup, it targets an ultra-luxury segment above existing competitors.
      Expected to launch in 2025 at a price point upwards of £100,000, with a range exceeding 430 miles.`,
  },
  {
    id: 'Project Symphony',
    category: 'project',
    description: 'Software-defined vehicle platform',
    details: `<b>Project Symphony</b> is JLR's initiative to build a unified software platform across all future vehicles.
      It centralises previously distributed ECUs into zonal computing architecture, enabling faster OTA updates and new feature delivery.
      Partners include Nvidia (DRIVE platform) and Tata Consultancy Services for software engineering.`,
  },
  {
    id: '2039 Carbon Net Zero',
    category: 'project',
    description: 'Net zero carbon commitment',
    details: `<b>2039 Carbon Net Zero</b> is JLR's commitment to achieve net-zero carbon across its supply chain, operations and product lifecycle by 2039.
      It is governed by the Sustainability & ESG team and aligns with the Science Based Targets initiative (SBTi).
      Key milestones include 100% renewable electricity in UK plants by 2025 and sustainable aluminium sourcing.`,
  },
  {
    id: 'Destination Zero',
    category: 'project',
    description: 'Sustainability vision: zero emissions, accidents, congestion',
    details: `<b>Destination Zero</b> is JLR's overarching sustainability vision encompassing three pillars:
      (1) Zero emissions — full electrification of the fleet; (2) Zero accidents — deployment of advanced ADAS and autonomous features;
      (3) Zero congestion — smart mobility partnerships and connected vehicle services.`,
  },
];

// ── Adjacency list (undirected) ───────────────────────────────────────────────
// Each entry: [nodeId, [...connectedNodeIds]]
const rawLinks: [string, string[]][] = [
  ['Range Rover',        ['Solihull', 'Air Suspension', 'Terrain Response 2', 'MLA Platform', 'Gerry McGovern OBE', 'Design Studio', 'MHEV', 'PHEV', 'InControl', 'ClearSight', 'Pivi Pro', 'Modern Luxury', 'Project Artemis']],
  ['Range Rover Sport',  ['Solihull', 'Air Suspension', 'Terrain Response 2', 'MLA Platform', 'MHEV', 'PHEV', 'Pivi Pro', 'Gerry McGovern OBE', 'Modern Luxury']],
  ['Range Rover Velar',  ['Solihull', 'Air Suspension', 'MHEV', 'PHEV', 'Pivi Pro', 'Gerry McGovern OBE', 'Design Studio', 'ClearSight']],
  ['Range Rover Evoque', ['Halewood', 'MHEV', 'Pivi Pro', 'ClearSight', 'Gerry McGovern OBE', 'Design Studio', 'InControl']],
  ['Defender',           ['Solihull', 'Terrain Response 2', 'Wade Sensing', 'Air Suspension', 'Pivi Pro', 'MHEV', 'InControl', 'Gerry McGovern OBE', 'ClearSight']],
  ['Discovery',          ['Solihull', 'Terrain Response 2', 'Air Suspension', 'MHEV', 'Pivi Pro', 'InControl']],
  ['Discovery Sport',    ['Halewood', 'MHEV', 'Pivi Pro', 'Terrain Response 2', 'InControl']],
  ['Jaguar XE',          ['Castle Bromwich', 'MHEV', 'Pivi Pro', 'Vehicle Dynamics & Chassis', 'Ingenium Engines', 'InControl']],
  ['Jaguar XF',          ['Castle Bromwich', 'MHEV', 'Pivi Pro', 'Ingenium Engines', 'InControl']],
  ['Jaguar F-PACE',      ['Castle Bromwich', 'MHEV', 'PHEV', 'Pivi Pro', 'InControl', 'ClearSight', 'Gerry McGovern OBE']],
  ['Jaguar E-PACE',      ['Halewood', 'Graz, Austria', 'MHEV', 'Pivi Pro', 'InControl']],
  ['Jaguar F-TYPE',      ['Castle Bromwich', 'Gerry McGovern OBE', 'Vehicle Dynamics & Chassis', 'Reimagine']],

  ['PB Balaji',         ['Gaydon', 'Reimagine', 'Advanced Research & Engineering', 'Project Symphony']],
  ['Gerry McGovern OBE',     ['Gaydon', 'Design Studio', 'Modern Luxury', 'Reimagine', 'Range Rover', 'Defender', 'Jaguar F-TYPE']],
  ['Nick Rogers',            ['Gaydon', 'Advanced Research & Engineering', 'MLA Platform', 'JEA Platform', 'Project Artemis', 'Project Panthera', 'Project Symphony']],
  ['Barbara Bergmeier',      ['Solihull', 'Halewood', 'Castle Bromwich', 'Manufacturing Operations', 'Reimagine']],
  ['Prof. Sir Ralf Speth',   ['Gaydon', 'Reimagine', 'Design Studio', 'Ingenium Engines']],
  ['Rawdon Glover',          ['Jaguar F-PACE', 'Project Panthera', 'Reimagine', 'Gaydon', 'Design Studio']],

  ['Gaydon',         ['Advanced Research & Engineering', 'Design Studio', 'Nick Rogers', 'PB Balaji', 'Gerry McGovern OBE', 'Vehicle Dynamics & Chassis', 'Propulsion & E-Systems']],
  ['Solihull',       ['Range Rover', 'Defender', 'Discovery', 'Range Rover Sport', 'Range Rover Velar', 'Manufacturing Operations', 'Barbara Bergmeier']],
  ['Halewood',       ['Range Rover Evoque', 'Discovery Sport', 'Jaguar E-PACE', 'Manufacturing Operations', 'Barbara Bergmeier', 'Project Artemis']],
  ['Castle Bromwich',['Jaguar XE', 'Jaguar XF', 'Jaguar F-PACE', 'Jaguar F-TYPE', 'Manufacturing Operations', 'Barbara Bergmeier', 'Reimagine']],
  ['Whitley',        ['Propulsion & E-Systems', 'Vehicle Dynamics & Chassis', 'Ingenium Engines', 'MHEV', 'PHEV']],
  ['Graz, Austria',  ['Jaguar E-PACE', 'Manufacturing Operations']],
  ['Shannon, Ireland',['Ingenium Engines', 'Propulsion & E-Systems', 'Manufacturing Operations']],

  ['Reimagine',        ['JEA Platform', 'MLA Platform', 'Project Artemis', 'Project Panthera', 'Project Symphony', '2039 Carbon Net Zero', 'Destination Zero', 'Jaguar F-TYPE', 'Modern Luxury']],
  ['Modern Luxury',    ['Range Rover', 'Design Studio', 'Gerry McGovern OBE', 'Reimagine']],
  ['Project Artemis',  ['MLA Platform', 'Solihull', 'Nick Rogers', 'Halewood', 'Reimagine']],
  ['Project Panthera', ['JEA Platform', 'Rawdon Glover', 'Nick Rogers', 'Reimagine', 'Design Studio']],
  ['Project Symphony', ['Software & Connected Services', 'Pivi Pro', 'InControl', 'Nick Rogers', 'Reimagine']],
  ['2039 Carbon Net Zero', ['Sustainability & ESG', 'Destination Zero', 'Reimagine', 'Solihull', 'Halewood']],
  ['Destination Zero', ['Sustainability & ESG', '2039 Carbon Net Zero', 'Reimagine']],

  ['MLA Platform',     ['Range Rover', 'Range Rover Sport', 'Project Artemis', 'Nick Rogers', 'Advanced Research & Engineering']],
  ['JEA Platform',     ['Project Panthera', 'Reimagine', 'Nick Rogers', 'Advanced Research & Engineering']],
  ['MHEV',             ['Ingenium Engines', 'Propulsion & E-Systems', 'Whitley']],
  ['PHEV',             ['Ingenium Engines', 'Propulsion & E-Systems', 'Whitley']],
  ['Pivi Pro',         ['Software & Connected Services', 'InControl']],
  ['InControl',        ['Software & Connected Services', 'Pivi Pro']],
  ['Terrain Response 2',['Vehicle Dynamics & Chassis', 'Air Suspension']],
  ['Air Suspension',   ['Vehicle Dynamics & Chassis', 'Terrain Response 2']],
  ['Wade Sensing',     ['Advanced Research & Engineering', 'Defender']],
  ['ClearSight',       ['Advanced Research & Engineering', 'Software & Connected Services']],
  ['Ingenium Engines', ['Propulsion & E-Systems', 'Shannon, Ireland', 'Whitley', 'MHEV', 'PHEV']],
];

// Build bidirectional adjacency map
export const adjacencyMap = new Map<string, Set<string>>();

for (const node of jlrNodes) {
  adjacencyMap.set(node.id, new Set());
}

for (const [src, targets] of rawLinks) {
  for (const tgt of targets) {
    adjacencyMap.get(src)?.add(tgt);
    adjacencyMap.get(tgt)?.add(src);
  }
}

export const nodeMap = new Map<string, JLRNode>(jlrNodes.map(n => [n.id, n]));
