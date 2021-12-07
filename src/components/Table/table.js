import './table.css'
import {FaPen, FaTrash} from "react-icons/fa";

const Table = ({users, setUsers, nUser, setNUser, state, setState, setVisible,search, setSearch}) => {
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    return (
        <div className={'table-container'}>
            <div className={'title'}>
                <div className={'title-style'}>
                    List of Student
                </div>
                <button onClick={() => setVisible('flex')} className={'button-new new'}>
                    Add New Student
                </button>
            </div>
            <div>
                <input type={"text"} placeholder={'Search Students'} onChange={(event) => {
                    setSearch(event.target.value)
                }}/>
            </div>
            <table>
                <thead>
                <tr>
                    <td id={'idS'}>
                        Id
                    </td>
                    <td id={'fNameS'}>
                        First Name
                    </td>
                    <td id={'lNameS'}>
                        Last Name
                    </td>
                    <td id={'jobS'}>
                        Job
                    </td>
                    <td id={'buttonS'}>
                    </td>
                </tr>
                </thead>
                <tbody>
                {users.filter((user) => {
                    if (search === '') {
                        return user
                    } else {
                        if (user.firstName.toUpperCase().includes(search.toUpperCase()) || user.lastName.toUpperCase().includes(search.toUpperCase()))
                            return user
                    }
                }).map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td className={'job-style'}>{user.job}</td>
                            <td>
                                <button className={'button update'} onClick={() => {
                                    setNUser(user);
                                    setState('Update');
                                    setVisible('flex')
                                }}><FaPen/></button>
                                <button className={'button delete'} onClick={() => handleDelete(user.id)}><FaTrash/>
                                </button>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Table