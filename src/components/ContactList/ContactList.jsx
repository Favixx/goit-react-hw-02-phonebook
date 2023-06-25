import React, { Component } from "react";
import PropTypes from "prop-types";
export default class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired
            })
        ).isRequired,
        filter: PropTypes.string.isRequired,
        deleteContact: PropTypes.func.isRequired
    };
    render() {
        const { contacts, filter, deleteContact } = this.props;
        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );

        return (
            <ul>
                {filteredContacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name}: {contact.number}
                        <button onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}
