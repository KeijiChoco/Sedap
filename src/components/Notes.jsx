import { AiFillEdit } from "react-icons/ai"; 
import { AiFillDelete } from "react-icons/ai"; 
import { notesAPI } from "../services/notesAPI"
import PageHeader from "../components/PageHeader";
import { useState, useEffect } from "react";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Notes() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [notes, setNotes] = useState([])

  const [dataForm, setDataForm] = useState({
    title: "", content: "", status: ""
  })

  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setDataForm({
      ...dataForm,  
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      if (editMode && editId !== null) {
        await notesAPI.updateNote(editId, dataForm)
        setSuccess("Catatan berhasil diperbarui!")
      } else {
        await notesAPI.createNote(dataForm)
        setSuccess("Catatan berhasil ditambahkan!")
      }

      setDataForm({ title: "", content: "", status: "" })
      setEditMode(false)
      setEditId(null)

      setTimeout(() => setSuccess(""), 3000)
      loadNotes()
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadNotes()
  }, [])

  const loadNotes = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await notesAPI.fetchNotes()
      setNotes(data)
    } catch (err) {
      setError("Gagal memuat catatan")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
    if (!konfirmasi) return

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await notesAPI.deleteNote(id)
      loadNotes()
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (note) => {
    setEditMode(true)
    setEditId(note.id)
    setDataForm({
      title: note.title,
      content: note.content,
      status: note.status || ""
    })
  }

  return (
    <div>
      <PageHeader title="Notes" breadcrumb={["Notes", "Note Note"]}>
        <button onClick={() => window.location.href = "/"} className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-4 text-l">
          Add
        </button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg mr-4 text-l">
          Export
        </button>
        <button onClick={() => window.location.href = "/dashboard"} className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-1 text-l">
          Back
        </button>
      </PageHeader>

      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
        </div>

        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {editMode ? "Edit Catatan" : "Tambah Catatan Baru"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={dataForm.title}
              placeholder="Judul catatan"
              onChange={handleChange}
              disabled={loading}
              required
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />

            <textarea
              name="content"
              value={dataForm.content}
              placeholder="Isi catatan"
              onChange={handleChange}
              disabled={loading}
              required
              rows="2"
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
            />

            <div className="flex items-center">
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
              >
                {editMode ? "Simpan Perubahan" : "Tambah Catatan"}
              </button>

              {editMode && (
                <button
                  type="button"
                  onClick={() => {
                    setEditMode(false)
                    setEditId(null)
                    setDataForm({ title: "", content: "", status: "" })
                  }}
                  className="ml-4 px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200"
                >
                  Batal Edit
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold">
              Daftar Catatan ({notes.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat catatan..." />}

          {!loading && notes.length === 0 && !error && (
            <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
          )}

          {!loading && notes.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && notes.length > 0 ? (
            <GenericTable
              columns={["#", "Judul", "Isi Catatan", "Aksi"]}
              data={notes}
              renderRow={(note, index) => (
                <>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-emerald-600">
                      {note.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">
                      {note.content}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="flex space-x-4">
                      <button onClick={() => handleEdit(note)} disabled={loading} className="text-blue-500 hover:text-blue-700">
                        <AiFillEdit className="text-blue-400 text-2xl hover:text-blue-600 transition-colors"/></button>
                      <button onClick={() => handleDelete(note.id)} disabled={loading}>
                        <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                      </button>
                    </div>
                  </td>
                </>
              )}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
