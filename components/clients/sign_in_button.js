"use client"
import React from 'react';
import Buttonn from './buttons';
import { useSession,signIn,signOut, } from 'next-auth/react';

export default function SignInButton() {
    const session = useSession();
  if (!session) {
    return (
        <div>
            <Buttonn 
            onClick={() => signOut()}
            size="md"
            variant="shadow"
            color="primary">
                log out
            </Buttonn>
        </div>
    )
  }
  return (
    <div className='flex items-center gap-2'>
        <Buttonn>
            sign up
        </Buttonn>
        <Buttonn
        onClick={() => signIn()}
        size="md"
        variant="ghost" 
        color="danger">
            sign in
        </Buttonn>    
    </div>
  );
}
