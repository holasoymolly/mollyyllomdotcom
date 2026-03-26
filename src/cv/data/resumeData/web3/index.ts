import type { ResumeData } from "../../../types"
import { education, references, technologies } from "../common"
import { contractWork } from "../web2/contractWork"
import { contact } from "./contact"
import { experience } from "./experience"
import { web3Skills } from "./skills"

export const web3Resume: ResumeData = {
  contact,
  skills: web3Skills,
  experience,
  contractWork,
  education,
  references,
  technologies,
}
