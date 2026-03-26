import type { ResumeData } from "../../../types"
import { skills, education, references, technologies } from "../common"
import { contact } from "./contact"
import { experience } from "./experience"
import { contractWork } from "./contractWork"

export const web2Resume: ResumeData = {
  contact,
  skills,
  experience,
  contractWork,
  education,
  references,
  technologies,
}
