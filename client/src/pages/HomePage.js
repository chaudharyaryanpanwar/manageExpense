import React,{useState } from 'react'
import {Modal,Form,Input,Select, message} from "antd"
import Layout from '../components/Layout/Layout'
import axios from "axios"
import Spinner from '../components/Spinner'


const HomePage = () => {
  const [showModal , setShowModal] = useState(false)
  const [loading,setLoading] = useState(false)
  const [allTransection , setAllTransection ] = useState([])

  const getAllTransections = async ()=>{
    try {
      const user = JSON.parse(localStorage.getItem("user"))
      setLoading(true)
      // const res = await axios.post('/transections/get-transection' , {userid : user.user._id})
      axios.post("http://localhost:8081/api/v1/transections/get-transection" ,{userid : user.user._id}).then((res)=>{console.log(`insside gettransection${res}`)}).catch((err)=>{console.log(`insider get transection${err}`)})
      // axios.post("", {}).then(()=>).catch(()=>)
      // console.log(res)
      setLoading(false)
      // setAllTransection(res.data)
      // console.log(res.data)
    } catch (error) {
      console.log(error)
      message.error("Transections cannot be fetched")
    }
  }

  

  const handleSubmit = async (values)=>{
    try{
      const user = JSON.parse(localStorage.getItem("user"))
      setLoading(true);
      await axios.post("http://localhost:8081/api/v1/transactions/add-transection",
       {...values, userid: user.user._id});

      setLoading(false)
      message.success("transection added successfully")
      setShowModal(false)
    }catch(error){
      setLoading(false)
      message.error("failed to add transection ")
      console.log((localStorage.getItem("user")))
      console.log((localStorage.getItem("user"))._id)
    }
  }
  return (
    <Layout>
      {loading && <Spinner/>}
    <div className='filters'>
        <div>range filters</div>
        <div >
            <button className='btn btn-primary'
             onClick={()=> setShowModal(true)}>
              Add New</button>
        </div>
    </div>
    <div className='content'></div>
    <Modal title = "Add Transection"  
      open = {showModal}
      onCancel={()=>setShowModal(false)}
      footer = {false}
    >



      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Amount " name="amount">
          <Input type="text"/>
        </Form.Item>
        <Form.Item label="type" name="type">
          <Select>
            <Select.Option value= "income">Income</Select.Option>
            <Select.Option value = "expense">Expense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="category" name="category">
          <Select>
            <Select.Option value="salary">Salary</Select.Option>
            <Select.Option value="tip" >Tip</Select.Option>
            <Select.Option value="project">Project</Select.Option>
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="movie">Movie</Select.Option>
            <Select.Option value="bills">Bills</Select.Option>
            <Select.Option value="fee">Fee</Select.Option>
            <Select.Option value="tax">Tax</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date" name="date">
          <Input type="date"/>
        </Form.Item>
        <Form.Item label="Refrence" name="refrence">
          <Input type="text"/>
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input type="text"/>
        </Form.Item>
        <div className='d-flex justify-content-end'>
          <button type= "submit" className='btn btn-primary'>SAVE</button>
        </div>
      </Form>

    </Modal>
    </Layout>
    
  )
}

export default HomePage
