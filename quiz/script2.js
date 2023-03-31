// This is optional if you want to change the details dynamically
// You can also put the details directly in the HTML code
const members = [
    {
      id: "member1",
      name: "Shashank Pratheepkumar",
      role: "Student 1"
    },
    {
      id: "member2",
      name: "Jananthini Suresh",
      role: "Student 2"
    },
    {
      id: "member3",
      name: "Wameesha Thilakasiri",
      role: "Student 3"
    },
    {
      id: "member4",
      name: "Sakith Wijenanda",
      role: "Student 4 "
    }
  ];
  
  members.forEach(member => {
    const memberDiv = document.getElementById(member.id);
    const detailsDiv = memberDiv.querySelector(".details");
    const name = detailsDiv.querySelector("h2");
    const role = detailsDiv.querySelector("p");
    
    name.textContent = member.name;
    role.textContent = member.role;
  });
  