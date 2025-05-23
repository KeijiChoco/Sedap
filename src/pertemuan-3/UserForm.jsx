import InputField from "./components/InputField"

export default function UserForm() {
    return (
          <div>
                <InputField label="nama" type="text" placeholder="Silahkan ketik Nama..."/>
                <InputField label="email" type="email" placeholder="Silahkan ketik Email..."/>
                <InputField label="tanggalLahir" type="date" />
          </div>
    );
  }


  