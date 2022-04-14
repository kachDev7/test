import Link from 'next/link'
// Router redirecting
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    const  [time, setTime] = useState();
    var count = 3;
    setInterval(() =>{
        setTime(count);
        count-1;
    }, 100);
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 7000);
    })

    return(
        <div>
            <h1>404 Page Not Found</h1>
            <p>You'll be redirected to <strong>Homepage</strong> in {time}seconds.</p>
            <Link href="/"><button className="btn btn-secondary m-3">Go To Homepage</button></Link>
        </div>
    )
}
export default NotFound;