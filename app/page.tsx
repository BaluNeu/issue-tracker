// import Image from 'next/image'
// import { Button } from '@radix-ui/themes'; 
import Link from 'next/link';
import IssuePage from './issues/page';
import LoadingIssuePage from './issues/LoadingIssuePage';


export default function Home() {
  return (
    <div>
    {/* <IssuePage /> */}
    <LoadingIssuePage/>

    </div>
  )
}
