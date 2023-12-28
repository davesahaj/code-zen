'use client';
import { navbar as config } from '@/config';
import { NavLinkType } from '@/types';
import * as HoverCard from '@radix-ui/react-hover-card';
import { Box, Flex, Text } from '@radix-ui/themes';
import cx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';

type Props = NavLinkType;

const NavLink = ({ icon: Icon, label, url, type }: Props) => {
  const path = usePathname();

  console.log(path, url);

  const classNames = cx(
    '-mb-[1px] flex h-full border-b-2 border-transparent transition-all duration-200 hover:border-iris-10 hover:text-iris-10 active:text-iris-11',
    { '!border-iris-10': url === path }
  );

  if (type === 'dropdown')
    return (
      <Box className={classNames}>
        <Flex justify="center" align="center" gap="1" px="4">
          {<Icon />}
          {label}
          <IoChevronDown />
        </Flex>
      </Box>
    );

  return (
    <Link href={url} passHref className={classNames}>
      <Flex justify="center" align="center" gap="1" px="4">
        {<Icon />}
        <Text>{label}</Text>
      </Flex>
    </Link>
  );
};

const NavLinks = () =>
  config.map(({ icon, label, url, type, children }, idx) => {
    return type === 'dropdown' ? (
      <HoverCard.Root openDelay={50} key={idx}>
        <HoverCard.Trigger className="-mb-[1px] h-full cursor-pointer">
          <NavLink key={idx} icon={icon} label={label} url={url} type={type} />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="data-[side=bottom]:animate-slideUpAndFade data-[state=open]:transition-all">
            <div className="flex w-auto flex-col gap-y-1 rounded-md border border-gray-200 px-8 py-5 shadow-lg">
              {children?.map(({ icon: Icon, label, url }) => {
                return (
                  <Link key={url} href={url} passHref>
                    <div className="flex cursor-pointer items-center gap-4 hover:text-iris-10 hover:underline">
                      {<Icon />}
                      <Text>{label}</Text>
                    </div>
                  </Link>
                );
              })}
            </div>

            <HoverCard.Arrow className="fill-gray-200" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    ) : (
      <NavLink key={idx} icon={icon} label={label} url={url} type={type} />
    );
  });

export default NavLinks;
