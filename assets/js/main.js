document.addEventListener('DOMContentLoaded', () => {
  const shiftSelect = document.getElementById('shift')
  const reguSekarangSelect = document.getElementById('reguSekarang')
  const reguSelanjutnyaSelect = document.getElementById('reguSelanjutnya')
  const piketPerwiraSelect = document.getElementById('piketPerwira')
  const piketDapurSelect = document.getElementById('piketDapur')
  const piketBlokWanitaSelect = document.getElementById('piketBlokWanita')
  const piketStaffKPRSelect = document.getElementById('piketStaffKPR')
  const piketStaffSiangSelect = document.getElementById('piketStaffSiang')

  // Fungsi untuk mengisi opsi pada elemen <select>
  function populateSelectOptions (selectElement, options) {
    for (let key in options) {
      const option = document.createElement('option')
      option.value = options[key]
      option.textContent = options[key]
      selectElement.appendChild(option)
    }
  }

  function updateShift () {
    const shiftValue = shiftSelect.value
    let jamValue = ''

    switch (shiftValue) {
      case 'PAGI - SIANG':
        jamValue = '13.00'
        break
      case 'SIANG - MALAM':
        jamValue = '19.00'
        break
      case 'MALAM - PAGI':
        jamValue = '07.00'
        break
      default:
        jamValue = ''
    }

    document.getElementById('jam').value = jamValue
  }

  function updateReguDetails (
    selectElement,kaRupamId,anggota1Id,anggota2Id,p2uId) {
    const reguName = selectElement.value

    switch (reguName) {
      case 'Regu I':
        document.getElementById(kaRupamId).value = 'Sutejo'
        document.getElementById(anggota1Id).value = 'Nanang Heru Susilo'
        document.getElementById(anggota2Id).value = 'Hasan Shoimaini'
        document.getElementById(p2uId).value = 'Ibnu Suganda'
        break
      case 'Regu II':
        document.getElementById(kaRupamId).value = 'Ahmad Mahin'
        document.getElementById(anggota1Id).value = 'Bangun Edy Priyanto'
        document.getElementById(anggota2Id).value = 'Eliyanto Sarage'
        document.getElementById(p2uId).value = 'Zeonovandhie Kukuh Pambadhio'
        break
      case 'Regu III':
        document.getElementById(kaRupamId).value = 'Hery Purwoko Singgih'
        document.getElementById(anggota1Id).value = 'Donny Chandra Nugraha'
        document.getElementById(anggota2Id).value = 'Ibnu Abdulloh'
        document.getElementById(p2uId).value = 'Zaenudin'
        break
      case 'Regu IV':
        document.getElementById(kaRupamId).value = 'Supriyono'
        document.getElementById(anggota1Id).value = 'Eko Arif Hidayat'
        document.getElementById(anggota2Id).value = 'Naufal Allaam Firdaus'
        document.getElementById(p2uId).value = 'Dipta Zaza Diandaru'
        break
      default:
        document.getElementById(kaRupamId).value = ''
        document.getElementById(anggota1Id).value = ''
        document.getElementById(anggota2Id).value = ''
        document.getElementById(p2uId).value = ''
    }
  }

  function updatePiketStaff () {
    let piketPerwiraSelect = document.getElementById('piketPerwira')
    let piketDapurSelect = document.getElementById('piketDapur')
    let piketBlokWanitaSelect = document.getElementById('piketBlokWanita')
    let piketStaffKPRSelect = document.getElementById('piketStaffKPR')
    let piketStaffSiangSelect = document.getElementById('piketStaffSiang')

    if (piketPerwiraSelect) {
      let selectedPerwira = Array.from(piketPerwiraSelect.selectedOptions).map(option => option.textContent)
      document.getElementById('piketPerwira').value = selectedPerwira.join(', ')
    }

    if (piketDapurSelect) {
      let selectedDapur = Array.from(piketDapurSelect.selectedOptions).map(option => option.textContent)
      document.getElementById('piketDapur').value = selectedDapur.join(', ')
    }

    if (piketBlokWanitaSelect) {
      let selectedBlokWanita = Array.from(piketBlokWanitaSelect.selectedOptions).map(option => option.textContent)
      document.getElementById('piketBlokWanita').value = selectedBlokWanita.join(', ')
    }

    if (piketStaffKPRSelect) {
      let selectedStaffKPR = Array.from(piketStaffKPRSelect.selectedOptions).map(option => option.textContent)
      document.getElementById('piketStaffKPR').value = selectedStaffKPR.join(', ')
    }

    if (piketStaffSiangSelect) {
      let selectedStaffSiang = Array.from(piketStaffSiangSelect.selectedOptions).map(option => option.textContent)
      document.getElementById('piketStaffSiang').value = selectedStaffSiang.join(', ')
    }
  }

  function generateLaporan () {
    const tanggal = document.getElementById('tanggal').value
    const jam = document.getElementById('jam').value
    const tahananL = document.getElementById('tahananL').value
    const tahananP = document.getElementById('tahananP').value
    const narapidanaL = document.getElementById('narapidanaL').value
    const narapidanaP = document.getElementById('narapidanaP').value
    const jumlahWBPdalam = document.getElementById('jumlahWBPdalam').value
    const jumlahWBPluar = document.getElementById('jumlahWBPluar').value
    const kaRupamSekarang = document.getElementById('kaRupamSekarang').value
    const anggota1Sekarang = document.getElementById('anggota1Sekarang').value
    const anggota2Sekarang = document.getElementById('anggota2Sekarang').value
    const p2uSekarang = document.getElementById('p2uSekarang').value
    const kaRupamSelanjutnya =document.getElementById('kaRupamSelanjutnya').value
    const anggota1Selanjutnya = document.getElementById('anggota1Selanjutnya').value
    const anggota2Selanjutnya = document.getElementById('anggota2Selanjutnya').value
    const p2uSelanjutnya = document.getElementById('p2uSelanjutnya').value
    const piketPerwira = document.getElementById('piketPerwira').value.toString()
    const piketDapur = document.getElementById('piketDapur').value.toString()
    const piketBlokWanita = document.getElementById('piketBlokWanita').value.toString()
    const piketStaffKPR = document.getElementById('piketStaffKPR').value.toString()
    const piketStaffSiang = document.getElementById('piketStaffSiang').value.toString()

    const tanggalObj = new Date(tanggal)
    const hariArray=["MINGGU","SENIN","SELASA","RABU","KAMIS","JUMAT","SABTU"];
    const bulanArray=["JANUARI","FEBRUARI","MARET","APRIL","MEI","JUNI","JULI","AGUSTUS","SEPTEMBER","OKTOBER","NOVEMBER","DESEMBER"];
    const hari = hariArray[tanggalObj.getDay()]
    const tanggalHari = tanggalObj.getDate()
    const bulan = bulanArray[tanggalObj.getMonth()]
    const tahun = tanggalObj.getFullYear()
    const shift = document.getElementById('shift').value.toString()
    const formattedDate = `${hari}, ${tanggalHari} ${bulan} ${tahun}`
    const hasilLaporan =

      "*ASTEKPAM RUTAN KELAS IIB WONOSOBO*\n"
    + `${formattedDate} PUKUL ${jam} WIB\n`
    + `MOHON IZIN MELAPORKAN ASTEKPAM *RUPAM ${shift.split(' - ')[0]} KE RUPAM ${shift.split(' - ')[1]}* BERJALAN AMAN DAN TERTIB, DENGAN RINCIAN SEBAGAI BERIKUT:\n\n`
    + "*A. PENGHUNI*\n"
    + "```"
    + "- Tahanan L            : " + (tahananL ? tahananL + " orang" : "-") + "\n"
    + "- Tahanan P            : " + (tahananP ? tahananP + " orang" : "-") + "\n"
    + "- Narapidana L         : " + (narapidanaL ? narapidanaL + " orang" : "-") + "\n"
    + "- Narapidana P         : " + (narapidanaP ? narapidanaP + " orang" : "-") + "\n"
    + "- Jumlah Total         : 154 orang\n"
    + "- Jumlah WBP di Dalam  : " + (jumlahWBPdalam ? jumlahWBPdalam + " orang" : "-") + "\n"
    + "- Jumlah WBP di Luar   : " + (jumlahWBPluar ? jumlahWBPluar + " orang" : "-") + "\n"
    + "```\n"
    + "*B. PERSONIL PENGAMANAN*\n\n"
    + `*RUPAM ${shift.split(' - ')[0]}*\n`
    + "```"
    + "• KARUPAM        : " + (kaRupamSekarang ? kaRupamSekarang : "-") + "\n"
    + "• Anggota Rupam  :\n"
    + "   1. " + (anggota1Sekarang ? anggota1Sekarang : "-") + "\n"
    + "   2. " + (anggota2Sekarang ? anggota2Sekarang : "-") + "\n"
    + "• Petugas P2U    : " + (p2uSekarang ? p2uSekarang : "-") + "\n"
    + "• Keterangan     : Hadir Lengkap\n"
    + "```\n"
    + `*RUPAM ${shift.split(' - ')[1]}*\n`
    + "```"
    + "• KARUPAM        : " + (kaRupamSelanjutnya ? kaRupamSelanjutnya : "-") + "\n"
    + "• Anggota Rupam  :\n"
    + "   1. " + (anggota1Selanjutnya ? anggota1Selanjutnya : "-") + "\n"
    + "   2. " + (anggota2Selanjutnya ? anggota2Selanjutnya : "-") + "\n"
    + "• Petugas P2U    : " + (p2uSelanjutnya ? p2uSelanjutnya : "-") + "\n"
    + "• Keterangan     : Hadir Lengkap\n"
    + "```\n"
    + "*PETUGAS PIKET*\n"
    + "```"
    + "• Perwira Piket      : " + (piketPerwira ? piketPerwira : "-") + "\n"
    + "• Piket Dapur        : " + (piketDapur ? piketDapur : "-") + "\n"
    + "• Piket Blok Wanita  : " + (piketBlokWanita ? piketBlokWanita : "-") + "\n"
    + "• Piket Staff KPR    : " + (piketStaffKPR ? piketStaffKPR : "-") + "\n"
    + "• Piket Staff Siang  : " + (piketStaffSiang ? piketStaffSiang : "-") + "\n"
    + "```\n"
    + "*C. INVENTARIS REGU PENGAMANAN*\n"
    + "```"
    + "- Senjata Api P3A    : 1  buah\n"
    + "- Amunisi P3A karet  : 10 buah\n"
    + "- Borgol             : 2  buah\n"
    + "- Metal Detector     : 1  buah\n"
    + "- HT                 : 6  buah\n"
    + "- Senter             : 1  buah\n"
    + "- Lonceng            : 5  buah\n"
    + "- CCTV               : 16 buah\n"
    + "- Sepatu Boat        : 2  buah\n"
    + "- Payung             : 2  buah\n"
    + "```\n"
    + "*DALAM KEADAAN BAIK, SITUASI RUTAN KELAS IIB WONOSOBO DALAM KEADAAN AMAN DAN TERKENDALI. TERIMAKASIH.*";

    console.log(hasilLaporan);   
    document.getElementById('laporan').value = hasilLaporan
    document.getElementById('copyButton').classList.remove('hidden')
  }

  function copyLaporan () {
    const laporanTextarea = document.getElementById('laporan')
    laporanTextarea.select()

    navigator.clipboard
      .writeText(laporanTextarea.value)
      .then(() => {
        document.getElementById('notification').classList.remove('hidden')
        setTimeout(() => {
          document.getElementById('notification').classList.add('hidden')
        }, 3000)
      })
      .catch(err => {
        console.error('Gagal menyalin teks: ', err)
      })
  }

  shiftSelect.addEventListener('change', updateShift)
  reguSekarangSelect.addEventListener('change', () => updateReguDetails(reguSekarangSelect,'kaRupamSekarang','anggota1Sekarang','anggota2Sekarang','p2uSekarang'))
  reguSelanjutnyaSelect.addEventListener('change', () => updateReguDetails(reguSelanjutnyaSelect,'kaRupamSelanjutnya','anggota1Selanjutnya','anggota2Selanjutnya','p2uSelanjutnya'))
  piketPerwiraSelect.addEventListener('change', updatePiketStaff)
  piketDapurSelect.addEventListener('change', updatePiketStaff)
  piketBlokWanitaSelect.addEventListener('change', updatePiketStaff)
  piketStaffKPRSelect.addEventListener('change', updatePiketStaff)
  piketStaffSiangSelect.addEventListener('change', updatePiketStaff)
  document.getElementById('generateButton').addEventListener('click', generateLaporan)
  document.getElementById('copyButton').addEventListener('click', copyLaporan)

  const shiftOptions = {
    'PAGI - SIANG': 'PAGI - SIANG',
    'SIANG - MALAM': 'SIANG - MALAM',
    'MALAM - PAGI': 'MALAM - PAGI'
  }

  const reguOptions = {
    'Regu I': 'Regu I',
    'Regu II': 'Regu II',
    'Regu III': 'Regu III',
    'Regu IV': 'Regu IV'
  }

  const perwiraOptions = {
    'Perwira 1': 'Slamet Widodo Suprapwanto',
    'Perwira 2': 'Nurul Setyo Prihartanto',
    'Perwira 3': 'M. Humam'
  }

  const dapurOptions = {
    'Dapur 1': 'Siti Murtofingah'
  }

  const blokWanitaOptions = {
    'Blok Wanita 1': 'Sri Suwantini',
    'Blok Wanita 2': 'Fatikha Hayuningtyas Pramono Putri',
    'Blok Wanita 3': 'Siwi Supraptiwi Perdani',
    'Blok Wanita 4': 'Sri Wahyuningsih',
    'Blok Wanita 5': 'Sri Hutami',
    'Blok Wanita 6': 'Nurul Dewi Ardiyani'
  }

  const staffKPROptions = {
    'Staff KPR 1': 'Ahmad Labiib',
    'Staff KPR 2': 'Arif Aditiya',
    'Staff KPR 3': 'Nurul Dewi Ardhiyani',
    'Staff KPR 4': 'Setyarifqi',
    'Staff KPR Lengkap': 'Ahmad Labiib, Arif Aditiya, Nurul Dewi Ardhiyani, Setyarifqi',
    'Ahmad dan Arif': 'Ahmad Labiib, Arif Aditiya',
    'Ahmad dan Nurul': 'Ahmad Labiib, Nurul Dewi Ardhiyani',
    'Ahmad dan Setya': 'Ahmad Labiib, Setyarifqi',
    'Arif dan Nurul': 'Arif Aditiya, Nurul Dewi Ardhiyani',
    'Arif dan Setya': 'Arif Aditiya, Setyarifqi',
    'Nurul dan Setya': 'Nurul Dewi Ardhiyani, Setyarifqi',
    'Ahmad, Arif, dan Nurul': 'Ahmad Labiib, Arif Aditiya, Nurul Dewi Ardhiyani',
    'Ahmad, Arif, dan Setya': 'Ahmad Labiib, Arif Aditiya, Setyarifqi',
    'Ahmad, Nurul, dan Setya': 'Ahmad Labiib, Nurul Dewi Ardhiyani, Setyarifqi',
    'Arif, Nurul, dan Setya': 'Arif Aditiya, Nurul Dewi Ardhiyani, Setyarifqi'
}

  const staffSiangOptions = {
    'Staff Siang 1': 'Murdoko',
    'Staff Siang 2': 'Malvin Yudhistira',
    'Staff Siang 3': 'Sapta Hidayat',
    'Staff Siang 4': 'Setyarifqi',
    'Staff Siang 5': 'Edi Supri Riyadi',
    'Staff Siang 6': 'Rachmanto',
    'Staff Siang 7': 'Muhammad Hafidh Ar Rasyid',
    'Staff Siang 8': 'Puji Wiranto',
    'Staff Siang 9': 'Arif Aditiya',
    'Staff Siang 10': 'Andhi Irmawan',
    'Staff Siang 11': 'Ahmad Labiib'
  }

  populateSelectOptions(shiftSelect, shiftOptions)
  populateSelectOptions(reguSekarangSelect, reguOptions)
  populateSelectOptions(reguSelanjutnyaSelect, reguOptions)
  populateSelectOptions(piketPerwiraSelect, perwiraOptions)
  populateSelectOptions(piketDapurSelect, dapurOptions)
  populateSelectOptions(piketBlokWanitaSelect, blokWanitaOptions)
  populateSelectOptions(piketStaffKPRSelect, staffKPROptions)
  populateSelectOptions(piketStaffSiangSelect, staffSiangOptions)
})

