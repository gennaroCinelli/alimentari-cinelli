import type { Metadata } from "next";
import PomodoroContent from "@/components/eccellenze/Pomodoro";

export const metadata: Metadata = {
  title: "Pomodoro del Piennolo — Il sole del Vesuvio",
  description:
    "Il Pomodoro del Piennolo DOP del Vesuvio: appeso nei grappoli conserva il sole dell'estate per tutto l'inverno.",
};

export default function PomodoroPage() {
  return <PomodoroContent />;
}
