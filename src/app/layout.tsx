import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import './globals.css';
import cx from 'clsx';
import { open_sans } from './fonts';
import Theme from '@/providers/theme';
import { Box } from '@radix-ui/themes';
import NavBar from '@/components/ui/navbar';

export const metadata: Metadata = {
  title: 'Code Zen',
  description: 'Leetcode practice simplified'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(open_sans.variable)}>
      <body>
        <Theme>
          <Box>
            <NavBar />
            <Box className="mt-14">{children}</Box>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
