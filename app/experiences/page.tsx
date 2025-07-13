import type { Metadata } from 'next'
import PageContent from './PageContent'

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'fY-Hr experiences page'
}

export default function Experiences(){
    return(
        <>
            <PageContent />
        </>
    )
}