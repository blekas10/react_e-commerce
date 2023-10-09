import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'

const SetupPage = () => {
  return (
    <div>
        <p>Hello admin, protected route</p>
        <Button>Hello</Button>
        <UserButton afterSignOutUrl="/" />
    </div>
    
  );
}

export default SetupPage;