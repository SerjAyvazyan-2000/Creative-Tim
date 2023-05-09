import axios from "axios";

export class UsersServices {

    static async getUsers() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return response
        } catch (e) {
            alert("ERROR getUsers")
        }
    }
}