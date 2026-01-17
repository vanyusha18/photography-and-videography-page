const members = [
  { id:"PVC-001", name:"A. Krishna Chaitanya", roll:"239X1A0435", year:"III", branch:"ECE", role:"Convener & Team Lead (Videography and Editing)" },
  { id:"PVC-002", name:"M. Vanyusha", roll:"239X1A05D5", year:"III", branch:"CSE", role:"Team Lead (Photography)" },
  { id:"PVC-003", name:"M. Harshitha", roll:"239X1A3267", year:"III", branch:"CSE (Data Science)", role:"Team Lead (Content Writing)" },
  { id:"PVC-004", name:"B. Bala Govardhan", roll:"239X1A0116", year:"III", branch:"CE", role:"Team Lead (Designing)"},

  { id:"PVC-005", name:"B. Rama Lakshmi", roll:"239X1A3208", year:"III", branch:"CSE (Data Science)", role:"Member (Photography)" },
  { id:"PVC-006", name:"A. Sai Ashritha", roll:"239X1A3201", year:"III", branch:"CSE (Data Science)", role:"Member (Videography and Editing)" },
  { id:"PVC-007", name:"TVNS. Vishnu", roll:"239X1A2941", year:"III", branch:"CSE (Business Systems)", role:"Member (Videography and Editing)" },

  { id:"PVC-008", name:"G. Manoj", roll:"249XA02047", year:"II", branch:"EEE", role:"Member (Videography and Editing)" },
  { id:"PVC-009", name:"R. Hemanth Kumar Reddy", roll:"249XA02107", year:"II", branch:"EEE", role:"Member (Videography and Editing)"},
  { id:"PVC-010", name:"Tharaka Lakshmi", roll:"249XA04073", year:"II", branch:"ECE", role:"Member (Videography and Editing)" },

  { id:"PVC-011", name:"P. Mahathi", roll:"249XA33136", year:"II", branch:"CSE (AI & ML)", role:"Member (Videography and Editing)" },
  { id:"PVC-012", name:"B. Sravani", roll:"249XA33015", year:"II", branch:"CSE (AI & ML)", role:"Member (Videography and Editing)" },
  { id:"PVC-013", name:"A. Srujana", roll:"249XA33001", year:"II", branch:"CSE (AI & ML)", role:"Member (Videography and Editing)" },
  { id:"PVC-014", name:"M. Sravanthi", roll:"239X1A04F5", year:"III", branch:"ECE", role:"Member (Videography and Editing)" },

  { id:"PVC-015", name:"B. Pavan Kumar", roll:"249XA04051", year:"II", branch:"ECE", role:"Member (Photography)" },
  { id:"PVC-016", name:"V. Subhakaran Sathvik", roll:"249XA04188", year:"II", branch:"ECE", role:"Member (Photography)" },
  { id:"PVC-017", name:"L. Dhinakar Reddy", roll:"249XA05176", year:"II", branch:"CSE", role:"Member (Photography)" },
  { id:"PVC-018", name:"Lakshmi Sharanya", roll:"249XA33002", year:"II", branch:"CSE (AI & ML)", role:"Member (Photography)" },
  { id:"PVC-019", name:"G. Gnaneswar", roll:"249XA33101", year:"II", branch:"CSE (AI & ML)", role:"Member (Photography)" },
  { id:"PVC-020", name:"B. V. Gowtham", roll:"239X1A0542", year:"III", branch:"CSE", role:"Member (Photography)" },
  { id:"PVC-021", name:"G. Kethana", roll:"239X1A0529", year:"III", branch:"CSE", role:"Member (Photography)" },

  { id:"PVC-022", name:"C. Geethanjali", roll:"239X1A3211", year:"III", branch:"CSE (Data Science)", role:"Member (Content Writing)" },
  { id:"PVC-023", name:"B. Anjali", roll:"239X1A3206", year:"III", branch:"CSE (Data Science)", role:"Member (Content Writing)" },
  { id:"PVC-024", name:"D. Shanmukha Sai", roll:"249XA05061", year:"II", branch:"CSE", role:"Member (Content Writing)" },
  { id:"PVC-025", name:"M. Nikhil", roll:"249XA32102", year:"II", branch:"CSE (Data Science)", role:"Member (Content Writing)" },

  { id:"PVC-026", name:"B. Dheeraj Kumar", roll:"239X1A0440", year:"III", branch:"ECE", role:"Member (Designing)"},
  { id:"PVC-027", name:"K. Mohammed Sowban", roll:"249XA33106", year:"II", branch:"CSE (AI & ML)", role:"Member (Designing)" },
  { id:"PVC-028", name:"Panyam Nikhitha", roll:"249XA05218", year:"II", branch:"CSE", role:"Member (Designing)", skills:"Creative Design" },
  { id:"PVC-029", name:"S. V. Shahid", roll:"249XA33183", year:"II", branch:"CSE (AI & ML)", role:"Member (Designing)"},
  { id:"PVC-030", name:"K. Uday Prakash Reddy", roll:"239X1A3246", year:"III", branch:"CSE (Data Science)", role:"Member (Designing)"},

  { id:"PVC-031", name:"G. Deepak Kumar", roll:"249XA04060", year:"II", branch:"ECE", role:"Supporting Member"},
  { id:"PVC-032", name:"P. Dwarakanath", roll:"249XA33124", year:"II", branch:"CSE (AI & ML)", role:"Supporting Member"},
  { id:"PVC-033", name:"K. Umesh Chandra Reddy", roll:"249XA05119", year:"II", branch:"CSE", role:"Supporting Member"},
  { id:"PVC-034", name:"Sahil Fayaz Hussain", roll:"249XA05302", year:"II", branch:"CSE", role:"Supporting Member" },
  { id:"PVC-035", name:"J. V. Bhuvana Kruthi", roll:"249XA33068", year:"II", branch:"CSE (AI & ML)", role:"Supporting Member" },
  { id:"PVC-036", name:"Abdul Razak Bilal", roll:"249X5A33D4", year:"III", branch:"CSE (AI & ML)", role:"Supporting Member" },
  { id:"PVC-037", name:"S. Ashfaque Imrad", roll:"249XA01090", year:"II", branch:"CE", role:"Supporting Member"},
  { id:"PVC-038", name:"M. Abubakar Siddique", roll:"249XA03075", year:"II", branch:"ME", role:"Supporting Member"},
  { id:"PVC-039", name:"C. Dhathri", roll:"239X1A3312", year:"III", branch:"CSE (AI & ML)", role:"Supporting Member" }
];

/* ===== RENDER CINEMATIC PROFILE CARDS ===== */
const grid = document.getElementById("membersGrid");

members.forEach(m => {
  const card = document.createElement("div");
  card.className = "member-card";

  card.innerHTML = `
    <img 
      src="images/${m.id}.jpeg" 
      alt="${m.name}" 
      onerror="this.onerror=null; this.src='images/${m.id}.jpg';">
    <div class="member-info">
      <h3>${m.name}</h3>
      <div class="role">${m.role}</div>
    </div>
  `;

  grid.appendChild(card);
});
