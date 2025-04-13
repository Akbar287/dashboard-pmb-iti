export const programs = [
    { name: "Computer Science", regularS1: 120, rplS1: 80, target: 250 },
    { name: "Information Systems", regularS1: 150, rplS1: 70, target: 280 },
    { name: "Data Science", regularS1: 200, rplS1: 60, target: 300 },
    { name: "Artificial Intelligence", regularS1: 180, rplS1: 90, target: 320 },
    { name: "Software Engineering", regularS1: 140, rplS1: 100, target: 280 },
  ];
  
  // Data for stacked bar chart (funnel categories)
  export const funnelCategories = [
    { 
      name: "Database Identification", 
      value: 60000
    },
    { 
      name: "Proposal", 
      value: 15000 
    },
    { 
      name: "Active PMB Account", 
      value: 5000 
    },
    { 
      name: "RPL", 
      value: 2000 
    },
  ];
  
  // Data for pie/donut chart
  export const targetAchievement = {
    achieved: 260,
    target: 1500,
    rplPercentage: 50 // 50% specifically for S1 RPL
  };
  
  // Data for line chart (semester trends)
  export const semesterTrends = [
    { semester: "2022 Odd", achievement: 180 },
    { semester: "2022 Even", achievement: 220 },
    { semester: "2023 Odd", achievement: 260 },
    { semester: "2023 Even", achievement: 310 },
    { semester: "2024 Odd", achievement: 350 },
    { semester: "2024 Even (Prediction)", achievement: 420 },
  ];
  
  // Data for funnel chart
  export const enrollmentFunnel = [
    { name: "Database Identification", value: 60000 },
    { name: "Proposal", value: 15000 },
    { name: "Active PMB Account", value: 5000 },
    { name: "Re-enrollment", value: 2500 },
    { name: "Active Students", value: 2000 },
  ];
  
  // Data for heatmap/matrix chart
  export const programSemesterComparison = [
    { 
      program: "Computer Science",
      oddSemester: 120,
      evenSemester: 140 
    },
    { 
      program: "Information Systems",
      oddSemester: 150,
      evenSemester: 160 
    },
    { 
      program: "Data Science",
      oddSemester: 200,
      evenSemester: 180 
    },
    { 
      program: "Artificial Intelligence",
      oddSemester: 180,
      evenSemester: 200 
    },
    { 
      program: "Software Engineering",
      oddSemester: 140,
      evenSemester: 130 
    },
  ];
  
  // Data for stacked column chart (PSPPI)
  export const psppiOutcomes = [
    { 
      pathway: "Regular",
      semester1: 150,
      semester2: 200 
    },
    { 
      pathway: "RPL",
      semester1: 80,
      semester2: 120 
    },
  ];