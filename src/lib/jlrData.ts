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
    description: 'Fifth-generation flagship luxury SUV',
    details: `<b>Range Rover (L460)</b> is the fifth generation of Land Rover's flagship full-size luxury SUV, revealed in London on 26 October 2021.
      Designed by Chief Creative Officer Gerry McGovern, it is built at the Solihull plant in West Midlands.
      Available in standard and extended wheelbase, with petrol mild hybrid (MHEV), petrol plug-in hybrid (PHEV) and diesel mild hybrid powertrains on the MLA platform.
      A fully electric variant is in development under Project Artemis.`,
  },
  {
    id: 'Range Rover Sport',
    category: 'vehicle',
    description: 'Third-generation mid-size performance luxury SUV',
    details: `<b>Range Rover Sport (L461)</b> is the third generation of Land Rover's performance-focused luxury SUV, launched in 2022.
      Built at the Solihull plant on the MLA Flex platform, it sits below the full-size Range Rover in the lineup.
      Powertrain options include petrol MHEV, PHEV and a twin-turbocharged V8. The L461 marked the first Range Rover Sport to offer a PHEV with over 70 miles of electric range.`,
  },
  {
    id: 'Range Rover Velar',
    category: 'vehicle',
    description: 'Design-led mid-size luxury crossover SUV',
    details: `<b>Range Rover Velar</b> is the fourth model in the Range Rover line, unveiled on 1 March 2017 in London.
      It was awarded "World's Most Beautiful Car" at the 2018 World Car Awards.
      Built at the Solihull plant, the Velar is celebrated for its flush retractable door handles, ultra-clean exterior and twin touchscreen cabin.
      The Velar name was previously used for a series of pre-production first-generation Range Rovers in 1969.`,
  },
  {
    id: 'Range Rover Evoque',
    category: 'vehicle',
    description: 'Subcompact luxury crossover SUV',
    details: `<b>Range Rover Evoque (L551)</b> is a subcompact luxury crossover SUV produced under the Land Rover marque.
      The second generation entered production in 2018 and is manufactured at the Halewood plant in Merseyside.
      It was JLR's best-selling model globally for several years and was the first production vehicle to offer a rear-facing camera mirror as standard.
      Shares its PTA platform with the Discovery Sport and Jaguar E-Pace.`,
  },
  {
    id: 'Defender',
    category: 'vehicle',
    description: 'Reimagined generation-defining off-road SUV',
    details: `<b>Land Rover Defender (L663)</b> was launched on 10 September 2019 at the Frankfurt Motor Show — the first all-new Defender, breaking engineering lineage with its predecessor.
      Available as Defender 90 (3-door), Defender 110 (5-door) and Defender 130 (extended), it is built at the Solihull plant.
      The unibody L663 targets a more upmarket segment than its predecessor while retaining class-leading off-road capability.
      Features include Terrain Response 2, Wade Sensing and an 11.4-inch curved touchscreen with Pivi Pro.`,
  },
  {
    id: 'Discovery',
    category: 'vehicle',
    description: 'Fifth-generation 7-seat family adventure SUV',
    details: `<b>Land Rover Discovery (L462)</b> is in its fifth generation since 2017, offering five or seven-seat configurations.
      Described as one of the first vehicles to market a true off-road capable family car, the Discovery debuted in 1989.
      The fifth generation is built at the Solihull plant and uses aluminium-intensive construction for reduced weight.
      Features include Terrain Response 2, configurable seven-seat interior and Land Rover's full off-road technology suite.`,
  },
  {
    id: 'Discovery Sport',
    category: 'vehicle',
    description: "JLR's best-selling compact luxury crossover",
    details: `<b>Land Rover Discovery Sport (L550)</b> is a compact luxury crossover SUV produced since 2014, replacing the Freelander.
      It has been JLR's best-selling model since 2017 and is available in a seven-seat layout.
      Manufactured at the Halewood plant, it shares its PTA platform with the Range Rover Evoque.
      The facelift model introduced in 2020 features a 48V MHEV system and Pivi Pro infotainment.`,
  },
  {
    id: 'Jaguar XE',
    category: 'vehicle',
    description: 'Aluminium-intensive compact executive saloon',
    details: `<b>Jaguar XE (X760)</b> is a compact executive saloon sold from April 2015 to mid-2024.
      Designed by Ian Callum and launched at the October 2014 Paris Motor Show, it features a bonded-and-riveted aluminium monocoque structure — the first car in its class to do so.
      Assembled at the Castle Bromwich plant in Birmingham, the XE competes with the BMW 3 Series and Mercedes-Benz C-Class.
      Available with rear-wheel drive and all-wheel drive, featuring Jaguar's Ingenium petrol and diesel engines.`,
  },
  {
    id: 'Jaguar XF',
    category: 'vehicle',
    description: 'Executive luxury sports saloon and estate',
    details: `<b>Jaguar XF (X260)</b> is an executive luxury saloon manufactured and marketed under the Jaguar marque from 2015 to 2024.
      The second-generation XF debuted at the 2015 New York International Auto Show, noted for its all-aluminium bodywork.
      Available in saloon and Sportbrake estate body styles, it was assembled at the Castle Bromwich plant.
      A 2020 facelift significantly improved the XF's interior technology, including Pivi Pro infotainment.`,
  },
  {
    id: 'Jaguar F-PACE',
    category: 'vehicle',
    description: "Jaguar's first and best-selling performance SUV",
    details: `<b>Jaguar F-Pace (X761)</b> was formally announced at the 2015 North American International Auto Show — Jaguar's first ever SUV.
      The design was based on the Jaguar C-X17 concept revealed at the 2013 Frankfurt Motor Show.
      Built at the Castle Bromwich plant, the F-Pace became Jaguar's best-selling model and was named 2017 World Car of the Year.
      Available with MHEV petrol, PHEV and diesel powertrains alongside the Pivi Pro infotainment system.`,
  },
  {
    id: 'Jaguar E-PACE',
    category: 'vehicle',
    description: 'Subcompact luxury crossover SUV',
    details: `<b>Jaguar E-Pace (X540)</b> is a subcompact luxury crossover (C-segment) officially revealed on 13 July 2017 — Jaguar's second production SUV.
      It was built in Graz, Austria by Magna Steyr and from 2018 by Chery Jaguar Land Rover in Changshu, China.
      Designed under the direction of Jaguar chief designer Ian Callum, the E-Pace uses the JLR PTA platform.
      Available with 48V MHEV petrol and diesel powertrains and Pivi Pro infotainment.`,
  },
  {
    id: 'Jaguar F-TYPE',
    category: 'vehicle',
    description: 'Two-seat sports car, spiritual successor to the E-Type',
    details: `<b>Jaguar F-Type (X152)</b> was manufactured at Castle Bromwich from December 2012 to June 2024 — a two-door, two-seat sports car widely regarded as the spiritual successor to the iconic E-Type.
      Available as a convertible and fastback coupé, the F-Type was offered with four, six and eight-cylinder supercharged powertrains.
      It underwent a facelift for the 2021 model year. Production ended as Jaguar transitions to an all-electric brand under the Reimagine strategy.`,
  },

  // ── Departments ───────────────────────────────────────────────────────────
  {
    id: 'Advanced Research & Engineering',
    category: 'department',
    description: "JLR's innovation and future technology hub",
    details: `<b>Advanced Research & Engineering</b> is JLR's forward-looking technology division, based primarily at Gaydon.
      The team drives the development of next-generation propulsion systems, autonomous and connected driving, lightweight materials and advanced manufacturing.
      It leads strategic partnerships with academic institutions and technology companies, including Nvidia for the DRIVE compute platform and Tata Consultancy Services for software engineering.
      The division underpins JLR's Reimagine commitment to electrification across all brands.`,
  },
  {
    id: 'Design Studio',
    category: 'department',
    description: 'Global creative direction led by Prof. Gerry McGovern CCO',
    details: `<b>Design Studio</b> is led by Professor Gerry McGovern, Chief Creative Officer (CCO) of JLR.
      Studios operate at Gaydon, London and Los Angeles, developing the visual language — "Modern Luxury" — for both the Land Rover and reimagined Jaguar brands.
      The team created the fifth-generation Range Rover (L460), the Defender (L663), and is directing the design of the new all-electric Jaguar, described as "the most important Jaguar ever".
      As Gerry McGovern states: "Great design is the gateway to client desirability — it's about making that emotional connection."`,
  },
  {
    id: 'Propulsion & E-Systems',
    category: 'department',
    description: 'Powertrain and electrification engineering',
    details: `<b>Propulsion & E-Systems</b> engineers all of JLR's ICE, hybrid and electric powertrains.
      Responsible for the Ingenium engine family, the 48V MHEV belt-integrated starter generator and the PHEV battery systems used across the Range Rover and Jaguar range.
      Key facilities are at Whitley and Gaydon, working closely with the Engine Manufacturing Centre in Wolverhampton.
      The division is scaling rapidly to deliver pure-electric options for Range Rover, Defender, Discovery and the new all-electric Jaguar.`,
  },
  {
    id: 'Vehicle Dynamics & Chassis',
    category: 'department',
    description: 'Driving character, handling and ride engineering',
    details: `<b>Vehicle Dynamics & Chassis</b> is responsible for the ride, handling and driving character of every JLR vehicle.
      The team calibrates suspension geometry, steering, braking systems and the Terrain Response 2 off-road modes.
      Working closely with Propulsion & E-Systems, the team integrates torque vectoring and regenerative braking on all-wheel drive hybrid and electric models.
      Based at Gaydon, with testing facilities at the on-site proving ground.`,
  },
  {
    id: 'Software & Connected Services',
    category: 'department',
    description: 'In-vehicle software, OTA and digital connectivity',
    details: `<b>Software & Connected Services</b> develops Pivi Pro, InControl and JLR's over-the-air (OTA) update platform.
      Under Project Symphony, the team is transitioning from distributed ECU architecture to a zonal computing model, enabling rapid feature delivery and software-defined vehicle capabilities.
      JLR is scaling its in-house software engineering team significantly as it moves away from supplier-led software development.
      Partners include Nvidia (DRIVE platform) and Tata Consultancy Services.`,
  },
  {
    id: 'Manufacturing Operations',
    category: 'department',
    description: 'Global vehicle production and industrial transformation',
    details: `<b>Manufacturing Operations</b> oversees all JLR production facilities globally, covering Solihull, Halewood, Castle Bromwich and contract manufacturing in Graz.
      JLR employs approximately 40,000 people worldwide, with the largest manufacturing sites in the UK.
      The division is investing heavily in EV-ready production lines; Halewood is the first plant being converted to build JLR's first all-electric Land Rover model.
      JLR's Reimagine strategy sets out a clear industrial transformation roadmap with milestones in 2026, 2030 and 2039.`,
  },
  {
    id: 'Procurement & Supply Chain',
    category: 'department',
    description: 'Supplier management, battery sourcing and resilience',
    details: `<b>Procurement & Supply Chain</b> manages JLR's global supplier relationships across more than 7,000 partners.
      Post-pandemic, the team has focused on semiconductor supply resilience, a key challenge for the automotive industry.
      Battery cell and power electronics sourcing is critical as JLR electrifies its lineup; key partners include Samsung SDI and Wolfspeed.
      Sustainability is embedded in procurement through responsible sourcing commitments aligned with the 2039 Carbon Net Zero target.`,
  },
  {
    id: 'Sustainability & ESG',
    category: 'department',
    description: "Planet Regenerate: JLR's environmental and social strategy",
    details: `<b>Sustainability & ESG</b> drives JLR's "Planet Regenerate" strategy — one of the three pillars of Destination Zero.
      The team owns the 2039 Carbon Net Zero commitment and oversees all sustainability reporting and Science Based Targets (SBTi) alignment.
      Key workstreams include responsible materials sourcing, water stewardship, circular economy and community impact through the JLR Foundation.
      JLR aims to use 100% renewable electricity in its UK manufacturing plants by 2025 as an early milestone.`,
  },

  // ── Technologies ──────────────────────────────────────────────────────────
  {
    id: 'MHEV',
    category: 'technology',
    description: '48V belt-integrated mild hybrid system',
    details: `<b>MHEV (Mild Hybrid Electric Vehicle)</b> uses a 48-volt belt-integrated starter generator (BISG) to capture energy under braking and deceleration.
      The harvested energy supplements the Ingenium engine during acceleration, reducing fuel consumption and CO₂ by up to 16 g/km.
      Deployed across JLR's petrol and diesel Ingenium engine variants, MHEV is fitted to the Defender, Discovery, Range Rover, Range Rover Sport, Range Rover Evoque, Discovery Sport and Jaguar XE, XF and F-Pace.
      Developed in partnership with Propulsion & E-Systems at Whitley.`,
  },
  {
    id: 'PHEV',
    category: 'technology',
    description: 'Plug-in hybrid with up to 70 miles electric range',
    details: `<b>PHEV (Plug-in Hybrid)</b> combines an Ingenium petrol engine with a large lithium-ion battery pack, enabling EV-only driving before the combustion engine engages.
      The third-generation Range Rover Sport PHEV delivers over 70 miles of pure-electric range, while the Range Rover PHEV offers up to 66 miles (WLTP).
      Supports up to 22 kW AC charging and 50 kW DC fast charging on selected variants.
      PHEV acts as the stepping stone in JLR's electrification roadmap as the company transitions toward fully electric vehicles by 2026–2030.`,
  },
  {
    id: 'Pivi Pro',
    category: 'technology',
    description: 'Next-generation infotainment and connected car platform',
    details: `<b>Pivi Pro</b> is JLR's flagship infotainment system, featuring a curved OLED touchscreen, dual-core processor and sub-one-second response time.
      Supports over-the-air (OTA) software updates, ensuring the vehicle remains up-to-date throughout its life.
      Compatible with Apple CarPlay, Android Auto and Amazon Alexa. Introduced on the Range Rover Evoque in 2019 and now standard across the JLR range.
      Developed by the Software & Connected Services team as part of Project Symphony's software-defined vehicle vision.`,
  },
  {
    id: 'Terrain Response 2',
    category: 'technology',
    description: 'Automatic intelligent terrain management system',
    details: `<b>Terrain Response 2</b> automatically selects the optimal powertrain, suspension and traction settings for the detected terrain without driver input.
      Analyses inputs from accelerometers, wheel speed sensors, steering torque and throttle position to configure the drivetrain in real time.
      Modes include General Driving, Grass/Gravel/Snow, Mud and Ruts, Sand and Rock Crawl; the system activates the appropriate setup within milliseconds.
      Standard on Defender 110, Discovery and Range Rover; part of JLR's broader off-road technology suite alongside Wade Sensing and Air Suspension.`,
  },
  {
    id: 'Air Suspension',
    category: 'technology',
    description: 'Adaptive air spring suspension with continuous damping',
    details: `<b>Air Suspension with Adaptive Dynamics</b> continuously monitors vehicle dynamics at 500 times per second, adjusting damper stiffness in under 2 milliseconds.
      Provides class-leading ride comfort on road and substantial ground clearance off-road — up to 291 mm on the Range Rover.
      The system automatically raises or lowers ride height based on speed, terrain and driver preference.
      Works in conjunction with Terrain Response 2 to deliver optimal off-road articulation and on-road refinement.`,
  },
  {
    id: 'InControl',
    category: 'technology',
    description: 'Suite of remote and connected vehicle services',
    details: `<b>InControl</b> is JLR's connected services platform, allowing owners to remotely interact with their vehicle via a smartphone app.
      Services include remote locking and unlocking, cabin pre-conditioning, fuel and charge level monitoring, and vehicle location tracking.
      InControl also offers fleet and corporate mobility management through InControl Fleet.
      Emergency SOS and live traffic services are integrated into the system via embedded SIM connectivity.`,
  },
  {
    id: 'MLA Platform',
    category: 'technology',
    description: 'Modular Longitudinal Architecture: EV-ready from day one',
    details: `<b>MLA (Modular Longitudinal Architecture)</b> is JLR's newest and most advanced vehicle platform, underpinning the fifth-generation Range Rover (L460) and Range Rover Sport (L461).
      Designed from the outset to support pure ICE, MHEV, PHEV and full Battery Electric Vehicle (BEV) powertrains on the same architecture.
      The aluminium-intensive structure is stiffer and lighter than the previous platform, enabling better dynamics, refinement and crash performance.
      The electric Range Rover, being developed under Project Artemis, will use MLA in its full BEV configuration.`,
  },
  {
    id: 'JEA Platform',
    category: 'technology',
    description: 'Jaguar Electric Architecture: 800V ultra-fast charging BEV platform',
    details: `<b>JEA (Jaguar Electric Architecture)</b> is a purpose-built all-electric platform developed exclusively for the reimagined Jaguar brand.
      It supports an 800-volt electrical architecture enabling ultra-fast charging — targeting 100 miles of range in approximately 15 minutes.
      JEA is designed for a range exceeding 430 miles (WLTP) and supports rear, front and all-wheel drive configurations.
      The first vehicle to use JEA is the new all-electric Jaguar Grand Tourer (GT), developed under Project Panthera.`,
  },
  {
    id: 'ClearSight',
    category: 'technology',
    description: 'Camera-based visibility and ground view technology',
    details: `<b>ClearSight</b> is JLR's suite of camera-based visibility technologies, addressing blind spots and off-road obstacles.
      Ground View projects a virtual 180-degree view beneath the front of the vehicle onto the Pivi Pro screen, helping drivers navigate rocks, steps and tight obstacles.
      The ClearSight Rear-View Mirror replaces the conventional mirror with a live camera feed, giving an unobstructed view even with a full passenger and cargo load.
      ClearSight is standard on the Range Rover and available as an option on the Defender and Range Rover Sport.`,
  },
  {
    id: 'Wade Sensing',
    category: 'technology',
    description: 'Real-time water depth monitoring for water fording',
    details: `<b>Wade Sensing</b> uses ultrasonic sensors housed in the door mirrors to measure water depth in real time as the vehicle approaches a water crossing.
      The system alerts the driver if the water depth exceeds the vehicle's safe wading limit — up to 900 mm on the Defender.
      The feature is part of JLR's comprehensive off-road technology suite, working alongside Terrain Response 2, Air Suspension height adjustment and Hill Descent Control.
      Wade Sensing debuted on the Land Rover Discovery and is now a signature feature of the Defender.`,
  },
  {
    id: 'Ingenium Engines',
    category: 'technology',
    description: 'JLR in-house modular petrol and diesel engine family',
    details: `<b>Ingenium</b> is a family of modular engines designed and produced entirely by JLR, available in three-, four- and six-cylinder configurations.
      Built around individual 500 cc cylinders, Ingenium uses a modular architecture that supports longitudinal and transverse layouts for front, rear and all-wheel drive applications.
      All-aluminium construction makes Ingenium approximately 80 kg lighter than the cast-iron units they replaced. Since late 2025, Ingenium has fully replaced Ford-sourced engines.
      Manufactured at the Engine Manufacturing Centre (EMC) in Wolverhampton, which was opened by Queen Elizabeth II in 2014.`,
  },

  // ── People ────────────────────────────────────────────────────────────────
  {
    id: 'PB Balaji',
    category: 'person',
    description: 'Group Chief Executive Officer, JLR',
    details: `<b>PB Balaji</b> is Group Chief Executive Officer of Jaguar Land Rover, appointed in 2024.
      Previously serving as Chief Financial Officer of Tata Motors and Group CFO of JLR, Balaji brings deep financial and strategic transformation expertise.
      He is leading JLR's delivery of the Reimagine strategy, overseeing the company's pivot toward an all-electric luxury brand portfolio and a sustained return to profitability.
      Under his leadership, JLR reported record revenues and a return to investment-grade credit ratings.`,
  },
  {
    id: 'Gerry McGovern OBE',
    category: 'person',
    description: 'Chief Creative Officer and Head of Design, JLR',
    details: `<b>Professor Gerry McGovern OBE</b> is Chief Creative Officer (CCO) of JLR, responsible for the design of all Jaguar and Land Rover vehicles.
      He joined Land Rover in 1999 and has led the design of the Range Rover (L405 and L460), the Defender (L663), the Range Rover Velar and is directing the design of the reimagined Jaguar brand.
      Awarded an OBE for services to the British automotive industry in 2021 and holds a professorship in recognition of his design leadership.
      He unveiled the fifth-generation Range Rover at a live event in London on 26 October 2021.`,
  },
  {
    id: 'Nick Rogers',
    category: 'person',
    description: 'Chief Technology Officer, JLR',
    details: `<b>Nick Rogers</b> is Chief Technology Officer at JLR, leading the technical strategy across vehicle engineering, electrification and software-defined vehicles.
      A key architect of both the MLA platform (Range Rover, Range Rover Sport) and the JEA platform (new all-electric Jaguar), he oversees Project Artemis and Project Panthera.
      Previously Executive Director of Product Engineering, Rogers has been instrumental in JLR's transition from a traditional OEM to a software-led luxury company.
      He works closely with the Advanced Research & Engineering and Software & Connected Services teams.`,
  },
  {
    id: 'Barbara Bergmeier',
    category: 'person',
    description: 'Executive Director, Industrial Operations',
    details: `<b>Barbara Bergmeier</b> is Executive Director of Industrial Operations at JLR, overseeing global manufacturing across Solihull, Halewood, Castle Bromwich and international facilities.
      She is leading JLR's industrial transformation — converting manufacturing plants to produce electric vehicles at scale.
      Halewood is the first JLR plant being converted to build an all-electric Land Rover model, a key milestone under her tenure.
      A champion of Industry 4.0 practices, she is integrating advanced robotics, digital twins and sustainable manufacturing into JLR's operations.`,
  },
  {
    id: 'Prof. Sir Ralf Speth',
    category: 'person',
    description: 'Former CEO (2010–2020); Non-Executive Director',
    details: `<b>Sir Ralf Dieter Speth</b> (born 9 September 1955) served as JLR's Chief Executive Officer from 2010 to 2020, transforming the company from a loss-making unit into a global luxury automotive group.
      A German automotive executive with previous roles at BMW, Linde and Ford's Premier Automotive Group, he holds a doctorate in mechanical engineering from the University of Warwick.
      Under his leadership JLR launched the aluminium-intensive architecture, the Range Rover Evoque, Defender (L663) and Jaguar F-Pace. He is now a Non-Executive Director and a director of Tata Sons since 2016.
      Since 2022 he has also served as chairman of TVS Motor Company in India.`,
  },
  {
    id: 'Rawdon Glover',
    category: 'person',
    description: 'Managing Director, Jaguar Brand',
    details: `<b>Rawdon Glover</b> is Managing Director of the Jaguar brand within JLR, leading the brand's commercial transition to an all-electric, ultra-luxury positioning.
      Previously Managing Director of JLR UK, he has been a central figure in shaping Jaguar's repositioning above existing luxury competitors at a price point upwards of £100,000.
      He works closely with the Design Studio and Product teams on Project Panthera — the new all-electric Jaguar Grand Tourer.
      Glover is responsible for Jaguar's retail transformation, digital sales experience and client relationship strategy.`,
  },

  // ── Locations ─────────────────────────────────────────────────────────────
  {
    id: 'Gaydon',
    category: 'location',
    description: 'Principal engineering centre and Land Rover HQ',
    details: `<b>Jaguar Land Rover Gaydon Centre</b> is situated north-west of the village of Gaydon, Warwickshire, and is one of JLR's principal engineering centres — and the headquarters of Land Rover.
      The site houses a design, research and development centre along with extensive test track facilities. It occupies the land of the former RAF Gaydon V-bomber base.
      The British Motor Museum is also located on the same site. Over 12,000 engineers and designers work at Gaydon, making it one of the UK's largest engineering campuses.
      Aston Martin's engineering facility is adjacent to the JLR Gaydon Centre.`,
  },
  {
    id: 'Solihull',
    category: 'location',
    description: "JLR's largest factory: Range Rover, Defender, Discovery",
    details: `<b>Solihull plant</b> is JLR's largest manufacturing facility, located on Lode Lane in Solihull, West Midlands — approximately 7 miles south-east of Birmingham.
      The 300-acre (120 ha) site employs over 10,000 people and produces the Range Rover, Range Rover Sport, Range Rover Velar, Defender and Discovery.
      Originally built by the UK Government in the 1930s for aircraft engine production during World War II, it has been a Land Rover factory since 1948.
      JLR has committed significant capital investment to prepare Solihull for electric vehicle production.`,
  },
  {
    id: 'Halewood',
    category: 'location',
    description: 'Merseyside plant: Evoque, Discovery Sport — first EV plant',
    details: `<b>Jaguar Land Rover Halewood</b> is a factory in Halewood, Merseyside, and forms the major part of a factory complex shared with Ford of Britain.
      Originally opened by Ford on 2 October 1963 to build the Ford Anglia, it was acquired by JLR and now manufactures the Range Rover Evoque and Discovery Sport.
      Halewood is the first JLR plant being converted to produce an all-electric Land Rover model, supported by significant capital investment.
      The site employs approximately 4,000 people and has a capacity of around 100,000 vehicles per year.`,
  },
  {
    id: 'Castle Bromwich',
    category: 'location',
    description: 'Jaguar saloon and sports car plant — winding down',
    details: `<b>Castle Bromwich</b> in Birmingham has been a JLR manufacturing site producing Jaguar XE, XF, F-Pace and F-Type.
      The F-Type (X152) was manufactured here from December 2012 until June 2024, when production ended as part of Jaguar's transition to an all-electric brand.
      Under the Reimagine strategy, Jaguar saloon production is winding down at Castle Bromwich.
      The future of the site is under review, with JLR in consultation with trade unions and government on alternative industrial uses.`,
  },
  {
    id: 'Whitley',
    category: 'location',
    description: 'JLR group headquarters and Jaguar engineering centre',
    details: `<b>Whitley plant</b> in Coventry is the headquarters of Jaguar Land Rover and a principal engineering centre for the group.
      The fully integrated design, research and development facility is used for the design and development of both Jaguar and Land Rover vehicles.
      The site was originally an aerodrome built during the First World War and was later used by Sir W.G. Armstrong Whitworth Aircraft Co.
      As JLR's registered head office, Whitley houses corporate functions, Propulsion & E-Systems and key programme management teams.`,
  },
  {
    id: 'Graz, Austria',
    category: 'location',
    description: 'Magna Steyr contract manufacturing facility',
    details: `<b>Graz, Austria</b> is the location of Magna Steyr's contract manufacturing facility, which has built the Jaguar E-Pace and Jaguar I-Pace for JLR.
      Magna Steyr also assembles the INEOS Grenadier at the same Graz facility, making it one of the most diverse contract manufacturing plants in Europe.
      JLR uses Graz for additional capacity when demand exceeds output from its UK plants.
      The Jaguar I-Pace, JLR's first battery electric vehicle, was produced exclusively at Graz.`,
  },
  {
    id: 'Shannon, Ireland',
    category: 'location',
    description: 'Ingenium engine component manufacturing',
    details: `<b>Shannon, County Clare, Ireland</b> produces Ingenium engine components, complementing the main Engine Manufacturing Centre (EMC) in Wolverhampton.
      The Shannon facility specialises in precision machining of aluminium engine blocks and cylinder heads for the Ingenium petrol and diesel engine families.
      The EMC in Wolverhampton was opened by Queen Elizabeth II in 2014 and has since been expanded; by 2025 it is being converted to produce electric powertrains as JLR phases out combustion engine production.
      Shannon and the EMC together form JLR's powertrain manufacturing network.`,
  },

  // ── Projects / Initiatives ────────────────────────────────────────────────
  {
    id: 'Reimagine',
    category: 'project',
    description: 'JLR transformation strategy: electrification by 2039',
    details: `<b>Reimagine</b> is JLR's long-term strategic transformation plan, setting out a clear vision to become a carbon net zero business by 2039.
      Announced in 2021, it commits Jaguar to becoming an all-electric brand from 2025 and all Land Rover nameplates to offer pure-electric variants by 2030.
      The strategy is built on four pillars: Modern Luxury (design), Electrification, Sustainability and Enterprise (profitable growth).
      It is designed to create a new benchmark in environmental, societal and community impact for a luxury business.`,
  },
  {
    id: 'Modern Luxury',
    category: 'project',
    description: "Land Rover's modernist design philosophy and brand positioning",
    details: `<b>Modern Luxury</b> is Land Rover's brand positioning framework and the first pillar of the Reimagine strategy.
      It articulates JLR's modernist design philosophy — building desirability and emotional engagement by creating "the most desirable brands for the most discerning clients".
      Led by Chief Creative Officer Professor Gerry McGovern, Modern Luxury informs product design, retail environments, client journeys and digital touchpoints.
      The fifth-generation Range Rover (L460) is regarded as the definitive expression of the Modern Luxury philosophy.`,
  },
  {
    id: 'Project Artemis',
    category: 'project',
    description: 'Fast-track programme to develop the first all-electric Range Rover',
    details: `<b>Project Artemis</b> is JLR's agile, fast-track programme to develop the first fully electric Range Rover on the MLA platform in its pure BEV configuration.
      Operating as a separate team within JLR, Artemis uses agile development methods to compress typical automotive development timescales.
      The electric Range Rover is intended to be manufactured at the Solihull plant, preserving the vehicle's British manufacturing heritage.
      Chief Technology Officer Nick Rogers oversees the programme alongside the wider MLA platform team.`,
  },
  {
    id: 'Project Panthera',
    category: 'project',
    description: 'All-electric Jaguar Grand Tourer on the JEA platform',
    details: `<b>Project Panthera</b> is the programme to develop the new all-electric Jaguar Grand Tourer (GT) on the JEA (Jaguar Electric Architecture) platform.
      A complete departure from the existing Jaguar lineup, it targets an ultra-luxury segment above current competitors with a price point upwards of £100,000.
      The JEA platform enables 800V ultra-fast charging and a range exceeding 430 miles (WLTP).
      Led by Managing Director Rawdon Glover and Chief Technology Officer Nick Rogers, with design direction from the Design Studio under Gerry McGovern.`,
  },
  {
    id: 'Project Symphony',
    category: 'project',
    description: 'Software-defined vehicle platform and zonal computing architecture',
    details: `<b>Project Symphony</b> is JLR's initiative to unify its vehicle software architecture across all future models.
      It replaces distributed, supplier-provided ECUs with a centralised zonal computing model, enabling faster over-the-air (OTA) updates and new feature delivery throughout a vehicle's life.
      Partners include Nvidia (DRIVE compute platform) and Tata Consultancy Services for software engineering at scale.
      Symphony is the technical foundation of Pivi Pro and InControl, and is central to JLR's ambition to become a software-led luxury company.`,
  },
  {
    id: '2039 Carbon Net Zero',
    category: 'project',
    description: 'Commitment to net-zero carbon across the entire value chain by 2039',
    details: `<b>2039 Carbon Net Zero</b> is JLR's commitment to achieve net-zero carbon across its supply chain, operations and product lifecycle by 2039 — 11 years ahead of the UK automotive industry average.
      Aligned with the Science Based Targets initiative (SBTi) and governed by the Sustainability & ESG team.
      Key milestones include 100% renewable electricity in UK manufacturing plants by 2025, responsible aluminium sourcing and zero waste to landfill from all plants.
      The target encompasses Scopes 1, 2 and 3 emissions — including supplier-sourced materials and end-of-life vehicle recycling.`,
  },
  {
    id: 'Destination Zero',
    category: 'project',
    description: 'Overarching vision: zero emissions, zero accidents, zero congestion',
    details: `<b>Destination Zero</b> is JLR's overarching sustainability and societal vision, built on three pillars:
      (1) <b>Zero Emissions</b> — full electrification of the fleet by 2030 for Land Rover and 2025 for Jaguar, with carbon net zero by 2039.
      (2) <b>Zero Accidents</b> — deployment of advanced ADAS features and ultimately autonomous driving capability, reducing road casualties to zero.
      (3) <b>Zero Congestion</b> — smart mobility partnerships, connected vehicle services and urban transport solutions.
      Destination Zero guides JLR's product strategy, sustainability investments and community engagement programmes.`,
  },
  {
    id: 'Governance',
    category: 'department',
    description: 'Board oversight, accountability and corporate decision-making',
    details: `<b>Governance</b> at JLR is structured around five core principles: Leadership, Effectiveness, Accountability, Stakeholder Relationships and Principles.
      The Board and Executive Committee rigorously challenge strategy, performance and responsibility to ensure the highest quality of decision-making.
      JLR continuously evaluates director skills, independence and experience to adapt to its evolving global business needs.
      All policies, procedures, statements and reports are publicly available via the JLR Download Centre, reflecting JLR's commitment to transparency.`,
  },
  {
    id: 'Enterprise',
    category: 'project',
    description: 'Reimagine pillar: responsible global supply chain and economic impact',
    details: `<b>Enterprise</b> is the fourth pillar of JLR's Reimagine strategy, focused on defining JLR's identity as a responsible global force in automotive technology and design.
      Committed to carbon net zero by 2039, Enterprise encompasses supply chain resilience — building ethical, cutting-edge solutions across JLR's 7,000+ supplier relationships.
      JLR directly employs 32,800 colleagues across 17 UK sites and contributes significantly to UK GDP, as documented in the UK Economic Impact Report 2024.
      Sustainability is embedded in enterprise-wide risk management, with transparency and responsible sourcing at its core.`,
  },
  {
    id: 'Investor Relations',
    category: 'department',
    description: 'Financial performance reporting and shareholder engagement',
    details: `<b>Investor Relations</b> communicates JLR's financial performance to bondholders, creditors and the investment community.
      In Q4 FY25/26, JLR reported revenue of £6.9bn, recovering strongly quarter-on-quarter after production stoppages due to a cyber incident and the impact of US trade tariffs on UK and EU exports.
      Full-year FY26 revenue was £22.9bn. The full year was significantly impacted by US tariffs, China market challenges and the planned wind-down of outgoing Jaguar models ahead of the new Jaguar launch.
      JLR holds regular Investor Days and publishes quarterly results, annual reports and governance documents via its Results Centre.`,
  },
  {
    id: 'Annual Report 2026',
    category: 'project',
    description: "JLR's FY25/26 annual report covering strategy, performance and outlook",
    details: `<b>Annual Report 2026</b> covers JLR's financial year 2025/26 — described as "perhaps more challenging than any of us could have expected."
      The year was marked by incremental US trade tariffs affecting UK and EU exports, a cyber incident that required pausing production, and the planned wind-down of outgoing Jaguar models ahead of the new all-electric Jaguar launch.
      Despite these headwinds, profit before tax for Q4 was £458m as production recovered strongly. PBT for the full year was £14m.
      The report documents JLR's ongoing Reimagine transformation, electrification progress and sustainability commitments, and is available as an interactive and downloadable version.`,
  },
  {
    id: 'JLR Culture',
    category: 'project',
    description: '"Live the Exceptional with Soul" — JLR\'s shared purpose and values',
    details: `<b>JLR Culture</b> is defined by the company's unique purpose: <b>"Live the Exceptional with Soul"</b> — co-created by over 1,000 voices from across the business.
      This shared purpose unifies JLR's 40,000 employees worldwide, creating an environment where everyone can thrive and contribute to era-defining vehicles.
      The culture emphasises exceptional minds, curiosity, creativity and a passion for reimagining extraordinary experiences for clients.
      JLR invests in talent development, offering career pathways from graduate programmes to senior leadership, with a commitment to an inclusive, values-led workplace.`,
  },
  {
    id: 'People Behind Electrification',
    category: 'project',
    description: "Campaign showcasing JLR's real engineers and creators driving EV transition",
    details: `<b>People Behind Electrification</b> (also "We're Electrifying") is JLR's campaign series that profiles the real engineers, designers and programme managers driving the company's electric future.
      Featured roles include Lead BEV Test Engineer, Charging Attributes Chapter Lead, Jaguar Body-in-White Launch Manager, Lead Full-Stack Software Developer and Manufacturing Engineering Manager.
      The campaign reflects JLR's Reimagine commitment to electrification across Range Rover, Defender, Discovery and the new all-electric Jaguar, and showcases careers at the cutting edge of EV technology.
      Stories are published on jlr.com and linked to JLR's careers site for potential candidates.`,
  },
  {
    id: 'DE&I',
    category: 'project',
    description: 'Diversity, Equity & Inclusion across people, policies and products',
    details: `<b>DE&I (Diversity, Equity & Inclusion)</b> at JLR is built around the belief that diversity strengthens the business and the experiences it creates.
      JLR's DE&I framework spans three dimensions: <b>People</b> (creating an environment where everyone feels valued and able to thrive), <b>Policies</b> (embedding fairness and equity in all processes) and <b>Products</b> (ensuring vehicles and services are accessible and inclusive).
      The common language — "created for us by us" — reflects the unity behind JLR's mission to promote diversity across team members, suppliers, customers and communities.
      DE&I progress is reported through JLR's annual sustainability disclosures and governed as part of the Sustainability & ESG function.`,
  },
  {
    id: 'JLR Foundation',
    category: 'project',
    description: 'Charitable foundation transforming youth futures through education',
    details: `<b>JLR Foundation</b> is JLR's strategic philanthropic arm, with a vision that "all children and young people can reach their full potential."
      It takes a long-term approach to philanthropy, providing grants to non-profit organisations that help young people thrive in school, access opportunities outside school, and make successful transitions into employment.
      The Foundation has an equity focus — specifically supporting children and young people who experience disadvantage or deprivation.
      Partners include Right to Succeed, Onside, Get Further and DFN Project Search, working across communities in and around JLR's UK manufacturing footprint.`,
  },
];

