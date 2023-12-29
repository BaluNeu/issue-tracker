'use client';
// making this as a client component
import { TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import { Button } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>

    <TextField.Root >
        <TextField.Input placeholder='Title'/>
        
    </TextField.Root>

    <TextArea placeholder='Description'/>
    <Button> Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage

// to add link to this page go to issues/page