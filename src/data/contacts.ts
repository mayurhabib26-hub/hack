export interface CoordinatorContact {
  name: string;
  phone?: string;
  title?: string;
  roleDescription?: string;
}

export interface ContactCategory {
  category: string;
  badge: string;
  contacts: CoordinatorContact[];
}

export const CONTACT_DIRECTORY: ContactCategory[] = [
  {
    category: "LEAD STUDENT COORDINATOR",
    badge: "Overall In-Charge",
    contacts: [
      {
        name: "Aditya R H",
        phone: "7022951232",
        title: "Lead Student Coordinator",
        roleDescription: "Primary point of contact for team escalations, registration assistance, and general inquiries."
      }
    ]
  },
  {
    category: "STUDENT COORDINATORS",
    badge: "Operations & Support",
    contacts: [
      {
        name: "Vasuki",
        phone: "9743140669",
        title: "Student Coordinator",
        roleDescription: "Event logistics and team onboarding."
      },
      {
        name: "Alvin",
        phone: "7349190317",
        title: "Student Coordinator",
        roleDescription: "Technical desk and lab coordination."
      },
      {
        name: "Pallavi",
        phone: "7892127598",
        title: "Student Coordinator",
        roleDescription: "Participant relations and desk operations."
      }
    ]
  },
  {
    category: "ACCOMMODATION ASSISTANCE",
    badge: "Outstation Teams",
    contacts: [
      {
        name: "Akash",
        phone: "80881 69530",
        title: "Accommodation Desk",
        roleDescription: "Hostel and lodging guidance for travelling outstation teams."
      },
      {
        name: "Shriraksha",
        phone: "87622 33462",
        title: "Accommodation Desk",
        roleDescription: "Check-in assistance and dormitory allocations."
      }
    ]
  },
  {
    category: "TRANSPORTATION",
    badge: "Transit & Logistics",
    contacts: [
      {
        name: "Zeeshan",
        phone: "74834 62669",
        title: "Transport Coordinator",
        roleDescription: "Guidance from Hubballi Railway Station & Old/New Bus Terminals to campus."
      },
      {
        name: "Mayur",
        phone: "96865 25841",
        title: "Transport Coordinator",
        roleDescription: "Shuttle and local navigation support."
      }
    ]
  },
  {
    category: "SPONSORSHIP & PARTNERSHIPS",
    badge: "Industry Relations",
    contacts: [
      {
        name: "Aditya R H",
        phone: "7022951232",
        title: "Sponsorship Lead",
        roleDescription: "Corporate alliances, track sponsorship, and brand exhibits."
      }
    ]
  },
  {
    category: "INSTITUTIONAL LEADERSHIP",
    badge: "Patrons & Faculty",
    contacts: [
      {
        name: "Prof. Amruta",
        title: "Faculty Coordinator",
        roleDescription: "Academic oversight and event faculty convener."
      },
      {
        name: "Dr. Mahesh Kumar Patil",
        title: "Head of Department",
        roleDescription: "Department of Computer Science & Engineering, JCET Hubballi."
      },
      {
        name: "Dr. Prashant Bankar",
        title: "Principal",
        roleDescription: "Jain College of Engineering and Technology, Hubballi."
      }
    ]
  }
];
