import React,{useState , useEffect } from 'react'
import {Modal,Button,Form,Input,Select, message , Table, DatePicker} from "antd"
import Layout from '../components/Layout/Layout'
import axios from "axios"
import background from "./background.svg"
import Spinner from '../components/Spinner'
import moment from 'moment'
import Chart from '../components/Chart'
import backgroundPhoto from "./background.svg"
const {RangePicker} = DatePicker;


const HomePage = () => {
  const [showModal , setShowModal] = useState(false)
  const [loading,setLoading] = useState(false)
  const [allTransection , setAllTransection ] = useState([])
  const [frequency , setFrequency] = useState('30')
  const [selectedDate , setSelecteddate] = useState([])
  const [type , setType] = useState('all') 
  const [viewData ,setViewData] = useState('table')
  const [editable , setEditable] = useState(null)

  const columns = [
    {
      title : 'Date',
      dataIndex : 'date'   ,
      render : (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title : 'Amount',
      dataIndex : 'amount'    
    },
    {
      title : 'Type',
      dataIndex : 'type'    
    },
    {
      title : 'Category',
      dataIndex : 'category'    
    },
    {
      title : 'Refrence',
      dataIndex : 'refrence'    
    },
    {
      title : 'Actions',
      render : (text ,record)=>(
        <div>
          <Button onClick={()=>{
            setEditable(record)
            setShowModal(true)
          }}>Edit</Button>
          <Button className='mx-2' onClick={()=>{handleDelete(record)}}>
            Delete</Button>
        </div>
      )
         
    },

  ]

  const getAllTransections = async ()=>{
    try {
      const user = JSON.parse(localStorage.getItem("user"))
      setLoading(true)
      const res = await axios.post('/transactions/get-transection' ,
         {userid : user.user._id , frequency , selectedDate , type})
      console.log(res)
      setLoading(false)
      setAllTransection(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      message.error("Transections cannot be fetched")
    }
  }

  useEffect(()=>{
    const getAllTransections = async ()=>{
      try {
        const user = JSON.parse(localStorage.getItem("user"))
        setLoading(true)
        const res = await axios.post('/transactions/get-transection' ,
           {userid : user.user._id , frequency ,selectedDate , type})
        console.log(res)
        setLoading(false)
        setAllTransection(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
        message.error("Transections cannot be fetched")
      }
    }
    getAllTransections();
    
  },[frequency , selectedDate , type])


  const handleDelete =async(record)=>{
    try{
      await axios.post("/transactions/delete-transection" , {transactionId :record._id})
      setLoading(false)
      message.success("Transaction deleted successfully")
    }catch(error){
      setLoading(false)
      console.log(error)
      message.error("delete unsuccessfull")

    }
  }

  const handleSubmit = async (values)=>{
    try{
      const user = JSON.parse(localStorage.getItem("user"))
      setLoading(true);
      if(editable){
        await axios.post("http://localhost:8081/api/v1/transactions/edit-transection",
       {payload :{
            ...values,
            userId : user._id
       },
       transactionId : editable._id
      });

      setLoading(false)
      message.success("transection updated successfully")
      }else {
        await axios.post("http://localhost:8081/api/v1/transactions/add-transection",
       {...values, userid: user.user._id});

      setLoading(false)
      message.success("transection added successfully")
      }
      setShowModal(false)
      setEditable(null)
    }catch(error){
      setLoading(false)
      message.error("failed to add transection ")
      console.log((localStorage.getItem("user")))
      console.log((localStorage.getItem("user"))._id)
    }
  }
  return (
    <div >
    <Layout>
      {loading && <Spinner/>}
    <div className='filters'>
        <div >range filters</div>
        <div>
        <h6>Time</h6>
        <Select value={frequency} onChange={(values)=> setFrequency(values)}>
          <Select.Option value = '7'>Last week</Select.Option>
          <Select.Option value= '30'>Last Month</Select.Option>
          <Select.Option value= '1'>Today</Select.Option>
          <Select.Option value= '12000'>All</Select.Option>
          <Select.Option value='custom'>Custom</Select.Option>
        </Select>

        {frequency === 'custom' && <RangePicker value={selectedDate} onChange ={(values)=>setSelecteddate(values)} />}
        </div>
        <div >

        <h6>Type</h6>
        <Select value={type} onChange={(values)=> setType(values)}>
          <Select.Option value = 'all'>All</Select.Option>
          <Select.Option value= 'income'>Income</Select.Option>
          <Select.Option value= 'expense'>Expense</Select.Option>
        </Select>
        </div>
        


        
        <div className='mx-2'>
          <Button className='mx-2' onClick={()=> setViewData('table')}>Table View</Button>
          <Button className='mx-2' onClick={()=> setViewData('chart')}>Chart View</Button>
        </div>



        <div >
            <button className='btn btn-primary'
             onClick={()=> setShowModal(true)}>
              Add New</button>
        </div>
    </div>
    <div className='content'>
      {viewData === 'table' ? <Table columns ={columns} dataSource={allTransection} /> 
      : <Chart allTransection={allTransection}/>  
    }
      
    </div>
    <Modal title = {editable ? 'Edit Transaction' : 'Add Transaction'}  
      open = {showModal}
      onCancel={()=>setShowModal(false)}
      footer = {false}
    >



      <Form layout="vertical" onFinish={handleSubmit} initialValues={editable}>
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
            <Select.Option value="medical">Medical</Select.Option>
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
    </ Layout>
    </div>
    
  )
}

export default HomePage
