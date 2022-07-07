import 'animate.css';

export const FillerSection = ({ fillAmount = 100 }) => {
  return (
    <div className={`container py-5 scroll-fill-${fillAmount} d-flex center`}>
      <div>
        <p className="animate__animated animate__backInLeft animate__delay-3s" >Seccion vacia</p>
      </div>
    </div>
  );
};
