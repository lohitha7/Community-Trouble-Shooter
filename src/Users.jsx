import React from "react"



function Users(){
    const [users, setUsers] = useState([{
        Resident_name:"lakshmi bhavani",Email:"lakshmibhavanid2003@gmail.com",Phone_number:"9177662576",Locality:"burahanpuram",Problem:"drainageblock",
        Problem_resolve_time:"-"



    }])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounde p-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Resident_name</th>
                            <th>Email</th>
                            <th>Phone_number</th>
                            <th>Locality</th>
                            <th>Problem</th>
                            <th>Problem_resolve_time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{ return
                            <tr>
                                    <td>{user.Resident_name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Phone_number}</td>
                                    <td>{user.Locality}</td>
                                    <td>{user.Problem}</td>
                                    <td>{user.Problem_resolve_time}</td>
                                    <td><button>Edit</button><button>Delete</button></td>
                                    
                                </tr>
})
                        }

                    </tbody>
                </table>

            </div>
           
        </div>
    )

}
export default Users