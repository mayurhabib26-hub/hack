import React from 'react';
import { Header } from '@/components/ui/header-2';

interface NavbarProps {
  onOpenRegistration: () => void;
}

export default function Navbar({ onOpenRegistration }: NavbarProps) {
  return <Header onOpenRegistration={onOpenRegistration} />;
}
