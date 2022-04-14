import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();

    return{
        props: {
            people: data
        }
    }
}

const Group = ({ people }) => {
    return (
        <div>
            {people.map((person) => (
                <>
                    <Link href={'/people/' + person.id} key={person.id} className="container">
                        <h1>{person.name}</h1>
                    </Link>
                </>
            ))}
        </div>
    )
}
export default Group;