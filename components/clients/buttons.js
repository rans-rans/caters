"use client"
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '@nextui-org/react';

export default function Buttonn({
   children,color,variant,size,className,...props
}) {
  return (
        <Button
        color={color}
        variant={variant}
        size={size}
        >
            {children}
        </Button>    
  );
}
