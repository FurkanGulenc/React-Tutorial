import React, { Component } from 'react'
import User from './User';

export default class Kullanicilar extends Component {
    render() {
        const{users} = this.props;
       
        return (
            <div>
                {
                    users.map(user =>{
                        return(
                            <User 
                            key = {user.id}
                            name = {user.name}
                            department = {user.department}
                            salary = {user.salary} 
                            />

                        )

                    })
                }
                
            </div>
        )
    }
}
