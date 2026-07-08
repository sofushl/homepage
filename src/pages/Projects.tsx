import ProjectView, { type ProjectProps } from '../components/ProjectView.tsx';
import Hero from '../components/Hero.tsx';
import projectsData from "../../assets/projects.json";

export default function Projects() {

    const projects: ProjectProps[] = projectsData;

    return (
        <div className='flex flex-col '>
            <div className='flex-1'>
                <Hero name='Project Overview' tagline='' />
            </div>
            <div className='flex-1'>
                <ProjectView projects={projects} />
            </div>
        </div>
    )
}
