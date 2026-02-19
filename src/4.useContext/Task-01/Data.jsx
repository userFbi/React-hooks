import { Field, Form, Formik } from 'formik'
import React, { createContext, useState } from 'react'
import DataView from './DataView'


export const DataContext = createContext()

const Data = () => {

    const [users, setUsers] = useState([])

    const handleSubmit = (values, { resetForm }) => {
        setUsers([...users,values])
        // console.log(values);
        resetForm()
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    age: "",
                    skill: ""
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <br /><br />
                    <Field type='text' name="name" placeholder='Enter Name' /><br /><br />
                    <Field type='number' name="age" placeholder='Enter Age' /><br /><br />
                    <Field type='text' name="skill" placeholder='Enter Skill' /><br /><br />
                    <button type='submit'>Submit</button><hr />
                </Form>
            </Formik>


            <DataContext.Provider value={users}>
                <DataView></DataView>
            </DataContext.Provider>
        </>
    )
}

export default Data