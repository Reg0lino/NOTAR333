// NotaR333 Quiz Database
// Contains all questions for the quiz.
// Each object includes the question, options, correct answer index,
// a detailed explanation, a thematic emoji, and a point value.

const quizData = [
    {
        id: 1,
        question: "A Notary Public commission in New York State is valid for what term?",
        options: ["Two years", "Three years", "Four years", "Five years"],
        correct: 2,
        explanation: "The appointment of a Notary Public shall be for a term of 4 years.",
        emoji: "🗓️",
        points: 10
    },
    {
        id: 2,
        question: "Who is primarily responsible for commissioning Notaries Public in New York State?",
        options: ["The County Clerk", "The Governor", "The Secretary of State", "The Attorney General"],
        correct: 2,
        explanation: "Notaries public are commissioned by the Secretary of State.",
        emoji: "🏛️",
        points: 10
    },
    {
        id: 3,
        question: "As of June 2025, what is the current fee for an initial application to become a Notary Public in New York State?",
        options: ["$15.00", "$25.00", "$60.00", "$100.00"],
        correct: 2,
        explanation: "An applicant for a notary public commission must submit an original application and $60 fee.",
        emoji: "💰",
        points: 10
    },
    {
        id: 4,
        question: "Which of the following individuals is exempt from taking the New York State Notary Public examination?",
        options: ["A certified public accountant", "An individual who previously held a notary commission that expired over a year ago", "An attorney licensed to practice law in New York State", "A real estate broker with over 10 years of experience"],
        correct: 2,
        explanation: "An individual admitted to practice in NYS as an attorney may be appointed a notary public without an examination.",
        emoji: "🧑‍⚖️",
        points: 10
    },
    {
        id: 5,
        question: "If a Notary Public's commission has expired for more than six months, what is generally required for them to become commissioned again?",
        options: ["They must pay a late renewal fee.", "They must complete a mandatory online training course.", "They must retake and pass the Notary Public examination.", "They must obtain a letter of recommendation from a current notary."],
        correct: 2,
        explanation: "Renewing Notaries must take the exam if commission has lapsed (expired) for more than six months.",
        emoji: "⏳",
        points: 10
    },
    {
        id: 6,
        question: "As of January 25, 2023, what is the minimum retention period for the journal of notarial acts performed by a New York Notary Public?",
        options: ["3 years", "5 years", "7 years", "10 years"],
        correct: 3,
        explanation: "Recordbooks must be retained in the notaries possession for 10 years.",
        emoji: "📓",
        points: 10
    },
    {
        id: 7,
        question: "Which of the following is NOT permitted in New York State after January 31, 2023?",
        options: ["Remote Electronic Notarization (REN)", "In-person notarization", "Remote Ink Notarization (RIN)", "Notarization of an affidavit via communication technology by a registered electronic notary"],
        correct: 2,
        explanation: "Remote ink notarization (RIN) is not permitted in New York State after January 31, 2023.",
        emoji: "🚫",
        points: 10
    },
    {
        id: 8,
        question: "What is the maximum fee an Electronic Notary Public may charge for performing an electronic notarial act in New York State?",
        options: ["$2.00", "$5.00", "$15.00", "$25.00"],
        correct: 3,
        explanation: "An Electronic Notary may charge up to $25.00 per electronic notarial act performed.",
        emoji: "💻",
        points: 10
    },
    {
        id: 9,
        question: "A Notary Public is asked to notarize a document for their spouse, who is a party to the transaction and stands to gain financially. What must the Notary Public do?",
        options: ["Proceed with the notarization, but disclose the relationship.", "Refuse to perform the notarial act due to personal interest.", "Perform the notarization, but charge no fee.", "Seek approval from the County Clerk before proceeding."],
        correct: 1,
        explanation: "A notary is disqualified from acting in cases where they are a party to or directly and pecuniarily interested in the transaction. Such acknowledgments are nullities.",
        emoji: "⚠️",
        points: 10
    },
    {
        id: 10,
        question: "According to NYS law, what information must a Notary Public print, typewrite, stamp, or affix electronically below their signature on a notarial certificate?",
        options: ["Only their name and signature.", "Their name, 'Notary Public State of New York,' county of original qualification, and commission expiration date.", "Their name, their home address, and the date of the notarial act.", "Their name, their official seal, and the type of document notarized."],
        correct: 1,
        explanation: "Notaries must print, typewrite, stamp, or affix electronically their name, 'Notary Public State of New York,' county of original qualification, and commission expiration date below their signature in black ink.",
        emoji: "✍️",
        points: 10
    },
    {
        id: 11,
        question: "A non-attorney Notary Public in New York State advertises their services in a foreign language. What specific disclaimer must be included in their advertisement?",
        options: ["'I am a Notary Public and can provide legal advice in this language.'", "'I am not an attorney licensed to practice law and may not give legal advice about immigration or any other legal matter or accept fees for legal advice.'", "'Consult an attorney for legal matters; I only notarize documents.'", "'My services are not equivalent to those of a licensed attorney.'"],
        correct: 1,
        explanation: "Notaries advertising in a language other than English must include a disclaimer: 'I am not an attorney licensed to practice law and may not give legal advice about immigration or any other legal matter or accept fees for legal advice.'",
        emoji: "🌐",
        points: 10
    },
    {
        id: 12,
        question: "What is the primary purpose of the mandatory notarial journal required for all New York Notaries Public since January 25, 2023?",
        options: ["To track notary income for tax purposes.", "To provide a verifiable record of all notarial acts for accountability and fraud prevention.", "To serve as a personal reminder for the notary of their daily tasks.", "To allow the public to review a notary's past transactions without restriction."],
        correct: 1,
        explanation: "Notaries must maintain records documenting compliance, including date, time, type of act, names/addresses of individuals, number/type of services, type of credential used, verification procedures, and for electronic acts, communication technology/providers used. This enhances accountability.",
        emoji: "📈",
        points: 10
    },
    {
        id: 13,
        question: "When performing an electronic notarial act, what is the notary public's required physical location?",
        options: ["The notary must be physically located in the same county as the principal.", "The notary must be physically located within New York State.", "The notary can be located anywhere, as long as the principal is in New York State.", "The notary must be physically located in the same room as the principal."],
        correct: 1,
        explanation: "The notary must be physically located within the State of New York at the time of the notarization.",
        emoji: "📍",
        points: 10
    },
    {
        id: 14,
        question: "A Notary Public is asked to prepare a will for a client and notarize their signature. What should the Notary Public do?",
        options: ["Prepare the will and notarize it, as it is a common legal document.", "Refuse to prepare the will, as it constitutes the unauthorized practice of law, and caution against acknowledging its execution.", "Prepare the will, but advise the client to seek an attorney for notarization.", "Notarize the will, but inform the client that it may not be legally binding."],
        correct: 1,
        explanation: "Unless a lawyer, a notary public is prohibited from engaging directly or indirectly in the practice of law, including drawing legal papers such as wills. Notaries are cautioned not to execute an acknowledgment of the execution of a will.",
        emoji: "⚖️",
        points: 10
    },
    {
        id: 15,
        question: "What is the passing score for the New York State Notary Public examination?",
        options: ["60%", "65%", "70%", "75%"],
        correct: 2,
        explanation: "You must correctly answer at least 70 percent of the questions to pass the exam.",
        emoji: "🎯",
        points: 10
    },
    {
        id: 16,
        question: "Which of the following is considered an 'unequivocal and present act' when administering an oath or affirmation?",
        options: ["Having the affiant sign a document that states they have taken an oath, without verbal confirmation.", "Administering the oath over the telephone without visual contact.", "Requiring the affiant to raise their right hand and verbally affirm or swear to the truth of their statements in the notary's presence.", "Sending the oath form to the affiant by mail for their signature."],
        correct: 2,
        explanation: "An oath or affirmation must be an unequivocal and present act in the presence of an officer authorized to administer it.",
        emoji: "🗣️",
        points: 10
    },
    {
        id: 17,
        question: "A Notary Public in New York City must affix what additional information to each instrument they notarize?",
        options: ["Their personal phone number.", "Their official number(s) assigned by the county clerk or register.", "The full name of the document signer.", "The seal of the county clerk."],
        correct: 1,
        explanation: "A notary public who has qualified or who has filed a certificate of official character in the office of the clerk in a county or counties within the city of New York must also affix to each instrument such notary public's official number or numbers in black ink.",
        emoji: "🏙️",
        points: 10
    },
    {
        id: 18,
        question: "What is the consequence if a Notary Public willfully fails to comply with the requirement to include specific information (name, county, expiration) on their notarial certificate?",
        options: ["The notarial act is automatically invalidated.", "The notary public shall be subject to disciplinary action by the Secretary of State.", "The notary public must retake the examination immediately.", "The notary public is required to pay a $500 fine to the county clerk."],
        correct: 1,
        explanation: "If any notary public shall willfully fail to comply with any of the provisions of this section, the notary public shall be subject to disciplinary action by the secretary of state. No official act of such notary public shall be held invalid on account of the failure to comply with these provisions.",
        emoji: "📜",
        points: 10
    },
    {
        id: 19,
        question: "What is the current fee for administering an oath or affirmation by a New York Notary Public, as of June 2025?",
        options: ["$1.00", "$2.00", "$5.00", "$10.00"],
        correct: 1,
        explanation: "A notary public may charge a fee of $2.00 for administering an oath or affirmation.",
        emoji: "💵",
        points: 10
    },
    {
        id: 20,
        question: "Which of the following is NOT a required entry in the mandatory notarial journal for all New York Notaries Public?",
        options: ["The date and time of the notarial act.", "The full name and address of the individuals for whom the act was performed.", "The social security number of the principal.", "The type of credential used to identify the principal."],
        correct: 2,
        explanation: "Journal entries must include: date, time, type of notarial act, names/addresses of individuals, number/type of services, type of credential used, verification procedures. Social security number is not listed.",
        emoji: "🤫",
        points: 10
    },
    {
        id: 21,
        question: "What does 'credential analysis' refer to in the context of electronic notarization identity verification?",
        options: ["A notary's personal assessment of a signer's trustworthiness.", "A process where a third-party service validates a government-issued identification through data sources.", "A review of the signer's credit history to confirm their identity.", "The notary's examination of the physical features of an ID document."],
        correct: 1,
        explanation: "Credential analysis is a process where a third-party service validates a government-issued identification presented by an individual through a review of public and proprietary data sources.",
        emoji: "🔍",
        points: 10
    },
    {
        id: 22,
        question: "If a New York Notary Public moves out of New York State and does not retain an office or place of business in the state, what is the consequence for their commission?",
        options: ["Their commission automatically vacates.", "Their commission remains valid until its expiration date.", "They must notify the Secretary of State within 30 days but can continue to notarize.", "They must transfer their commission to their new state of residence."],
        correct: 0,
        explanation: "A notary public who is a resident of New York State and moves out of the state and who does not retain an office or place of business in this State shall vacate his or her office as a notary public.",
        emoji: "✈️",
        points: 10
    },
    {
        id: 23,
        question: "What is the purpose of the proposed Senate Bill S398 regarding residential real property conveyances?",
        options: ["To increase the fees notaries can charge for all notarial acts.", "To establish clear notary duties to prevent deed theft.", "To allow notaries to solemnize marriages related to property transfers.", "To exempt notaries from maintaining a journal for real property transactions."],
        correct: 1,
        explanation: "The bill (S398) aims to establish a clear set of notary duties to prevent deed theft.",
        emoji: "🏘️",
        points: 10
    },
    {
        id: 24,
        question: "Which of the following is a Class D felony under New York Penal Law applicable to notaries?",
        options: ["Refusal to officiate an oath when requested.", "Advertising in a foreign language without the required disclaimer.", "Forgery in the second degree, such as falsely altering a deed with intent to defraud.", "Acting as a notary before taking and filing the oath of office."],
        correct: 2,
        explanation: "Forgery in the second degree (§170.10 Penal Law) is guilty when, with intent to defraud, one falsely makes, completes, or alters a written instrument (deed, will, contract, public record, etc.). It is a Class D felony.",
        emoji: "⛓️",
        points: 10
    },
    {
        id: 25,
        question: "What is the current status of Senate Bill S6268, which proposes to increase notary fees from $2.00 to $5.00, as of June 2025?",
        options: ["It has been signed into law and is effective.", "It has been defeated and will not be reconsidered.", "It is pending legislation, currently in the Senate Finance Committee.", "It is awaiting a public referendum vote."],
        correct: 2,
        explanation: "NY State Senate Bill 2025-S6268 is currently active and in the Senate Finance Committee.",
        emoji: "🏛️",
        points: 10
    },
    {
        id: 26,
        question: "What is the minimum age requirement to become a Notary Public in New York State?",
        options: ["16 years old", "18 years old", "21 years old", "25 years old"],
        correct: 1,
        explanation: "Notary applicants must be at least 18 years old.",
        emoji: "🎂",
        points: 10
    },
    {
        id: 27,
        question: "What is the role of the County Clerk's office regarding Notaries Public in New York State?",
        options: ["They administer the Notary Public examination.", "They issue the initial Notary Public commission.", "They maintain a public record of the notary's commission and signature.", "They provide legal advice to notaries."],
        correct: 2,
        explanation: "The county clerk maintains a record of the commission and signature. The public may then access this record and verify the 'official' signature of the notary at the county clerk's office.",
        emoji: "🗄️",
        points: 10
    },
    {
        id: 28,
        question: "What is the fee for taking the New York State Notary Public examination?",
        options: ["$10.00", "$15.00", "$20.00", "$60.00"],
        correct: 1,
        explanation: "The examination fee is $15.00.",
        emoji: "🎟️",
        points: 10
    },
    {
        id: 29,
        question: "A notary public is asked to take an acknowledgment over the telephone without the individual physically present. What should the notary do?",
        options: ["Proceed with the acknowledgment, as long as the individual's identity is confirmed verbally.", "Refuse, as taking acknowledgments over the telephone without personal appearance is illegal.", "Advise the individual to send a scanned copy of their ID for verification.", "Perform the acknowledgment, but note in the journal that it was done remotely."],
        correct: 1,
        explanation: "The practice of taking acknowledgments and affidavits over the telephone, or otherwise, without the actual, personal appearance of the individual making the acknowledgment or affidavit before the officiating notary, is illegal.",
        emoji: "📞",
        points: 10
    },
    {
        id: 30,
        question: "Which of the following is a power generally authorized for a New York Notary Public?",
        options: ["Solemnizing marriages.", "Drafting legal contracts for a fee.", "Administering oaths and affirmations.", "Certifying copies of public records."],
        correct: 2,
        explanation: "Notaries have general powers to administer oaths/affirmations. Notaries have no authority to solemnize marriages or issue certified copies and cannot draft legal papers unless they are an attorney.",
        emoji: "✨",
        points: 10
    },
    {
        id: 31,
        question: "What is the retention period for the audio-visual recording of an electronic notarial act performed by a New York Notary Public?",
        options: ["1 year", "3 years", "5 years", "10 years"],
        correct: 3,
        explanation: "Electronic notaries must keep a copy of the video and audio conference recording for at least 10 years.",
        emoji: "🎥",
        points: 10
    },
    {
        id: 32,
        question: "A Notary Public is also a stockholder and employee of a corporation. Can they notarize a document executed by another employee of that same corporation?",
        options: ["No, because it presents a conflict of interest.", "Yes, provided they are not individually a party to the instrument.", "Only if they do not receive any fee for the notarization.", "Only if the document is not related to the corporation's financial matters."],
        correct: 1,
        explanation: "Executive Law §138 allows notaries who are stockholders, directors, officers, or employees of a corporation to take acknowledgments or administer oaths for instruments executed to or by the corporation, or for other employees/agents, provided they are not individually a party executing the instrument.",
        emoji: "🏢",
        points: 10
    },
    {
        id: 33,
        question: "What is the consequence if a Notary Public acts before taking and filing their oath of office?",
        options: ["The notarial act is valid but the notary receives a warning.", "The notary public is subject to civil penalties only.", "The notary public is guilty of a misdemeanor.", "The notary public's commission is automatically suspended for 30 days."],
        correct: 2,
        explanation: "Notary must not act before taking and filing oath of office; doing so is a misdemeanor.",
        emoji: "✋",
        points: 10
    },
    {
        id: 34,
        question: "A notary public is requested to administer an oath to an individual. What is the notary's obligation?",
        options: ["The notary may refuse if they are too busy.", "The notary must officiate on request, and refusal is a misdemeanor.", "The notary may charge any reasonable fee for the service.", "The notary must first determine if the individual is a U.S. citizen."],
        correct: 1,
        explanation: "Notary must officiate on request. Refusal to administer an oath or affidavit when requested is a misdemeanor.",
        emoji: "🙏",
        points: 10
    },
    {
        id: 35,
        question: "Which of the following is NOT required on a New York Notary Public's identification card?",
        options: ["Notary's name", "Notary's address", "Notary's commission term", "Notary's photograph"],
        correct: 3,
        explanation: "The identification card will indicate the notary's name, address, county and commission term. It does not specify a photograph is required.",
        emoji: "🪪",
        points: 10
    },
    {
        id: 36,
        question: "What is the maximum fee a New York Notary Public may charge for taking and certifying an acknowledgment or proof of execution by one person, as of June 2025?",
        options: ["$1.00", "$2.00", "$5.00", "$10.00"],
        correct: 1,
        explanation: "A notary public may charge a fee of $2.00 for taking an acknowledgment or proof of execution.",
        emoji: "💰",
        points: 10
    },
    {
        id: 37,
        question: "In the context of electronic notarization, what is 'identity proofing'?",
        options: ["The notary's visual confirmation of the signer's face.", "A process where a third party confirms the identity of a signer through review of personal information from public and proprietary data sources.", "The signer providing a password or PIN to the notary.", "The notary asking the signer a series of personal questions."],
        correct: 1,
        explanation: "Identity proofing is a process or service through which a third party confirms the identity of a signer through review of personal information from public and proprietary data sources.",
        emoji: "🕵️",
        points: 10
    },
    {
        id: 38,
        question: "What is the current status of Senate Bill S398, which proposes mandatory journal entries with inked thumbprints for residential real property conveyances?",
        options: ["It has been signed into law and is effective.", "It is pending legislation, currently in the Senate Finance Committee.", "It was defeated in the Assembly and will not be reintroduced.", "It is under review by the Department of State for potential regulation."],
        correct: 1,
        explanation: "NY State Senate Bill 2025-S398 is currently In Senate Committee (Finance Committee).",
        emoji: "📄",
        points: 10
    },
    {
        id: 39,
        question: "If a Notary Public changes their name due to marital status, what is the fee for changing their name on their license?",
        options: ["$0 (no fee)", "$5.00", "$10.00", "$20.00"],
        correct: 0,
        explanation: "The $10 fee is not required if the individual name change is the result in change of marital status.",
        emoji: "💍",
        points: 10
    },
    {
        id: 40,
        question: "Which of the following is a misdemeanor offense for a Notary Public in New York State?",
        options: ["Administering an oath to a non-resident.", "Refusing to administer an oath or affidavit when requested.", "Charging the statutory fee for a notarial act.", "Filing a certificate of official character in another county."],
        correct: 1,
        explanation: "Refusal to administer an oath or affidavit when requested is a misdemeanor.",
        emoji: "⚖️",
        points: 10
    },
    {
        id: 41,
        question: "What is the validity period for New York State Notary Public examination results?",
        options: ["1 year", "2 years", "3 years", "4 years"],
        correct: 1,
        explanation: "Examination results are only valid for a period of two years.",
        emoji: "⏳",
        points: 10
    },
    {
        id: 42,
        question: "A Notary Public is commissioned in Albany County. They are asked to notarize a document in New York City. Can they do so?",
        options: ["No, a notary can only officiate in their county of commission.", "Yes, a notary's jurisdiction is co-extensive with the boundaries of the state.", "Only if they first file a Certificate of Official Character in New York County.", "Only if the document will not be recorded in New York City."],
        correct: 1,
        explanation: "The Secretary of State may appoint and commission as many notaries public for the State of New York as in his or her judgment may be deemed best, whose jurisdiction shall be co-extensive with the boundaries of the state.",
        emoji: "🗺️",
        points: 10
    },
    {
        id: 43,
        question: "What happens if a person convicted of a felony applies to become a Notary Public in New York?",
        options: ["They are automatically disqualified.", "They may be considered for appointment if they obtain an executive pardon, certificate of relief from disabilities, or certificate of good conduct.", "They must wait 10 years after their conviction before applying.", "They are eligible only if the felony was a non-violent offense."],
        correct: 1,
        explanation: "Generally, a person convicted of felony cannot be appointed as a notary public. However, should a person convicted of any crime obtain an executive pardon, a certificate of relief from disabilities, or a certificate of good conduct from the parole board, he or she may be considered for appointment.",
        emoji: "📜",
        points: 10
    },
    {
        id: 44,
        question: "What is the purpose of a 'colloquy form' as proposed in Senate Bill S398 for residential real property conveyances?",
        options: ["To record the notary's personal observations of the principal.", "To ensure the principal understands the nature of the transaction before signing.", "To document the notary's fees for the transaction.", "To serve as an application for legal aid for the principal."],
        correct: 1,
        explanation: "The colloquy form is performed with the principal to ensure they understand the conveyance of real property.",
        emoji: "🗣️",
        points: 10
    },
    {
        id: 45,
        question: "What is the fee for a duplicate Notary Public identification card in New York State?",
        options: ["$0", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "A $10.00 non-refundable fee for a duplicate lost, destroyed, or damaged ID card.",
        emoji: "💳",
        points: 10
    },
    {
        id: 46,
        question: "Which of the following is a mandatory entry in the journal for an electronic notarial act?",
        options: ["The principal's marital status.", "Identification of the communication technology and verification providers used.", "The notary's personal opinion of the principal's demeanor.", "A copy of the electronic document itself."],
        correct: 1,
        explanation: "For electronic notarial acts, identification of the communication technology, certification authority, and verification providers used is a required entry.",
        emoji: "💻",
        points: 10
    },
    {
        id: 47,
        question: "What is the primary difference between 'credential analysis' and 'identity proofing' in electronic notarization?",
        options: ["Credential analysis is for in-person acts, identity proofing is for remote acts.", "Credential analysis validates the ID's authenticity; identity proofing confirms the individual's identity.", "Credential analysis is performed by the notary; identity proofing by the signer.", "Credential analysis is optional; identity proofing is mandatory."],
        correct: 1,
        explanation: "Credential analysis validates the authenticity of the ID, while identity proofing validates the identity of the individual.",
        emoji: "🔍",
        points: 10
    },
    {
        id: 48,
        question: "What is the penalty for a non-attorney notary public who uses foreign language terms in advertising that imply they are a licensed attorney (e.g., 'abogado')?",
        options: ["Immediate removal from office.", "A civil penalty up to $1,000 for the first violation.", "Mandatory legal education courses.", "Suspension of commission for one year."],
        correct: 1,
        explanation: "Penalties for advertising violations include a civil penalty up to $1,000 for the first violation, suspension for a second, and removal for a third.",
        emoji: "💸",
        points: 10
    },
    {
        id: 49,
        question: "What is the primary function of the County Clerk in relation to a notary public's signature?",
        options: ["To approve the notary's signature style.", "To authenticate the notary's signature for documents used outside the State.", "To provide the notary with a signature stamp.", "To train notaries on proper signature techniques."],
        correct: 1,
        explanation: "County clerks can authenticate notary signatures and attest to their authority, especially for documents used outside the State.",
        emoji: "✅",
        points: 10
    },
    {
        id: 50,
        question: "A Notary Public is asked to administer an oath to a public officer. Is this permissible?",
        options: ["No, only judges can administer oaths to public officers.", "Yes, a notary public is permitted to administer the oath of a public officer.", "Only if the public officer is a state-level official.", "Only if the notary is also an attorney."],
        correct: 1,
        explanation: "Public Officers Law §10 permits a notary public to administer the oath of a public officer.",
        emoji: "🏛️",
        points: 10
    },
    {
        id: 51,
        question: "What is the status of a notary public's official acts if they are performed before taking and filing their oath of office?",
        options: ["The acts are valid, but the notary is subject to a fine.", "The acts are invalid, and the notary is guilty of a felony.", "The acts are valid, but the notary is guilty of a misdemeanor.", "The acts are invalid, and the notary is subject to removal."],
        correct: 2,
        explanation: "Notary must not act before taking and filing oath of office; doing so is a misdemeanor. The validity of the acts is not stated as invalid in this specific context, but the act of performing them is a misdemeanor.",
        emoji: "✋",
        points: 10
    },
    {
        id: 52,
        question: "What is the primary purpose of the audio-visual recording requirement for electronic notarial acts?",
        options: ["To provide a visual record for marketing purposes.", "To allow the notary to review their performance.", "To create an immutable evidentiary record of the transaction for accountability and fraud deterrence.", "To ensure the notary can visually confirm the signer's attire."],
        correct: 2,
        explanation: "The recording provides an immutable record of the entire remote notarial transaction, significantly enhancing accountability and serving as a strong deterrent against fraud.",
        emoji: "🎥",
        points: 10
    },
    {
        id: 53,
        question: "According to proposed Senate Bill S398, what additional item would be required in the journal entry for notarizations involving residential real property conveyances?",
        options: ["A photograph of the property.", "An inked thumbprint of the principal.", "The principal's financial statements.", "A copy of the notary's commission."],
        correct: 1,
        explanation: "Each journal entry shall have the principal signing the instrument place an inked thumbprint into the journal.",
        emoji: "👍",
        points: 10
    },
    {
        id: 54,
        question: "What is the maximum number of additional notices of protest a Notary Public may charge for, and at what fee per notice?",
        options: ["3 notices, $0.25 each", "5 notices, $0.10 each", "10 notices, $0.05 each", "Unlimited notices, $0.10 each"],
        correct: 1,
        explanation: "Fees: Maximum fees for protest (75 cents) and notices (10 cents each, up to five).",
        emoji: "🪙",
        points: 10
    },
    {
        id: 55,
        question: "Which of the following is NOT a valid form of identification for a physical appearance notarization if the notary does not personally know the signer?",
        options: ["A valid government-issued driver's license with photo and signature.", "Two current documents, both bearing the individual's signature.", "A library card with a photo.", "The oath of one credible witness known to the notary."],
        correct: 2,
        explanation: "Acceptable forms include valid government-issued ID (photo, physical description, signature), or at least two current documents with signature, or oath/affirmation of one or two witnesses. A library card is not typically considered a valid government-issued ID or one of the two current documents with signature.",
        emoji: "🆔",
        points: 10
    },
    {
        id: 56,
        question: "What is the primary justification for the proposed increase in notary fees from $2.00 to $5.00, as stated in Senate Bill S6268?",
        options: ["To align New York fees with national averages.", "To compensate notaries for increased operational costs and stagnant fees over decades.", "To fund a new state-wide notary education program.", "To discourage individuals from becoming notaries."],
        correct: 1,
        explanation: "The justification states that the fee notaries can charge have remained the same for over twenty five years, yet the fees notaries have been charged have continually increased over that same period.",
        emoji: "📈",
        points: 10
    },
    {
        id: 57,
        question: "If a Notary Public is convicted of a crime, under what circumstances might they still be considered for appointment?",
        options: ["Only if the crime was a traffic violation.", "If they obtain an executive pardon, a certificate of relief from disabilities, or a certificate of good conduct.", "Never, any criminal conviction is an absolute bar.", "Only if they complete a court-ordered community service."],
        correct: 1,
        explanation: "Should a person convicted of any crime obtain an executive pardon, a certificate of relief from disabilities, or a certificate of good conduct from the parole board, he or she may be considered for appointment.",
        emoji: "📜",
        points: 10
    },
    {
        id: 58,
        question: "What is the purpose of 'identity proofing' in electronic notarization, according to NYS regulations?",
        options: ["To confirm the notary's identity to the signer.", "To verify the authenticity of the document being notarized.", "To confirm the identity of a signer through review of personal information from public and proprietary data sources.", "To ensure the signer has a valid email address."],
        correct: 2,
        explanation: "Identity proofing is a process or service through which a third party confirms the identity of a signer through review of personal information from public and proprietary data sources.",
        emoji: "🕵️",
        points: 10
    },
    {
        id: 59,
        question: "Which of the following is NOT considered the unauthorized practice of law for a non-attorney Notary Public?",
        options: ["Giving legal advice on immigration matters.", "Drafting a will for a client.", "Administering an oath to a deponent.", "Soliciting legal business for a lawyer with whom they have a business connection."],
        correct: 2,
        explanation: "Administering oaths is a general power of a notary public. Giving legal advice, drafting legal papers, and soliciting legal business for lawyers are prohibited activities unless the notary is also an attorney.",
        emoji: "⚖️",
        points: 10
    },
    {
        id: 60,
        question: "What is the maximum term of imprisonment for a Class A misdemeanor in New York State?",
        options: ["6 months", "1 year", "2 years", "4 years"],
        correct: 1,
        explanation: "Penal Law §70.15 defines the maximum term for a Class A misdemeanor as one year.",
        emoji: "⛓️",
        points: 10
    },
    {
        id: 61,
        question: "A notary public is asked to notarize a document on a Sunday. Is this permissible?",
        options: ["No, notarial acts are prohibited on Sundays.", "Yes, a notary may administer an oath or take an acknowledgment on a Sunday.", "Only if it is an emergency situation.", "Only if the document is not related to a civil proceeding."],
        correct: 1,
        explanation: "A notary may administer oath/take acknowledgment on Sunday, but a deposition cannot be taken in a civil proceeding.",
        emoji: "🗓️",
        points: 10
    },
    {
        id: 62,
        question: "What is the primary purpose of the proposed 'inked thumbprint' requirement in Senate Bill S398 for residential real property conveyances?",
        options: ["To provide an alternative form of signature for the principal.", "To add a biometric layer of security to combat deed theft and aid law enforcement.", "To verify the principal's age.", "To track the number of notarizations performed by the notary."],
        correct: 1,
        explanation: "The proposed thumbprint requirement is a highly specific anti-fraud measure, adding a biometric layer of security that goes beyond standard identity verification. This indicates a proactive effort to protect vulnerable homeowners and provides law enforcement with crucial evidence in fraud cases.",
        emoji: "👍",
        points: 10
    },
    {
        id: 63,
        question: "If a notary public is removed as a Commissioner of Deeds for New York City, are they eligible for reappointment as a Notary Public?",
        options: ["Yes, after a waiting period of one year.", "No, they are ineligible for reappointment as a Commissioner of Deeds or as a Notary Public.", "Only if they pass a special examination.", "Only if they receive a pardon from the Secretary of State."],
        correct: 1,
        explanation: "Persons removed as Commissioner of Deeds for NYC are ineligible for reappointment as such or as a notary public. (Executive Law §140 (14) and (15))",
        emoji: "🚫",
        points: 10
    },
    {
        id: 64,
        question: "What is the fee for filing a Certificate of Official Character with a County Clerk in a county other than the notary's county of residence?",
        options: ["$1.00", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "There is a fee of $10.00 to file the character card in another county.",
        emoji: "🗄️",
        points: 10
    },
    {
        id: 65,
        question: "What is the term for a formal declaration before an authorized public officer by a person who has executed an instrument, stating that such execution is their act and deed?",
        options: ["Affidavit", "Jurat", "Acknowledgment", "Deposition"],
        correct: 2,
        explanation: "Acknowledgment is defined as a formal declaration before an authorized public officer by a person who has executed an instrument, that such execution is their act and deed.",
        emoji: "✍️",
        points: 10
    },
    {
        id: 66,
        question: "Which of the following is a Class E felony under New York Penal Law applicable to public servants?",
        options: ["Official misconduct.", "Issuing a false certificate with intent to defraud.", "Refusal to officiate.", "Advertising without proper disclaimer."],
        correct: 1,
        explanation: "Issuing a false certificate (§175.40 Penal Law) is guilty when a public servant issues a false official certificate with intent to defraud, knowing it contains false information. It is a Class E felony.",
        emoji: "⛓️",
        points: 10
    },
    {
        id: 67,
        question: "What is the purpose of the proposed mandatory educational program for notaries related to residential real property conveyances, as per Senate Bill S398?",
        options: ["To teach notaries how to appraise real estate.", "To educate notaries on their new duties concerning such conveyances and the colloquy form.", "To provide legal advice to notaries on property law.", "To certify notaries as real estate agents."],
        correct: 1,
        explanation: "The Secretary of State is required to set forth a mandatory program for educating notaries of such duties (related to residential real property conveyances and colloquy).",
        emoji: "🎓",
        points: 10
    },
    {
        id: 68,
        question: "If a Notary Public's commission expires, how long do they have to renew it without being required to retake the examination?",
        options: ["30 days", "3 months", "6 months", "1 year"],
        correct: 2,
        explanation: "Renewing Notaries must take the exam if commission has lapsed (expired) for more than six months. This implies they can renew without the exam within six months.",
        emoji: "⏳",
        points: 10
    },
    {
        id: 69,
        question: "What is the term for a written statement sworn to or affirmed before an officer authorized to administer an oath or affirmation?",
        options: ["Acknowledgment", "Affidavit", "Deed", "Contract"],
        correct: 1,
        explanation: "An affidavit is a written statement sworn to or affirmed before an officer authorized to administer an oath or affirmation.",
        emoji: "📄",
        points: 10
    },
    {
        id: 70,
        question: "What is the maximum term of imprisonment for a Class D felony in New York State?",
        options: ["4 years", "7 years", "10 years", "15 years"],
        correct: 1,
        explanation: "Penal Law §70.00 defines the maximum term for a Class D felony as 7 years.",
        emoji: "⛓️",
        points: 10
    },
    {
        id: 71,
        question: "Which of the following is a key characteristic of the electronic signature used by an electronic notary public?",
        options: ["It must be a physical stamp applied digitally.", "It must be unique to the notary and linked to the record to detect alterations.", "It must be easily transferable to other notaries.", "It must be a scanned image of the notary's handwritten signature."],
        correct: 1,
        explanation: "Electronic signature must be unique, independently verifiable, under notary's sole control, attached to the record, and linked to data to detect alterations.",
        emoji: "🌐",
        points: 10
    },
    {
        id: 72,
        question: "What is the fee for a Notary Public to file a certificate of official character in another county?",
        options: ["$1.00", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "There is a fee of $10.00 to file the character card in another county.",
        emoji: "🗄️",
        points: 10
    },
    {
        id: 73,
        question: "What is the term used for a person who makes and subscribes their signature to an affidavit?",
        options: ["Deponent", "Affiant", "Grantor", "Principal"],
        correct: 1,
        explanation: "Affiant is defined as a person who makes and subscribes an affidavit.",
        emoji: "✍️",
        points: 10
    },
    {
        id: 74,
        question: "Which of the following is NOT a required item to bring to the NYS Notary Public examination?",
        options: ["A government-issued photo identification.", "A check or money order for the examination fee.", "A copy of the Notary Public License Law booklet.", "Two #2 pencils."],
        correct: 2,
        explanation: "Dictionaries, books, other reference materials, large bags and briefcases are not allowed at the exam center. You must bring a government issued ID, $15 examination fee, and two #2 pencils.",
        emoji: "🎒",
        points: 10
    },
    {
        id: 75,
        question: "What is the consequence if a Notary Public is found guilty of 'official misconduct' under Penal Law §195.00?",
        options: ["It is a Class D felony.", "It is a Class E felony.", "It is a Class A misdemeanor.", "It results in automatic removal from office without further hearing."],
        correct: 2,
        explanation: "Official misconduct (§195.00 Penal Law) is a Class A misdemeanor.",
        emoji: "⚖️",
        points: 10
    },
    {
        id: 76,
        question: "What is the purpose of 'credential analysis' as defined in NYS regulations for electronic notarization?",
        options: ["To analyze the notary's credentials.", "To validate a government-issued identification presented by an individual through a review of public and proprietary data sources.", "To verify the notary's digital certificate.", "To assess the signer's financial standing."],
        correct: 1,
        explanation: "Credential analysis is a process where a third-party service validates a government-issued identification presented by an individual through a review of public and proprietary data sources.",
        emoji: "🔍",
        points: 10
    },
    {
        id: 77,
        question: "What is the term for the clause in an affidavit stating when, where, and before whom it was sworn to or affirmed?",
        options: ["Acknowledgment", "Attestation Clause", "Jurat", "Venue"],
        correct: 2,
        explanation: "Jurat is defined as the clause in an affidavit stating when, where, and before whom it was sworn to or affirmed.",
        emoji: "📄",
        points: 10
    },
    {
        id: 78,
        question: "What is the primary responsibility of a notary public regarding identity verification for a remote online notarization (RON) if the signer is not personally known?",
        options: ["To rely solely on the signer's verbal affirmation of identity.", "To use communication technology that facilitates remote presentation of ID, credential analysis, and identity proofing by a third-party service provider.", "To require the signer to mail a copy of their identification after the act.", "To verify identity through a simple online search."],
        correct: 1,
        explanation: "For electronic appearance (if not personally known): Identity verification via communication technology, credential analysis, and identity proofing by a third-party service provider.",
        emoji: "💻",
        points: 10
    },
    {
        id: 79,
        question: "What is the current fee for a Notary Public to administer an oath or affirmation, as per Executive Law §136?",
        options: ["$0.75", "$1.00", "$2.00", "$5.00"],
        correct: 2,
        explanation: "For administering an oath or affirmation, and certifying the same when required, except where another fee is specifically prescribed by statute, two dollars.",
        emoji: "💵",
        points: 10
    },
    {
        id: 80,
        question: "What is the consequence if a notary public, with intent to defraud, issues a false official certificate knowing it contains false information?",
        options: ["It is a Class A misdemeanor.", "It is a Class E felony.", "It results in a civil penalty only.", "It leads to immediate suspension without a hearing."],
        correct: 1,
        explanation: "Issuing a false certificate (§175.40 Penal Law) is a Class E felony.",
        emoji: "⛓️",
        points: 10
    },
    {
        id: 81,
        question: "What is the primary role of the Secretary of State in New York regarding Notaries Public?",
        options: ["To provide legal advice to notaries.", "To administer the Notary Public examination.", "To appoint and commission notaries public.", "To investigate all complaints against notaries."],
        correct: 2,
        explanation: "Notaries public are commissioned by the Secretary of State. The Secretary of State may appoint and commission as many notaries public for the State of New York as in his or her judgment may be deemed best.",
        emoji: "🏛️",
        points: 10
    },
    {
        id: 82,
        question: "Which of the following is a prohibited activity for a non-attorney Notary Public?",
        options: ["Taking an acknowledgment for a deed.", "Administering an oath for an affidavit.", "Preparing a bill of sale for a client for compensation.", "Protesting a promissory note."],
        correct: 2,
        explanation: "A notary may not draw any kind of legal papers, such as wills, deeds, bills of sale, mortgages, chattel mortgages, contracts, leases, offers, options, incorporation papers, releases, mechanics liens, power of attorney, complaints and all legal pleadings, papers in summary proceedings to evict a tenant.",
        emoji: "🚫",
        points: 10
    },
    {
        id: 83,
        question: "According to proposed Senate Bill S398, what would be the consequence if a notary public has not completed the mandatory educational program for residential real property conveyances?",
        options: ["They would be subject to a civil penalty.", "They would be unqualified to certify any acknowledgment of a conveyance of residential real property, and such instrument would be voidable.", "They would be required to retake the notary public examination.", "They would be prohibited from performing any notarial acts for one year."],
        correct: 1,
        explanation: "A notary public who has not completed the educational program is unqualified to certify any acknowledgment of a conveyance of residential real property situated in this State and any such instrument conveying such real property by the notary public is voidable.",
        emoji: "🎓",
        points: 10
    },
    {
        id: 84,
        question: "What is the current fee for renewing a Notary Public commission in New York State?",
        options: ["$15.00", "$25.00", "$60.00", "$100.00"],
        correct: 2,
        explanation: "The renewal fee is $60.00.",
        emoji: "💰",
        points: 10
    },
    {
        id: 85,
        question: "What is the term for a formal statement in writing by a notary public, at the request of the holder of a bill or note, of its presentment for payment or acceptance and refusal thereof?",
        options: ["Acknowledgment", "Deposition", "Protest", "Affidavit"],
        correct: 2,
        explanation: "Protest is defined as a formal statement in writing by a notary public, at the request of the holder of a bill or note, of its presentment for payment or acceptance and refusal thereof.",
        emoji: "📉",
        points: 10
    },
    {
        id: 86,
        question: "A Notary Public is commissioned in Westchester County. They wish to have their signature on file with the Queens County Clerk. What is the fee to file a Certificate of Official Character in Queens County?",
        options: ["$1.00", "$5.00", "$10.00", "$15.00"],
        correct: 2,
        explanation: "There is a fee of $10.00 to file the character card in another county.",
        emoji: "🗄️",
        points: 10
    },
    {
        id: 87,
        question: "Which of the following is a valid form of identification for an in-person notarization if the notary does not personally know the signer?",
        options: ["A current utility bill with the signer's name and address.", "A student ID card from a private university.", "A valid US Passport.", "A signed credit card."],
        correct: 2,
        explanation: "Valid government-issued identification (photo, physical description, signature) is acceptable. A US Passport is a valid government-issued ID.",
        emoji: "🆔",
        points: 10
    },
    {
        id: 88,
        question: "What is the significance of 'personal appearance' in New York Notary Public law?",
        options: ["It is only required for electronic notarizations.", "It ensures the notary can verify the signer's identity and willingness.", "It allows the notary to provide legal advice to the signer.", "It is only required for documents involving real property."],
        correct: 1,
        explanation: "The practice of taking acknowledgments and affidavits over the telephone, or otherwise, without the actual, personal appearance of the individual making the acknowledgment or affidavit before the officiating notary, is illegal. This highlights the importance of actual presence for verification.",
        emoji: "👤",
        points: 10
    },
    {
        id: 89,
        question: "What is the maximum term of imprisonment for a Class E felony in New York State?",
        options: ["1 year", "2 years", "4 years", "7 years"],
        correct: 2,
        explanation: "Penal Law §70.00 defines the maximum term for a Class E felony as 4 years.",
        emoji: "⛓️",
        points: 10
    },
    {
        id: 90,
        question: "Which of the following is a reason for which a Notary Public can be suspended or removed from office?",
        options: ["Refusing to notarize a document for a family member.", "Misstatement in their application or taking false oaths.", "Charging the statutory fee for a notarial act.", "Failing to renew their commission exactly 90 days before expiration."],
        correct: 1,
        explanation: "Notaries can be suspended or removed for misconduct, fraud or deceit in office, misstatement in application, or taking false/fraudulent oaths.",
        emoji: "❌",
        points: 10
    },
    {
        id: 91,
        question: "What is the purpose of the proposed 'colloquy form' in Senate Bill S398 for residential real property conveyances?",
        options: ["To record the notary's personal observations of the principal.", "To ensure the principal understands the nature of the transaction and is signing voluntarily.", "To document the notary's fees for the transaction.", "To serve as an application for legal aid for the principal."],
        correct: 1,
        explanation: "The colloquy form includes questions designed to confirm the principal's understanding and free will in the conveyance of real property.",
        emoji: "🗣️",
        points: 10
    },
    {
        id: 92,
        question: "Who is exempt from paying the application fee to become a Notary Public in New York State?",
        options: ["No one is exempt from the application fee.", "Attorneys licensed in NYS.", "Court clerks of the Unified Court System.", "County Clerk staff members designated as notaries to serve the public."],
        correct: 3,
        explanation: "County Law §534 states that county clerk appointees are exempt from examination and application fees.",
        emoji: "🆓",
        points: 10
    },
    {
        id: 93,
        question: "What is the term for the testimony of a witness taken out of court under oath or affirmation?",
        options: ["Acknowledgment", "Affidavit", "Deposition", "Protest"],
        correct: 2,
        explanation: "Deposition is defined as the testimony of a witness taken out of court under oath or affirmation.",
        emoji: "🎤",
        points: 10
    },
    {
        id: 94,
        question: "What is the primary difference between an 'oath' and an 'affirmation' in notarial practice?",
        options: ["An oath is legally binding, while an affirmation is not.", "An oath involves a swearing to a divine being; an affirmation is a solemn declaration without religious reference.", "An oath is for legal documents; an affirmation is for personal statements.", "An oath requires a witness; an affirmation does not."],
        correct: 1,
        explanation: "An affirmation is legally equivalent to an oath and is just as binding. The definition of affirmation notes it is a solemn declaration made by a person who conscientiously declines taking an oath.",
        emoji: "🙏",
        points: 10
    },
    {
        id: 95,
        question: "If a Notary Public is also a member of the New York State Legislature and accepts a notary public appointment while receiving compensation for it, what is the consequence?",
        options: ["They must resign from the Legislature.", "They must decline the notary public compensation.", "Their notary public commission is automatically revoked.", "Their seat in the Legislature is vacated."],
        correct: 3,
        explanation: "Acceptance of a notary public appointment by a legislator vacates their seat if compensation is received.",
        emoji: "🏛️",
        points: 10
    },
    {
        id: 96,
        question: "What does 'personal knowledge' mean as a method of identity verification for a notary public?",
        options: ["The notary has seen the signer's ID in the past.", "The notary has known the signer for a long period and is certain of their identity.", "The notary recognizes the signer from a brief encounter.", "The notary has reviewed the signer's social media profile."],
        correct: 1,
        explanation: "Personal knowledge by notary is a satisfactory evidence of identity for physical appearance. This implies a level of certainty beyond mere recognition.",
        emoji: "🤝",
        points: 10
    },
    {
        id: 97,
        question: "What is the purpose of the $10.00 fee for a change of name or address for a Notary Public?",
        options: ["To cover the cost of a new ID card.", "To update the notary's record with the Department of State.", "To penalize notaries for frequent changes.", "To fund notary public training programs."],
        correct: 1,
        explanation: "A $10.00 non-refundable fee for changing name or address. This is an administrative fee to update records.",
        emoji: "📝",
        points: 10
    },
    {
        id: 98,
        question: "What is the significance of the phrase 'unless the defect was known or apparent on the certificate' in Executive Law §142-a regarding the validity of notarial acts despite certain defects?",
        options: ["It means all defects, regardless of how minor, invalidate the act.", "It implies that unknown or non-apparent defects generally do not invalidate the act.", "It refers to defects in the document being notarized, not the notarial act itself.", "It allows the notary to correct any defect after the act is performed."],
        correct: 1,
        explanation: "Official acts are not invalid due to certain defects (e.g., ineligibility, misnomer, omission of oath, expired term, vacating office, acting outside jurisdiction), unless the defect was known or apparent on the certificate. This protects against unknown technical errors.",
        emoji: "✅",
        points: 10
    },
    {
        id: 99,
        question: "What is the primary purpose of the comprehensive syllabus provided for the NYS Notary Public examination?",
        options: ["To list all licensed notaries in New York.", "To outline all topics covered on the exam and assist in preparation.", "To provide legal advice to aspiring notaries.", "To serve as an application form for the commission."],
        correct: 1,
        explanation: "The exam topics include License law, general terms and information related to the duties and functions of a notary public, as outlined in the 'Notary Public License Law' booklet. The syllabus covers these.",
        emoji: "📚",
        points: 10
    },
    {
        id: 100,
        question: "What does 'acknowledgment' mean in the context of a notary public's duties?",
        options: ["The notary's confirmation that they have read and understood the document.", "A formal declaration by a person who has executed an instrument that such execution is their act and deed.", "The notary's signature on a document to confirm its accuracy.", "A verbal agreement between two parties witnessed by the notary."],
        correct: 1,
        explanation: "Acknowledgment is defined as a formal declaration before an authorized public officer by a person who has executed an instrument, that such execution is their act and deed.",
        emoji: "✍️",
        points: 10
    }
];