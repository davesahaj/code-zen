import { Theme } from '@radix-ui/themes';

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <Theme appearance="light" accentColor="blue">
      {children}
    </Theme>
  );
}
