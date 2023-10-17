import { useLoaderData } from "react-router-dom";


const Users = () => {
    const signinData=useLoaderData()
    console.log(signinData)
    
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Created time</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        signinData.map(data =><tr key={data._id} >
            <th>{data.name}</th>
            <td>{data.email}</td>
            <td>{data.createdAt}</td>
           
          </tr> )
      }
    
     
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default Users;