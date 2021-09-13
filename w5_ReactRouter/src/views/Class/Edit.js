import React from 'react'
import request from '@/utils/request'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    message,
} from 'antd';

class Add extends React.Component{
    state = {
        subjectList:[],
        cities:[],
        // classData:{},
        initialValues:{
            name:'',
            category:'HTML5',
            city:'广州'
        }
    }
    submit = (values)=>{
        console.log('values',values);// {_id,name,category,city}
        const {_id,...fields} = values;
        request.put('/class/'+_id,{
            ...fields
        }).then(data=>{
            console.log('category',data);
            if(data.code === 201){
                message.success('修改成功');
                this.props.history.push('/class')
            }else{
                message.error('修改失败')
            }
        })
    }
    componentDidMount(){
        // 获取当前班级信息
        console.log('Edit.prop=',this.props)
        const classId = this.props.match.params.id
        const search = new URLSearchParams(this.props.location.search)
        const id = search.get('id');
        console.log('id=',id,classId)
        request.get('/class/'+id).then(data=>{
            console.log('classDetail',data)
            // this.setState({
            //     classData:data.data
            // })

            // 通过form实例设置表单的值
            this.form.setFieldsValue(data.data)
        })
        

        // 获取学科
        request.get('/category',{
            total:false,
            size:100
        }).then(data=>{
            console.log('category',data)
            this.setState({
                subjectList:data.data
            })
        })

        // 获取分校
        request.get('/city',{
            total:false,
            size:100
        }).then(data=>{
            console.log('city',data)
            this.setState({
                cities:data.data
            })
        })
    }
    render () {
        const {subjectList,cities,initialValues} = this.state;
        return (
            <div>
                <Form
                    ref={el=>this.form=el}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    layout="horizontal"
                    initialValues={initialValues}
                    onFinish={this.submit}
                >
                    
                    <Form.Item name="_id" hidden>
                        <Input />
                    </Form.Item>
                    <Form.Item label="班级名称" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="学科" name="category">
                        <Select>
                            {
                                subjectList.map(item=>                            <Select.Option key={item._id} value={item.name}>{item.name}</Select.Option>)
                            }

                        </Select>
                    </Form.Item>
                    <Form.Item label="分校" name="city">
                        <Select>
                        {
                                cities.map(item=>                            <Select.Option key={item._id} value={item.name}>{item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{
                        offset:4
                    }}>
                        <Button type="primary" htmlType="submit">添加</Button>
                    </Form.Item>
                </Form>
    
            </div>
        )
    }

}

export default Add;