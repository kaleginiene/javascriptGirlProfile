import academy from "src/assets/images/profile/academy.webp";
import wgt from "src/assets/images/profile/wgt.webp";
import linkedin from "src/assets/images/profile/linkedin.webp";
import literallySmarter from "src/assets/images/profile/literally_smarter.webp";

export interface SideHustle {
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  photo: string;
}

export const SIDE_HUSTLES: SideHustle[] = [
  {
    title: "React JS Lecturer",
    subtitle: "@Kilo Academy",
    description:
      "I've mentored/lectured two React JS courses at Kilo Academy. I've been mentoring 20 students in total. More than 100 hours of lecturing!",
    date: "September 2021 - June 2022",
    photo: academy,
  },
  {
    title: "Mentor",
    subtitle: "@Women Go Tech",
    description:
      "Mentoring for two mentees with different goals: Reach a hirable level, Give guidance on the latest tools and find a job. The main goal for me is to give guidance toward the goals, support, reveal strengths, and help to work on the skills which require improvement.",
    date: "April 2023 - October 2023",
    photo: wgt,
  },
  {
    title: "Content creator",
    subtitle: "LinkedIn",
    description:
      "I create content related to technologies, career inspiration, women in tech and mentorship",
    photo: linkedin,
  },
  {
    title: "@literally_smarter",
    subtitle: "Instagram",
    description:
      "One of my hobbies - is books. I started this instagram account to share the facts, quotes and book recommendations. If you are into books as well, follow this account on instagram and help me grow. This is only the begining, we'll see where it goes :)",
    photo: literallySmarter,
  },
];
