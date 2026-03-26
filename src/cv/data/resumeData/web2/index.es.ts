import type { ResumeData } from "../../../types"
import { skills, references, technologies } from "../common"
import { educationES } from "../common/education.es"
import { contact } from "./contact"
import { experienceES } from "./experience.es"
import { contractWorkES } from "./contractWork.es"

export const web2ResumeES: ResumeData = {
  contact,
  skills,
  experience: experienceES,
  contractWork: contractWorkES,
  education: educationES,
  references,
  technologies,
}
