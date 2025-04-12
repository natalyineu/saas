import { redirect } from 'next/navigation';

export default function PrivacyPage() {
  redirect('/policy');
  return null;
} 