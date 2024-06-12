import { useTranslation } from 'react-i18next';
export default function Copyrights() {
  const [t] = useTranslation();
  return (
    <div className="h-[10%] w-full md:w-[70%] m-auto text-center   pt-2  leading-snug      ">
      <p>
        {t('Copy')}
        &#169; -<span className="capitalize font-serif    ">ICIP</span>{' '}
        {t('Copy2')}
        <a href="#" className="mx-1 ">
          {t('GraduateStudies')}
        </a>{' '}
      </p>
    </div>
  );
}
