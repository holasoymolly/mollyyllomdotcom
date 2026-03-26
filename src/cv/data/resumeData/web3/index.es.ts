import type { ResumeData } from "../../../types"
import { references, technologies } from "../common"
import { educationES } from "../common/education.es"
import { contractWorkES } from "../web2/contractWork.es"
import { contact } from "./contact"
import { experienceES } from "./experience.es"
import { web3Skills } from "./skills"

export const web3ResumeES: ResumeData = {
  contact,
  skills: web3Skills,
  experience: experienceES,
  contractWork: contractWorkES,
  education: educationES,
  references,
  technologies,
}
