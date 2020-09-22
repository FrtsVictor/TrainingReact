import { Header, Form, Title, ErrorMessage, Tasks } from './styles'

import { FiCircle, FiCheckCircle, FiDelete } from 'react-icons/fi'

import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import logoImg from '../../assets/logo.png';

import { Link } from 'react-router-dom'

const Tarefas = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const loadTasks = async () => {
        try {
            const response = await api.get('tarefas');
            const sortedTasks = response.data.sort(({ createdAt: a }, { createdAt: b }) => a && b ? a < b ? 1 : -1 : 0)
            console.log('loadTasks', sortedTasks)

            setTasks(sortedTasks)
        } catch (error) {
            console.log('load tasks', error)
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);


    const handleAddTask = async event => {
        event.preventDefault();

        console.log("Form Submitted")

        if (!newTask) {
            setErrorMessage("Insert Task")
            return
        }

        const params = {
            descricao: newTask,
            concluido: false,
            createdAt: new Date().toISOString()
        };

        try {
            await api.post('tarefas', params)

            loadTasks();
            setNewTask('') //limpando o input
            setErrorMessage('')//limpando error message

        } catch (error) {
            console.log('handleAddTask error', error)
        }
    }


    const handleTask = async (task) => {
        const params = {
            ...task,
            concluido: !task.concluido
        }

        await api.put(`tarefas/${task.id}`, params)

        loadTasks();
    }

    const removeTask = async (task) => {
        await api.delete(`tarefas/${task.id}`)
        loadTasks();
    }


    return (
        <>
            <img src={logoImg} alt="logo" />

            <Header>
                <ul>
                    <li>
                        <Link to='/dashboard'>
                            Dashboard
                </Link>
                    </li>
                    <li>
                        <Link to='/tarefas'>
                            Tarefas
                </Link>
                    </li>
                </ul>
            </Header>

            <Title>Tarefas</Title>

            <Form onSubmit={handleAddTask}>
                <input
                    //quando uso value o value é o estado da aplicação, entao preciso do onchange pra atualizar
                    value={newTask}
                    type="text"
                    placeholder="Insert new Task"
                    onChange={event => setNewTask(event.target.value)}

                />
                <button type="submit" >AddTask</button>
            </Form>

            { errorMessage &&
                <ErrorMessage>{errorMessage}</ErrorMessage>
            }


            <Tasks>
                {tasks.map(task => {
                    return (
                        <div key={task.id}>
                            <strong>{task.descricao}</strong>

                            <span>
                                {task.concluido ? (
                                    <>
                                        <FiDelete sice={22} onClick={() => removeTask(task)} style={{ marginRight: 10 }} />
                                        <FiCheckCircle size={22} onClick={() => handleTask(task)} />
                                    </>
                                ) : (
                                        <FiCircle size={22} onClick={() => handleTask(task)} />
                                    )
                                }
                            </span>
                        </div>
                    )
                }
                )}
            </Tasks>

        </>
    )
}

export default Tarefas