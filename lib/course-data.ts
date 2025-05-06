export interface Course {
  name: string
  specialization?: string
  duration: string
  eligibility: string
  fees: string
}

export interface CourseCategory {
  [key: string]: Course[]
}

export const courseData: CourseCategory = {
  "B.Tech": [
    {
      name: "Mechanical Engineering",
      duration: "8 Semester",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Electrical Engineering",
      duration: "8 Semester",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Electronics & Communication",
      duration: "8 Semester",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Civil Engineering",
      duration: "8 Semester",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Computer Science",
      duration: "8 Semester",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Robotics Engineering",
      duration: "8 Semester",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Artificial Intelligence",
      duration: "8 Semester",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
  ],
  "Commerce & Management": [
    {
      name: "MBA (Banking & Finance)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "50000",
    },
    {
      name: "MBA (Finance)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "50000",
    },
    {
      name: "MBA (Human Resource)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "50000",
    },
    {
      name: "MBA (Information Technology)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "50000",
    },
    {
      name: "MBA (Marketing Management)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "50000",
    },
    {
      name: "MBA (Supply Chain Management)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "60000",
    },
    {
      name: "MBA (Hospital and Health Care Management)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "60000",
    },
    {
      name: "MBA (Hotel Management)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "60000",
    },
    {
      name: "MBA (Retail Management)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "60000",
    },
    {
      name: "MBA (Digital Marketing Management)",
      duration: "4 Semester",
      eligibility: "Graduation in any discipline",
      fees: "60000",
    },
    {
      name: "BBA (General)",
      duration: "6 semester",
      eligibility: "10+2 or equivalent",
      fees: "25000",
    },
    {
      name: "B.Com (General)",
      duration: "3 years",
      eligibility: "10+2 or equivalent",
      fees: "8000",
    },
    {
      name: "M.Com (General)",
      duration: "2 year",
      eligibility: "B.Com or equivalent",
      fees: "12000",
    },
  ],

  "M.Tech": [
    {
      name: "Mechanical (Production Technology)",
      duration: "4 Semesters",
      eligibility: "B. Tech. /B.E in Relevant Subject",
      fees: "65000",
    },
    {
      name: "Electrical (Power System Control)",
      duration: "4 Semesters",
      eligibility: "B. Tech. /B.E in Relevant Subject",
      fees: "65000",
    },
    {
      name: "Electronics & Communication (VLSI Design & Embedded System)",
      duration: "4 Semesters",
      eligibility: "B. Tech. /B.E in Relevant Subject",
      fees: "65000",
    },
    {
      name: "Civil (Structural Engineering)",
      duration: "4 Semesters",
      eligibility: "B. Tech. /B.E in Relevant Subject",
      fees: "65000",
    },
    {
      name: "Computer Science (Artificial Intelligence)",
      duration: "4 Semesters",
      eligibility:
        "B. Tech. /B.E in Relevant Subject /Candidate who has passed MSC- IT/CS, MCA is Eligibile for M.Tech Computer Science.",
      fees: "65000",
    },
  ],
  "Diploma Engineering": [
    {
      name: "Civil Engineering",
      duration: "6 semester",
      eligibility: "Passed 10th",
      fees: "30000",
    },
    {
      name: "Electrical Engineering",
      duration: "6 semester",
      eligibility: "Passed 10th",
      fees: "30000",
    },
    {
      name: "Mechanical Engineering",
      duration: "6 semester",
      eligibility: "Passed 10th",
      fees: "30000",
    },
    {
      name: "Electronics & Communication",
      duration: "6 semester",
      eligibility: "Passed 10th",
      fees: "30000",
    },
    {
      name: "Computer Science",
      duration: "6 semester",
      eligibility: "Passed 10th",
      fees: "30000",
    },
    {
      name: "Automobile Engineering",
      duration: "6 semester",
      eligibility: "Passed 10th",
      fees: "30000",
    },
    {
      name: "Information Technology",
      duration: "6 semester",
      eligibility: "Passed 10th",
      fees: "30000",
    },
  ],
 
  
  "Computer Science & IT": [
    {
      name: "DCA (Diploma Computer Application)",
      duration: "2 Semester",
      eligibility: "10+2",
      fees: "16000",
    },
    {
      name: "BCA (Bachelor of Computer Application)",
      duration: "6 Semester",
      eligibility: "10+2 with Maths or equivalent",
      fees: "20000",
    },
    {
      name: "BCA Lateral Entry to 3rd semester",
      duration: "4 Semester",
      eligibility: "10+2 & DCA / 1 year Diploma in Computer",
      fees: "20000",
    },
    {
      name: "PGDCA (Post Graduate Diploma in Computer Application)",
      duration: "2 Semester",
      eligibility: "Graduation in Relevant Stream",
      fees: "24000",
    },
    {
      name: "MCA (Master of Computer Application)",
      duration: "4 Semester",
      eligibility: "Graduation in Relevant Stream",
      fees: "27000",
    },
    {
      name: "B.Sc Computer Science",
      duration: "6 semester",
      eligibility: "10+2 with Maths or equivalent",
      fees: "30000",
    },
    {
      name: "B.Sc Information Technology",
      duration: "6 semester",
      eligibility: "10+2 with Maths or equivalent",
      fees: "30000",
    },
    {
      name: "M.Sc Computer Science",
      duration: "4 Semester",
      eligibility: "B. Tech / B.Sc. (I.T/CS)/PGDCA",
      fees: "30000",
    },
    {
      name: "M.Sc Information Technology",
      duration: "4 Semester",
      eligibility: "B. Tech / B.Sc. (I.T/CS)/PGDCA",
      fees: "30000",
    },
  ],
 
  Arts: [
    {
      name: "BA (Political Science)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Economics)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (History)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Geography)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Sociology)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Psychology)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (English)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Hindi)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Sanskrit)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Philosophy)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
    {
      name: "BA (Mathematics)",
      duration: "3 Years",
      eligibility: "10+2",
      fees: "8000",
    },
  ],
  Science: [
    {
      name: "M.Sc Physics",
      duration: "2 Years",
      eligibility: "Graduation with respective subjects",
      fees: "15000",
    },
    {
      name: "M.Sc Statistics",
      duration: "2 Years",
      eligibility: "Graduation with respective subjects",
      fees: "15000",
    },
    {
      name: "M.Sc Botany",
      duration: "2 Years",
      eligibility: "Graduation with respective subjects",
      fees: "15000",
    },
    {
      name: "M.Sc Zoology",
      duration: "2 Years",
      eligibility: "Graduation with respective subjects",
      fees: "15000",
    },
    {
      name: "M.Sc Chemistry",
      duration: "2 Years",
      eligibility: "Graduation with respective subjects",
      fees: "15000",
    },
    {
      name: "M.Sc Mathematics",
      duration: "2 Years",
      eligibility: "Graduation with respective subjects",
      fees: "15000",
    },
    {
      name: "BSc PCM",
      duration: "3 Years",
      eligibility: "10+2 with respective subjects",
      fees: "12000",
    },
    {
      name: "BSc ZBC",
      duration: "3 Years",
      eligibility: "10+2 with respective subjects",
      fees: "12000",
    },
  ],
  "B.Tech (Lateral Entry)": [
    {
      name: "Mechanical Engineering",
      duration: "6 Semester",
      eligibility:
        "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Electrical Engineering",
      duration: "6 Semester",
      eligibility:
        "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Electronics & Communication",
      duration: "6 Semester",
      eligibility:
        "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Civil Engineering",
      duration: "6 Semester",
      eligibility:
        "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Computer Science",
      duration: "6 Semester",
      eligibility:
        "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Robotics Engineering",
      duration: "6 Semester",
      eligibility:
        "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
    {
      name: "Artificial Intelligence",
      duration: "6 Semester",
      eligibility:
        "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY).",
      fees: "65000",
    },
  ],
  "Diploma Engineering (Lateral Entry)": [
    {
      name: "Civil Engineering",
      duration: "4 semester",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade",
      fees: "30000",
    },
    {
      name: "Electrical Engineering",
      duration: "4 semester",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade",
      fees: "30000",
    },
    {
      name: "Mechanical Engineering",
      duration: "4 semester",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade",
      fees: "30000",
    },
    {
      name: "Electronics & Communication",
      duration: "4 semester",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade",
      fees: "30000",
    },
    {
      name: "Computer Science",
      duration: "4 semester",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade",
      fees: "30000",
    },
    {
      name: "Automobile Engineering",
      duration: "4 semester",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade",
      fees: "30000",
    },
    {
      name: "Information Technology",
      duration: "4 semester",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade",
      fees: "30000",
    },
  ]
}
