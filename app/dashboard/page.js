import Buttonn from '@/components/clients/buttons';
import React from 'react';

export default function Dashboard() {
  return (
    <div>
        <div className='h-screen w-full'>
            <div className='mx-auto w-full'>
            <h1>
                Newsspree
            </h1>
            <p>
                all the news about your favorite  programming language. Are you looking to learn a new programming language.
            </p>
            <p>
                All you new to know before choosing a language.
            </p>
            <Buttonn
            variant="shadow"
            size="md" 
            color="primary">
                get started
            </Buttonn>
           
            </div>
        </div>
    </div>
  );
}
