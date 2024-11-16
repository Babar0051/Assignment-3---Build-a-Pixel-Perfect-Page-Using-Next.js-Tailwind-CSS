import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectManagment from "./components/ProjectManagement";
import Worktogether from "./components/Worktogether";
import Extension from "./components/UseasExtension";
import Customise from "./components/Customise";
import Yourwork from "./components/Yourwork";
import Sponsers from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
       <Navbar />
       <Hero />
       <ProjectManagment />
       <Worktogether />
       <Extension />
       <Customise />
       <Yourwork /> 
       <Sponsers />
       <Footer />  
    </div>
  );
}
