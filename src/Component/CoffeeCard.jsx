import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ data ,coffees,setCoffees }) => {
    // console.log(data)
    const { _id } = data;
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirm')
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              const remaining=coffees.filter(cof => cof._id !== _id);
                              setCoffees(remaining)                        }
                    })
            }
        })
    }
    return (
        <div className="flex" >
            <div >
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.photo} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center flex">
                            <h2 className="card-title">{data.name}</h2>

                            <div className="card-actions">
                                <div>
                                    <div className="btn-group btn-group-vertical">
                                        <button className="btn btn-active">View</button>
                                        <button className="btn btn-primary"
                                            onClick={() => handleDelete(_id)} >Delete</button>
                                        <Link to={`update/${_id}`}><button className="btn">Update</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;