import { adminNavigationItems } from '@/constants/admin';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from 'primereact/button';

export default function () {
  return (
    <div className="h-full flex justify-center items-center gap-8">
      {adminNavigationItems.map(item => (
        <Link href={item.link}>
          <Button className="w-32 h-32 flex flex-col justify-center gap-2" rounded raised>
            <i className={clsx(item.icon, 'text-2xl !block')}></i>
            <h3 className="font-medium">{item.label}</h3>
          </Button>
        </Link>
      ))}
    </div>
  );
}
