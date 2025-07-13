import PageContent from './PageContent'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Works',
  description: 'fY-Hr works page'
}

export default function Works(){
    return(
        <>
            <PageContent />
        </>
    )
}