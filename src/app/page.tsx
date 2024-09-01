import Notifications from "@/components/Notifications";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Welcome from "@/components/Welcome";



export default function Home() {

  return (
    <main className="w-[96vw] h-screen font-roboto">
      <BackgroundBeams/>
      <Welcome />
      <Notifications />
    </main>
  );
}
