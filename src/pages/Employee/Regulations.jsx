import { Laypdf } from '../../assets';
import MainLayout from '../../component/Main/MainLayout';

export default function Regulations() {
  return (
    <MainLayout>
      <embed
        src={Laypdf}
        className="rounded-md"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </MainLayout>
  );
}
