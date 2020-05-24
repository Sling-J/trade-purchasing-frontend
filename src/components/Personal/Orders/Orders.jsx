import React from 'react';

import PersonalArea from "../../Containers/PersonalArea";

import {Input, Table, Button} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from 'react-highlight-words';

const data = [
   // {
   //    id: '111',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '222',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '333',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '444',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
   // {
   //    id: '555',
   //    product: 'Телефон',
   //    company: 'ТОО Бизнес',
   //    date: '2000.12.02',
   //    count: 2,
   //    price: 200,
   //    sum: 400,
   // },
];

class Orders extends React.Component {
   state = {
      searchText: '',
      searchedColumn: '',
   };

   getColumnSearchProps = dataIndex => ({
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
         <div style={{padding: 8}}>
            <Input
               ref={node => {
                  this.searchInput = node;
               }}
               placeholder={`Поиск`}
               value={selectedKeys[0]}
               onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
               onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
               style={{width: 188, marginBottom: 8, display: 'block'}}
            />
            <Button
               type="primary"
               onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
               icon={<SearchOutlined/>}
               size="small"
               style={{width: 90, marginRight: 8}}
            >
               Поиск
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
               Сброс
            </Button>
         </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
      onFilter: (value, record) =>
         record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
         if (visible) {
            setTimeout(() => this.searchInput.select());
         }
      },
      render: text =>
         this.state.searchedColumn === dataIndex ? (
            <Highlighter
               highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
               searchWords={[this.state.searchText]}
               autoEscape
               textToHighlight={text.toString()}
            />
         ) : (
            text
         ),
   });

   handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      this.setState({
         searchText: selectedKeys[0],
         searchedColumn: dataIndex,
      });
   };

   handleReset = clearFilters => {
      clearFilters();
      this.setState({searchText: ''});
   };

   render() {
      const columns = [
         {
            title: 'Номер заказа',
            dataIndex: 'id',
            key: 'id',

            width: '10%'
         },
         {
            title: 'Наименование товара',
            dataIndex: 'product',
            key: 'product',
            width: '15%',
            ...this.getColumnSearchProps('product'),
         },
         {
            title: 'Название компании',
            dataIndex: 'company',
            key: 'company',
            width: '15%',
            ...this.getColumnSearchProps('company'),
         },
         {
            title: 'Дата заказа',
            dataIndex: 'date',
            key: 'date',
            width: '7%'
         },
         {
            title: 'Кол-во',
            dataIndex: 'count',
            key: 'count',
            width: '6%'
         },
         {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            width: '8%'
         },
         {
            title: 'Сумма',
            dataIndex: 'sum',
            key: 'sum',
            width: '10%'
         },
      ];
      return (
         <PersonalArea title="История заказов">
            <div className="orders-container">
               <Table
                  columns={columns}
                  dataSource={data}
                  scroll={{ x: 1500 }}
               />
            </div>
         </PersonalArea>
      );
   }
}

export default Orders;