import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import { LuAlignLeft } from 'react-icons/lu';

import SignOutLink from './SignOutLink';
import UserIcon from '@/components/navbar/UserIcon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { links } from '@/utils/links';

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex max-w-[100px] gap-4">
          <LuAlignLeft className="size-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
        <SignedOutStatus />
        <SignInStatus />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SignInStatus = () => {
  return (
    <SignedIn>
      {links.map((link) => (
        <DropdownMenuItem key={link.href}>
          <Link href={link.href} className="w-full capitalize">
            {link.label}
          </Link>
        </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignOutLink />
      </DropdownMenuItem>
    </SignedIn>
  );
};

const SignedOutStatus = () => {
  return (
    <SignedOut>
      <DropdownMenuItem>
        <SignInButton mode="modal">
          <button className="w-full text-left">Login</button>
        </SignInButton>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignUpButton mode="modal">
          <button className="w-full text-left">Register</button>
        </SignUpButton>
      </DropdownMenuItem>
    </SignedOut>
  );
};

export default LinksDropdown;
