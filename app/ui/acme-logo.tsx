import { GlobeAltIcon } from '@heroicons/react/24/outline';


export default function AcmeLogo() {
  return (
    <div style={{ fontFamily: 'Lusitana, serif' }}>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
