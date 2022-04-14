// Tell Nextjs how many routes that needs to be created a html page for
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();
    const paths = data.map((person) => {
        return{
            params: { id: person.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
} 



// Fetch blogs data for a single id
export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch('http://localhost:8000/blogs/' + id);
    const data = await res.json();

    return {
        props : {person : data}
    }
}

const Mine = ({ person }) => {
    return (
        <div className="container">
        <h1>More About...</h1>
        <h3>{person.name}</h3>
        <p>He is currently {person.age}yrs old and currently {person.status}.</p>
        </div>
    )
}
export default Mine;
