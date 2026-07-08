import Hero from '../components/Hero.tsx';
import LinkEl from '../components/LinkEl.tsx';
import ProjectView, { type ProjectProps } from '../components/ProjectView.tsx';

export default function Home() {

    const projects: ProjectProps[] = [
        {
            name: "Nixos",
            description: "My nixos config",
            link: "https://github.com/sofushl/nixos",
            tags: ["nix", "config", "nixos", "server"],
        },
        {
            name: "AbaCordium",
            description: "Discord bot made in collaboration with AbaCord",
            link: "https://github.com/AbaCord/AbaCordium",
            tags: ["javascript", "discord", "collaboration"],
        },
        {
            name: "Portfolio page",
            description: "Code for the website you are currently on",
            link: "https://github.com/sofushl/homepage",
            tags: ["typescript", "react", "web"],
        }
    ]

    return (
        <div className='flex flex-col '>
            <div className='flex-1'>
                <Hero name='Sofus Lind' tagline='Personal Portfolio' />
            </div>
            <div className='flex-1'>
                <div className='flex pb-4 px-10'>
                    <h1 className="text-2xl font-bold ">Featured projects</h1>
                    <div className='grow' />
                    <LinkEl href='/projects' text='more' size='2' newtab={false} />
                </div>
                <ProjectView projects={projects} />
            </div>
        </div>
    )
}
