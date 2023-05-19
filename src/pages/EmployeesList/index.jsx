import React, { useState } from 'react'
import { useEmployeeListContext } from "../../EmployeeListContext";
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import './list.scss';

export default function EmployeesList() {

  const { employeeList } = useEmployeeListContext();

  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true
    },
    {
      name: 'Date of Birth',
      selector: row => row.birthDate,
      sortable: true
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true
    },
    {
      name: 'Zip Code',
      selector: row => row.zipCode,
      sortable: true
    }
  ]

  const data = [];

  employeeList.length && employeeList.map((employee, index) => (
    data.push(
      {
        id        : index,
        firstName : employee.firstName,
        lastName  : employee.lastName,
        startDate : employee.startDate,
        department: employee.department,
        birthDate : employee.birthDate,
        street    : employee.street,
        city      : employee.city,
        state     : employee.state,
        zipCode   : employee.zipCode
      }
    )
  ));

  const filteredData = 
    data.filter((employee) =>
      employee.firstName.toLowerCase().includes(search) || 
      employee.lastName.toLowerCase().includes(search) || 
      employee.startDate.toLowerCase().includes(search) || 
      employee.department.toLowerCase().includes(search) || 
      employee.birthDate.toLowerCase().includes(search) || 
      employee.street.toLowerCase().includes(search) || 
      employee.city.toLowerCase().includes(search) || 
      employee.state.toLowerCase().includes(search) || 
      employee.zipCode.toLowerCase().includes(search)
    );

  return (
    <main>
      <div className="wrapper">
        <h2>All employees</h2>
        <label htmlFor="search">
          Search:
          <input id="search" type="text" onChange={handleSearch} />
        </label>
        <DataTable columns={columns} data={filteredData} pagination/>
        <Link to='/'>Add new employee</Link>
      </div>
    </main>
  )
  
}
