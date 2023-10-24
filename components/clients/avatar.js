"use client"
import React from 'react';
import { Avatar as Av, AvatarIcon} from '@nextui-org/react';
import { cn } from '@/lib/utils';


export default function Avatar({className}) {
  return (
  <div className={cn('items-center',className)}>
  <Av 
  size='sm'
  showFallback 
  isBordered 
  color='danger'
  src={""} />    
  </div>
  );
}
