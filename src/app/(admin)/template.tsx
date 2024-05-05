'use client';

import { adminNavigationItems } from '@/constants/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="h-full grid grid-cols-[256px_auto]">
      <aside>
        <div className="h-16 grid place-items-center bg-primary">
          <h1 className="text-white font-bold">CMS</h1>
        </div>
        <ul className="w-full rounded-none border-none pt-2 py-0">
          {adminNavigationItems.map(item => (
            <Link href={item.link} key={`${Date.now()}-${item.link}`}>
              <li
                className={clsx(
                  pathname === item.link && 'bg-primary text-white',
                  'flex items-center px-3 py-4 cursor-pointer hover:bg-neutral-200'
                )}
              >
                <i className={clsx(item.icon, 'text-center w-6')}></i>
                <span className="ml-2">{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
}
