import { Icon as Iconify} from '@iconify/react';
export default function Icon({ icon, className = '' }) {
  return (
    <Iconify icon={icon} className={className} />
  );
}
