import ChatForm from '@/components/customs/chatform';
import Message from '@/components/customs/message';
import MessageArea from '@/components/customs/messageArea';
import React from 'react'

export default function Chat({params}) {
  const {id} = params;

  return (
    <section className=' relative flex flex-col h-screen
    mx-auto w-[80%]'>
      <MessageArea className="w-full   "/>
      <ChatForm className=""/>
    </section>
  )
}
