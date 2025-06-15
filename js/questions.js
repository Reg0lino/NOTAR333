// NotaR333 Quiz Database v3
// Corrected syntax and formatted for readability to fix the script loading error.

const quizData = [
    {
        id: 1,
        question: "A Notary Public commission in New York State is valid for what term?",
        options: ["Two years", "Three years", "Four years", "Five years"],
        correct: 2,
        explanation: "The appointment of a Notary Public shall be for a term of 4 years.",
        emoji: "🗓️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 2,
        question: "Who is primarily responsible for commissioning Notaries Public in New York State?",
        options: ["The County Clerk", "The Governor", "The Secretary of State", "The Attorney General"],
        correct: 2,
        explanation: "Notaries public are commissioned by the Secretary of State.",
        emoji: "🏛️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 3,
        question: "As of June 2025, what is the current fee for an initial application to become a Notary Public?",
        options: ["$15.00", "$25.00", "$60.00", "$100.00"],
        correct: 2,
        explanation: "An applicant for a notary public commission must submit an original application and $60 fee.",
        emoji: "💰",
        points: 10,
        category: "Fees"
    },
    {
        id: 4,
        question: "Which of the following individuals is exempt from taking the New York State Notary Public examination?",
        options: ["A certified public accountant", "A previous notary whose commission expired over a year ago", "An attorney licensed to practice law in New York State", "A real estate broker"],
        correct: 2,
        explanation: "An individual admitted to practice in NYS as an attorney may be appointed a notary public without an examination.",
        emoji: "🧑‍⚖️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 5,
        question: "If a Notary's commission has expired for more than six months, what is required?",
        options: ["Pay a late renewal fee.", "Complete an online training course.", "Retake and pass the Notary Public examination.", "Obtain a letter of recommendation."],
        correct: 2,
        explanation: "Renewing Notaries must take the exam if their commission has lapsed (expired) for more than six months.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 6,
        question: "As of Jan 25, 2023, what is the minimum retention period for a notary's journal?",
        options: ["3 years", "5 years", "7 years", "10 years"],
        correct: 3,
        explanation: "Recordbooks of all notarial acts must be retained by the notary for a minimum of 10 years.",
        emoji: "📓",
        points: 10,
        category: "Journaling"
    },
    {
        id: 7,
        question: "Which practice is NOT permitted in New York State after January 31, 2023?",
        options: ["Remote Electronic Notarization (REN)", "In-person notarization", "Remote Ink Notarization (RIN)", "Electronic notarization by a registered notary"],
        correct: 2,
        explanation: "Remote ink notarization (RIN) is not permitted in New York State after January 31, 2023.",
        emoji: "🚫",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 8,
        question: "What is the maximum fee an Electronic Notary may charge for an electronic notarial act?",
        options: ["$2.00", "$5.00", "$15.00", "$25.00"],
        correct: 3,
        explanation: "An Electronic Notary may charge up to $25.00 per electronic notarial act performed.",
        emoji: "💻",
        points: 10,
        category: "Fees"
    },
    {
        id: 9,
        question: "A Notary is asked to notarize a document for their spouse, who is a party to the transaction. What must the Notary do?",
        options: ["Proceed, but disclose the relationship.", "Refuse to perform the notarial act.", "Perform the notarization, but charge no fee.", "Seek approval from the County Clerk."],
        correct: 1,
        explanation: "A notary is disqualified from acting in cases where they are a party to or directly and pecuniarily interested in the transaction.",
        emoji: "⚠️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 10,
        question: "What information must a Notary affix below their signature on a certificate?",
        options: ["Only their name and signature.", "Name, 'Notary Public State of New York,' county, and expiration date.", "Name, home address, and date.", "Name, official seal, and document type."],
        correct: 1,
        explanation: "Notaries must print, typewrite, stamp, or affix electronically their name, 'Notary Public State of New York,' county of original qualification, and commission expiration date below their signature.",
        emoji: "✍️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 11,
        question: "A non-attorney Notary advertises in a foreign language. What disclaimer must be included?",
        options: ["'I can provide legal advice in this language.'", "'I am not an attorney licensed to practice law and may not give legal advice...'", "'Consult an attorney for legal matters.'", "'My services are not equivalent to a lawyer.'"],
        correct: 1,
        explanation: "Advertisements in a language other than English must include the specific disclaimer: 'I am not an attorney licensed to practice law and may not give legal advice about immigration or any other legal matter or accept fees for legal advice.'",
        emoji: "🌐",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 12,
        question: "What is the primary purpose of the mandatory notarial journal?",
        options: ["To track income for tax purposes.", "To provide a verifiable record for accountability.", "As a personal reminder for the notary.", "To allow public review of transactions."],
        correct: 1,
        explanation: "The journal provides a verifiable record of all notarial acts for accountability and fraud prevention, and must be producible to the Secretary of State.",
        emoji: "📈",
        points: 10,
        category: "Journaling"
    },
    {
        id: 13,
        question: "When performing an electronic notarial act, where must the notary be physically located?",
        options: ["In the same county as the principal.", "Physically located within New York State.", "Anywhere, as long as the principal is in NYS.", "In the same room as the principal."],
        correct: 1,
        explanation: "The notary must be physically located within the State of New York at the time of the notarization.",
        emoji: "📍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 14,
        question: "A Notary is asked to prepare a will. What should they do?",
        options: ["Prepare and notarize it.", "Refuse, as it's the unauthorized practice of law.", "Prepare it, but have an attorney notarize it.", "Notarize it, but warn it may be invalid."],
        correct: 1,
        explanation: "Unless also a lawyer, a notary is prohibited from engaging in the practice of law, which includes drawing up legal papers like wills.",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 15,
        question: "What is the passing score for the NYS Notary Public examination?",
        options: ["60%", "65%", "70%", "75%"],
        correct: 2,
        explanation: "You must correctly answer at least 70 percent of the questions to pass the exam.",
        emoji: "🎯",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 16,
        question: "What is an 'unequivocal and present act' when administering an oath?",
        options: ["A signed document without verbal confirmation.", "An oath over the telephone.", "Requiring the affiant to verbally affirm or swear in the notary's presence.", "Mailing an oath form for signature."],
        correct: 2,
        explanation: "An oath or affirmation must be an unequivocal and present act in the presence of an officer authorized to administer it.",
        emoji: "🗣️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 17,
        question: "A Notary in New York City must affix what additional information to instruments?",
        options: ["Their phone number.", "Their official number(s) from the county clerk.", "The signer's full name.", "The county clerk's seal."],
        correct: 1,
        explanation: "A notary qualified in NYC must affix their official number or numbers, as assigned by the county clerk, in black ink.",
        emoji: "🏙️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 18,
        question: "What is the consequence for willfully failing to include required info on a certificate?",
        options: ["The act is automatically invalidated.", "The notary is subject to disciplinary action.", "The notary must retake the exam.", "The notary is fined $500."],
        correct: 1,
        explanation: "Willful failure to comply subjects the notary to disciplinary action by the Secretary of State, though the act itself is not automatically held invalid.",
        emoji: "📜",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 19,
        question: "What is the current fee for administering an oath, as of June 2025?",
        options: ["$1.00", "$2.00", "$5.00", "$10.00"],
        correct: 1,
        explanation: "A notary public may charge a fee of $2.00 for administering an oath or affirmation.",
        emoji: "💵",
        points: 10,
        category: "Fees"
    },
    {
        id: 20,
        question: "Which is NOT a required entry in the mandatory notarial journal?",
        options: ["Date and time of the act.", "Name and address of the individual.", "The social security number of the principal.", "Type of credential used for ID."],
        correct: 2,
        explanation: "Required journal entries include date, time, type of act, name/address, services provided, credential type, and verification procedures. Social Security Number is not required.",
        emoji: "🤫",
        points: 10,
        category: "Journaling"
    },
    {
        id: 21,
        question: "What is 'credential analysis' in electronic notarization?",
        options: ["A notary's assessment of trustworthiness.", "A third-party service validating a government ID through data sources.", "A review of the signer's credit history.", "The notary's examination of an ID's physical features."],
        correct: 1,
        explanation: "Credential analysis is a process where a third-party service validates a government-issued ID by reviewing public and proprietary data sources to confirm its integrity.",
        emoji: "🔍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 22,
        question: "If a NY Notary moves out of state and keeps no office in NY, what happens to their commission?",
        options: ["It automatically vacates.", "It remains valid until expiration.", "They must notify the state but can continue.", "They must transfer their commission."],
        correct: 0,
        explanation: "A notary public who is a resident of New York and moves out of the state without retaining an office or place of business in NY shall vacate their office.",
        emoji: "✈️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 23,
        question: "What is the purpose of proposed Senate Bill S398 regarding real property conveyances?",
        options: ["Increase notary fees for all acts.", "Establish duties to prevent deed theft.", "Allow notaries to solemnize marriages.", "Exempt notaries from journaling real property acts."],
        correct: 1,
        explanation: "Senate Bill S398 aims to establish a clear set of notary duties, like journaled thumbprints and a colloquy, specifically to combat deed theft.",
        emoji: "🏘️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 24,
        question: "Which is a Class D felony under NY Penal Law applicable to notaries?",
        options: ["Refusing to officiate an oath.", "Advertising without the required disclaimer.", "Forgery in the second degree, like altering a deed.", "Acting as a notary before taking the oath."],
        correct: 2,
        explanation: "Forgery in the second degree (Penal Law §170.10), which includes falsely altering a deed or contract with intent to defraud, is a Class D felony.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 25,
        question: "What is the status of Senate Bill S6268 (fee increase) as of June 2025?",
        options: ["Signed into law and effective.", "Defeated and will not be reconsidered.", "Pending legislation in the Senate Finance Committee.", "Awaiting a public referendum."],
        correct: 2,
        explanation: "As of the report date, NY State Senate Bill S6268 is active and in the Senate Finance Committee. It is not law.",
        emoji: "🏛️",
        points: 10,
        category: "Fees"
    },
    {
        id: 26,
        question: "What is the minimum age requirement to become a Notary Public in New York State?",
        options: ["16 years old", "18 years old", "21 years old", "25 years old"],
        correct: 1,
        explanation: "Notary applicants must be at least 18 years old.",
        emoji: "🎂",
        points: 10,
        category: "Foundations"
    },
    {
        id: 27,
        question: "What is the role of the County Clerk's office regarding Notaries Public in New York State?",
        options: ["They administer the Notary Public examination.", "They issue the initial Notary Public commission.", "They maintain a public record of the notary's commission and signature.", "They provide legal advice to notaries."],
        correct: 2,
        explanation: "The county clerk maintains a record of the commission and signature, which the public can access to verify the notary's 'official' signature.",
        emoji: "🗄️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 28,
        question: "What is the fee for taking the New York State Notary Public examination?",
        options: ["$10.00", "$15.00", "$20.00", "$60.00"],
        correct: 1,
        explanation: "The examination fee is $15.00.",
        emoji: "🎟️",
        points: 10,
        category: "Fees"
    },
    {
        id: 29,
        question: "A notary is asked to take an acknowledgment over the telephone. What should they do?",
        options: ["Proceed if identity is confirmed verbally.", "Refuse, as personal appearance is required.", "Advise sending a scanned ID.", "Perform it, but note it was done remotely."],
        correct: 1,
        explanation: "Taking acknowledgments or affidavits over the telephone, without the actual, personal appearance of the individual, is illegal.",
        emoji: "📞",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 30,
        question: "Which of the following is a power generally authorized for a New York Notary Public?",
        options: ["Solemnizing marriages.", "Drafting legal contracts for a fee.", "Administering oaths and affirmations.", "Certifying copies of public records."],
        correct: 2,
        explanation: "Notaries have general powers to administer oaths and affirmations. They cannot solemnize marriages, draft legal papers, or certify copies of public records.",
        emoji: "✨",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 31,
        question: "What is the retention period for the audio-visual recording of an electronic notarial act?",
        options: ["1 year", "3 years", "5 years", "10 years"],
        correct: 3,
        explanation: "Electronic notaries must keep a copy of the audio-visual recording of the act for at least 10 years.",
        emoji: "🎥",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 32,
        question: "A Notary is also a stockholder of a corporation. Can they notarize for that same corporation?",
        options: ["No, it's a conflict of interest.", "Yes, provided they are not a party to the instrument.", "Only if they receive no fee.", "Only if it's not a financial document."],
        correct: 1,
        explanation: "Executive Law §138 allows notaries who are stockholders, directors, officers, or employees of a corporation to notarize for it, provided they are not individually a party to the instrument.",
        emoji: "🏢",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 33,
        question: "What is the consequence if a Notary acts before taking and filing their oath of office?",
        options: ["The act is valid but they get a warning.", "They are subject to civil penalties only.", "They are guilty of a misdemeanor.", "Their commission is suspended for 30 days."],
        correct: 2,
        explanation: "A notary must not perform any official acts before taking and filing their oath of office; doing so is a misdemeanor under Public Officers Law §15.",
        emoji: "✋",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 34,
        question: "A notary is requested to administer an oath. What is their obligation?",
        options: ["They may refuse if busy.", "They must officiate; refusal is a misdemeanor.", "They may charge any reasonable fee.", "They must first verify U.S. citizenship."],
        correct: 1,
        explanation: "A Notary Public has a legal obligation to officiate when requested. Refusal to administer an oath or affidavit is a misdemeanor.",
        emoji: "🙏",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 35,
        question: "Which of the following is NOT required on a Notary Public's identification card?",
        options: ["Notary's name", "Notary's address", "Notary's commission term", "Notary's photograph"],
        correct: 3,
        explanation: "The ID card indicates the notary's name, address, county, and commission term. It does not require a photograph.",
        emoji: "🪪",
        points: 10,
        category: "Foundations"
    },
    {
        id: 36,
        question: "What is the max fee for taking an acknowledgment for one person, as of June 2025?",
        options: ["$1.00", "$2.00", "$5.00", "$10.00"],
        correct: 1,
        explanation: "A notary public may charge a fee of $2.00 for taking and certifying an acknowledgment or proof of execution.",
        emoji: "💰",
        points: 10,
        category: "Fees"
    },
    {
        id: 37,
        question: "In electronic notarization, what is 'identity proofing'?",
        options: ["The notary's visual confirmation of the signer.", "A third-party process to confirm identity using personal data.", "The signer providing a password.", "The notary asking personal questions."],
        correct: 1,
        explanation: "Identity proofing is a process where a third party confirms the signer's identity by reviewing personal information from public and proprietary data sources.",
        emoji: "🕵️",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 38,
        question: "What's the status of S.B. S398 (thumbprints for real property) as of June 2025?",
        options: ["It is law.", "It is pending legislation.", "It was defeated.", "It is under review by the Dept. of State."],
        correct: 1,
        explanation: "As of the report date, NY State Senate Bill S398 is currently pending In the Senate Finance Committee.",
        emoji: "📄",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 39,
        question: "If a Notary changes their name due to marital status, what is the fee?",
        options: ["$0 (no fee)", "$5.00", "$10.00", "$20.00"],
        correct: 0,
        explanation: "The $10 fee for a change of name is not required if the change is the result of a change in marital status.",
        emoji: "💍",
        points: 10,
        category: "Fees"
    },
    {
        id: 40,
        question: "Which is a misdemeanor offense for a Notary Public?",
        options: ["Administering an oath to a non-resident.", "Refusing to administer an oath when requested.", "Charging the statutory fee.", "Filing an official character certificate."],
        correct: 1,
        explanation: "Refusal to administer an oath or affidavit when properly requested is a misdemeanor.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 41,
        question: "What is the validity period for Notary Public examination results?",
        options: ["1 year", "2 years", "3 years", "4 years"],
        correct: 1,
        explanation: "Examination results are valid for a period of two years from the date of the test.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 42,
        question: "A Notary commissioned in Albany County is asked to notarize in NYC. Can they?",
        options: ["No, only in their county.", "Yes, a notary's jurisdiction is statewide.", "Only if they file a certificate in NYC.", "Only if the document won't be recorded in NYC."],
        correct: 1,
        explanation: "A notary public's jurisdiction is co-extensive with the boundaries of the state of New York.",
        emoji: "🗺️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 43,
        question: "Can a person convicted of a felony become a Notary Public in New York?",
        options: ["No, they are automatically disqualified.", "Yes, if they obtain an executive pardon or certificate of good conduct.", "Yes, but they must wait 10 years.", "Yes, if it was a non-violent offense."],
        correct: 1,
        explanation: "A person convicted of a felony may be considered for appointment if they obtain an executive pardon, a certificate of relief from disabilities, or a certificate of good conduct.",
        emoji: "📜",
        points: 10,
        category: "Foundations"
    },
    {
        id: 44,
        question: "What is the purpose of a 'colloquy form' as proposed in Senate Bill S398?",
        options: ["To record the notary's observations.", "To ensure the principal understands the transaction.", "To document the notary's fees.", "To serve as an application for legal aid."],
        correct: 1,
        explanation: "The proposed colloquy form is designed to ensure the principal understands the nature of the transaction and is signing of their own free will.",
        emoji: "🗣️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 45,
        question: "What is the fee for a duplicate Notary Public identification card?",
        options: ["$0", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "A $10.00 non-refundable fee is charged for a duplicate lost, destroyed, or damaged ID card.",
        emoji: "💳",
        points: 10,
        category: "Fees"
    },
    {
        id: 46,
        question: "Which is a mandatory journal entry for an electronic notarial act?",
        options: ["The principal's marital status.", "Identification of the communication technology used.", "The notary's opinion of the principal's demeanor.", "A copy of the electronic document itself."],
        correct: 1,
        explanation: "For electronic notarial acts, the journal must identify the communication technology, certification authority, and verification providers utilized.",
        emoji: "💻",
        points: 10,
        category: "Journaling"
    },
    {
        id: 47,
        question: "What is the main difference between 'credential analysis' and 'identity proofing'?",
        options: ["In-person vs. remote acts.", "Validating the ID's authenticity vs. confirming the person's identity.", "Performed by notary vs. by signer.", "Optional vs. mandatory."],
        correct: 1,
        explanation: "Credential analysis validates the authenticity of the ID document itself, while identity proofing validates that the person presenting the ID is the correct individual.",
        emoji: "🔍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 48,
        question: "What is the penalty for a non-attorney notary using a term like 'abogado' in an ad?",
        options: ["Immediate removal from office.", "A civil penalty up to $1,000 for the first violation.", "Mandatory legal education.", "Suspension for one year."],
        correct: 1,
        explanation: "Penalties for violating advertising regulations include a civil penalty up to $1,000 for the first violation, followed by suspension for a second.",
        emoji: "💸",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 49,
        question: "What is the primary function of the County Clerk regarding a notary's signature?",
        options: ["To approve the signature style.", "To authenticate the signature for out-of-state use.", "To provide a signature stamp.", "To train notaries on signing."],
        correct: 1,
        explanation: "County clerks are authorized to authenticate notary signatures, a service typically required for documents intended for use outside of New York State.",
        emoji: "✅",
        points: 10,
        category: "Foundations"
    },
    {
        id: 50,
        question: "Is a Notary Public permitted to administer an oath to a public officer?",
        options: ["No, only judges can.", "Yes, a notary is permitted to administer such an oath.", "Only if the officer is a state official.", "Only if the notary is an attorney."],
        correct: 1,
        explanation: "Public Officers Law §10 permits a notary public to administer the oath of a public officer.",
        emoji: "🏛️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 51,
        question: "What is the legal status of acts performed before a notary files their oath of office?",
        options: ["Valid, but the notary is fined.", "Invalid, and the notary is guilty of a felony.", "The acts are valid, but performing them is a misdemeanor.", "Invalid, and the notary is subject to removal."],
        correct: 2,
        explanation: "Acting before taking and filing the oath is a misdemeanor. However, Executive Law §142-a generally protects the validity of such acts from being invalidated due to this defect if it was unknown.",
        emoji: "✋",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 52,
        question: "What is the main purpose of the audio-visual recording for electronic notarial acts?",
        options: ["For marketing purposes.", "To allow the notary to review their performance.", "To create an immutable evidentiary record.", "To confirm the signer's attire."],
        correct: 2,
        explanation: "The audio-visual recording provides an immutable evidentiary record of the entire transaction, significantly enhancing accountability and serving as a strong deterrent against fraud.",
        emoji: "🎥",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 53,
        question: "What additional item is proposed by S.B. S398 for journal entries in real property conveyances?",
        options: ["A photo of the property.", "An inked thumbprint of the principal.", "The principal's financial statements.", "A copy of the notary's commission."],
        correct: 1,
        explanation: "Proposed Senate Bill S398 would require an inked thumbprint of the principal in the journal for notarizations involving residential real property.",
        emoji: "👍",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 54,
        question: "What is the maximum number of notices of protest a Notary may charge for?",
        options: ["3 notices", "5 notices", "10 notices", "Unlimited notices"],
        correct: 1,
        explanation: "A notary may charge 10 cents for each notice of protest, with a limit of five notices.",
        emoji: "🪙",
        points: 10,
        category: "Fees"
    },
    {
        id: 55,
        question: "Which is NOT a valid form of ID for a physical notarization if the signer is unknown to the notary?",
        options: ["A valid government-issued driver's license.", "Two current documents with the signer's signature.", "A library card with a photo.", "The oath of one credible witness known to the notary."],
        correct: 2,
        explanation: "Acceptable forms of ID include valid government-issued ID with a photo and signature, two current documents with signatures, or a credible witness. A library card is not sufficient.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 56,
        question: "What is the primary justification for the proposed fee increase in Senate Bill S6268?",
        options: ["To align NY fees with national averages.", "To compensate notaries for stagnant fees and rising costs.", "To fund a new notary education program.", "To discourage individuals from becoming notaries."],
        correct: 1,
        explanation: "The justification for S6268 highlights that fees have been stagnant since 1991 despite increases in the costs notaries themselves must pay.",
        emoji: "📈",
        points: 10,
        category: "Fees"
    },
    {
        id: 57,
        question: "Under what circumstances might a person convicted of a crime be appointed a Notary?",
        options: ["Only if the crime was a traffic violation.", "If they obtain an executive pardon or a certificate of good conduct.", "Never, any conviction is an absolute bar.", "Only if they complete community service."],
        correct: 1,
        explanation: "A person convicted of a crime may be considered for appointment if they obtain an executive pardon, a certificate of relief from disabilities, or a certificate of good conduct.",
        emoji: "📜",
        points: 10,
        category: "Foundations"
    },
    {
        id: 58,
        question: "What is the purpose of 'identity proofing' in REN, according to NYS regulations?",
        options: ["To confirm the notary's identity.", "To verify the document's authenticity.", "To confirm the signer's identity via data sources.", "To ensure the signer has a valid email."],
        correct: 2,
        explanation: "Identity proofing is a process through which a third party confirms the identity of a signer by reviewing personal information from public and proprietary data sources.",
        emoji: "🕵️",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 59,
        question: "Which is NOT the unauthorized practice of law for a non-attorney Notary?",
        options: ["Giving immigration advice.", "Drafting a will for a client.", "Administering an oath to a deponent.", "Soliciting business for a lawyer."],
        correct: 2,
        explanation: "Administering oaths is a general power of a notary. The other options are considered the unauthorized practice of law.",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 60,
        question: "What is the maximum term of imprisonment for a Class A misdemeanor in NYS?",
        options: ["6 months", "1 year", "2 years", "4 years"],
        correct: 1,
        explanation: "Penal Law §70.15 defines the maximum term for a Class A misdemeanor as one year.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 61,
        question: "A notary is asked to notarize a document on a Sunday. Is this permissible?",
        options: ["No, notarial acts are prohibited on Sundays.", "Yes, a notary may administer an oath or take an acknowledgment.", "Only in an emergency.", "Only if not related to a civil proceeding."],
        correct: 1,
        explanation: "A notary may administer an oath or take an acknowledgment on a Sunday, but a deposition cannot be taken in a civil proceeding on that day.",
        emoji: "🗓️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 62,
        question: "What is the main purpose of the proposed 'inked thumbprint' in S.B. S398?",
        options: ["As an alternative signature.", "To add a biometric layer of security against deed theft.", "To verify the principal's age.", "To track the notary's notarizations."],
        correct: 1,
        explanation: "The proposed thumbprint requirement is a specific anti-fraud measure to add a biometric security layer to combat deed theft and aid law enforcement.",
        emoji: "👍",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 63,
        question: "If removed as a Commissioner of Deeds for NYC, can one be reappointed as a Notary?",
        options: ["Yes, after one year.", "No, they are ineligible for reappointment as either.", "Only if they pass a special exam.", "Only with a pardon from the Secretary of State."],
        correct: 1,
        explanation: "Persons removed from the office of Commissioner of Deeds for New York City are ineligible for reappointment to that office or for appointment as a Notary Public.",
        emoji: "🚫",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 64,
        question: "What's the fee to file a Certificate of Official Character in another NYS county?",
        options: ["$1.00", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "There is a fee of $10.00 to file the certificate of official character in another county clerk's office.",
        emoji: "🗄️",
        points: 10,
        category: "Fees"
    },
    {
        id: 65,
        question: "What term describes a formal declaration that the execution of an instrument is one's act and deed?",
        options: ["Affidavit", "Jurat", "Acknowledgment", "Deposition"],
        correct: 2,
        explanation: "An Acknowledgment is a formal declaration before an authorized officer by a person who has executed an instrument that such execution is their act and deed.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 66,
        question: "Which is a Class E felony under NY Penal Law for a public servant?",
        options: ["Official misconduct.", "Issuing a false certificate with intent to defraud.", "Refusal to officiate.", "Advertising without a proper disclaimer."],
        correct: 1,
        explanation: "Issuing a false certificate (Penal Law §175.40) is a Class E felony when a public servant issues it with intent to defraud.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 67,
        question: "What is the purpose of the mandatory education proposed in S.B. S398?",
        options: ["To teach real estate appraisal.", "To educate notaries on new duties for property conveyances.", "To provide legal advice on property law.", "To certify notaries as real estate agents."],
        correct: 1,
        explanation: "The proposed bill requires the Secretary of State to establish a mandatory educational program for notaries on their new duties concerning residential real property conveyances.",
        emoji: "🎓",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 68,
        question: "A Notary's commission expires. How long do they have to renew without re-taking the exam?",
        options: ["30 days", "3 months", "6 months", "1 year"],
        correct: 2,
        explanation: "Renewing notaries must take the exam if their commission has lapsed (expired) for more than six months.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 69,
        question: "What is the term for a written statement sworn to or affirmed before an authorized officer?",
        options: ["Acknowledgment", "Affidavit", "Deed", "Contract"],
        correct: 1,
        explanation: "An Affidavit is a written statement sworn to or affirmed before an officer authorized to administer an oath or affirmation.",
        emoji: "📄",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 70,
        question: "What is the maximum term of imprisonment for a Class D felony in NYS?",
        options: ["4 years", "7 years", "10 years", "15 years"],
        correct: 1,
        explanation: "Penal Law §70.00 defines the maximum term for a Class D felony as 7 years.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 71,
        question: "What is a key characteristic of an electronic notary's signature?",
        options: ["A physical stamp applied digitally.", "It's unique and linked to the record to detect alterations.", "It's easily transferable to other notaries.", "It's a scanned image of a handwritten signature."],
        correct: 1,
        explanation: "The electronic signature must be unique to the notary, independently verifiable, under their sole control, and linked to the record in a way that any subsequent alteration is detectable.",
        emoji: "🌐",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 72,
        question: "What's the fee for a Notary to file a certificate of official character in another county?",
        options: ["$1.00", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "There is a fee of $10.00 to file the certificate of official character in another county clerk's office.",
        emoji: "🗄️",
        points: 10,
        category: "Fees"
    },
    {
        id: 73,
        question: "What is the term for a person who signs an affidavit?",
        options: ["Deponent", "Affiant", "Grantor", "Principal"],
        correct: 1,
        explanation: "An Affiant is a person who makes and subscribes (signs) an affidavit.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 74,
        question: "Which item is NOT required to bring to the NYS Notary Public exam?",
        options: ["Government-issued photo ID.", "Check or money order for the fee.", "Copy of the Notary Public License Law booklet.", "Two #2 pencils."],
        correct: 2,
        explanation: "Reference materials like books are not allowed. You must bring ID, the fee, and pencils.",
        emoji: "🎒",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 75,
        question: "What is the consequence for a Notary found guilty of 'official misconduct'?",
        options: ["It is a Class D felony.", "It is a Class E felony.", "It is a Class A misdemeanor.", "Automatic removal from office."],
        correct: 2,
        explanation: "Official misconduct (Penal Law §195.00) is a Class A misdemeanor.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 76,
        question: "What is the purpose of 'credential analysis' in REN?",
        options: ["To analyze the notary's credentials.", "To validate a government ID via data sources.", "To verify the notary's digital certificate.", "To assess the signer's financial standing."],
        correct: 1,
        explanation: "Credential analysis is a process where a third-party service validates a government-issued identification presented by an individual through a review of public and proprietary data sources.",
        emoji: "🔍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 77,
        question: "What is the term for the clause in an affidavit stating when, where, and before whom it was sworn?",
        options: ["Acknowledgment", "Attestation Clause", "Jurat", "Venue"],
        correct: 2,
        explanation: "The Jurat is the clause in an affidavit stating when, where, and before whom it was sworn to or affirmed.",
        emoji: "📄",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 78,
        question: "What is the primary ID verification method for a remote online notarization if the signer is not personally known?",
        options: ["Relying on the signer's verbal affirmation.", "Using technology for ID presentation, credential analysis, and identity proofing.", "Requiring the signer to mail a copy of their ID.", "Verifying identity through a simple online search."],
        correct: 1,
        explanation: "For a remote appearance where the principal is not personally known, identity must be verified by communication technology that facilitates remote ID presentation, credential analysis, and identity proofing.",
        emoji: "💻",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 79,
        question: "What is the current fee for administering an oath, as per Executive Law §136?",
        options: ["$0.75", "$1.00", "$2.00", "$5.00"],
        correct: 2,
        explanation: "The fee for administering an oath or affirmation is two dollars.",
        emoji: "💵",
        points: 10,
        category: "Fees"
    },
    {
        id: 80,
        question: "What is the consequence for a notary who issues a false official certificate with intent to defraud?",
        options: ["It is a Class A misdemeanor.", "It is a Class E felony.", "It results in a civil penalty only.", "It leads to immediate suspension."],
        correct: 1,
        explanation: "Issuing a false certificate (Penal Law §175.40) with intent to defraud is a Class E felony.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 81,
        question: "What is the primary role of the Secretary of State regarding Notaries Public?",
        options: ["To provide legal advice to notaries.", "To administer the Notary exam.", "To appoint and commission notaries.", "To investigate all complaints."],
        correct: 2,
        explanation: "Notaries public are commissioned by the Secretary of State, who has the authority to appoint and commission them.",
        emoji: "🏛️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 82,
        question: "Which is a prohibited activity for a non-attorney Notary?",
        options: ["Taking an acknowledgment for a deed.", "Administering an oath for an affidavit.", "Preparing a bill of sale for compensation.", "Protesting a promissory note."],
        correct: 2,
        explanation: "A notary who is not an attorney may not draw any kind of legal papers for compensation, including a bill of sale.",
        emoji: "🚫",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 83,
        question: "Per S.B. S398, what's the consequence if a notary hasn't completed the mandatory real property education?",
        options: ["A civil penalty.", "They are unqualified to certify such an instrument, and it is voidable.", "They must retake the notary exam.", "They are prohibited from all notarial acts for one year."],
        correct: 1,
        explanation: "The proposed bill states that a notary who has not completed the program is unqualified to certify such acknowledgments, and any non-compliant instrument would be voidable.",
        emoji: "🎓",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 84,
        question: "What is the fee for renewing a Notary Public commission in New York?",
        options: ["$15.00", "$25.00", "$60.00", "$100.00"],
        correct: 2,
        explanation: "The renewal fee is $60.00.",
        emoji: "💰",
        points: 10,
        category: "Fees"
    },
    {
        id: 85,
        question: "What is a 'Protest' in the context of notarial duties?",
        options: ["An acknowledgment of a debt.", "A deposition about a financial matter.", "A formal statement of non-payment of a bill or note.", "An affidavit of financial hardship."],
        correct: 2,
        explanation: "A Protest is a formal statement in writing by a notary public that a bill or note was presented for payment or acceptance and was refused.",
        emoji: "📉",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 86,
        question: "What is the fee to file a Certificate of Official Character in a different county?",
        options: ["$1.00", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "There is a fee of $10.00 to file the certificate of official character in another county clerk's office.",
        emoji: "🗄️",
        points: 10,
        category: "Fees"
    },
    {
        id: 87,
        question: "Which is a valid form of ID for an in-person notarization if the signer is unknown?",
        options: ["A current utility bill.", "A private university student ID.", "A valid US Passport.", "A signed credit card."],
        correct: 2,
        explanation: "A valid US Passport is a government-issued identification with a photograph, physical description, and signature, making it an acceptable form of ID.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 88,
        question: "What is the significance of 'personal appearance' in NYS Notary law?",
        options: ["It is only required for electronic notarizations.", "It ensures the notary can verify the signer's identity and willingness.", "It allows the notary to provide legal advice.", "It is only required for real property documents."],
        correct: 1,
        explanation: "The requirement of personal appearance is a cornerstone of notarial integrity, ensuring the notary can directly verify the signer's identity and that they are acting willingly.",
        emoji: "👤",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 89,
        question: "What is the maximum term of imprisonment for a Class E felony in NYS?",
        options: ["1 year", "2 years", "4 years", "7 years"],
        correct: 2,
        explanation: "Penal Law §70.00 defines the maximum term for a Class E felony as 4 years.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 90,
        question: "Which is a reason for a Notary to be suspended or removed from office?",
        options: ["Refusing to notarize for a family member.", "Misstatement in their application.", "Charging the statutory fee.", "Failing to renew 90 days before expiration."],
        correct: 1,
        explanation: "A notary can be suspended or removed from office for misconduct, which includes making a material misstatement in their application.",
        emoji: "❌",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 91,
        question: "What is the purpose of the 'colloquy form' proposed in Senate Bill S398?",
        options: ["To record the notary's observations.", "To ensure the principal understands the transaction and signs voluntarily.", "To document notary fees.", "To serve as a legal aid application."],
        correct: 1,
        explanation: "The proposed colloquy form includes specific questions to confirm the principal's understanding of the transaction and that their signature is given of their own free will.",
        emoji: "🗣️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 92,
        question: "Who is exempt from paying the application fee to become a Notary in NYS?",
        options: ["No one is exempt.", "Attorneys licensed in NYS.", "Court clerks of the Unified Court System.", "County Clerk staff designated to serve the public."],
        correct: 3,
        explanation: "County Law §534 states that county clerks may appoint staff members to provide free notarization services, and these appointees are exempt from examination and application fees.",
        emoji: "🆓",
        points: 10,
        category: "Fees"
    },
    {
        id: 93,
        question: "What is the term for the testimony of a witness taken out of court under oath?",
        options: ["Acknowledgment", "Affidavit", "Deposition", "Protest"],
        correct: 2,
        explanation: "A Deposition is the testimony of a witness taken out of court under oath or affirmation.",
        emoji: "🎤",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 94,
        question: "What is the primary difference between an 'oath' and an 'affirmation'?",
        options: ["An oath is legally binding, an affirmation is not.", "An oath swears to a divine being; an affirmation is a solemn declaration without religious reference.", "An oath is for legal documents; an affirmation is for personal statements.", "An oath requires a witness; an affirmation does not."],
        correct: 1,
        explanation: "An affirmation is legally equivalent to an oath. It is a solemn declaration for those who conscientiously decline taking an oath, which often involves swearing to a divine being.",
        emoji: "🙏",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 95,
        question: "If a NYS Legislator accepts a paid notary appointment, what is the consequence?",
        options: ["They must resign from the Legislature.", "They must decline the notary compensation.", "Their notary commission is revoked.", "Their seat in the Legislature is vacated."],
        correct: 3,
        explanation: "Acceptance of a notary public appointment by a member of the Legislature, if they receive compensation for it, vacates their legislative seat.",
        emoji: "🏛️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 96,
        question: "What does 'personal knowledge' mean as a method of ID verification?",
        options: ["The notary has seen the signer's ID before.", "The notary has a long-standing acquaintance with the signer, ensuring their identity.", "The notary recognizes the signer from a brief encounter.", "The notary has reviewed the signer's social media."],
        correct: 1,
        explanation: "Personal knowledge implies a level of certainty of identity based on a long-standing relationship, not just a brief or past encounter.",
        emoji: "🤝",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 97,
        question: "What is the purpose of the $10.00 fee for a change of name or address?",
        options: ["To cover the cost of a new ID card.", "To update the notary's record with the Department of State.", "To penalize notaries for frequent changes.", "To fund notary training programs."],
        correct: 1,
        explanation: "The $10.00 fee is an administrative fee to cover the cost of updating the notary's record with the Department of State.",
        emoji: "📝",
        points: 10,
        category: "Fees"
    },
    {
        id: 98,
        question: "What is the significance of the phrase 'unless the defect was known or apparent' in Exec. Law §142-a?",
        options: ["All defects invalidate the act.", "Unknown or non-apparent defects generally do not invalidate the act.", "It refers to defects in the document itself.", "It allows the notary to correct any defect later."],
        correct: 1,
        explanation: "This provision acts as a safeguard, protecting the legal certainty of documents from being invalidated by minor, unknown technical errors on the part of the notary.",
        emoji: "✅",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 99,
        question: "What is the primary purpose of the official syllabus for the Notary exam?",
        options: ["To list all licensed notaries.", "To outline all topics covered on the exam to assist in preparation.", "To provide legal advice to applicants.", "To serve as the application form."],
        correct: 1,
        explanation: "The syllabus is designed to outline all topics covered on the examination and guide an applicant's preparation.",
        emoji: "📚",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 100,
        question: "What does 'acknowledgment' mean in the context of a notary's duties?",
        options: ["The notary's confirmation that they read the document.", "A formal declaration by a signer that the execution of an instrument is their act and deed.", "The notary's signature confirming the document's accuracy.", "A verbal agreement witnessed by the notary."],
        correct: 1,
        explanation: "An Acknowledgment is a formal declaration before an authorized public officer by a person who has executed an instrument that such execution is their act and deed.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 101,
        question: "What is the specific maximum definite sentence of imprisonment for a Class A misdemeanor under New York Penal Law?",
        options: ["Six months", "One year", "Two years", "Four years"],
        correct: 1,
        explanation: "Penal Law §70.15 defines the maximum definite sentence for a Class A misdemeanor as one year.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 102,
        question: "A New York Notary Public's commission is issued for a term of four years. When does this term typically begin?",
        options: ["On the date the application is mailed", "On the date the notary passes the exam", "On the date the commission is issued by the Secretary of State", "On January 1st of the following year"],
        correct: 2,
        explanation: "The term of appointment for a notary public typically commences on the date the commission is issued by the Secretary of State.",
        emoji: "🗓️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 103,
        question: "Which of the following describes the geographical extent of a New York Notary Public's jurisdiction?",
        options: ["Limited to the county of commission", "Co-extensive with the boundaries of New York State", "Extends only to contiguous states", "Limited to the city of residence"],
        correct: 1,
        explanation: "The jurisdiction of a Notary Public in New York State is co-extensive with the boundaries of the state.",
        emoji: "🗺️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 104,
        question: "If a NY Notary moves out of state and does NOT maintain an office in NY, what is the immediate consequence?",
        options: ["The commission remains valid until expiration", "The commission is suspended for 90 days", "The notary vacates their office as a notary public", "They must file a change of address within 10 days"],
        correct: 2,
        explanation: "A notary public who is a resident of New York State and moves out of the state and who does not retain an office or place of business in this State shall vacate his or her office as a notary public.",
        emoji: "✈️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 105,
        question: "As of June 2025, if a Notary opts to use a seal, what is NOT required on the seal itself?",
        options: ["The notary's name", "The words 'Notary Public State of New York'", "The notary's home address", "The county of qualification"],
        correct: 2,
        explanation: "While NYS does not require a seal, if used, it should clearly identify the notary's name, title, county, and commission expiration. The home address is not a required element.",
        emoji: "씰",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 106,
        question: "In electronic notarization, what technology is mandated for real-time interaction?",
        options: ["Email correspondence only", "Secure audio-visual communication technology", "Text messaging with photo verification", "Pre-recorded video messages"],
        correct: 1,
        explanation: "Electronic notarial acts must be performed using secure audio-video communication technology that allows for real-time interaction between the notary and the signer.",
        emoji: "💻",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 107,
        question: "Which describes 'satisfactory evidence of identity' for an in-person act if the notary does not personally know the signer?",
        options: ["A business card", "A current utility bill", "A valid government-issued ID with photo, description, and signature", "A verbal statement from a friend"],
        correct: 2,
        explanation: "Satisfactory evidence of identity typically includes a valid, unexpired government-issued identification credential containing the individual's photograph, signature, and physical description.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 108,
        question: "When is a New York Notary Public authorized to administer an oath to a public officer?",
        options: ["Never, only judges can", "Only if the notary is also a licensed attorney", "Yes, a notary is permitted to administer the oath of a public officer", "Only for state-level officials"],
        correct: 2,
        explanation: "Public Officers Law §10 permits a notary public to administer the oath of a public officer.",
        emoji: "🏛️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 109,
        question: "What is the statutory fee for protesting the non-payment of a note?",
        options: ["$0.50", "$0.75", "$1.00", "$2.00"],
        correct: 1,
        explanation: "A notary public may charge 75 cents for the protest for the non-payment of any note or for the non-acceptance or non-payment of any bill of exchange, check, or draft.",
        emoji: "📉",
        points: 10,
        category: "Fees"
    },
    {
        id: 110,
        question: "A non-attorney Notary is asked to prepare legal papers for a divorce. What is the appropriate action?",
        options: ["Assist, but charge a reduced fee", "Decline, as it's the unauthorized practice of law", "Assist, with a signed waiver of liability", "Refer the individual to a court clerk"],
        correct: 1,
        explanation: "A non-attorney notary public is prohibited from preparing legal papers such as those for a divorce, as this constitutes the unauthorized practice of law.",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 111,
        question: "For the mandatory journal, what is required if ID was based on a government-issued ID?",
        options: ["Only the name of the issuing agency", "The type of credential used", "The full ID number", "A photograph of the ID"],
        correct: 1,
        explanation: "The journal must include the 'type of credential used for identification' (e.g., 'US Passport' or 'NYS Driver's License'). It does not require the full ID number.",
        emoji: "📓",
        points: 10,
        category: "Journaling"
    },
    {
        id: 112,
        question: "If a document signer for an electronic notarization is outside the U.S., what additional condition applies?",
        options: ["The notary cannot notarize", "The act is permitted if lawful where the signer is located and not against U.S. law", "The signer must first obtain an Apostille", "The notary must get special permission from the U.S. Dept. of State"],
        correct: 1,
        explanation: "An electronic notary may perform an act for a remotely located individual outside the United States if the act is not prohibited in the foreign jurisdiction and does not violate federal law.",
        emoji: "🌐",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 113,
        question: "What is the fee for a Commissioner of Deeds in NYC to apply for a Notary commission?",
        options: ["$0 (exempt)", "$15.00", "$60.00", "$100.00"],
        correct: 2,
        explanation: "Commissioners of Deeds in New York City are not exempt from the $60 application fee for a Notary Public commission, though they are exempt from the exam.",
        emoji: "💰",
        points: 10,
        category: "Fees"
    },
    {
        id: 114,
        question: "A notary is an employee and minor stockholder. Can they notarize a company contract they are not a party to?",
        options: ["No, it's an inherent conflict of interest", "Yes, if not personally a party to the instrument", "Only if they disclose their stockholder status", "Only if the employer pays an additional fee"],
        correct: 1,
        explanation: "Executive Law §138 allows notaries who are stockholders or employees of a corporation to take acknowledgments for that corporation, provided they are not an individual party to the instrument.",
        emoji: "🏢",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 115,
        question: "What must be attached to an electronic record to detect subsequent alterations?",
        options: ["The notary's email address", "The notary's electronic signature", "A timestamp of when the document was downloaded", "A link to the notary's website"],
        correct: 1,
        explanation: "An electronic signature must be attached to or logically associated with the electronic record in a manner that detects any subsequent alteration to the electronic record.",
        emoji: "🔒",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 116,
        question: "What is the direct consequence if a Notary performs acts before filing their oath of office?",
        options: ["The acts are automatically void", "The notary public is guilty of a misdemeanor", "A civil penalty only", "Their commission is suspended"],
        correct: 1,
        explanation: "Public Officers Law §15 states that acting before filing an oath of office is a misdemeanor.",
        emoji: "✋",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 117,
        question: "A notary is asked to notarize by a visually impaired individual who can provide proper ID and give verbal assent. What should the notary do?",
        options: ["Refuse, as visual signature confirmation is required", "Proceed, ensuring willingness and identity are verified", "Require an additional witness", "Refer the individual to an attorney"],
        correct: 1,
        explanation: "A notary should accommodate individuals with disabilities as long as the essential elements of the notarial act (identity verification, willingness, understanding) can be satisfied.",
        emoji: "🤝",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 118,
        question: "What condition can cause an otherwise valid notarial act to be deemed invalid due to a defect in the notary's authority?",
        options: ["The notary was charging a fee", "The defect was known or apparent on the certificate", "The notarization took place on a holiday", "The notary used blue ink instead of black"],
        correct: 1,
        explanation: "Executive Law §142-a states that acts are generally valid 'notwithstanding certain defects' unless the defect was known or apparent on the certificate itself.",
        emoji: "⚠️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 119,
        question: "Which is NOT an acceptable form of ID for an in-person notarization where the signer is unknown?",
        options: ["A United States military ID card", "A NYS non-driver ID card", "A Social Security card", "A valid passport"],
        correct: 2,
        explanation: "A Social Security card is generally not accepted as a primary form of identification for notarization as it lacks a photo for visual comparison.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 120,
        question: "What is the fee for each additional notice of protest (up to five) that a Notary may charge?",
        options: ["$0.05", "$0.10", "$0.25", "$0.50"],
        correct: 1,
        explanation: "The statutory fee is 10 cents for each notice of protest, with a limit of five notices.",
        emoji: "🪙",
        points: 10,
        category: "Fees"
    },
    {
        id: 121,
        question: "What is the purpose of filing a Certificate of Official Character in another county?",
        options: ["To receive a new commission", "To charge higher fees in that county", "To enable that county's clerk to authenticate the notary's signature", "To enroll in additional training"],
        correct: 2,
        explanation: "Filing a Certificate of Official Character in another county allows that county's clerk to authenticate the notary's signature for documents requiring such verification.",
        emoji: "🗄️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 122,
        question: "A Notary is requested to notarize by a principal who only speaks a language the notary does not. What should the notary do?",
        options: ["Proceed, assuming the principal understands", "Refuse, as direct communication is required", "Use an online translation tool", "Require a translator who is also a notary"],
        correct: 1,
        explanation: "A notary must be able to communicate directly with the signer to ascertain identity, willingness, and understanding. If there's a language barrier, the notary should refuse.",
        emoji: "🗣️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 123,
        question: "Which section of the NY Executive Law primarily outlines the powers and duties of a Notary Public?",
        options: ["§130", "§135", "§137", "§142-a"],
        correct: 1,
        explanation: "Executive Law §135 specifically details the 'Powers and Duties; in general; of notaries public who are attorneys at law.'",
        emoji: "📜",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 124,
        question: "A notary is asked to certify a copy of a birth certificate. What is the appropriate action?",
        options: ["Certify the copy as it is a public record", "Refuse, as notaries in NYS cannot certify copies of vital records", "Certify it, but note 'true copy' in the journal", "Refer the individual to the County Clerk"],
        correct: 1,
        explanation: "New York Notaries Public are generally not authorized to certify copies of public records such as birth certificates. That is done by the custodian of the original record.",
        emoji: "🚫",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 125,
        question: "What is the main reason an electronic notary must maintain sole control of their electronic signature?",
        options: ["To prevent others from accessing their email", "To ensure the integrity and security of the electronic notarial act", "To limit the number of documents notarized daily", "To comply with digital waste regulations"],
        correct: 1,
        explanation: "The electronic signature must be under the sole control of the electronic notary public to ensure the security, integrity, and authenticity of the electronic notarial act.",
        emoji: "🔒",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 126,
        question: "Which action could lead to disciplinary action by the Secretary of State?",
        options: ["Charging the maximum allowable fee", "Refusing to notarize due to suspected fraud", "Making a misstatement in the notary application", "Notarizing for a long-time acquaintance"],
        correct: 2,
        explanation: "Misstatements, false oaths, or fraud on the notary application or in the performance of duties are grounds for disciplinary action, including suspension or removal.",
        emoji: "❌",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 127,
        question: "What is a solemn declaration for a person who declines taking an oath but wishes to be legally bound?",
        options: ["Affidavit", "Attestation", "Affirmation", "Deposition"],
        correct: 2,
        explanation: "An affirmation is a solemn declaration, equivalent to an oath, made by a person who conscientiously declines taking an oath.",
        emoji: "🙏",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 128,
        question: "According to the mandatory journal requirements, what is NOT a required detail for each act?",
        options: ["The type of notarial act", "The approximate time of the act", "The principal's mother's maiden name", "The method used to identify the principal"],
        correct: 2,
        explanation: "The journal requirements include date, time, type of act, name/address, credential type, and verification procedures. Sensitive personal data like a mother's maiden name is not required.",
        emoji: "📓",
        points: 10,
        category: "Journaling"
    },
    {
        id: 129,
        question: "If a Notary's commission has expired for 8 months, what must they do to be re-commissioned?",
        options: ["Pay a higher renewal fee", "Simply submit a renewal application", "Retake and pass the Notary Public examination", "Complete continuing education hours"],
        correct: 2,
        explanation: "If a Notary Public's commission has expired for more than six months, they must retake and pass the Notary Public examination.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 130,
        question: "In electronic notarization, what is the third-party process that validates a government ID via data sources?",
        options: ["Biometric scanning", "Credential analysis", "Notary certification", "Witness authentication"],
        correct: 1,
        explanation: "Credential analysis is a process where a third-party service validates a government-issued identification presented by an individual through a review of public and proprietary data sources.",
        emoji: "🔍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 131,
        question: "A Notary is asked to notarize a signature on a document written in a language they do not understand. What should they do?",
        options: ["Proceed, as long as identity is confirmed", "Refuse, as the notary cannot ascertain the document's content", "Require an official translation", "Advise the signer to find another notary"],
        correct: 1,
        explanation: "A notary should refuse to notarize if they cannot understand the document's content, as they cannot confirm the signer's understanding or that the act is appropriate.",
        emoji: "🗣️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 132,
        question: "What is an Apostille?",
        options: ["A verification stamp", "A consular seal", "A certificate authenticating a public official's signature for foreign use", "A notarial attestation"],
        correct: 2,
        explanation: "An Apostille is a certificate issued by the Secretary of State that authenticates the signature of a public official (like a Notary) for use in countries party to the Hague Apostille Convention.",
        emoji: "🌍",
        points: 10,
        category: "Foundations"
    },
    {
        id: 133,
        question: "What must be used for secure transfer of electronic records in REN?",
        options: ["Encrypted email only", "Communication technology that meets state security standards", "Secure postal mail", "Any video conferencing platform"],
        correct: 1,
        explanation: "The communication technology used for electronic notarization must ensure the security, integrity, and proper transmission of the electronic record.",
        emoji: "🔒",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 134,
        question: "A Notary receives notice their application contained a misstatement. What action may the Secretary of State take?",
        options: ["Issue a civil fine only", "Revoke the commission without a hearing", "Suspend or remove the notary from office after a hearing", "Require the notary to retake the exam"],
        correct: 2,
        explanation: "The Secretary of State has the power to suspend or remove a notary public for misstatement in their application after affording the notary due process (e.g., a hearing).",
        emoji: "❌",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 135,
        question: "What is the fee for a duplicate Notary Public ID card from the NY Department of State?",
        options: ["$0", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "A $10.00 non-refundable fee is required for a duplicate lost, destroyed, or damaged ID card.",
        emoji: "💳",
        points: 10,
        category: "Fees"
    },
    {
        id: 136,
        question: "Which describes the proper procedure for administering an oath?",
        options: ["Affiant can verbally confirm later", "It must be an unequivocal and present act in the notary's presence", "The notary can administer it over a voice call", "The notary must touch a sacred text"],
        correct: 1,
        explanation: "An oath or affirmation must be an unequivocal and present act by which the affiant consciously takes upon themselves the obligation of an oath in the presence of an authorized officer.",
        emoji: "✋",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 137,
        question: "What principle advises a Notary to avoid acting if they have a direct financial interest?",
        options: ["Pecuniary interest", "Conflict of duty", "Impartiality clause", "Jurisdictional limitation"],
        correct: 0,
        explanation: "A notary is disqualified from acting in cases where they are a party to or directly and pecuniarily interested in the transaction.",
        emoji: "💰",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 138,
        question: "According to current NYS law, how long are the results of the Notary exam valid?",
        options: ["Six months", "One year", "Two years", "Four years"],
        correct: 2,
        explanation: "Examination results are valid for a period of two years.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 139,
        question: "What is specifically prohibited for a non-attorney Notary when advertising in another language?",
        options: ["Stating their name and commission expiration", "Using terms like 'notario publico' without a disclaimer", "Advertising their hours", "Listing their fees"],
        correct: 1,
        explanation: "Advertising in a foreign language using terms that imply the notary is an attorney (such as 'notario publico') is prohibited without a specific disclaimer stating they are not an attorney.",
        emoji: "🌐",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 140,
        question: "In REN, what must be used with credential analysis to confirm identity if the signer is unknown to the notary?",
        options: ["A personal interview with family", "Identity proofing", "A sworn affidavit from police", "A copy of a credit report"],
        correct: 1,
        explanation: "For electronic notarial acts with remotely located individuals not personally known, the notary must use communication technology that facilitates both credential analysis and identity proofing.",
        emoji: "🕵️",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 141,
        question: "What is the definition of 'jurat' in notarial practice?",
        options: ["Certifying a copy", "The declaration of a subscribing witness", "The clause in an affidavit stating when, where, and before whom it was sworn", "Authenticating a notary's signature"],
        correct: 2,
        explanation: "A jurat is the clause in an affidavit stating when, where, and before whom it was sworn to or affirmed.",
        emoji: "📄",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 142,
        question: "If a Notary knowingly commits forgery in the second degree, what is the felony classification?",
        options: ["Class A felony", "Class B felony", "Class D felony", "Class E felony"],
        correct: 2,
        explanation: "Forgery in the second degree (§170.10 Penal Law) is classified as a Class D felony.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 143,
        question: "Which statement is true regarding a NY Notary's duty to keep a journal?",
        options: ["Optional for traditional notaries", "Mandatory for ALL notarial acts by ALL notaries as of Jan 25, 2023", "Only required if a fee is charged", "Recommended but not legally required"],
        correct: 1,
        explanation: "The requirement to maintain a journal became mandatory for all notarial acts performed by all notaries (traditional and electronic) as of January 25, 2023.",
        emoji: "📓",
        points: 10,
        category: "Journaling"
    },
    {
        id: 144,
        question: "What must a NY Notary affix below their signature, in black ink?",
        options: ["Name, home address, and signature", "Name, 'Notary Public State of New York,' county, and expiration date", "Notary ID number and document type", "Only their signature and the date"],
        correct: 1,
        explanation: "Executive Law §137 requires the notary to affix their name, 'Notary Public State of New York,' county of original qualification, and commission expiration date below their signature.",
        emoji: "✍️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 145,
        question: "What is the fee for an initial Notary Public application in New York?",
        options: ["$15.00", "$25.00", "$60.00", "$75.00"],
        correct: 2,
        explanation: "The initial application fee for a Notary Public commission is $60.00.",
        emoji: "💰",
        points: 10,
        category: "Fees"
    },
    {
        id: 146,
        question: "What is the penalty for a NY Notary guilty of 'official misconduct' under Penal Law §195.00?",
        options: ["A Class D felony", "A Class E felony", "A Class A misdemeanor", "Immediate revocation"],
        correct: 2,
        explanation: "Official misconduct (§195.00 Penal Law) is classified as a Class A misdemeanor.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 147,
        question: "How far in advance can one typically begin the online renewal process for a Notary commission?",
        options: ["30 days before expiration", "60 days before expiration", "90 days before expiration", "6 months before expiration"],
        correct: 2,
        explanation: "Notary Public commissions can typically be renewed up to 90 days prior to their expiration date through the New York Business Express online portal.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 148,
        question: "What is the required retention period for the audio-visual recording of an electronic notarial act?",
        options: ["3 years", "5 years", "7 years", "10 years"],
        correct: 3,
        explanation: "Electronic notaries are required to create and retain an audio-visual recording of every electronic notarial act for a period of at least 10 years.",
        emoji: "🎥",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 149,
        question: "Which statement is true regarding the use of a seal by a Notary in NYS?",
        options: ["A seal is mandatory for all acts", "A seal is required only for electronic notarizations", "A seal is not required, but if used, must meet content requirements", "A seal must be registered with the County Clerk"],
        correct: 2,
        explanation: "New York State law does not mandate the use of a seal for Notaries Public. However, if a seal is used, it must legibly include specific identifying information.",
        emoji: "씰",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 150,
        question: "What type of document would NOT require an inked thumbprint in the journal, according to current NYS law?",
        options: ["A real property conveyance", "A power of attorney", "A simple affidavit", "None of the above; thumbprints are not currently required"],
        correct: 3,
        explanation: "As of June 2025, New York State law does NOT currently require inked thumbprints in the notary journal for any type of transaction. Proposed legislation suggests it, but it is not law.",
        emoji: "👍",
        points: 10,
        category: "Journaling"
    }
];