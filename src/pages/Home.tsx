import Hero from '../components/home/Hero';
import Estadisticas from '../components/home/Estadisticas';
import QueSesAxis from '../components/home/QueSesAxis';
import EspecialidadesDestacadas from '../components/home/EspecialidadesDestacadas';
import CTAContacto from '../components/home/CTAContacto';

export default function Home() {
  return (
    <main>
      <Hero />
      <Estadisticas />
      <QueSesAxis />
      <EspecialidadesDestacadas />
      <CTAContacto />
    </main>
  );
}
