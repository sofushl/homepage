import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';
import ProjectView, { type ProjectProps } from './components/ProjectView.tsx';

export default function App() {

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
        },
        {
            name: "Minecraft Mount Manager",
            description: "Javafx application for keeping track of mounts (mainly horses) in minecraft",
            link: "https://github.com/sofushl/MinecraftMountManager",
            tags: ["java", "javafx", "app"],
        }


    ]

    return (
        <div className='flex flex-col text-black dark:text-gray-50'>
            <Navbar left={[{
                text: "HOME", href: "/", newtab: false,
            }
            ]} center={[

            ]} right={[{
                text: "github", href: "https://github.com/sofushl",
            }]} />


            <div className='flex-1'>
                <Hero name='Sofus Lind' tagline='Personal Portfolio' />
            </div>
            <div className='flex-1'>
                <ProjectView projects={projects} />
            </div>
        </div>
    )
}
