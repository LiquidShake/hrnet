import React, { useState } from 'react'
import { useEmployeeListContext } from "../../EmployeeListContext";
import { states, departments } from '../../data/populateDropdown.js';
import Input from '../../components/Input';
import { Dropdown } from 'cg-p14-npm-select-component';
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import './form.scss';

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        startDate: "",
        department: "",
    });

    const context = useEmployeeListContext();

    // fonctions pour gérer les changements de saisie utilisateur
    const handleLastNameChange = (e) => {
        setFormData({ ...formData, lastName: e.target.value });
    };

    const handleFirstNameChange = (e) => {
        setFormData({ ...formData, firstName: e.target.value });
    };

    const handleBirthDateChange = (e) => {
        setFormData({ ...formData, birthDate: e.target.value });
    };

    const handleStartDateChange = (e) => {
        setFormData({ ...formData, startDate: e.target.value });
    };

    const handleDepartmentChange = (e) => {
        setFormData({ ...formData, department: e.target.value });
    };

    const handleStreetChange = (e) => {
        setFormData({ ...formData, street: e.target.value });
    };

    const handleCityChange = (e) => {
        setFormData({ ...formData, city: e.target.value });
    };

    const handleStateChange = (e) => {
        setFormData({ ...formData, state: e.target.value });
    };

    const handleZipCodeChange = (e) => {
        setFormData({ ...formData, zipCode: e.target.value });
    };

    // fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        context.addEmployee(
            formData.firstName,
            formData.lastName,
            formData.birthDate,
            formData.street,
            formData.city,
            formData.state,
            formData.zipCode,
            formData.startDate,
            formData.department
        );
        // reseting the form
        setFormData({
            firstName: "",
            lastName: "",
            birthDate: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            startDate: "",
            department: "",
        })
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personnal informations</legend>
                    <Input type="text" label="Last Name" value={formData.lastName} handler={handleLastNameChange} />
                    <Input type="text" label="First Name" value={formData.firstName} handler={handleFirstNameChange} />
                    <Input type="date" label="Date of birth" value={formData.birthDate} handler={handleBirthDateChange} />
                </fieldset>
                <fieldset>
                    <legend>Adress</legend>
                    <Input type="text" label="Street" value={formData.street} handler={handleStreetChange} />
                    <Input type="text" label="City" value={formData.city} handler={handleCityChange} />
                    <Dropdown label="State" options={states} handler={handleStateChange}/>
                    <Input type="number" label="Zip Code" value={formData.zipCode} handler={handleZipCodeChange} />
                </fieldset>
                <fieldset>
                    <legend>Working informations</legend>
                    <Input type="date" label="Starting Date" value={formData.startDate} handler={handleStartDateChange} />
                    <Dropdown label="Department" options={departments} handler={handleDepartmentChange}/>
                </fieldset>
                <button type="submit" onClick={onOpen} >Save</button>
            </form>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>All the datas have been collected with success, your new employee is now added to your list.</p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
