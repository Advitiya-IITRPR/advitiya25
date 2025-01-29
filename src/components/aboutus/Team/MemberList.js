import React, { useState, useEffect } from "react";
import MemberCard from "./MemberCard";

const MemberList = () => {
  // Here enter the details of team members and team names are dynamically allocated based on below entries
  const teamMembers = [
    {
      id: 24,
      name: "Mihir Kasare",
      role: "Overall Coordinator",
      team: "Overall Coordination",
      phone: "9136724826",
      email: "2022chb1052@iitrpr.ac.in",
      photo: "/aboutus/Team/mihir.jpeg",
    },
    {
      id: 1,
      name: "Jagrat Phugat",
      role: "Hospitality Head",
      team: "Hospitality",
      phone: "9719210059",
      email: "2022meb1315@iitrpr.ac.in",
      photo: "/aboutus/Team/jagrat.png",
    },
    {
      id: 3,
      name: "Tarushi Taneja",
      role: "Sponsorship Head",
      team: "Sponsorship",
      phone: "6307044880",
      email: "2022csb1135@iitrpr.ac.in",
      photo: "/aboutus/Team/tarushi.png",
    },
    {
      id: 2,
      name: "Yuvraj Singh",
      role: "Pronite Head",
      team: "Pronite",
      phone: "7701856873",
      email: "2022mmb1393@iitrpr.ac.in",
      photo: "/aboutus/Team/yuvraj.png",
    },
    {
      id: 4,
      name: "Jay Goel",
      role: "Inter School Conclave Head",
      team: "Inter School Conclave",
      phone: "9650353407",
      email: "2022eeb1178@iitrpr.ac.in",
      photo: "/aboutus/Team/jay.jpg",
    },
    {
      id: 6,
      name: "Venkat Kommina",
      role: "Web Dev Head",
      team: "Web Development",
      phone: "7893244389",
      email: "2022eeb1225@iitrpr.ac.in",
      photo: "/aboutus/Team/venkat.jpg",
    },
    {
      id: 5,
      name: "Sahil Mhapsekar",
      role: "Logistics Head",
      team: "Logistics",
      phone: "9423717144",
      email: "sahilmhapsekar28@gmail.com",
      photo: "/aboutus/Team/sahil.jpeg",
    },
    {
      id: 7,
      name: "Kamran Mehdi",
      role: "Finance Head",
      team: "Finance",
      phone: "8287328915",
      email: "2022mmb1381@iitrpr.ac.in",
      photo: "/aboutus/Team/kamran.jpeg",
    },
    {
      id: 8,
      name: "Amitoj Singh",
      role: "Content and Anchoring Head",
      team: "Content and Anchoring",
      phone: "9501261633",
      email: "2022eeb1295@iitrpr.ac.in",
      photo: "/aboutus/Team/amitoj.png",
    },
    {
      id: 9,
      name: "Aditya Chandanshive",
      role: "Pronite Head",
      team: "Pronite",
      phone: "9221498238",
      email: "2022csb1063@iitrpr.ac.in",
      photo: "/aboutus/Team/aditya.jpg",
    },
    {
      id: 10,
      name: "Swapnil Pandey",
      role: "Media & Coverage Head",
      team: "Media & Coverage",
      phone: "6307099577",
      email: "2022csb1133@iitrpr.ac.in",
      photo: "/aboutus/Team/swapnil.jpg",
    },
    {
      id: 11,
      name: "Tilak Chetan Sanghvi",
      role: "Finance Head",
      team: "Finance",
      phone: "8762572063",
      email: "2022mmb1391@iitrpr.ac.in",
      photo: "/aboutus/Team/tilak.png",
    },
    {
      id: 12,
      name: "Keshav Bansal",
      role: "Event Management Head",
      team: "Event Management",
      phone: "8527782036",
      email: "2022mcb1268@iitrpr.ac.in",
      photo: "/aboutus/Team/keshav.png",
    },
    {
      id: 13,
      name: "Sahithi Sunkari",
      role: "GD Head",
      team: "Grpahic Designing",
      phone: "7981946114",
      email: "2022eeb1218@iitrpr.ac.in",
      photo: "/aboutus/Team/sahiti.jpg",
    },
    {
      id: 14,
      name: "Anshuman Gupta",
      role: "Event Management Head",
      team: "Event Management",
      phone: "6264012701",
      email: "2022chb1043@iitrpr.ac.in",
      photo: "/aboutus/Team/anshuman.jpeg",
    },
    {
      id: 15,
      name: "Patel Ayush Sanjiv",
      role: "Finance Head",
      team: "Finance",
      phone: "9737075912",
      email: "2022csb1101@iitrpr.ac.in",
      photo: "/aboutus/Team/ayush.jpg",
    },
    {
      id: 16,
      name: "Sai Pranav Nuti",
      role: "Sponsorship Head",
      team: "Sponsorship",
      phone: "9391826534",
      email: "2022csb1117@iitrpr.ac.in",
      photo: "/aboutus/Team/pranav.jpg",
    },
    {
      id: 17,
      name: "Shaubhik Dutta",
      role: "Event Management Head",
      team: "Event Management",
      phone: "8584826196",
      email: "2022eeb1214@iitrpr.ac.in",
      photo: "/aboutus/Team/shaubhik.jpg",
    },
    {
      id: 18,
      name: "Anshul",
      role: "Media & Coverage Head",
      team: "Media & Coverage",
      phone: "9015406165",
      email: "2022eeb1156@iitrpr.ac.in",
      photo: "/aboutus/Team/anshul.jpg",
    },
    {
      id: 19,
      name: "Kavyansh Dhakad",
      role: "Events Head",
      team: "Events",
      phone: "8770418102",
      email: "2022mmb1382@iitrpr.ac.in",
      photo: "/aboutus/Team/kavyansh.jpg",
    },
    {
      id: 20,
      name: "Pankaj K. Walia",
      role: "Workshop & Talks Head",
      team: "Workshops & Talks",
      phone: "9971208882",
      email: "2022mcb1274@iitrpr.ac.in",
      photo: "/aboutus/Team/pankaj.png",
    },
    {
      id: 21,
      name: "Tanmay Goyal",
      role: "ISC Head",
      team: "Inter School Conclave",
      phone: "8146294608",
      email: "2022eeb1219@iitrpr.ac.in",
      photo: "/aboutus/Team/tanmay.png",
    },
    {
      id: 22,
      name: "Rehan Choudhary",
      role: "Sponsorship",
      team: "Sponsorship",
      phone: "9414322081",
      email: "rehanc5100@gmail.com",
      photo: "/aboutus/Team/rehan.png",
    },
    {
      id: 23,
      name: "Tushar Chaudhary",
      role: "Media and Publicity Head",
      team: "Media & Publicity",
      phone: "9811328312",
      email: "2022chb1059@iitrpr.ac.in",
      photo: "/aboutus/Team/tushar.jpeg",
    },
    {
      id: 25,
      name: "Saharsh Saxena",
      role: "Sponsorship Head",
      team: "Sponsorship",
      phone: "63920041540",
      email: "2022csb1116@iitrpr.ac.in",
      photo: "/aboutus/Team/saharsh.png",
    },
    {
      id: 26,
      name: "Sanat Gupta",
      role: "Head, Sponsorship Team",
      team: "Sponsorship",
      phone: "9855108222",
      email: "2022csb1119@iitrpr.ac.in",
      photo: "/aboutus/Team/sanat.png",
    },
    {
      id: 27,
      name: "Kartikey",
      role: "GD Head",
      team: "Graphic designing",
      phone: "8882416528",
      email: "2022meb1320@iitrpr.ac.in",
      photo: "/aboutus/Team/kartikey.png",
    },
    {
      id: 28,
      name: "Soumy Bisht",
      role: "Decoration and Creativity",
      team: "Decoration and Creativity",
      phone: "7409227020",
      email: "2022eeb1347@iitrpr.ac.in",
      photo: "/aboutus/Team/soumy.jpg",
    },
    {
      id: 29,
      name: "Anas Malik",
      role: "Head - Logistics Team",
      team: "Logistics",
      phone: "8287394131",
      email: "2022eeb1296@iitrpr.ac.in",
      photo: "/aboutus/Team/anas.jpeg",
    },
    {
      id: 30,
      name: "Kush Mahajan",
      role: "Media and Coverage Team Head",
      team: "Media & Coverage",
      phone: "8669044125",
      email: "2022csb1089@iitrpr.ac.in",
      photo: "/aboutus/Team/kush.png",
    },
    {
      id: 31,
      name: "Krish Soliya",
      role: "Overall Fest Coordinator",
      team: "Overall Coordination",
      phone: "9512119212",
      email: "2022eeb1183@iitrpr.ac.in",
      photo: "/aboutus/Team/krish.jpg",
    },
    {
      id: 32,
      name: "Aditi Garg",
      role: "Decoration and Creativity",
      team: "Decoration and Creativity",
      phone: "9306039034",
      email: "2022meb1289@iitrpr.ac.in",
      photo: "/aboutus/Team/aditi.jpg",
    },
    {
      id: 33,
      name: "Sumer Bassi",
      role: "Publicity Head",
      team: "Publicity",
      phone: "7009324497",
      email: "2022meb1351@iitrpr.ac.in",
      photo: "/aboutus/Team/sumer.jpg",
    },
    {
      id: 34,
      name: "Jalpan Upadhyay",
      role: "Hospitality Head",
      team: "Hospitality",
      phone: "7990510730",
      email: "2022EEB1177",
      photo: "/aboutus/Team/jalpan.jpeg",
    },
    {
      id: 35,
      name: "Divesh",
      role: "Hospitality and Security",
      team: "Hospitality",
      phone: "9811111492",
      email: "2022mmb1376@iitrpr.ac.in",
      photo: "/aboutus/Team/divesh.jpeg",
    },
    {
      id: 36,
      name: "Akshat Bisht",
      role: "Workshop and Talks Head",
      team: "Workshops & Talks",
      phone: "9389892767",
      email: "2022eeb1151@iitrpr.ac.in",
      photo: "/aboutus/Team/akshat.jpg",
    },
    {
      id: 37,
      name: "Dikshant Parashar",
      role: "Media and Publicity Head",
      team: "Media & Publicity",
      phone: "7988577645",
      email: "2022chb1047@iitrpr.ac.in",
      photo: "/aboutus/Team/dikshant.jpg",
    },
    {
      id: 38,
      name: "Nishant",
      role: "Web Dev Head",
      team: "Web Development",
      phone: "7876783042",
      email: "2022eeb1194@iitrpr.ac.in",
      photo: "/aboutus/Team/nishant.jpeg",
    },
    // {
    //   id: 38,
    //   name: "Balwindar Kumar",
    //   role: "Advisory",
    //   team: "Advisory",
    //   phone: "",
    //   email: "",
    //   photo: "/aboutus/Team/dummy.png",
    // },
  ];

  const [visibleMembers, setVisibleMembers] = useState(6);
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const teams = [
    "All Teams",
    ...new Set(teamMembers.map((member) => member.team)),
  ].sort();

  const toggleView = () => {
    setVisibleMembers(visibleMembers === 6 ? teamMembers.length : 6);
  };

  const filteredMembers = teamMembers.filter((member) =>
    selectedTeam === "All Teams" ? true : member.team === selectedTeam
  );

  const displayMembers = isMobile ? filteredMembers : teamMembers;

  return (
    <div>
      {/* Mobile-Only*/}
      <div className="block md:hidden px-4 mb-6">
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full p-3 bg-[#141c23] text-white border border-[#40ec7b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40ec7b] font-['Kodchasan']"
        >
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      <div className="team-list">
        {displayMembers.slice(0, visibleMembers).map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredMembers.length > 6 && (
        <div className="button-container">
          <button className="view-more" onClick={toggleView}>
            {visibleMembers === 6 ? "View More" : "View Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberList;
