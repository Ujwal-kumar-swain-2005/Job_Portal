import { Button } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import type { Experience,Certification, ProfileProps, } from "./modal";

const Profile: React.FC<ProfileProps> = ({
  name,
  role,
  company,
  location,
  about,
  skills,
  experience,
  certifications,
}) => {
  return (
    <div className="w-full bg-mine-shaft-900 rounded-2xl overflow-hidden">
     
      <div className="relative">
        <img
          src="/Profile/banner.jpg"
          alt="banner"
          className="h-48 w-full object-cover"
        />
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-36 h-36 rounded-full absolute -bottom-16 left-8 border-8 border-mine-shaft-900"
        />
      </div>
      <div className="pt-20 px-8 pb-6 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold">{name}</h1>

          <div className="text-mine-shaft-300 mt-1 flex items-center gap-2">
            <span>{role}</span>
            <span>•</span>
            <span>{company}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-mine-shaft-400 mt-2">
            <IconMapPin size={16} />
            {location}
          </div>
        </div>

        <Button color="brightSun.4" variant="light">
          Message
        </Button>
      </div>

      {/* About */}
      <div className="px-8 pb-6">
        <h2 className="text-xl font-semibold mb-3">About</h2>
        <p className="text-mine-shaft-300 leading-relaxed">{about}</p>
      </div>

      {/* Skills */}
      <div className="px-8 pb-6">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-mine-shaft-800 text-bright-sun-400 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

     
      <div className="px-8 pb-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-5">
          {experience.map((exp: Experience, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{exp.title}</div>
                  <div className="text-sm text-mine-shaft-300">
                    {exp.company} • {exp.location}
                  </div>
                </div>

                <div className="text-sm text-mine-shaft-300">
                  {exp.startDate} – {exp.endDate}
                </div>
              </div>

              <div className="text-sm text-mine-shaft-300 text-justify">
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 pb-8">
        <h2 className="text-xl font-semibold mb-4">Certifications</h2>
        <div className="space-y-4">
          {certifications.map(
            (cert: Certification, index: number) => (
              <div key={index} className="flex justify-between">
                <div>
                  <div className="font-semibold">{cert.name}</div>
                  <div className="text-sm text-mine-shaft-300">
                    {cert.issuer}
                  </div>
                </div>

                <div className="text-sm text-mine-shaft-300 text-right">
                  <div>{cert.issueDate}</div>
                  <div>ID: {cert.certificateId}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
