"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";


const Fans = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6",
        );
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const customDescriptions = [
    "CEO & Co-Founder",
    "Software Engineer",
    "QA Specialist",
    "Product Manager",
    "Data Scientist",
    "AI Manager"
  ];

return (
    <>
      <section className="bg-[#1a1a1a]">
        <div className="teams-page mx-5 md:mx-auto min-h-screen max-w-7xl">
          <h1 className="mb-8 text-4xl  text-white md:text-8xl">
            Meet Our Team
          </h1>
          <div className="team-grid md:mt-36 grid grid-cols-3 gap-6 text-white">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-md bg-[#2a2a2a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full filter grayscale"
                  src={member.picture.large}
                  alt={member}
                  width={128}
                  height={128} 
                  objectFit="cover"
                />
                <h2 className="text-xl font-semibold">{`${member.name.first} ${member.name.last}`}</h2>
                <p>{customDescriptions[index]}</p>
              </div>
            ))}
          </div>
          <div className="team-grid mt-8 grid grid-cols-3 gap-6 text-white">
            {teamMembers.slice(3, 6).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-md bg-[#2a2a2a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full filter grayscale"
                  src={member.picture.large}
                  alt={member}
                  width={128}
                  height={128} 
                  objectFit="cover"
                />
                <h2 className="text-xl font-semibold">{`${member.name.first} ${member.name.last}`}</h2>
                <p>{customDescriptions[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Fans;