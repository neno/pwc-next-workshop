'use client';

import Link from 'next/link';
import { FC, useEffect } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import useStore from '@/store';

interface TabLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const TabLink: FC<TabLinkProps> = ({
  href,
  children,
  className = 'tab',
}) => {
  const segment = useSelectedLayoutSegment();
  const { setSelectedMovieId } = useStore();
  const active = href === `/movies${segment ? `/${segment}` : ''}`;

  useEffect(() => {
    setSelectedMovieId(null);
  }, [segment, setSelectedMovieId]);

  return (
    <Link href={href} className={active ? `${className} tabActive` : className}>
      {children}
    </Link>
  );
};
