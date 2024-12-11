import Link from 'next/link';
import {IoIosLink} from 'react-icons/io'

interface Contact {
    source: string;
    link: string;
  }

const contacts: Contact[] = [
    {
        source: 'GitHub',
        link: 'https://github.com/fY-Hr'
    },
    {
        source: 'LinkedIn',
        link: 'https://www.linkedin.com/in/muhammad-fakhry-haidar-1a1226276/'
    }
]

export default function ContactMe(){
    return(
        <>
            
            {contacts.map((contact, index) => (
                <Link key={index} href={contact.link} className="text-md flex text-lime-800 items-center gap-2 border border-lime-800 hover:border-lime-300 px-4 py-2 hover:bg-blue-900 hover:text-lime-300 underline">{contact.source} <IoIosLink /></Link>
            ))}
            
        </>
    )
}