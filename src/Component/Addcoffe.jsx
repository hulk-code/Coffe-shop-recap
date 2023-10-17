import React from 'react';
import Swal from 'sweetalert2';

const Addcoffe = () => {
    const handleSubmit= e =>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value
        const available=form.available.value
        const suplier=form.suplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value
        const allInfo={name,available,suplier,taste,category,details,photo}
        console.log(allInfo)
        fetch('http://localhost:3000/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allInfo)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Iteam have been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        })

    }
    return (
        <div className='bg-orange-300 p-24'>
            <h1 className='text-3xl text-center text-bold'>Add A Coffee</h1>
           <form onSubmit={handleSubmit}>
           <div className='flex gap-6 '>
           <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Coffee name</span>
                </label>
                <label className="input-group">
                   
                    <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full " />
                </label>
            </div>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name='available' placeholder="Available Quantity" className="input input-bordered w-full" />
                </label>
            </div>
           </div>
           <div className='flex gap-5 '>
           <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Suplier</span>
                </label>
                <label className="input-group">
                   
                    <input type="text" name='suplier' placeholder="Suplier" className="input input-bordered w-full " />
                </label>
            </div>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">taste</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name='taste' placeholder="taste" className="input input-bordered w-full" />
                </label>
            </div>
           </div>
           <div className='flex gap-5'>
           <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">category</span>
                </label>
                <label className="input-group">
                   
                    <input type="text" name='category' placeholder="category" className="input input-bordered w-full " />
                </label>
            </div>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name='details' placeholder="ADetails" className="input input-bordered w-full" />
                </label>
            </div>
           </div>
           <div>
            
           <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                   
                    <input type="text" placeholder="photo url" name='photo' className="input input-bordered w-full " />
                </label>
            </div>
           </div>
           <button className='btn w-full mt-6'>Add new Item</button>
           </form>
        </div>
    );
};

export default Addcoffe;