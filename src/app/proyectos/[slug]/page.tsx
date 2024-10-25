import { ProjectPage } from "@/pageComponents/ProjectPage";


export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;

  return <ProjectPage slug={slug} />;
}