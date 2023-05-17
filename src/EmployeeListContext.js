import React, {useState, useContext} from "react";

// Initialize context
export const EmployeeListContext = React.createContext();

// Initialize the state of the context
export const EmployeeProvider = ({children}) => {
    const [employeeList, setEmployeeList] = useState([]);

    const addEmployee = (firstName, lastName, birthDate, street, city, state, zipCode, startDate, department) => {
        setEmployeeList([
            ...employeeList,
            {
                firstName,
                lastName,
                birthDate,
                street,
                city,
                state,
                zipCode,
                startDate,
                department
            }
        ])
    }

    return (
        <EmployeeListContext.Provider value={{ employeeList, setEmployeeList, addEmployee }}>
            {children}
        </EmployeeListContext.Provider>
    )
}

export const useEmployeeListContext = () => {
    const contexte = useContext(EmployeeListContext);
    return contexte;
}