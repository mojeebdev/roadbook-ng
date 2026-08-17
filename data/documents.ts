export type Source = {
  label: string;
  url: string;
};

export type DocumentGuide = {
  slug: string;
  title: string;
  short: string;
  authority: string;
  status: "Core" | "Conditional" | "State-specific";
  appliesTo: string[];
  bring: string[];
  steps: string[];
  cautions: string[];
  validity: string;
  cost: string;
  law: string;
  sources: Source[];
  lastChecked: string;
};

export const documentGuides: DocumentGuide[] = [
  {
    slug: "drivers-licence",
    title: "Driver's Licence",
    short: "The licence that authorises a person to drive the class of vehicle shown on the licence.",
    authority: "FRSC + State BIR/VIO/DLC",
    status: "Core",
    appliesTo: ["Anyone driving a motor vehicle or motorcycle/tricycle on public roads."],
    bring: [
      "Fresh applicants: accredited driving-school certificate number.",
      "Personal identity details required by the official application.",
      "For commercial classes: medical certificate and required driving-school certificate at a Driver's Licence Centre."
    ],
    steps: [
      "Start the application on the official Nigeria Driver's Licence portal.",
      "Pay through the official payment options shown in the application.",
      "Confirm payment at the relevant State Board/Internal Revenue office.",
      "Complete the VIO driving test where required.",
      "Complete FRSC biometric capture at the selected Driver's Licence Centre.",
      "Track the application and collect/activate the licence through the official process."
    ],
    cautions: [
      "A first-time applicant must be at least 18 and must have completed driving school.",
      "Fresh applicants can only start with permitted classes; commercial applications are handled through a capture centre.",
      "Do not give an agent your identity details to 'process everything' outside the official workflow."
    ],
    validity: "The current portal offers 3-year and 5-year options.",
    cost: "FRSC currently lists Class A at ₦7,000 / ₦11,000 and other classes at ₦15,000 / ₦21,000 for 3 / 5 years, before any payment-channel charges.",
    law: "FRSC (Establishment) Act 2007 and National Road Traffic Regulations 2012.",
    sources: [
      { label: "Nigeria Driver's Licence portal", url: "https://nigeriadriverslicence.frsc.gov.ng/" },
      { label: "Driver's Licence FAQ", url: "https://nigeriadriverslicence.frsc.gov.ng/faq" }
    ],
    lastChecked: "17 Aug 2026"
  },
  {
    slug: "vehicle-licence",
    title: "Vehicle Licence",
    short: "State-administered vehicle licensing evidence tied to a properly registered vehicle.",
    authority: "State Motor Licensing Authority / BIR, supported by FRSC vehicle-registration infrastructure",
    status: "Core",
    appliesTo: ["Owners of vehicles used on Nigerian public roads."],
    bring: [
      "Vehicle registration details.",
      "Owner identification details.",
      "Chassis/VIN and engine information.",
      "Insurance policy details where requested."
    ],
    steps: [
      "Use an approved state motor licensing/vehicle registration office.",
      "Ensure the vehicle is correctly captured in the national vehicle registration system.",
      "Pay only through the state/official payment route you can verify.",
      "Keep the licence current and retain verifiable evidence of the transaction."
    ],
    cautions: [
      "Vehicle licensing is state-administered, so fees and local steps can differ.",
      "FRSC warns against unauthorised number-plate/registration vendors.",
      "A receipt from a roadside intermediary is not proof that your vehicle exists in the official system."
    ],
    validity: "Confirm the renewal period with the state licensing authority that issued it.",
    cost: "State-dependent. Roadbook does not publish one national price because there is no single nationwide state fee.",
    law: "National Road Traffic Regulations 2012 plus applicable state vehicle administration rules.",
    sources: [
      { label: "FRSC NVIS", url: "https://nvis.frsc.gov.ng/" },
      { label: "Approved plate/licensing centres", url: "https://nvis.frsc.gov.ng/Home/approvecenter" }
    ],
    lastChecked: "17 Aug 2026"
  },
  {
    slug: "roadworthiness",
    title: "Roadworthiness Certificate",
    short: "Evidence from the competent vehicle-inspection authority that a vehicle meets applicable roadworthiness requirements.",
    authority: "State VIO / Motor Vehicle Inspection Service",
    status: "State-specific",
    appliesTo: [
      "Commercial vehicles and other classes required by applicable state rules.",
      "Private-vehicle treatment can differ by state and should be confirmed locally."
    ],
    bring: [
      "Vehicle particulars.",
      "The vehicle itself for inspection where required.",
      "Previous certificate/inspection record for renewals where applicable."
    ],
    steps: [
      "Check the current requirement for your vehicle class in your state.",
      "Use the recognised VIO/MVIS inspection route.",
      "Present the vehicle for the required inspection.",
      "Correct any safety defects and complete the official certification process."
    ],
    cautions: [
      "Do not treat a Lagos, FCT or Ogun procedure as the rule for every state.",
      "Do not buy a certificate without a legitimate inspection where inspection is required.",
      "Roadbook intentionally does not invent one national fee or renewal period."
    ],
    validity: "State- and vehicle-class dependent.",
    cost: "State-dependent.",
    law: "National Road Traffic Regulations and applicable state traffic/vehicle inspection rules.",
    sources: [
      { label: "FRSC publications / regulations", url: "https://old.frsc.gov.ng/publications/" },
      { label: "FRSC approved vehicle licensing centres", url: "https://nvis.frsc.gov.ng/Home/approvecenter" }
    ],
    lastChecked: "17 Aug 2026"
  },
  {
    slug: "motor-insurance",
    title: "Motor Insurance",
    short: "At minimum, Nigerian road users need the legally required motor third-party cover; broader comprehensive cover is optional.",
    authority: "NAICOM-regulated insurers; NIA/NIID verification",
    status: "Core",
    appliesTo: ["Owners/users of motor vehicles on Nigerian public roads."],
    bring: [
      "Correct vehicle details and registration/plate information.",
      "Accurate owner/policyholder information.",
      "Payment only to a licensed/authorised insurer, broker or approved channel."
    ],
    steps: [
      "Buy from a licensed insurer or authorised insurance channel.",
      "Confirm that the policy details match your vehicle.",
      "Verify the policy through NAICOM's policy portal and/or the Nigerian Insurance Industry Database.",
      "Keep your policy current and know how to contact the insurer after a crash."
    ],
    cautions: [
      "Avoid fake roadside 'third-party' certificates that cannot be verified.",
      "Third-party insurance protects against covered third-party liability; it is not the same as comprehensive cover for your own vehicle.",
      "If verification data does not match your policy, contact the insurer before relying on the certificate."
    ],
    validity: "Use the start/end dates on the policy and renew before expiry.",
    cost: "Depends on vehicle class and cover. Confirm the current premium with a licensed insurer.",
    law: "Compulsory motor insurance requirements under Nigerian insurance and motor-vehicle law; current supervision is by NAICOM.",
    sources: [
      { label: "NAICOM policy verification portal", url: "https://portal.naicom.gov.ng/" },
      { label: "Nigerian Insurance Industry Database", url: "https://askniid.org/" },
      { label: "Nigerian Insurers Association motor-insurance FAQ", url: "https://nigeriainsurers.org/faqs/" }
    ],
    lastChecked: "17 Aug 2026"
  },
  {
    slug: "tinted-glass",
    title: "Tinted Glass Permit / Rules",
    short: "A legally and operationally sensitive area: the Police operates a permit system, while enforcement has also been affected by litigation and changing directives.",
    authority: "Nigeria Police Force",
    status: "Conditional",
    appliesTo: ["Vehicles with tinted/obscured glass where the applicable law/policy requires approval."],
    bring: [
      "Vehicle licence and proof of ownership.",
      "Identity information required by the Police platform.",
      "Evidence supporting the stated ground for approval where required."
    ],
    steps: [
      "Before acting, check the latest NPF notice because enforcement status has changed repeatedly.",
      "If applying, use the Police-designated digital service rather than an unofficial agent.",
      "Follow identity, vehicle-data, biometric/background-check and document requirements shown by the official service.",
      "Retain the QR/digital permit and transaction evidence if a permit is issued."
    ],
    cautions: [
      "Do not rely on an old social-media deadline. Court orders and Police enforcement positions have changed over time.",
      "The NPF has cited health or security grounds as the basis for showing good cause.",
      "Roadbook does not represent a court ruling as permanent when litigation or later orders may change the position."
    ],
    validity: "Check the current permit and enforcement position on the NPF service before travel or application.",
    cost: "Use only the fee shown by the official Police service at the time of application.",
    law: "Motor Vehicles (Prohibition of Tinted Glass) Act and related Police/regulatory provisions; enforcement has been litigated.",
    sources: [
      { label: "NPF tinted-glass permit announcement", url: "https://www.npf.gov.ng/news/details/659" },
      { label: "NPF statement on legal basis", url: "https://www.npf.gov.ng/news/details/697" },
      { label: "Police specialised services", url: "https://possap.gov.ng/" }
    ],
    lastChecked: "17 Aug 2026"
  },
  {
    slug: "proof-of-ownership",
    title: "Proof of Ownership",
    short: "Official ownership evidence that should match the vehicle and the person/entity claiming ownership.",
    authority: "FRSC / state vehicle administration",
    status: "Core",
    appliesTo: ["Vehicle owners, especially during purchase, transfer or verification."],
    bring: [
      "Vehicle registration particulars.",
      "Owner identity details.",
      "Accurate chassis/VIN, engine and plate information."
    ],
    steps: [
      "Use the FRSC Proof of Ownership Verification Platform.",
      "Register or sign in through the official platform.",
      "Submit the vehicle/ownership details requested.",
      "Verify the record and retain the official confirmation."
    ],
    cautions: [
      "When buying a used vehicle, do not accept a photocopy as final proof without independent verification.",
      "Names, vehicle identifiers and registration records should agree.",
      "A seller's possession of a car is not the same as verified legal ownership."
    ],
    validity: "Ownership status changes when ownership is legally transferred; verify again during a purchase or transfer.",
    cost: "Use the current fee/instructions shown by the official platform.",
    law: "Vehicle registration and ownership administration under Nigerian road traffic/vehicle-registration frameworks.",
    sources: [
      { label: "FRSC Proof of Ownership Verification", url: "https://poc.frsc.gov.ng/" },
      { label: "FRSC NVIS", url: "https://nvis.frsc.gov.ng/" }
    ],
    lastChecked: "17 Aug 2026"
  },
  {
    slug: "number-plate",
    title: "Number Plate Allocation",
    short: "Official vehicle identification plate allocated through authorised motor licensing channels and recorded in NVIS.",
    authority: "FRSC + State/FCT Motor Licensing Authorities",
    status: "Core",
    appliesTo: ["Registered vehicles, including motorcycles and tricycles."],
    bring: [
      "Vehicle and owner information required for registration.",
      "Chassis/VIN and engine number.",
      "Insurance policy details where requested.",
      "State of plate allocation."
    ],
    steps: [
      "Register through an approved Motor Licensing Authority.",
      "Complete the vehicle registration details used by NVIS.",
      "Receive the plate only through the authorised route.",
      "Verify the plate on the FRSC NVIS portal."
    ],
    cautions: [
      "FRSC warns that plates from unauthorised vendors can be fake and absent from NVIS.",
      "Federal Government plates are for eligible government MDAs, not private 'association' or 'ambassador' schemes.",
      "Do not display obscured, altered or unofficial plates."
    ],
    validity: "Keep the vehicle registration/plate status valid and update ownership correctly when the vehicle changes hands.",
    cost: "Confirm the current authorised rate through the relevant Motor Licensing Authority; avoid social-media price lists.",
    law: "FRSC (Establishment) Act 2007 and National Road Traffic Regulations 2012.",
    sources: [
      { label: "FRSC NVIS plate verification", url: "https://nvis.frsc.gov.ng/" },
      { label: "Approved centres", url: "https://nvis.frsc.gov.ng/Home/approvecenter" },
      { label: "FRSC warning on unauthorised plates", url: "https://old.frsc.gov.ng/enhancing-road-safety-and-national-security-frsc-warns-the-public-against-patronising-unauthorised-number-plate-vendors/" }
    ],
    lastChecked: "17 Aug 2026"
  },
  {
    slug: "police-cmr",
    title: "Police e-CMR",
    short: "The Nigeria Police Central Motor Registry records vehicle ownership information used for security, theft investigation and recovery.",
    authority: "Nigeria Police Force",
    status: "Core",
    appliesTo: ["Owners of cars, buses, trucks, motorcycles and other motor vehicles covered by the Police registry."],
    bring: [
      "NIN for a personal profile, or TIN/CAC details for an organisation as applicable.",
      "Vehicle and ownership information.",
      "Existing CMR certificate details when renewing or transferring ownership."
    ],
    steps: [
      "Create the correct personal or organisation profile on the official e-CMR portal.",
      "Ensure the owner name matches the identification record.",
      "Enroll the vehicle or use the renewal/change-of-ownership flow where applicable.",
      "Retain the issued Motor Vehicle Information Certificate / digital record."
    ],
    cautions: [
      "Do not create a second new certificate when an existing CMR should be renewed.",
      "For a change of ownership, the existing owner may need to initiate the change from their profile.",
      "Use the official Police CMR portal; do not hand NIN/TIN/CAC details to unknown intermediaries."
    ],
    validity: "Use the renewal/status shown in your e-CMR profile.",
    cost: "Use only the current fee shown inside the official NPF e-CMR service.",
    law: "Nigeria Police vehicle-security/registry functions and applicable Police/road-traffic framework.",
    sources: [
      { label: "NPF CMRIS", url: "https://cmris.npf.gov.ng/" },
      { label: "CMRIS about", url: "https://cmris.npf.gov.ng/about" }
    ],
    lastChecked: "17 Aug 2026"
  }
];

export const getDocumentGuide = (slug: string) =>
  documentGuides.find((item) => item.slug === slug);
