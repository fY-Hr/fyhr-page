export default function Footer(){
    return(
        <>
            <footer className="py-2 flex justify-between animate-fadeUpVeryLast">
                <p>© {new Date().getFullYear()} </p>
                <p>fY-Hr</p>
            </footer>
        </>
    )
}