// ── Adjacency list (undirected) ───────────────────────────────────────────────
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

  ['PB Balaji',              ['Gaydon', 'Reimagine', 'Advanced Research & Engineering', 'Project Symphony']],
  ['Gerry McGovern OBE',     ['Gaydon', 'Design Studio', 'Modern Luxury', 'Reimagine', 'Range Rover', 'Defender', 'Jaguar F-TYPE']],
  ['Nick Rogers',            ['Gaydon', 'Advanced Research & Engineering', 'MLA Platform', 'JEA Platform', 'Project Artemis', 'Project Panthera', 'Project Symphony']],
  ['Barbara Bergmeier',      ['Solihull', 'Halewood', 'Castle Bromwich', 'Manufacturing Operations', 'Reimagine']],
  ['Prof. Sir Ralf Speth',   ['Gaydon', 'Reimagine', 'Design Studio', 'Ingenium Engines']],
  ['Rawdon Glover',          ['Jaguar F-PACE', 'Project Panthera', 'Reimagine', 'Gaydon', 'Design Studio']],

  ['Gaydon',          ['Advanced Research & Engineering', 'Design Studio', 'Nick Rogers', 'PB Balaji', 'Gerry McGovern OBE', 'Vehicle Dynamics & Chassis', 'Propulsion & E-Systems']],
  ['Solihull',        ['Range Rover', 'Defender', 'Discovery', 'Range Rover Sport', 'Range Rover Velar', 'Manufacturing Operations', 'Barbara Bergmeier']],
  ['Halewood',        ['Range Rover Evoque', 'Discovery Sport', 'Jaguar E-PACE', 'Manufacturing Operations', 'Barbara Bergmeier', 'Project Artemis']],
  ['Castle Bromwich', ['Jaguar XE', 'Jaguar XF', 'Jaguar F-PACE', 'Jaguar F-TYPE', 'Manufacturing Operations', 'Barbara Bergmeier', 'Reimagine']],
  ['Whitley',         ['Propulsion & E-Systems', 'Vehicle Dynamics & Chassis', 'Ingenium Engines', 'MHEV', 'PHEV']],
  ['Graz, Austria',   ['Jaguar E-PACE', 'Manufacturing Operations']],
  ['Shannon, Ireland',['Ingenium Engines', 'Propulsion & E-Systems', 'Manufacturing Operations']],

  ['Reimagine',         ['JEA Platform', 'MLA Platform', 'Project Artemis', 'Project Panthera', 'Project Symphony', '2039 Carbon Net Zero', 'Destination Zero', 'Jaguar F-TYPE', 'Modern Luxury']],
  ['Modern Luxury',     ['Range Rover', 'Design Studio', 'Gerry McGovern OBE', 'Reimagine']],
  ['Project Artemis',   ['MLA Platform', 'Solihull', 'Nick Rogers', 'Halewood', 'Reimagine']],
  ['Project Panthera',  ['JEA Platform', 'Rawdon Glover', 'Nick Rogers', 'Reimagine', 'Design Studio']],
  ['Project Symphony',  ['Software & Connected Services', 'Pivi Pro', 'InControl', 'Nick Rogers', 'Reimagine']],
  ['2039 Carbon Net Zero', ['Sustainability & ESG', 'Destination Zero', 'Reimagine', 'Solihull', 'Halewood']],
  ['Destination Zero',  ['Sustainability & ESG', '2039 Carbon Net Zero', 'Reimagine']],

  ['MLA Platform',      ['Range Rover', 'Range Rover Sport', 'Project Artemis', 'Nick Rogers', 'Advanced Research & Engineering']],
  ['JEA Platform',      ['Project Panthera', 'Reimagine', 'Nick Rogers', 'Advanced Research & Engineering']],
  ['MHEV',              ['Ingenium Engines', 'Propulsion & E-Systems', 'Whitley']],
  ['PHEV',              ['Ingenium Engines', 'Propulsion & E-Systems', 'Whitley']],
  ['Pivi Pro',          ['Software & Connected Services', 'InControl']],
  ['InControl',         ['Software & Connected Services', 'Pivi Pro']],
  ['Terrain Response 2',['Vehicle Dynamics & Chassis', 'Air Suspension']],
  ['Air Suspension',    ['Vehicle Dynamics & Chassis', 'Terrain Response 2']],
  ['Wade Sensing',      ['Advanced Research & Engineering', 'Defender']],
  ['ClearSight',        ['Advanced Research & Engineering', 'Software & Connected Services']],
  ['Ingenium Engines',  ['Propulsion & E-Systems', 'Shannon, Ireland', 'Whitley', 'MHEV', 'PHEV']],

  ['Governance',               ['PB Balaji', 'Investor Relations', 'Reimagine', 'Annual Report 2026']],
  ['Enterprise',               ['Reimagine', 'Procurement & Supply Chain', 'Sustainability & ESG', '2039 Carbon Net Zero']],
  ['Investor Relations',       ['PB Balaji', 'Governance', 'Annual Report 2026', 'Reimagine']],
  ['Annual Report 2026',       ['Investor Relations', 'Governance', 'Reimagine', 'PB Balaji']],
  ['JLR Culture',              ['PB Balaji', 'DE&I', 'People Behind Electrification', 'Sustainability & ESG']],
  ['People Behind Electrification', ['Reimagine', 'Halewood', 'Solihull', 'JLR Culture', 'MHEV', 'PHEV']],
  ['DE&I',                     ['JLR Culture', 'Sustainability & ESG', 'JLR Foundation', 'People Behind Electrification']],
  ['JLR Foundation',           ['Sustainability & ESG', 'DE&I', 'Enterprise']],
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
