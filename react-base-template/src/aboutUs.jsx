import React from "react";

function Card(
    {
        name,
        profilePicture,
        role,
        socialIcon = {},

    }
) {
    return (
        <>
        <div className="flex flex-col items-center justify-center w-auto p-4 rounded-md bg-[#ecfdf5]

transition-all duration-300
hover:border-[#22c55e]
hover:shadow-[0_0_2px_rgba(22,163,74,0.5)]">
            <img
                src={profilePicture}
                alt="profilePicture"
                className="
    w-48 h-48
    rounded-full
    object-cover
    border-2 border-[#16a34a]
    drop-shadow-[0_0_10px_rgba(22,163,74,0.6)]
    hover:drop-shadow-[0_0_12px_rgba(22,163,74,1)]
    transition-all duration-300
  "
            />

            <span className="text-xl pt-3 font-medium text-[#064e3b]">{name}</span>
            <span className="text-xs font-mono pb-3 font-medium text-[#15803d]">{role}</span>
            <div className="flex pb-3 flex-row gap-4 items-center justify-center w-full">
                {Object.entries(socialIcon).map(([key, value]) => (
                    <a
                        key={key}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
              bi bi-${key}
              social-icon
              cursor-pointer text-lg
              w-10 h-10 flex items-center justify-center
              rounded-full
              transition-all duration-300
              hover:scale-90
              hover:shadow-[0_0_16px_rgba(34,197,94,0.6)]
            `}
                    />
                ))}
            </div>


        </div>
        </>
    )
}

export default function AboutUs() {
    return (
        <>
        <div className="flex flex-col items-center justify-center gap-6 w-full bg-base-200">
            <span className="text-center text-5xl text-[#064e3b]">What is <span className="text-[#15803d]">ProjectName</span>?</span>
            <div className="lg:flex-row flex-col justify-around">
                <p className="text-sm text-black">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, consequuntur, dolores est fugiat illo impedit incidunt ipsum laudantium minus molestiae nesciunt nisi omnis perferendis quas quibusdam, quos tenetur vero vitae voluptates! Accusantium amet, assumenda consectetur culpa facere ipsum minus.
                </p>
            </div>
            <span className="text-center text-5xl text-[#064e3b]">About the <span className="text-[#15803d]">Team</span></span>
            <div className="lg:flex-row flex gap-4 flex-col justify-around">
                {[
                    {
                        name: "Uddhav Bhardwaj",
                        role: "Frontend Developer",
                        profilePicture: "https://avatars.githubusercontent.com/u/237316139",
                        socialIcon: {
                            github: "https://github.com/bhrdwjuddhv",
                            linkedin: "https://www.linkedin.com/in/uddhavbhardwajhere/",
                        },
                    },
                    {
                        name: "Sushmita Singh",
                        role: "Frontend Developer",
                        profilePicture: "https://avatars.githubusercontent.com/u/193432954?v=4",
                        socialIcon: {
                            github: "https://github.com/sushmita-rgb",
                            linkedin: "https://www.linkedin.com/in/sushmita-singh-003011319/",
                        },

                    }
                ].map((obj) => (
                    <Card
                        key={obj.name}
                        name={obj.name}
                        role={obj.role}
                        profilePicture={obj.profilePicture}
                        socialIcon={obj.socialIcon}
                    />
                ))}
            </div>


        </div>
        </>
    )
}