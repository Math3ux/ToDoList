import axios from '../utils/axios'

export default class Todos {
    async list() {
        const { data } = await axios.get('todo')
        return data
    }

    async store({ text, done }) {
        const { data } = await axios.post('todo', { text, done })
        return data
    }

    async update({ id, text, done }) {
        const { data } = await axios.put(`todo/${id}`, { text, done })
        return data
    }

    async delete({ id }) {
        await axios.delete(`todo/${id}`)
    }
}