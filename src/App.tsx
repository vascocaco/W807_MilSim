import { Navbar } from './components/Navbar/Navbar';
import { ImageSection } from './components/ImageSection/ImageSection';
import { DescriptionSection } from './components/DescriptionSection/DescriptionSection';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <div>
      <Navbar />
      <ImageSection />
      <DescriptionSection />
      <Footer />
    </div>
  );
}
