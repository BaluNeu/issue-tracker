'use client';
// making this as a client component
import { Callout, TextArea, TextField, Text} from '@radix-ui/themes'

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { useForm, Controller} from "react-hook-form";

import axios from 'axios';

import { zodResolver} from '@hookform/resolvers/zod';

import React, { useState } from 'react'
import { Button } from '@radix-ui/themes'
import { useRouter } from 'next/navigation';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/errorMessage';
import Spinner from '@/app/components/Spinner';
// defining an interface for the shape of the form

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {

  const router = useRouter();

  const {register, control, handleSubmit, formState : {errors}} = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  
  }); // shape of our form // to register input fields
  // console.log(register('title'));
  const [error,setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {

    try{
    
    setSubmitting(true)
    await axios.post('/api/issues',data);
    router.push('/issues');
  
  } catch (error) {
    setSubmitting(false)
    setError("An unexpected error occurred")
  
  }
  
  });

{/* <form className='max-w-xl space-y-3' onSubmit={handleSubmit((data) => console.log(data))}></form> */}
{/* instead of doing console log -> send the data to api-> using axios */}

  return (
    <div className='max-w-xl space-y-3'>
      {
        error && (<Callout.Root color = "red" className='mb-5'>

        <Callout.Text> {error}</Callout.Text>
      </Callout.Root>

      )}
      <form className='max-w-xl space-y-3' onSubmit={onSubmit}>

    <TextField.Root >

        <TextField.Input placeholder='Title' {...register('title')}/> 

    </TextField.Root>


      <ErrorMessage>
      {errors.title?.message}
      </ErrorMessage>

    {/* we cannot use the same register function for SimpleMDE */}
    <Controller
      name = "description"
      control = {control}
      render={({field}) => <SimpleMDE placeholder='Description' {...field}/>}
    
    />
    <ErrorMessage>
      {errors.description?.message}
    </ErrorMessage>
    
    <Button disabled = {isSubmitting}>
       Submit New Issue{isSubmitting && <Spinner/>}
    </Button>
    </form>
    </div>
  )
}

export default NewIssuePage

// to add link to this page go to issues/page