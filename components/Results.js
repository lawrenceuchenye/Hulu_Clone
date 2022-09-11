
const Results=()=>{
    return(
        <div>
           </div>
    );
}

export const getServerSideProps=async (context)=>{
   const genre=context.query.genre;
    console.log(genre);
}

export default Results;
