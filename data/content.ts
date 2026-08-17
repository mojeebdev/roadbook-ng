export const officialServices = [
  {
    title: "Verify a number plate",
    agency: "FRSC / NVIS",
    description: "Check whether a plate is present in the National Vehicle Identification Scheme.",
    url: "https://nvis.frsc.gov.ng/"
  },
  {
    title: "Verify proof of ownership",
    agency: "FRSC",
    description: "Use the official Proof of Ownership Verification Platform for vehicle ownership records.",
    url: "https://poc.frsc.gov.ng/"
  },
  {
    title: "Driver's licence services",
    agency: "FRSC",
    description: "Apply, renew, reissue and track a Nigerian driver's licence.",
    url: "https://nigeriadriverslicence.frsc.gov.ng/"
  },
  {
    title: "Police e-CMR",
    agency: "Nigeria Police Force",
    description: "Enroll, renew or update vehicle ownership records in the Central Motor Registry.",
    url: "https://cmris.npf.gov.ng/"
  },
  {
    title: "Check an insurance policy",
    agency: "NAICOM",
    description: "Validate an insurance policy using NAICOM's public policy portal.",
    url: "https://portal.naicom.gov.ng/"
  },
  {
    title: "Check motor insurance in NIID",
    agency: "Nigerian Insurers Association",
    description: "Verify compulsory motor insurance in the Nigerian Insurance Industry Database.",
    url: "https://askniid.org/"
  },
  {
    title: "Tinted-glass / Police specialised services",
    agency: "Nigeria Police Force",
    description: "Check the current Police service and instructions before relying on older enforcement notices.",
    url: "https://possap.gov.ng/"
  },
  {
    title: "FRSC offences & penalties",
    agency: "FRSC",
    description: "Read the FRSC's current public notice-of-offence table and official penalty route.",
    url: "https://frsc.gov.ng/offences-and-penalties/"
  }
] as const;

export const agencies = [
  {
    name: "Federal Road Safety Corps (FRSC)",
    does: "National road-safety regulation/enforcement, driver's licence design/administration, number-plate design/production, NVIS, road safety education and emergency response.",
    doesNot: "Roadbook should not imply that every state vehicle fee or inspection procedure is set by FRSC.",
    url: "https://frsc.gov.ng/"
  },
  {
    name: "State VIO / Motor Vehicle Inspection Service",
    does: "Vehicle inspection, driving tests and roadworthiness functions under the applicable state system.",
    doesNot: "Procedures are not identical nationwide. Confirm the state you are dealing with.",
    url: "https://nvis.frsc.gov.ng/Home/approvecenter"
  },
  {
    name: "State Motor Licensing Authority / BIR / IRS",
    does: "State vehicle licensing/registration administration and related payments through recognised offices.",
    doesNot: "An unauthorised roadside agent is not a substitute for the state's recognised licensing route.",
    url: "https://nvis.frsc.gov.ng/Home/approvecenter"
  },
  {
    name: "Nigeria Police Force (NPF)",
    does: "Vehicle-security registry (e-CMR), policing, theft investigation/recovery and Police permit/services such as the tinted-glass process.",
    doesNot: "The NPF is not your motor insurer or state vehicle licensing office.",
    url: "https://www.npf.gov.ng/"
  },
  {
    name: "National Insurance Commission (NAICOM)",
    does: "Regulates Nigeria's insurance industry and provides public insurance-policy verification services.",
    doesNot: "Roadbook does not sell insurance and cannot validate a policy by sight.",
    url: "https://portal.naicom.gov.ng/"
  },
  {
    name: "Nigerian Insurers Association / NIID",
    does: "Industry database and verification infrastructure for compulsory insurance, including motor policies.",
    doesNot: "Verification is not a reason to buy from an unlicensed intermediary.",
    url: "https://askniid.org/"
  }
] as const;

export const laws = [
  {
    title: "FRSC (Establishment) Act 2007",
    plain: "Sets out core FRSC functions including road-safety regulation, driver's licence and number-plate responsibilities, speed controls and enforcement powers.",
    url: "https://old.frsc.gov.ng/publications/"
  },
  {
    title: "National Road Traffic Regulations 2012",
    plain: "National regulations covering vehicle registration, road use, safety equipment, number plates, offences and many operating requirements.",
    url: "https://old.frsc.gov.ng/publications/"
  },
  {
    title: "Motor Vehicles (Prohibition of Tinted Glass) Act",
    plain: "Forms part of the legal basis cited by the Nigeria Police Force for regulating tinted glass. The permit/enforcement policy has also been the subject of court challenges, so current enforcement must be checked.",
    url: "https://www.npf.gov.ng/news/details/697"
  },
  {
    title: "Nigeria Police Act 2020",
    plain: "Governs Police functions and powers. NPF has also cited provisions of this Act when explaining fees for specialised services.",
    url: "https://www.npf.gov.ng/news/details/697"
  },
  {
    title: "Motor insurance framework",
    plain: "Motor third-party insurance is a compulsory minimum for vehicles on Nigerian public roads. NAICOM regulates insurers and public verification is available through NAICOM/NIID.",
    url: "https://nigeriainsurers.org/faqs/"
  }
] as const;

export const coreSafetyItems = [
  "A serviceable spare tyre — FRSC lists driving without/with an expired spare tyre as an offence.",
  "A fire extinguisher — FRSC lists fire-extinguisher violation as an offence.",
  "A caution/warning sign — FRSC lists caution-sign violation as an offence.",
  "Roadworthy tyres, lights, mirrors, windscreen and other safety-critical equipment.",
  "Seat belts/restraints appropriate to occupants and vehicle use."
] as const;
