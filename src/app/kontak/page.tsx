import { getSiteSettings } from "@/app/actions/setting.action";
import { KontakClient } from "./KontakClient";

export const metadata = {
  title: "Kontak Kami - OLO Website",
  description: "Hubungi OLO melalui form pesan, email, atau sosial media.",
};

export default async function KontakPage() {
  const settings = await getSiteSettings();

  return <KontakClient settings={settings} />;
}
