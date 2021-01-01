import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: '홍길동',
            email: 'test@gmail.com',
        },
        {
            id: 2,
            username: 'test',
            email: 'tester@gmail.com',
        },
        {
            id: 3,
            username: 'tester3',
            email: 'tester3@gmail.com',
        },
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        // setUsers([...users, user]);
        setUsers(users.concat(user));
        //setUsers(users.push(user)); //작동 안됌.. split도 안됌 사용 X

        setInputs({
            username: '',
            email: '',
        });

        console.log(nextId.current);
        nextId.current += 1;
    };

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} />
        </>
    );
}

export default App;
