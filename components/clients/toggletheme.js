"use client"
import React from 'react';
import { Switch } from '@nextui-org/react';
import { Moon, SunMoon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ToggleThemes({className,...props}) {
  return (
    <div {...props} className={cn("",className)}>
        <Switch 
        defaultSelected
        color='success'
        size="sm"
        thumbIcon = {({isSelected, className}) =>
        isSelected  ?(
            <Moon className={className} /> ):(
                <SunMoon className={className}/>
        )}
        />
         
    </div>
  );
}
<SunMoon />