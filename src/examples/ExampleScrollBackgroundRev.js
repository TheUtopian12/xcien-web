import { Image } from '../components/core/Image';
import { FillerSection } from '../components/core/FillerSection';

import imgForest from '../assets/mapple.jpg';
import imgCamera from '../assets/mountain.jpg';
import 'animate.css';

export const ExampleScrollBackgroundRev = () => {
  return (
    <section className="">

      <Image src={imgCamera} alt="Camera Background" height="50vh" speed={-1}>
        <h3 className="image-text animate__animated animate__backInLeft animate__delay-3s">Internet Dedicado Empresarial</h3>
      </Image>

      <FillerSection fillAmount={50} />

      <Image src={imgForest} alt="Forest Background" height="75vh" speed={-0.5}>
        <h3 className='animate__animated animate__bounce '>Nosotros</h3>
      </Image>

      <FillerSection />
    </section>
  );
};
