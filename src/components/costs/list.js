import React, {PropTypes} from 'react'
import {Table, Modal} from 'antd'
import styles from './list.less'
import classnames from 'classnames'
import TableBodyWrapper from '../common/TableBodyWrapper'
import {DropOption} from '../ui/index'

const confirm = Modal.confirm

function list ({ loading, dataSource, pagination, onPageChange, onDeleteItem, onEditItem, isMotion, location }) {


  /*const Count = {'total' : 0};
  for (let i in dataSource){
    Count.total += dataSource[i]['Cost'];
  }*/

  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '您确定要删除这条记录吗?',
        onOk () {
          onDeleteItem(record.id)
        }
      })
    }
  }

  const columns = [
    /*{
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: (text) => <img width={24} src={text} />
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '昵称',
      dataIndex: 'nickName',
      key: 'nickName'
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: (text) => <span>{text}岁</span>
    }, {
      title: '性别',
      dataIndex: 'isMale',
      key: 'isMale',
      render: (text) => <span>{text
            ? '男'
            : '女'}</span>
    }, {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone'
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },*/
    {
      title: '用户ID',
      dataIndex: 'Id'
    },
    {
      title: '用户名',
      dataIndex: 'Username'
    },
    {
      title: '密码',
      dataIndex: 'Password'
    },
    {
      title: '时间',
      dataIndex: 'Createtime'
    },
    {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{key: '1', name: '编辑'}, {key: '2', name: '删除'}]} />
      }
    }
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: pagination.current
  }

  const getBodyWrapper = body => isMotion ? <TableBodyWrapper {...getBodyWrapperProps} body={body} /> : body

  return (



    <div>
      <Table
        className={classnames({[styles.table]: true, [styles.motion]: isMotion})}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        dataSource={dataSource}
        //loading={loading}
        //onChange={onPageChange}
        pagination={{  //分页
        total: dataSource.length, //数据总数量
        pageSize: 10,  //显示几条一页
        defaultPageSize: 10, //默认显示几条一页
        showSizeChanger: true,  //是否显示可以设置几条一页的选项
        /*onShowSizeChange(current, pageSize) {  //当几条一页的值改变后调用函数，current：改变显示条数时当前数据所在页；pageSize:改变后的一页显示条数
         self.toSelectchange(current, pageSize); //这边已经设置了self = this
         },
         onChange(current) {  //点击改变页数的选项时调用函数，current:将要跳转的页数
         self.gotoThispage(current, self.state.queryInfo.pageSize);
         },*/
        /*showTotal: function () {  //设置显示一共几条数据
          return '总费用' + Count.total ;
        }*/
        }}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

list.propTypes = {
  loading: PropTypes.bool,
  dataSource: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object
}

export default list
