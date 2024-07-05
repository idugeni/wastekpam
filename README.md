# WASTEKPAM

<div align="center">

![License](https://img.shields.io/github/license/idugeni/wastekpam)
![Version](https://img.shields.io/github/v/release/idugeni/wastekpam)
![Issues](https://img.shields.io/github/issues/idugeni/wastekpam)
![Forks](https://img.shields.io/github/forks/idugeni/wastekpam)
![Stars](https://img.shields.io/github/stars/idugeni/wastekpam)
![Contributors](https://img.shields.io/github/contributors/idugeni/wastekpam)
![Last Commit](https://img.shields.io/github/last-commit/idugeni/wastekpam)

</div>

WASTEKPAM adalah sebuah aplikasi otomatisasi laporan ASTEKPAM untuk menghasilkan laporan yang siap dikirim melalui WhatsApp, memastikan format yang konsisten dan mudah dibaca.

## Fitur

- **Otomatisasi Laporan**: Menghasilkan laporan ASTEKPAM secara otomatis dengan format yang telah ditentukan.
- **Format WhatsApp**: Laporan diformat khusus agar terlihat rapi dan mudah dibaca di WhatsApp.
- **Personalisasi Data**: Memungkinkan pengisian data seperti nama petugas, jumlah tahanan, dan inventaris dengan mudah.
- **Penggunaan Mudah**: Antarmuka yang intuitif untuk memudahkan pengguna dalam menghasilkan laporan.

## Instalasi

1. Clone repositori ini:

    ```bash
    git clone https://github.com/idugeni/wastekpam.git
    ```

2. Masuk ke direktori proyek:

    ```bash
    cd wastekpam
    ```

3. Install dependencies yang diperlukan (jika ada).

## Template

```bash
*ASTEKPAM RUTAN KELAS IIB WONOSOBO*\n"
+ `${formattedDate} PUKUL ${jam} WIB\n`
+ `MOHON IZIN MELAPORKAN ASTEKPAM *RUPAM ${shift.split('-')[0]} KE RUPAM ${shift.split('-')[1]}* BERJALAN AMAN DAN TERTIB, DENGAN RINCIAN SEBAGAI BERIKUT:\n\n`
+ "*A. PENGHUNI*\n"
+ "```"
+ "- Tahanan L            : " + (tahananL.trim() ? tahananL + " orang" : "-") + "\n"
+ "- Tahanan P            : " + (tahananP.trim() ? tahananP + " orang" : "-") + "\n"
+ "- Narapidana L         : " + (narapidanaL.trim() ? narapidanaL + " orang" : "-") + "\n"
+ "- Narapidana P         : " + (narapidanaP.trim() ? narapidanaP + " orang" : "-") + "\n"
+ "- Jumlah               : " + ((parseInt(tahananL) + parseInt(tahananP) + parseInt(narapidanaL) + parseInt(narapidanaP)).toString().trim() ? (parseInt(tahananL) + parseInt(tahananP) + parseInt(narapidanaL) + parseInt(narapidanaP)) + " orang" : "-") + "\n"
+ "- Jumlah WBP di dalam  : " + (jumlahWBPdalam.trim() ? jumlahWBPdalam + " orang" : "-") + "\n"
+ "- Jumlah WBP di luar   : " + (jumlahWBPluar.trim() ? jumlahWBPluar + " orang" : "-") + "\n"
+ "```\n"
+ "*B. PERSONIL PENGAMANAN*\n\n"
+ "*RUPAM " + shift.split('-')[0] + "*\n"
+ "```"
+ "Karupam              : " + kaRupamSekarang + "\n"
+ "Anggota Rupam        :\n"
+ "1. " + (anggota1Sekarang.trim() ? anggota1Sekarang : "-") + "\n"
+ "2. " + (anggota2Sekarang.trim() ? anggota2Sekarang : "-") + "\n"
+ "Petugas P2U          : " + (p2uSekarang.trim() ? p2uSekarang : "-") + "\n"
+ "Keterangan           : Hadir Lengkap\n"
+ "```\n"
+ "*RUPAM " + shift.split('-')[1] + "*\n"
+ "```"
+ "Karupam              : " + kaRupamSelanjutnya + "\n"
+ "Anggota Rupam        :\n"
+ "1. " + (anggota1Selanjutnya.trim() ? anggota1Selanjutnya : "-") + "\n"
+ "2. " + (anggota2Selanjutnya.trim() ? anggota2Selanjutnya : "-") + "\n"
+ "Petugas P2U          : " + (p2uSelanjutnya.trim() ? p2uSelanjutnya : "-") + "\n"
+ "Keterangan           : Hadir Lengkap\n"
+ "```\n"
+ "*PETUGAS PIKET*\n"
+ "```"
+ "Perwira Piket        : " + (piketPerwira.trim() ? piketPerwira : "-") + "\n"
+ "Dapur                : " + (piketDapur.trim() ? piketDapur : "-") + "\n"
+ "Piket Blok Wanita    : " + (piketBlokWanita.trim() ? piketBlokWanita : "-") + "\n"
+ "Piket Staff KPR      : " + (piketStaffKPR.trim() ? piketStaffKPR : "-") + "\n"
+ "Piket Staff Siang    : " + (piketStaffSiang.trim() ? piketStaffSiang : "-") + "\n"
+ "```\n"
+ "*C. INVENTARIS REGU PENGAMANAN*\n"
+ "```"
+ "- Senjata Api P3A      : 1  buah\n"
+ "- Amunisi P3A karet    : 10 buah\n"
+ "- Borgol               : 2  buah\n"
+ "- Metal Detector       : 1  buah\n"
+ "- HT                   : 6  buah\n"
+ "- Senter               : 1  buah\n"
+ "- Lonceng              : 5  buah\n"
+ "- CCTV                 : 16 buah\n"
+ "- Sepatu Boat          : 2  buah\n"
+ "- Payung               : 2  buah\n"
+ "```\n"
+ "*DALAM KEADAAN BAIK, SITUASI RUTAN KELAS IIB WONOSOBO DALAM KEADAAN AMAN DAN TERKENDALI. TERIMAKASIH.*
```

## Penggunaan

1. Jalankan aplikasi.
2. Isi data yang diperlukan sesuai dengan form yang disediakan.
3. Generate laporan.
4. Kirim laporan melalui WhatsApp dengan format yang telah diformat.

## Kontribusi

Kami menyambut kontribusi dari siapa saja. Jika Anda ingin berkontribusi, silakan fork repositori ini, buat branch fitur baru, dan kirimkan pull request. Pastikan untuk mengikuti panduan kontribusi kami.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT - lihat file [LICENSE](https://github.com/idugeni/wastekpam/blob/main/LICENSE) untuk detail lebih lanjut.

## Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi kami di [officialelsa21@gmail.com](mailto:officialelsa21@gmail.com).

---

<p align="center">
Dibuat dengan ❤️ oleh Tim WASTEKPAM
</p>
