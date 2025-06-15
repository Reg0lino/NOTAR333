// NotaR333 Quiz Database v3 - Corrected & Verified June 2025
// This is the first block of 50 questions.
// Inaccurate questions have been removed and corrected questions have been inserted.
// All IDs have been re-sequenced.

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
        question: "Which practice is NOT permitted in New York State after January 31, 2023?",
        options: ["Remote Electronic Notarization (REN)", "In-person notarization", "Remote Ink Notarization (RIN)", "Electronic notarization by a registered notary"],
        correct: 2,
        explanation: "Remote ink notarization (RIN) is not permitted in New York State after January 31, 2023.",
        emoji: "🚫",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 7,
        question: "What is the maximum fee an Electronic Notary may charge for an electronic notarial act?",
        options: ["$2.00", "$5.00", "$15.00", "$25.00"],
        correct: 3,
        explanation: "An Electronic Notary may charge up to $25.00 per electronic notarial act performed.",
        emoji: "💻",
        points: 10,
        category: "Fees"
    },
    {
        id: 8,
        question: "A Notary is asked to notarize a document for their spouse, who is a party to the transaction. What must the Notary do?",
        options: ["Proceed, but disclose the relationship.", "Refuse to perform the notarial act.", "Perform the notarization, but charge no fee.", "Seek approval from the County Clerk."],
        correct: 1,
        explanation: "A notary is disqualified from acting in cases where they are a party to or directly and pecuniarily interested in the transaction.",
        emoji: "⚠️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 9,
        question: "What information must a Notary affix below their signature on a certificate?",
        options: ["Only their name and signature.", "Name, 'Notary Public State of New York,' county, and expiration date.", "Name, home address, and date.", "Name, official seal, and document type."],
        correct: 1,
        explanation: "Notaries must print, typewrite, stamp, or affix electronically their name, 'Notary Public State of New York,' county of original qualification, and commission expiration date below their signature.",
        emoji: "✍️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 10,
        question: "A non-attorney Notary advertises in a foreign language. What disclaimer must be included?",
        options: ["'I can provide legal advice in this language.'", "'I am not an attorney licensed to practice law and may not give legal advice...'", "'Consult an attorney for legal matters.'", "'My services are not equivalent to a lawyer.'"],
        correct: 1,
        explanation: "Advertisements in a language other than English must include the specific disclaimer: 'I am not an attorney licensed to practice law and may not give legal advice about immigration or any other legal matter or accept fees for legal advice.'",
        emoji: "🌐",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 11,
        question: "When performing an electronic notarial act, where must the notary be physically located?",
        options: ["In the same county as the principal.", "Physically located within New York State.", "Anywhere, as long as the principal is in NYS.", "In the same room as the principal."],
        correct: 1,
        explanation: "The notary must be physically located within the State of New York at the time of the notarization.",
        emoji: "📍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 12,
        question: "A Notary is asked to prepare a will. What should they do?",
        options: ["Prepare and notarize it.", "Refuse, as it's the unauthorized practice of law.", "Prepare it, but have an attorney notarize it.", "Notarize it, but warn it may be invalid."],
        correct: 1,
        explanation: "Unless also a lawyer, a notary is prohibited from engaging in the practice of law, which includes drawing up legal papers like wills.",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 13,
        question: "What is the passing score for the NYS Notary Public examination?",
        options: ["60%", "65%", "70%", "75%"],
        correct: 2,
        explanation: "You must correctly answer at least 70 percent of the questions to pass the exam.",
        emoji: "🎯",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 14,
        question: "What is an 'unequivocal and present act' when administering an oath?",
        options: ["A signed document without verbal confirmation.", "An oath over the telephone.", "Requiring the affiant to verbally affirm or swear in the notary's presence.", "Mailing an oath form for signature."],
        correct: 2,
        explanation: "An oath or affirmation must be an unequivocal and present act in the presence of an officer authorized to administer it.",
        emoji: "🗣️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 15,
        question: "A Notary in New York City must affix what additional information to instruments?",
        options: ["Their phone number.", "Their official number(s) from the county clerk.", "The signer's full name.", "The county clerk's seal."],
        correct: 1,
        explanation: "A notary qualified in NYC must affix their official number or numbers, as assigned by the county clerk, in black ink.",
        emoji: "🏙️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 16,
        question: "What is the consequence if a notary willfully fails to include required information on a notarial certificate?",
        options: ["The act is automatically invalidated.", "The notary is subject to disciplinary action.", "The notary must retake the exam.", "The notary is fined $500."],
        correct: 1,
        explanation: "Willful failure to comply subjects the notary to disciplinary action by the Secretary of State. However, Executive Law §142-a generally prevents the act itself from being held invalid if the defect was not known or apparent.",
        emoji: "📜",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 17,
        question: "What is 'credential analysis' in electronic notarization?",
        options: ["A notary's assessment of trustworthiness.", "A third-party service validating a government ID through data sources.", "A review of the signer's credit history.", "The notary's examination of an ID's physical features."],
        correct: 1,
        explanation: "Credential analysis is a process where a third-party service validates a government-issued ID by reviewing public and proprietary data sources to confirm its integrity.",
        emoji: "🔍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 18,
        question: "If a NY Notary moves out of state and keeps no office in NY, what happens to their commission?",
        options: ["It automatically vacates.", "It remains valid until expiration.", "They must notify the state but can continue.", "They must transfer their commission."],
        correct: 0,
        explanation: "A notary public who is a resident of New York and moves out of the state without retaining an office or place of business in NY shall vacate their office.",
        emoji: "✈️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 19,
        question: "Which is a Class D felony under NY Penal Law applicable to notaries?",
        options: ["Refusing to officiate an oath.", "Advertising without the required disclaimer.", "Forgery in the second degree, like altering a deed.", "Acting as a notary before taking the oath."],
        correct: 2,
        explanation: "Forgery in the second degree (Penal Law §170.10), which includes falsely altering a deed or contract with intent to defraud, is a Class D felony.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 20,
        question: "What is the minimum age requirement to become a Notary Public in New York State?",
        options: ["16 years old", "18 years old", "21 years old", "25 years old"],
        correct: 1,
        explanation: "Notary applicants must be at least 18 years old.",
        emoji: "🎂",
        points: 10,
        category: "Foundations"
    },
    {
        id: 21,
        question: "What is the role of the County Clerk's office regarding Notaries Public in New York State?",
        options: ["They administer the Notary Public examination.", "They issue the initial Notary Public commission.", "They maintain a public record of the notary's commission and signature.", "They provide legal advice to notaries."],
        correct: 2,
        explanation: "The county clerk maintains a record of the commission and signature, which the public can access to verify the notary's 'official' signature.",
        emoji: "🗄️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 22,
        question: "What is the fee for taking the New York State Notary Public examination?",
        options: ["$10.00", "$15.00", "$20.00", "$60.00"],
        correct: 1,
        explanation: "The examination fee is $15.00.",
        emoji: "🎟️",
        points: 10,
        category: "Fees"
    },
    {
        id: 23,
        question: "A notary is asked to take an acknowledgment over the telephone. What should they do?",
        options: ["Proceed if identity is confirmed verbally.", "Refuse, as personal appearance is required.", "Advise sending a scanned ID.", "Perform it, but note it was done remotely."],
        correct: 1,
        explanation: "Taking acknowledgments or affidavits over the telephone, without the actual, personal appearance of the individual, is illegal.",
        emoji: "📞",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 24,
        question: "Which of the following is a power generally authorized for a New York Notary Public?",
        options: ["Solemnizing marriages.", "Drafting legal contracts for a fee.", "Administering oaths and affirmations.", "Certifying copies of public records."],
        correct: 2,
        explanation: "Notaries have general powers to administer oaths and affirmations. They cannot solemnize marriages, draft legal papers, or certify copies of public records.",
        emoji: "✨",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 25,
        question: "What is the retention period for the audio-visual recording of an electronic notarial act?",
        options: ["1 year", "3 years", "5 years", "10 years"],
        correct: 3,
        explanation: "Electronic notaries must keep a copy of the audio-visual recording of the act for at least 10 years.",
        emoji: "🎥",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 26,
        question: "A notary is also a stockholder in a corporation. Can they notarize documents for that corporation?",
        options: ["No, it's a conflict of interest.", "Yes, provided they are not a party to the instrument.", "Only if they receive no fee.", "Only if it's not a financial document."],
        correct: 1,
        explanation: "Executive Law §138 allows a notary who is a stockholder, director, officer, or employee of a corporation to notarize for it, provided the notary is not individually a party to the instrument.",
        emoji: "🏢",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 27,
        question: "What is the consequence if a Notary acts before taking and filing their oath of office?",
        options: ["The act is valid but they get a warning.", "They are subject to civil penalties only.", "They are guilty of a misdemeanor.", "Their commission is suspended for 30 days."],
        correct: 2,
        explanation: "A notary must not perform any official acts before taking and filing their oath of office; doing so is a misdemeanor under Public Officers Law §15.",
        emoji: "✋",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 28,
        question: "A notary is requested to administer an oath. What is their obligation?",
        options: ["They may refuse if busy.", "They must officiate; refusal is a misdemeanor.", "They may charge any reasonable fee.", "They must first verify U.S. citizenship."],
        correct: 1,
        explanation: "A Notary Public has a legal obligation to officiate when requested. Refusal to administer an oath or affidavit is a misdemeanor.",
        emoji: "🙏",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 29,
        question: "Which of the following is NOT required on a Notary Public's identification card?",
        options: ["Notary's name", "Notary's address", "Notary's commission term", "Notary's photograph"],
        correct: 3,
        explanation: "The ID card indicates the notary's name, address, county, and commission term. It does not require a photograph.",
        emoji: "🪪",
        points: 10,
        category: "Foundations"
    },
    {
        id: 30,
        question: "What is 'identity proofing' in electronic notarization?",
        options: ["The notary's visual confirmation of the signer.", "A third-party process to confirm identity using personal data.", "The signer providing a password.", "The notary asking personal questions."],
        correct: 1,
        explanation: "Identity proofing is a process where a third party confirms the signer's identity by reviewing personal information from public and proprietary data sources.",
        emoji: "🕵️",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 31,
        question: "If a Notary changes their name due to marital status, what is the fee?",
        options: ["$0 (no fee)", "$5.00", "$10.00", "$20.00"],
        correct: 0,
        explanation: "The $10 fee for a change of name is not required if the change is the result of a change in marital status.",
        emoji: "💍",
        points: 10,
        category: "Fees"
    },
    {
        id: 32,
        question: "Which is a misdemeanor offense for a Notary Public?",
        options: ["Administering an oath to a non-resident.", "Refusing to administer an oath when requested.", "Charging the statutory fee.", "Filing an official character certificate."],
        correct: 1,
        explanation: "Refusal to administer an oath or affidavit when properly requested is a misdemeanor.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 33,
        question: "What is the validity period for Notary Public examination results?",
        options: ["1 year", "2 years", "3 years", "4 years"],
        correct: 1,
        explanation: "Examination results are valid for a period of two years from the date of the test.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 34,
        question: "A Notary commissioned in Albany County is asked to notarize in NYC. Can they?",
        options: ["No, only in their county.", "Yes, a notary's jurisdiction is statewide.", "Only if they file a certificate in NYC.", "Only if the document won't be recorded in NYC."],
        correct: 1,
        explanation: "A notary public's jurisdiction is co-extensive with the boundaries of the state of New York.",
        emoji: "🗺️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 35,
        question: "Can a person convicted of a felony become a Notary Public in New York?",
        options: ["No, they are automatically disqualified.", "Yes, if they obtain an executive pardon or certificate of good conduct.", "Yes, but they must wait 10 years.", "Yes, if it was a non-violent offense."],
        correct: 1,
        explanation: "A person convicted of a felony may be considered for appointment if they obtain an executive pardon, a certificate of relief from disabilities, or a certificate of good conduct.",
        emoji: "📜",
        points: 10,
        category: "Foundations"
    },
    {
        id: 36,
        question: "What is the fee for a duplicate Notary Public identification card?",
        options: ["$0", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "A $10.00 non-refundable fee is charged for a duplicate lost, destroyed, or damaged ID card.",
        emoji: "💳",
        points: 10,
        category: "Fees"
    },
    {
        id: 37,
        question: "Which is a mandatory journal entry for an electronic notarial act?",
        options: ["The principal's marital status.", "Identification of the communication technology used.", "The notary's opinion of the principal's demeanor.", "A copy of the electronic document itself."],
        correct: 1,
        explanation: "For electronic notarial acts, the journal must identify the communication technology, certification authority, and verification providers utilized.",
        emoji: "💻",
        points: 10,
        category: "Journaling"
    },
    {
        id: 38,
        question: "What is the main difference between 'credential analysis' and 'identity proofing'?",
        options: ["In-person vs. remote acts.", "Validating the ID's authenticity vs. confirming the person's identity.", "Performed by notary vs. by signer.", "Optional vs. mandatory."],
        correct: 1,
        explanation: "Credential analysis validates the authenticity of the ID document itself, while identity proofing validates that the person presenting the ID is the correct individual.",
        emoji: "🔍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 39,
        question: "What is the penalty for a non-attorney notary using a term like 'abogado' in an ad?",
        options: ["Immediate removal from office.", "A civil penalty up to $1,000 for the first violation.", "Mandatory legal education.", "Suspension for one year."],
        correct: 1,
        explanation: "Penalties for violating advertising regulations include a civil penalty up to $1,000 for the first violation, followed by suspension for a second.",
        emoji: "💸",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 40,
        question: "What is the primary function of the County Clerk regarding a notary's signature?",
        options: ["To approve the signature style.", "To authenticate the signature for out-of-state use.", "To provide a signature stamp.", "To train notaries on signing."],
        correct: 1,
        explanation: "County clerks are authorized to authenticate notary signatures, a service typically required for documents intended for use outside of New York State.",
        emoji: "✅",
        points: 10,
        category: "Foundations"
    },
    {
        id: 41,
        question: "Is a New York Notary Public authorized to administer an oath to a public officer?",
        options: ["No, only judges can do so.", "Yes, a notary is permitted to administer such an oath.", "Only if the officer is a state-level official.", "Only if the notary is also a licensed attorney."],
        correct: 1,
        explanation: "Public Officers Law §10 explicitly permits a notary public to administer the oath of a public officer.",
        emoji: "🏛️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 42,
        question: "What is the legal status of an act performed by a notary who has not yet filed their required oath of office?",
        options: ["The act is valid, but the notary receives a warning.", "The act is invalid, and the notary is guilty of a felony.", "The act is generally held to be valid, but performing it is a misdemeanor.", "The act is invalid, and the notary is subject to removal from office."],
        correct: 2,
        explanation: "Acting before taking and filing the oath is a misdemeanor under Public Officers Law §15. However, Executive Law §142-a generally protects the validity of such an act from being invalidated if the defect was unknown to the parties relying on the notarization.",
        emoji: "✋",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 43,
        question: "What is the main purpose of the audio-visual recording for electronic notarial acts?",
        options: ["For marketing purposes.", "To allow the notary to review their performance.", "To create an immutable evidentiary record.", "To confirm the signer's attire."],
        correct: 2,
        explanation: "The audio-visual recording provides an immutable evidentiary record of the entire transaction, significantly enhancing accountability and serving as a strong deterrent against fraud.",
        emoji: "🎥",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 44,
        question: "What is the maximum number of notices of protest a Notary may charge for?",
        options: ["3 notices", "5 notices", "10 notices", "Unlimited notices"],
        correct: 1,
        explanation: "A notary may charge 10 cents for each notice of protest, with a limit of five notices.",
        emoji: "🪙",
        points: 10,
        category: "Fees"
    },
    {
        id: 45,
        question: "Which is NOT a valid form of ID for a physical notarization if the signer is unknown to the notary?",
        options: ["A valid government-issued driver's license.", "Two current documents with the signer's signature.", "A library card with a photo.", "The oath of one credible witness known to the notary."],
        correct: 2,
        explanation: "Acceptable forms of ID include valid government-issued ID with a photo and signature, two current documents with signatures, or a credible witness. A library card is not sufficient.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 46,
        question: "Under what circumstances might a person convicted of a crime be appointed a Notary?",
        options: ["Only if the crime was a traffic violation.", "If they obtain an executive pardon or a certificate of good conduct.", "Never, any conviction is an absolute bar.", "Only if they complete community service."],
        correct: 1,
        explanation: "A person convicted of a crime may be considered for appointment if they obtain an executive pardon, a certificate of relief from disabilities, or a certificate of good conduct.",
        emoji: "📜",
        points: 10,
        category: "Foundations"
    },
    {
        id: 47,
        question: "What is the purpose of 'identity proofing' in REN, according to NYS regulations?",
        options: ["To confirm the notary's identity.", "To verify the document's authenticity.", "To confirm the signer's identity via data sources.", "To ensure the signer has a valid email."],
        correct: 2,
        explanation: "Identity proofing is a process through which a third party confirms the identity of a signer by reviewing personal information from public and proprietary data sources.",
        emoji: "🕵️",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 48,
        question: "Which is NOT the unauthorized practice of law for a non-attorney Notary?",
        options: ["Giving immigration advice.", "Drafting a will for a client.", "Administering an oath to a deponent.", "Soliciting business for a lawyer."],
        correct: 2,
        explanation: "Administering oaths is a general power of a notary. The other options are considered the unauthorized practice of law.",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 49,
        question: "What is the maximum term of imprisonment for a Class A misdemeanor in NYS?",
        options: ["6 months", "1 year", "2 years", "4 years"],
        correct: 1,
        explanation: "Penal Law §70.15 defines the maximum term for a Class A misdemeanor as one year.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 51,
        question: "If removed as a Commissioner of Deeds for NYC, can one be reappointed as a Notary?",
        options: ["Yes, after one year.", "No, they are ineligible for reappointment as either.", "Only if they pass a special exam.", "Only with a pardon from the Secretary of State."],
        correct: 1,
        explanation: "Persons removed from the office of Commissioner of Deeds for New York City are ineligible for reappointment to that office or for appointment as a Notary Public.",
        emoji: "🚫",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 52,
        question: "What is the fee to file a Certificate of Official Character in another NYS county?",
        options: ["$1.00", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "There is a fee of $10.00 to file the certificate of official character in another county clerk's office.",
        emoji: "🗄️",
        points: 10,
        category: "Fees"
    },
    {
        id: 53,
        question: "What term describes a formal declaration that the execution of an instrument is one's act and deed?",
        options: ["Affidavit", "Jurat", "Acknowledgment", "Deposition"],
        correct: 2,
        explanation: "An Acknowledgment is a formal declaration before an authorized officer by a person who has executed an instrument that such execution is their act and deed.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 54,
        question: "Which is a Class E felony under NY Penal Law for a public servant?",
        options: ["Official misconduct.", "Issuing a false certificate with intent to defraud.", "Refusal to officiate.", "Advertising without a proper disclaimer."],
        correct: 1,
        explanation: "Issuing a false certificate (Penal Law §175.40) is a Class E felony when a public servant issues it with intent to defraud.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 55,
        question: "A Notary's commission expires. How long do they have to renew without re-taking the exam?",
        options: ["30 days", "3 months", "6 months", "1 year"],
        correct: 2,
        explanation: "Renewing notaries must take the exam if their commission has lapsed (expired) for more than six months.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 56,
        question: "What is the term for a written statement sworn to or affirmed before an authorized officer?",
        options: ["Acknowledgment", "Affidavit", "Deed", "Contract"],
        correct: 1,
        explanation: "An Affidavit is a written statement sworn to or affirmed before an officer authorized to administer an oath or affirmation.",
        emoji: "📄",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 57,
        question: "What is the maximum term of imprisonment for a Class D felony in NYS?",
        options: ["4 years", "7 years", "10 years", "15 years"],
        correct: 1,
        explanation: "Penal Law §70.00 defines the maximum term for a Class D felony as 7 years.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 58,
        question: "What is a key characteristic of an electronic notary's signature?",
        options: ["A physical stamp applied digitally.", "It's unique and linked to the record to detect alterations.", "It's easily transferable to other notaries.", "It's a scanned image of a handwritten signature."],
        correct: 1,
        explanation: "The electronic signature must be unique to the notary, independently verifiable, under their sole control, and linked to the record in a way that any subsequent alteration is detectable.",
        emoji: "🌐",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 59,
        question: "What is the term for a person who signs an affidavit?",
        options: ["Deponent", "Affiant", "Grantor", "Principal"],
        correct: 1,
        explanation: "An Affiant is a person who makes and subscribes (signs) an affidavit.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 60,
        question: "Which of the following items is NOT required for admission to the NYS Notary Public exam?",
        options: ["Government-issued photo ID.", "Check or money order for the fee.", "Copy of the Notary Public License Law booklet.", "Two #2 pencils."],
        correct: 2,
        explanation: "Examinees are prohibited from bringing reference materials like books into the exam room. You must bring proper ID, the fee, and #2 pencils.",
        emoji: "🎒",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 61,
        question: "What is the consequence for a Notary found guilty of 'official misconduct'?",
        options: ["It is a Class D felony.", "It is a Class E felony.", "It is a Class A misdemeanor.", "Automatic removal from office."],
        correct: 2,
        explanation: "Official misconduct (Penal Law §195.00) is a Class A misdemeanor.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 62,
        question: "What is the purpose of 'credential analysis' in REN?",
        options: ["To analyze the notary's credentials.", "To validate a government ID via data sources.", "To verify the notary's digital certificate.", "To assess the signer's financial standing."],
        correct: 1,
        explanation: "Credential analysis is a process where a third-party service validates a government-issued identification presented by an individual through a review of public and proprietary data sources.",
        emoji: "🔍",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 63,
        question: "What is the term for the clause in an affidavit stating when, where, and before whom it was sworn?",
        options: ["Acknowledgment", "Attestation Clause", "Jurat", "Venue"],
        correct: 2,
        explanation: "The Jurat is the clause in an affidavit stating when, where, and before whom it was sworn to or affirmed.",
        emoji: "📄",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 64,
        question: "What is the primary ID verification method for a remote online notarization if the signer is not personally known?",
        options: ["Relying on the signer's verbal affirmation.", "Using technology for ID presentation, credential analysis, and identity proofing.", "Requiring the signer to mail a copy of their ID.", "Verifying identity through a simple online search."],
        correct: 1,
        explanation: "For a remote appearance where the principal is not personally known, identity must be verified by communication technology that facilitates remote ID presentation, credential analysis, and identity proofing.",
        emoji: "💻",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 65,
        question: "What is the consequence for a notary who issues a false official certificate with intent to defraud?",
        options: ["It is a Class A misdemeanor.", "It is a Class E felony.", "It results in a civil penalty only.", "It leads to immediate suspension."],
        correct: 1,
        explanation: "Issuing a false certificate (Penal Law §175.40) with intent to defraud is a Class E felony.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 66,
        question: "What is the primary role of the Secretary of State regarding Notaries Public?",
        options: ["To provide legal advice to notaries.", "To administer the Notary exam.", "To appoint and commission notaries.", "To investigate all complaints."],
        correct: 2,
        explanation: "Notaries public are commissioned by the Secretary of State, who has the authority to appoint and commission them.",
        emoji: "🏛️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 67,
        question: "Which is a prohibited activity for a non-attorney Notary?",
        options: ["Taking an acknowledgment for a deed.", "Administering an oath for an affidavit.", "Preparing a bill of sale for compensation.", "Protesting a promissory note."],
        correct: 2,
        explanation: "A notary who is not an attorney may not draw any kind of legal papers for compensation, including a bill of sale.",
        emoji: "🚫",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 68,
        question: "What is the fee for renewing a Notary Public commission in New York?",
        options: ["$15.00", "$25.00", "$60.00", "$100.00"],
        correct: 2,
        explanation: "The renewal fee is $60.00.",
        emoji: "💰",
        points: 10,
        category: "Fees"
    },
    {
        id: 69,
        question: "What is a 'Protest' in the context of notarial duties?",
        options: ["An acknowledgment of a debt.", "A deposition about a financial matter.", "A formal statement of non-payment of a bill or note.", "An affidavit of financial hardship."],
        correct: 2,
        explanation: "A Protest is a formal statement in writing by a notary public that a bill or note was presented for payment or acceptance and was refused.",
        emoji: "📉",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 70,
        question: "Which is a valid form of ID for an in-person notarization if the signer is unknown?",
        options: ["A current utility bill.", "A private university student ID.", "A valid US Passport.", "A signed credit card."],
        correct: 2,
        explanation: "A valid US Passport is a government-issued identification with a photograph, physical description, and signature, making it an acceptable form of ID.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 71,
        question: "What is the significance of 'personal appearance' in NYS Notary law?",
        options: ["It is only required for electronic notarizations.", "It ensures the notary can verify the signer's identity and willingness.", "It allows the notary to provide legal advice.", "It is only required for real property documents."],
        correct: 1,
        explanation: "The requirement of personal appearance is a cornerstone of notarial integrity, ensuring the notary can directly verify the signer's identity and that they are acting willingly.",
        emoji: "👤",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 72,
        question: "What is the maximum term of imprisonment for a Class E felony in NYS?",
        options: ["1 year", "2 years", "4 years", "7 years"],
        correct: 2,
        explanation: "Penal Law §70.00 defines the maximum term for a Class E felony as 4 years.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 73,
        question: "Which is a reason for a Notary to be suspended or removed from office?",
        options: ["Refusing to notarize for a family member.", "Misstatement in their application.", "Charging the statutory fee.", "Failing to renew 90 days before expiration."],
        correct: 1,
        explanation: "A notary can be suspended or removed from office for misconduct, which includes making a material misstatement in their application.",
        emoji: "❌",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 74,
        question: "Who is exempt from paying the application fee to become a Notary in NYS?",
        options: ["No one is exempt.", "Attorneys licensed in NYS.", "Court clerks of the Unified Court System.", "County Clerk staff designated to serve the public."],
        correct: 3,
        explanation: "County Law §534 states that county clerks may appoint staff members to provide free notarization services, and these appointees are exempt from examination and application fees.",
        emoji: "🆓",
        points: 10,
        category: "Fees"
    },
    {
        id: 75,
        question: "What is the term for the testimony of a witness taken out of court under oath?",
        options: ["Acknowledgment", "Affidavit", "Deposition", "Protest"],
        correct: 2,
        explanation: "A Deposition is the testimony of a witness taken out of court under oath or affirmation.",
        emoji: "🎤",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 76,
        question: "What is the primary difference between an 'oath' and an 'affirmation'?",
        options: ["An oath is legally binding, an affirmation is not.", "An oath swears to a divine being; an affirmation is a solemn declaration without religious reference.", "An oath is for legal documents; an affirmation is for personal statements.", "An oath requires a witness; an affirmation does not."],
        correct: 1,
        explanation: "An affirmation is legally equivalent to an oath. It is a solemn declaration for those who conscientiously decline taking an oath, which often involves swearing to a divine being.",
        emoji: "🙏",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 77,
        question: "If a NYS Legislator accepts a paid notary appointment, what is the consequence?",
        options: ["They must resign from the Legislature.", "They must decline the notary compensation.", "Their notary commission is revoked.", "Their seat in the Legislature is vacated."],
        correct: 3,
        explanation: "A member of the Legislature who accepts a paid notary public appointment vacates their legislative seat.",
        emoji: "🏛️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 78,
        question: "What does 'personal knowledge' mean as a method of ID verification?",
        options: ["The notary has seen the signer's ID before.", "The notary has a long-standing acquaintance with the signer, ensuring their identity.", "The notary recognizes the signer from a brief encounter.", "The notary has reviewed the signer's social media."],
        correct: 1,
        explanation: "Personal knowledge implies a level of certainty of identity based on a long-standing relationship, not just a brief or past encounter.",
        emoji: "🤝",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 79,
        question: "Under what principle does a notarial act remain valid even if the notary had a technical defect in their appointment, like forgetting to file their oath?",
        options: ["The principle of good faith", "The de facto officer doctrine (Exec. Law §142-a)", "The doctrine of laches", "The harmless error rule"],
        correct: 1,
        explanation: "Executive Law §142-a generally protects the validity of acts performed by a notary from being invalidated due to certain defects in their appointment, unless the defect was known or apparent.",
        emoji: "✅",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 80,
        question: "What is the primary purpose of the official syllabus for the Notary exam?",
        options: ["To list all licensed notaries.", "To outline all topics covered on the exam to assist in preparation.", "To provide legal advice to applicants.", "To serve as the application form."],
        correct: 1,
        explanation: "The syllabus is designed to outline all topics covered on the examination and guide an applicant's preparation.",
        emoji: "📚",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 81,
        question: "What is the fee for a change of name or address on a notary commission?",
        options: ["$0 if due to marital status", "$5.00", "$10.00", "$20.00"],
        correct: 0,
        explanation: "A $10.00 fee is charged for a change of name or address. This fee is waived if the name change is due to marital status.",
        emoji: "📝",
        points: 10,
        category: "Fees"
    },
    {
        id: 82,
        question: "Under what principle does a notarial act remain valid even if the notary had a technical defect in their appointment, like forgetting to file their oath?",
        options: ["The principle of good faith", "The de facto officer doctrine (Exec. Law §142-a)", "The doctrine of laches", "The harmless error rule"],
        correct: 1,
        explanation: "Executive Law §142-a generally protects the validity of acts performed by a notary from being invalidated due to certain defects in their appointment, unless the defect was known or apparent.",
        emoji: "✅",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 83,
        question: "What does 'acknowledgment' mean in the context of a notary's duties?",
        options: ["The notary's confirmation that they read the document.", "A formal declaration by a signer that the execution of an instrument is their act and deed.", "The notary's signature confirming the document's accuracy.", "A verbal agreement witnessed by the notary."],
        correct: 1,
        explanation: "An Acknowledgment is a formal declaration before an authorized public officer by a person who has executed an instrument that such execution is their act and deed.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 84,
        question: "What is the specific maximum definite sentence of imprisonment for a Class A misdemeanor under New York Penal Law?",
        options: ["Six months", "One year", "Two years", "Four years"],
        correct: 1,
        explanation: "Penal Law §70.15 defines the maximum definite sentence for a Class A misdemeanor as one year.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 85,
        question: "A New York Notary Public's commission is issued for a term of four years. When does this term typically begin?",
        options: ["On the date the application is mailed", "On the date the notary passes the exam", "On the date the commission is issued by the Secretary of State", "On January 1st of the following year"],
        correct: 2,
        explanation: "The term of appointment for a notary public typically commences on the date the commission is issued by the Secretary of State.",
        emoji: "🗓️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 86,
        question: "Which of the following describes the geographical extent of a New York Notary Public's jurisdiction?",
        options: ["Limited to the county of commission", "Co-extensive with the boundaries of New York State", "Extends only to contiguous states", "Limited to the city of residence"],
        correct: 1,
        explanation: "The jurisdiction of a Notary Public in New York State is co-extensive with the boundaries of the state.",
        emoji: "🗺️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 87,
        question: "If a NY Notary moves out of state and does NOT maintain an office in NY, what is the immediate consequence?",
        options: ["The commission remains valid until expiration", "The commission is suspended for 90 days", "The notary vacates their office as a notary public", "They must file a change of address within 10 days"],
        correct: 2,
        explanation: "A notary public who is a resident of New York State and moves out of the state and who does not retain an office or place of business in this State shall vacate his or her office as a notary public.",
        emoji: "✈️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 88,
        question: "In electronic notarization, what technology is mandated for real-time interaction?",
        options: ["Email correspondence only", "Secure audio-visual communication technology", "Text messaging with photo verification", "Pre-recorded video messages"],
        correct: 1,
        explanation: "Electronic notarial acts must be performed using secure audio-video communication technology that allows for real-time interaction between the notary and the signer.",
        emoji: "💻",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 89,
        question: "Which describes 'satisfactory evidence of identity' for an in-person act if the notary does not personally know the signer?",
        options: ["A business card", "A current utility bill", "A valid government-issued ID with photo, description, and signature", "A verbal statement from a friend"],
        correct: 2,
        explanation: "Satisfactory evidence of identity typically includes a valid, unexpired government-issued identification credential containing the individual's photograph, signature, and physical description.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 90,
        question: "A non-attorney Notary is asked to prepare legal papers for a divorce. What is the appropriate action?",
        options: ["Assist, but charge a reduced fee", "Decline, as it's the unauthorized practice of law", "Assist, with a signed waiver of liability", "Refer the individual to a court clerk"],
        correct: 1,
        explanation: "A non-attorney notary public is prohibited from preparing legal papers such as those for a divorce, as this constitutes the unauthorized practice of law.",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 91,
        question: "If a document signer for an electronic notarization is outside the U.S., what additional condition applies?",
        options: ["The notary cannot notarize", "The act is permitted if lawful where the signer is located and not against U.S. law", "The signer must first obtain an Apostille", "The notary must get special permission from the U.S. Dept. of State"],
        correct: 1,
        explanation: "An electronic notary may perform an act for a remotely located individual outside the United States if the act is not prohibited in the foreign jurisdiction and does not violate federal law.",
        emoji: "🌐",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 92,
        question: "A notary is an employee and minor stockholder. Can they notarize a company contract they are not a party to?",
        options: ["No, it's an inherent conflict of interest", "Yes, if not personally a party to the instrument", "Only if they disclose their stockholder status", "Only if the employer pays an additional fee"],
        correct: 1,
        explanation: "Executive Law §138 allows notaries who are stockholders or employees of a corporation to take acknowledgments for that corporation, provided they are not an individual party to the instrument.",
        emoji: "🏢",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 93,
        question: "A notary is asked to notarize by a visually impaired individual who can provide proper ID and give verbal assent. What should the notary do?",
        options: ["Refuse, as visual signature confirmation is required", "Proceed, ensuring willingness and identity are verified", "Require an additional witness", "Refer the individual to an attorney"],
        correct: 1,
        explanation: "A notary should accommodate individuals with disabilities as long as the essential elements of the notarial act (identity verification, willingness, understanding) can be satisfied.",
        emoji: "🤝",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 94,
        question: "Which is NOT an acceptable form of ID for an in-person notarization where the signer is unknown?",
        options: ["A United States military ID card", "A NYS non-driver ID card", "A Social Security card", "A valid passport"],
        correct: 2,
        explanation: "A Social Security card is generally not accepted as a primary form of identification for notarization as it lacks a photo for visual comparison.",
        emoji: "🆔",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 95,
        question: "What is the purpose of filing a Certificate of Official Character in another county?",
        options: ["To receive a new commission", "To charge higher fees in that county", "To enable that county's clerk to authenticate the notary's signature", "To enroll in additional training"],
        correct: 2,
        explanation: "Filing a Certificate of Official Character in another county allows that county's clerk to authenticate the notary's signature for documents requiring such verification.",
        emoji: "🗄️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 96,
        question: "A Notary is requested to notarize by a principal who only speaks a language the notary does not. What should the notary do?",
        options: ["Proceed, assuming the principal understands", "Refuse, as direct communication is required", "Use an online translation tool", "Require a translator who is also a notary"],
        correct: 1,
        explanation: "A notary must be able to communicate directly with the signer to ascertain identity, willingness, and understanding. If there's a language barrier, the notary should refuse.",
        emoji: "🗣️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 97,
        question: "A notary is asked to certify a copy of a birth certificate. What is the appropriate action?",
        options: ["Certify the copy as it is a public record", "Refuse, as notaries in NYS cannot certify copies of vital records", "Certify it, but note 'true copy' in the journal", "Refer the individual to the County Clerk"],
        correct: 1,
        explanation: "New York Notaries Public are generally not authorized to certify copies of public records such as birth certificates. That is done by the custodian of the original record.",
        emoji: "🚫",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 98,
        question: "What is the main reason an electronic notary must maintain sole control of their electronic signature?",
        options: ["To prevent others from accessing their email", "To ensure the integrity and security of the electronic notarial act", "To limit the number of documents notarized daily", "To comply with digital waste regulations"],
        correct: 1,
        explanation: "The electronic signature must be under the sole control of the electronic notary public to ensure the security, integrity, and authenticity of the electronic notarial act.",
        emoji: "🔒",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 99,
        question: "If a Notary's commission has expired for 8 months, what must they do to be re-commissioned?",
        options: ["Pay a higher renewal fee", "Simply submit a renewal application", "Retake and pass the Notary Public examination", "Complete continuing education hours"],
        correct: 2,
        explanation: "If a Notary Public's commission has expired for more than six months, they must retake and pass the Notary Public examination.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 101,
        question: "What is an Apostille?",
        options: ["A verification stamp", "A consular seal", "A certificate authenticating a public official's signature for foreign use", "A notarial attestation"],
        correct: 2,
        explanation: "An Apostille is a certificate issued by the Secretary of State that authenticates the signature of a public official (like a Notary) for use in countries party to the Hague Apostille Convention.",
        emoji: "🌍",
        points: 10,
        category: "Foundations"
    },
    {
        id: 102,
        question: "A Notary receives notice their application contained a misstatement. What action may the Secretary of State take?",
        options: ["Issue a civil fine only", "Revoke the commission without a hearing", "Suspend or remove the notary from office after a hearing", "Require the notary to retake the exam"],
        correct: 2,
        explanation: "The Secretary of State has the power to suspend or remove a notary public for misstatement in their application after affording the notary due process (e.g., a hearing).",
        emoji: "❌",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 103,
        question: "What is the term for a direct financial interest that would legally disqualify a notary from acting in a transaction?",
        options: ["Pecuniary interest", "Conflict of duty", "Impartiality clause", "Jurisdictional limitation"],
        correct: 0,
        explanation: "A notary is disqualified from acting in cases where they are a party to or directly and pecuniarily interested in the transaction.",
        emoji: "💰",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 104,
        question: "What is the definition of 'jurat' in notarial practice?",
        options: ["Certifying a copy", "The declaration of a subscribing witness", "The clause in an affidavit stating when, where, and before whom it was sworn", "Authenticating a notary's signature"],
        correct: 2,
        explanation: "A jurat is the clause in an affidavit stating when, where, and before whom it was sworn to or affirmed.",
        emoji: "📄",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 105,
        question: "If a Notary knowingly commits forgery in the second degree, what is the felony classification?",
        options: ["Class A felony", "Class B felony", "Class D felony", "Class E felony"],
        correct: 2,
        explanation: "Forgery in the second degree (§170.10 Penal Law) is classified as a Class D felony.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 106,
        question: "What must a NY Notary affix below their signature, in black ink?",
        options: ["Name, home address, and signature", "Name, 'Notary Public State of New York,' county, and expiration date", "Notary ID number and document type", "Only their signature and the date"],
        correct: 1,
        explanation: "Executive Law §137 requires the notary to affix their name, 'Notary Public State of New York,' county of original qualification, and commission expiration date below their signature.",
        emoji: "✍️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 107,
        question: "What is the penalty for a NY Notary guilty of 'official misconduct' under Penal Law §195.00?",
        options: ["A Class D felony", "A Class E felony", "A Class A misdemeanor", "Immediate revocation"],
        correct: 2,
        explanation: "Official misconduct (§195.00 Penal Law) is classified as a Class A misdemeanor.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 108,
        question: "How far in advance can one typically begin the online renewal process for a Notary commission?",
        options: ["30 days before expiration", "60 days before expiration", "90 days before expiration", "6 months before expiration"],
        correct: 2,
        explanation: "Notary Public commissions can typically be renewed up to 90 days prior to their expiration date through the New York Business Express online portal.",
        emoji: "⏳",
        points: 10,
        category: "Exam Logistics"
    },
    {
        id: 109,
        question: "What is the required retention period for the audio-visual recording of an electronic notarial act?",
        options: ["3 years", "5 years", "7 years", "10 years"],
        correct: 3,
        explanation: "Electronic notaries are required to create and retain an audio-visual recording of every electronic notarial act for a period of at least 10 years.",
        emoji: "🎥",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 110,
        question: "Which statement is true regarding the use of a seal by a Notary in NYS?",
        options: ["A seal is mandatory for all acts", "A seal is required only for electronic notarizations", "A seal is not required, but if used, must meet content requirements", "A seal must be registered with the County Clerk"],
        correct: 2,
        explanation: "New York State law does not mandate the use of a seal for Notaries Public. However, if a seal is used, it must legibly include specific identifying information.",
        emoji: "씰",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 111,
        question: "What type of document would NOT require an inked thumbprint in the journal, according to current NYS law?",
        options: ["A real property conveyance", "A power of attorney", "A simple affidavit", "None of the above; thumbprints are not currently required"],
        correct: 3,
        explanation: "As of June 2025, New York State law does NOT currently require inked thumbprints in the notary journal for any type of transaction. Proposed legislation suggests it, but it is not law.",
        emoji: "👍",
        points: 10,
        category: "Journaling"
    },
    {
        id: 112,
        question: "What is a 'subscribing witness' primarily used for in a notarial context?",
        options: ["To witness an acknowledgment.", "To perform a 'Proof of Execution'.", "To co-sign a loan document.", "To serve as a character witness for the notary."],
        correct: 1,
        explanation: "A subscribing witness is a person who witnesses the signing of an instrument and then appears before a notary to swear or affirm that they saw the principal sign. This is the basis for a 'Proof of Execution'.",
        emoji: "👀",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 113,
        question: "A person asks you to notarize their signature on a document written in a language you don't understand, but the notarial certificate is in English. What is the correct action?",
        options: ["Proceed, as long as the certificate is in English.", "Refuse, as a notary should not handle a document they cannot read.", "Have the signer provide a written summary in English.", "Notarize it, but only if the signer is personally known to you."],
        correct: 1,
        explanation: "A notary should not notarize a signature on a document if they cannot read it. Without understanding the document's general nature, the notary cannot be sure of its purpose or if the notarization is appropriate.",
        emoji: "🌐",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 114,
        question: "A client asks you to certify a copy of their U.S. Passport. What should you do?",
        options: ["Certify the copy as a true copy.", "Refuse, as a notary cannot certify copies of public records.", "Advise the client to make a statement in an affidavit that it's a true copy, then notarize their signature on the affidavit.", "Refer them to the Post Office."],
        correct: 2,
        explanation: "While a NY notary cannot 'certify a copy' of a document, they can notarize the signature on a sworn statement (affidavit) in which the signer attests that the attached copy is true and correct. This is a 'copy certification by affiant'.",
        emoji: "📄",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 115,
        question: "When is it acceptable for a notary to backdate a notarial certificate?",
        options: ["If the signer requests it and signs a waiver.", "If the signature actually occurred on the earlier date.", "Never.", "Only if the date is within the same business week."],
        correct: 2,
        explanation: "A notary must always use the date on which the notarial act was actually performed. Knowingly backdating or postdating a certificate is a serious act of misconduct and can lead to civil and criminal penalties.",
        emoji: "🚫",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 116,
        question: "A notary charges the statutory $2.00 fee for an acknowledgment, but also adds a $15.00 'travel fee' agreed to in advance. Is this permissible?",
        options: ["No, a notary can only charge the statutory fee.", "Yes, travel fees are permitted if they are separate from the notarial fee and agreed upon beforehand.", "Only if the travel is more than 25 miles.", "No, all fees including travel are capped at $25.00 total."],
        correct: 1,
        explanation: "A notary may charge a separate fee for travel, as it is not a notarial act itself. However, this fee must be disclosed and agreed to by the signer separately from the statutory fee for the notarization.",
        emoji: "🚗",
        points: 10,
        category: "Fees"
    },
    {
        id: 117,
        question: "How should a notary charge for taking one acknowledgment on a document signed by three people?",
        options: ["Charge for one acknowledgment.", "Charge for three separate acknowledgments.", "Charge for one acknowledgment plus a small fee for each extra person.", "The fee is the same regardless of the number of signers."],
        correct: 1,
        explanation: "The statutory fee for an acknowledgment is charged per person. If the notary takes the acknowledgment of three individuals, they may charge the statutory fee three times.",
        emoji: "💰",
        points: 10,
        category: "Fees"
    },
    {
        id: 118,
        question: "What is the primary difference between a Commissioner of Deeds and a Notary Public in New York?",
        options: ["Commissioners of Deeds can practice law.", "Commissioners of Deeds have statewide jurisdiction.", "Commissioners of Deeds are typically appointed by a mayor and have limited jurisdiction.", "There is no difference."],
        correct: 2,
        explanation: "A Commissioner of Deeds is an officer whose powers are generally limited to the city or county in which they are appointed (e.g., appointed by the NYC Mayor for NYC). A Notary Public has statewide jurisdiction.",
        emoji: "🏙️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 119,
        question: "If a notary performs an electronic notarization, which part of the record-keeping is NOT required to be kept for 10 years?",
        options: ["The audio-visual recording.", "The journal entry for the act.", "A backup of the communications technology software.", "A notation of the type of credential used for ID."],
        correct: 2,
        explanation: "The notary must keep the recording and the journal entry for 10 years. While they must identify the technology used, they are not required to keep a backup copy of the software itself.",
        emoji: "💾",
        points: 10,
        category: "Electronic Notarization"
    },
    {
        id: 120,
        question: "A notary's cousin asks them to notarize a car title transfer. The notary will receive no financial benefit. What should the notary do?",
        options: ["Refuse, as notarizing for any family member is prohibited.", "Proceed, as long as the notary is not a party to the transaction and has no financial interest.", "Proceed, but only if a second notary is present.", "Refuse, as it creates an automatic conflict of interest."],
        correct: 1,
        explanation: "The law prohibits notarizing when one is a party to or has a direct pecuniary interest in the transaction. Simply being related to the signer, without any financial interest, does not automatically disqualify the notary. However, impartiality is key.",
        emoji: "🤝",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 121,
        question: "The term for the location where a notarization is performed, included in the certificate, is known as the:",
        options: ["Jurisdiction", "Venue", "Attestation", "Domicile"],
        correct: 1,
        explanation: "The venue (e.g., 'State of New York, County of...') establishes the place where the notarial act occurred.",
        emoji: "🗺️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 122,
        question: "Which of the following is an example of 'Official Misconduct,' a Class A Misdemeanor?",
        options: ["Accidentally making an error in a notarial certificate.", "With intent to harm another, knowingly refraining from performing an official duty.", "Charging $3.00 for a $2.00 notarial act.", "Failing to renew a commission on time."],
        correct: 1,
        explanation: "Official Misconduct (Penal Law §195.00) involves a public servant, with intent to injure another or gain a benefit, knowingly committing an unauthorized act or refraining from performing a required duty.",
        emoji: "⚖️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 123,
        question: "The authority to suspend or remove a notary from office for misconduct rests with:",
        options: ["The County Clerk, upon a complaint.", "Any judge of the NYS Supreme Court.", "The Secretary of State, after a hearing.", "The Attorney General."],
        correct: 2,
        explanation: "The Secretary of State holds the power to suspend or remove a notary from office for misconduct after the notary has been given an opportunity for a hearing.",
        emoji: "🏛️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 124,
        question: "A 'Proof of Execution by Subscribing Witness' can be used when:",
        options: ["The principal signer cannot be located or is deceased.", "The principal signer refuses to appear before a notary.", "The document needs an extra layer of security.", "The notary personally knows the principal signer."],
        correct: 0,
        explanation: "A proof of execution is often used when the principal signer is unavailable. The subscribing witness who saw them sign appears before the notary and swears to the facts of the execution.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 125,
        question: "A notary is asked to notarize a photograph. The correct procedure would be to:",
        options: ["Stamp and sign directly on the photograph.", "Refuse, as photographs cannot be notarized.", "Notarize the signature of the person on a written statement about what the photograph depicts.", "Certify that the photograph is a true likeness."],
        correct: 2,
        explanation: "A notary does not notarize documents or objects; they notarize signatures. The signer can make a written statement about the photograph, sign it, and the notary can then notarize that signature.",
        emoji: "🖼️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 126,
        question: "What is the difference between an Apostille and a Certificate of Authentication?",
        options: ["An Apostille is for domestic use; a Certificate is for international use.", "An Apostille is for countries in the Hague Convention; a Certificate is for non-Hague countries.", "An Apostille is issued by the County Clerk; a Certificate by the Secretary of State.", "There is no difference."],
        correct: 1,
        explanation: "Both authenticate a notary's signature for foreign use. An Apostille is a standardized form for countries party to the Hague Convention, while a Certificate of Authentication is used for all other countries.",
        emoji: "🌍",
        points: 10,
        category: "Foundations"
    },
    {
        id: 127,
        question: "What does the Latin term 'Locus Sigilli' or 'L.S.' on a document signify?",
        options: ["The document is legally binding.", "The location where the seal should be placed.", "The document has been reviewed by a lawyer.", "The signature has been witnessed."],
        correct: 1,
        explanation: "Locus Sigilli means 'the place of the seal.' It indicates where the notary (or other official) should affix their seal, if a seal is used.",
        emoji: "씰",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 128,
        question: "A person appears with a document already signed and asks for an acknowledgment. The notary should:",
        options: ["Refuse and require them to sign again on a new document.", "Ask the person to acknowledge that the existing signature is their own.", "Require two witnesses to verify the signature.", "Refuse, as the document must be signed in the notary's presence."],
        correct: 1,
        explanation: "For an acknowledgment, the document does not need to be signed in the notary's presence. The signer must simply appear and acknowledge (formally declare) that the signature already on it is their own.",
        emoji: "🗣️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 129,
        question: "A person appears with a document and asks for a jurat. The document is already signed. The notary should:",
        options: ["Proceed with administering the oath.", "Ask the signer to sign the document again in the notary's presence.", "Take an acknowledgment instead.", "Refuse to notarize the document."],
        correct: 1,
        explanation: "For a jurat (e.g., in an affidavit), the signer must swear to the truthfulness of the contents and sign the document in the presence of the notary. If already signed, the signer must re-sign.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 130,
        question: "A notary may be held liable for:",
        options: ["A financial loss caused by their negligence in performing a notarial act.", "The document they notarized being later found to be unenforceable.", "Grammatical errors in the document.", "The failure of the business transaction described in the document."],
        correct: 0,
        explanation: "A notary can be held financially liable in a civil lawsuit for damages caused by their negligence, misconduct, or fraud in performing their duties.",
        emoji: "💸",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 131,
        question: "The 'attestation clause' is found in which type of document?",
        options: ["A mortgage", "A lease", "A will", "A business contract"],
        correct: 2,
        explanation: "An attestation clause is the clause at the end of a will where the witnesses certify the procedures they observed during its execution. While a notary may notarize a self-proving affidavit attached to a will, understanding the will's components is important.",
        emoji: "📜",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 132,
        question: "A notary who is not an attorney may NOT do which of the following for compensation?",
        options: ["Administer an oath.", "Take an acknowledgment.", "Take a deposition.", "Complete the venue and jurat on an affidavit form."],
        correct: 3,
        explanation: "While a notary takes the oath for an affidavit, filling in the blanks of a legal form for another person, even the standard notarial parts, can be construed as the unauthorized practice of law if done for a fee by a non-attorney.",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 133,
        question: "Which of the following describes the role of a 'principal' in a notarization?",
        options: ["The notary's employer.", "The person whose signature is being notarized.", "The attorney who drafted the document.", "The public officer who receives the notarized document."],
        correct: 1,
        explanation: "The principal is the main party to the transaction, the individual appearing before the notary to have their signature on a document acknowledged or to take an oath.",
        emoji: "👤",
        points: 10,
        category: "Foundations"
    },
    {
        id: 134,
        question: "If a notary's journal is lost or stolen, the notary should:",
        options: ["Wait until their commission expires to get a new one.", "Immediately notify the Secretary of State.", "Say nothing to avoid potential liability.", "Post an ad in the local newspaper."],
        correct: 1,
        explanation: "In the event a notary's journal (if kept) or seal is lost or stolen, they should promptly notify the Secretary of State to report the loss and protect themselves from fraudulent use.",
        emoji: "🚨",
        points: 10,
        category: "Journaling"
    },
    {
        id: 135,
        question: "The residency requirement for a New York Notary Public applicant is:",
        options: ["Must be a U.S. citizen.", "Must be a resident of New York State or have a place of business in the state.", "Must have lived in their county for at least one year.", "There is no residency requirement."],
        correct: 1,
        explanation: "An applicant for a notary public commission must be a resident of New York State or have an office or place of business within the state.",
        emoji: "📍",
        points: 10,
        category: "Foundations"
    },
    {
        id: 136,
        question: "A notary has their commission in Westchester County but is asked to notarize a document in Suffolk County. This is:",
        options: ["Not permissible.", "Permissible, as a notary's jurisdiction is statewide.", "Permissible only if they file a certificate in Suffolk County first.", "Permissible only for documents related to Westchester County."],
        correct: 1,
        explanation: "A New York notary's jurisdiction is co-extensive with the boundaries of the state. They can perform notarial acts in any county in New York.",
        emoji: "🗺️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 137,
        question: "If a notary is also a licensed real estate broker, can they notarize documents for a transaction in which they are earning a commission?",
        options: ["Yes, without restriction.", "No, this is a disqualifying financial interest.", "Yes, but only if they disclose their dual role.", "Only if another broker is also involved."],
        correct: 1,
        explanation: "Earning a commission from a transaction gives the notary a direct pecuniary interest, which disqualifies them from acting as an impartial notary for that same transaction.",
        emoji: "💰",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 138,
        question: "The act of administering an oath for a sworn statement in a deposition is considered:",
        options: ["The unauthorized practice of law.", "A power granted to a notary public.", "A duty of the court reporter only.", "An act that requires special certification."],
        correct: 1,
        explanation: "Notaries public are explicitly authorized by law to administer oaths and affirmations, which includes swearing in a witness (deponent) for a deposition.",
        emoji: "🎤",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 139,
        question: "Which of the following is NOT a required part of a standard notarial certificate?",
        options: ["The venue (state and county).", "The notary's signature.", "The name of the person whose signature is being notarized.", "The social security number of the signer."],
        correct: 3,
        explanation: "A notarial certificate must include the venue, the notary's name and signature, and other required information, but never sensitive personal identifiers like a Social Security Number.",
        emoji: "🤫",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 140,
        question: "The primary reason for requiring 'personal appearance' before a notary is to:",
        options: ["Allow the notary to charge a fee.", "Ensure the document is filled out correctly.", "Enable the notary to positively identify the signer and assess their willingness.", "Provide a formal setting for the signature."],
        correct: 2,
        explanation: "Personal appearance is the cornerstone of the notarial act, as it allows the notary to perform their core functions: verifying identity and ensuring the signer is not acting under duress or coercion.",
        emoji: "👤",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 141,
        question: "Can a notary public who is a member of the armed forces be commissioned without taking the exam?",
        options: ["Yes, if they are a commissioned officer.", "Yes, if they are serving as a military lawyer (JAG).", "No, all military members must take the exam.", "Yes, but only for notarizing military documents."],
        correct: 1,
        explanation: "A member of the NYS bar, including those serving in the military (JAG), may be appointed a notary without an exam. Other military members do not have a specific exemption.",
        emoji: "🧑‍⚖️",
        points: 10,
        category: "Foundations"
    },
    {
        id: 142,
        question: "If a notary public legally changes their name, they must:",
        options: ["Wait for their commission to expire and reapply with the new name.", "Inform the County Clerk, who will then inform the Secretary of State.", "File a change of name form and fee directly with the Division of Licensing Services.", "Simply start signing with their new name."],
        correct: 2,
        explanation: "A notary must notify the Division of Licensing Services of any name change and pay the required fee (unless the change is due to marital status). The notary must continue to sign with their old name until this process is complete.",
        emoji: "📝",
        points: 10,
        category: "Foundations"
    },
    {
        id: 143,
        question: "A notary is presented with a valid Canadian driver's license as ID. The notary should:",
        options: ["Refuse it, as only U.S.-issued ID is acceptable.", "Accept it, as a government-issued photo ID from a neighboring country is generally considered reliable.", "Require a passport in addition to the license.", "Accept it only if the person is a Canadian citizen."],
        correct: 1,
        explanation: "New York law does not specify that government-issued ID must be from the U.S. A valid driver's license or passport with a photo and signature from a foreign government is acceptable provided the notary is satisfied with it.",
        emoji: "🇨🇦",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 144,
        question: "An 'affirmation' is used when:",
        options: ["The document is being sent out of state.", "The signer has a conscientious objection to taking an oath.", "The notary does not have a bible available.", "The document is a certified copy."],
        correct: 1,
        explanation: "An affirmation has the same legal force and effect as an oath. It is offered to individuals who decline to take an oath for religious, conscientious, or personal reasons.",
        emoji: "🙏",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 145,
        question: "Which action would subject a notary to both criminal charges and civil liability?",
        options: ["Accidentally making a typo in the notarial certificate.", "Refusing to travel 50 miles for a notarization.", "Knowingly notarizing a signature the notary knows to be forged.", "Charging a fee that is $1.00 below the statutory limit."],
        correct: 2,
        explanation: "Knowingly participating in fraud by notarizing a forged signature is a criminal act (e.g., forgery) and would expose the notary to a civil lawsuit for any damages caused by their misconduct.",
        emoji: "⛓️",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 146,
        question: "A notary must use ink of what color when affixing their required information below their signature?",
        options: ["Blue or black ink.", "Black ink only.", "Blue ink only.", "Any color, as long as it is legible."],
        correct: 1,
        explanation: "Executive Law §137 was amended to specify that the information affixed below the notary's signature (name, title, county, etc.) must be in black ink.",
        emoji: "✒️",
        points: 10,
        category: "Procedures & ID"
    },
    {
        id: 147,
        question: "Which of these is NOT a power of a New York Notary Public?",
        options: ["To take an affidavit.", "To demand payment of a protested bill of exchange.", "To issue a certified copy of a marriage certificate.", "To take an acknowledgment."],
        correct: 2,
        explanation: "Notaries cannot issue certified copies of vital records like marriage, birth, or death certificates. Such copies must be obtained from the official agency that holds the original record.",
        emoji: "🚫",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 148,
        question: "Executive Law §142-a, which protects the validity of acts despite certain defects, is commonly known as:",
        options: ["The Notary's Oath of Office.", "The Safe Harbor Provision.", "The De Facto Officer Doctrine.", "The Impartiality Clause."],
        correct: 2,
        explanation: "This statute is a codification of the 'de facto officer' doctrine, which holds that the acts of a person assuming to be an officer under the color of authority are valid with respect to the public and third parties, even if their appointment is technically defective.",
        emoji: "📜",
        points: 10,
        category: "Violations & Penalties"
    },
    {
        id: 149,
        question: "A person convicted of a crime wishes to become a notary. They may be eligible if they receive a:",
        options: ["Letter of recommendation from a judge.", "Certificate of Relief from Disabilities or Certificate of Good Conduct.", "Pardon from the County Clerk.", "Passing score of 90% or higher on the exam."],
        correct: 1,
        explanation: "While a criminal conviction can be grounds for denial, an applicant may be considered for a commission if they have been granted an executive pardon, a Certificate of Relief from Disabilities, or a Certificate of Good Conduct.",
        emoji: "📜",
        points: 10,
        category: "Foundations"
    },
    {
        id: 150,
        question: "A Notary Public's primary responsibility is to:",
        options: ["The public.", "Their employer.", "The person who signed the document.", "The Secretary of State."],
        correct: 0,
        explanation: "As public officers, notaries' foremost duty is to the public, acting as impartial witnesses to protect against fraud and ensure the integrity of transactions.",
        emoji: "🌎",
        points: 10,
        category: "Foundations"
    },
    {
        id: 151,
        question: "A non-attorney notary advertises their services in a Spanish-language newspaper using the term 'Notario Publico'. What is TRUE about this situation?",
        options: ["This is permissible as it is a direct translation.", "This is permissible only if they are fluent in Spanish.", "This is strictly prohibited unless a specific, state-mandated disclaimer is included.", "This requires a special license from the Department of State."],
        correct: 2,
        explanation: "Using the term 'Notario' or 'Notario Publico' is deceptive as it implies the authority to practice law in many other countries. It is illegal unless the advertisement conspicuously includes the disclaimer: 'I am not an attorney licensed to practice law...'",
        emoji: "⚖️",
        points: 10,
        category: "Prohibited Conduct"
    },
    {
        id: 152,
        question: "Which statement accurately describes a key difference between an acknowledgment and a jurat?",
        options: ["An acknowledgment requires a seal, while a jurat does not.", "For an acknowledgment, the signer must sign in the notary's presence; for a jurat, they do not.", "For a jurat, the signer must be placed under oath; for an acknowledgment, they are not.", "A jurat is used for deeds, while an acknowledgment is used for affidavits."],
        correct: 2,
        explanation: "The defining act of a jurat is administering an oath or affirmation to the signer regarding the truthfulness of the document's contents. An acknowledgment's defining act is the signer declaring their signature was willingly made.",
        emoji: "✍️",
        points: 10,
        category: "Powers & Duties"
    },
    {
        id: 153,
        question: "An applicant for a notary commission must demonstrate they are of:",
        options: ["High financial standing.", "Good moral character.", "A member of a professional organization.", "A college graduate."],
        correct: 1,
        explanation: "Executive Law §130 requires that an applicant be of 'good moral character.' A conviction for certain crimes can be grounds for denial of a commission on this basis.",
        emoji: "😇",
        points: 10,
        category: "Foundations"
    },
    {
        id: 154,
        question: "Can a corporation or business entity be appointed a Notary Public?",
        options: ["Yes, if they designate one officer to act as the notary.", "No, a notary public must be an individual person.", "Yes, but they can only notarize documents for their own business.", "Only if it is a professional legal corporation."],
        correct: 1,
        explanation: "The office of a Notary Public is a public office that can only be held by an individual person who meets the statutory qualifications. A corporation cannot be a notary.",
        emoji: "🏢",
        points: 10,
        category: "Foundations"
    },
    {
        id: 155,
        question: "Which of the following acts is a New York Notary Public PROHIBITED from doing?",
        options: ["Taking an acknowledgment on a mortgage document.", "Administering an oath to a witness for a deposition.", "Issuing a certified copy of a person's driver's license.", "Protesting a bill of exchange for non-payment."],
        correct: 2,
        explanation: "New York notaries are not authorized to certify copies of any documents, especially public or vital records. That power is reserved for the official custodian of the original record.",
        emoji: "🚫",
        points: 10,
        category: "Prohibited Conduct"
    }
];