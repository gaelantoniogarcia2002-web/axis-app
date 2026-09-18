import Hero from '../components/home/Hero';
import Estadisticas from '../components/home/Estadisticas';
import QueEsBadi from '../components/home/QueEsBadi';
import EspecialidadesDestacadas from '../components/home/EspecialidadesDestacadas';
import CTAContacto from '../components/home/CTAContacto';

export default function Home() {
  return (
    <main>
      <Hero />
      <Estadisticas />
      <QueEsBadi />
      <EspecialidadesDestacadas />
      <CTAContacto />
    </main>
  );
}
