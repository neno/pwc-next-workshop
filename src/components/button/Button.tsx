import { clsxm } from '@/lib/helpers';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  mode?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  path?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  children,
  path,
  onClick,
  type = 'button',
  mode = 'primary',
}) => {
  const styles = clsxm('inline-block relative px-4 py-2 font-medium', {
    'bg-primary text-white': mode === 'primary',
    'bg-danger text-white': mode === 'danger',
  });

  if (path) {
    return (
      <Link href={path} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} type={type}>
      {children}
    </button>
  );
};
