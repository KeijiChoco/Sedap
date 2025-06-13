import axios from 'axios'

const API_URL = "https://szcvvwrhofwhqahfsjyt.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Y3Z2d3Job2Z3aHFhaGZzanl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzEzMDEsImV4cCI6MjA2NTM0NzMwMX0.c_ToAzeB4YyAQDVtEk2evRlqoV7B3Ib74fz92t2oOZM"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },

    async updateNote(id, updateNote) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, updateNote, { headers })
        return response.data
    }
}