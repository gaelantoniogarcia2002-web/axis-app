import Hero from '../components/home/Hero';
import Estadisticas from '../components/home/Estadisticas';
import DestacadosRow from '../components/home/DestacadosRow';
import BienestarBanner from '../components/home/BienestarBanner';
import HospitalSection from '../components/home/HospitalSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Estadisticas />
      <DestacadosRow />
      <BienestarBanner />
      <HospitalSection />
    </main>
  );
}