function incrementValue (id) {
  var input = document.getElementById(id)
  var value = parseInt(input.value, 10)
  input.value = isNaN(value) ? 0 : value + 1
}

function decrementValue (id) {
  var input = document.getElementById(id)
  var value = parseInt(input.value, 10)
  input.value = isNaN(value) ? 0 : value - 1
}

document.addEventListener('DOMContentLoaded', function () {
  const creatorName = 'Eliyanto Sarage';

  // Inisialisasi flatpickr
  flatpickr('#tanggal', {
    dateFormat: 'Y-m-d',
    altInput: true,
    altFormat: 'F j, Y',
    locale: {
      firstDayOfWeek: 1
    }
  });

  console.warn(
    `✨ Script ini dibuat oleh: ${creatorName} ✨\nTerima kasih telah menggunakan aplikasi E-ASTEKPAM!\nCek proyek lainnya di GitHub: https://github.com/idugeni`
  );

  document.getElementById('tahananL').value = 62;
  document.getElementById('tahananP').value = 2;
  document.getElementById('narapidanaL').value = 90;
  document.getElementById('narapidanaP').value = 0;
  document.getElementById('jumlahWBPdalam').value = 154;
  document.getElementById('jumlahWBPluar').value = 0;

  setTimeout(function () {
    var loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.classList.add('opacity-0');
      setTimeout(function () {
        loadingElement.classList.add('hidden');
      }, 1000);
    } else {
      console.error('Element with ID "loading" not found.');
    }
  }, 7000);
});
