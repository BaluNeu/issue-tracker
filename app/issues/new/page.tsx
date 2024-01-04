'use client';
// making this as a client component
import { TextArea, TextField } from '@radix-ui/themes'

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { useForm, Controller} from "react-hook-form";

import axios from 'axios';

import React from 'react'
import { Button } from '@radix-ui/themes'
import { useRouter } from 'next/navigation';

// defining an interface for the shape of the form

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {

  const router = useRouter();

  const {register, control, handleSubmit} = useForm<IssueForm>(); // shape of our form // to register input fields
  // console.log(register('title'));

{/* <form className='max-w-xl space-y-3' onSubmit={handleSubmit((data) => console.log(data))}></form> */}
{/* instead of doing console log -> send the data to api-> using axios */}

  return (
      <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data) => 
      
        {await axios.post('/api/issues',data);
        router.push('/issues');
        
        })}>

    <TextField.Root >

        <TextField.Input placeholder='Title' {...register('title')}/> 

    </TextField.Root>

    {/* we cannot use the same register function for SimpleMDE */}
    <Controller
      name = "description"
      control = {control}
      render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
    
    />

    
    <Button> Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage

// to add link to this page go to issues/page