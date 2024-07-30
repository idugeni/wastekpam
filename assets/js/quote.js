// Daftar 50 quotes motivasi Jawa
const quotes = [
  "Yen tanpa usaha, aja ngarepaken hasil ingkang sae.",
  "Sabar punika kunci kasuksesan.",
  "Pentingaken terus nglampahi, sanadyan alon-alon.",
  "Sakabèhing ingkang padhang dudu emas.",
  "Sapa ingkang nyambut gawe, boten bakal kecewa.",
  "Kita kedah saged nampeni kekurangan lan terus sinau.",
  "Lebur dados siji, kasuksesan dados loro.",
  "Yen boten kapanggih dina puniki, saged kapanggih esuk.",
  "Nggawe becik punika langkung penting tinimbang ngentosi becik.",
  "Yen kedah milih, pilih ingkang saged ngapikaken sampeyan.",
  "Aja nyerah ngantos nggayuh tujuan pungkasan.",
  "Miturut tekad lan usaha, kasuksesan badhe rawuh.",
  "Sapa ingkang boten wani nyobi, boten badhe mangertos kaprigelan.",
  "Sabar punika minangka kekiyatan kangge ngatasi tantangan.",
  "Ngatasi masalah punika cara kangge ndamel diri langkung kiyat.",
  "Gagah punika boten namung saking penampilan, nanging saking tekad.",
  "Kita saged nglantaraken owah-owahan yen kita pitados dhateng kaprigelan piyambak.",
  "Wong ingkang boten nyobi, boten badhe mangertos potensi piyambak.",
  "Karo rasa pitados diri, kita saged ngatasi sagala bab.",
  "Aja ngandelake nasib, nanging ngandelake usaha piyambak.",
  "Mimpi ageng mbutuhaken usaha ageng ugi.",
  "Yen boten nyobi, boten badhe mangertos apa ingkang saged digayuh.",
  "Sabar lan usaha punika kunci kangge nggayuh kasuksesan.",
  "Gagal punika dudu pungkasan, nanging wiwitan kasuksesan anyar.",
  "Aja wedi dhateng kegagalan, punika minangka piwulang.",
  "Keberanian punika boten ana hubungane kaliyan rasa wedi, nanging cara ngatasi rasa wedi.",
  "Kita sedaya gadhah kesempatan ingkang sami kangge kasuksesan.",
  "Kinerja sae badhe ngasilaken asiling sae.",
  "Yen boten ngupadi, kita boten badhe nemu potensi penuhe.",
  "Nggawe langkah alit kanthi konsisten langkung sae tinimbang boten nggawe langkah sami sekali.",
  "Sabar lan usaha punika kunci kangge kasuksesan.",
  "Kedah ngupadi kanthi tekun supados kasuksesan saged kelakon.",
  "Ngadhepi rintangan punika minangka latihan kangge kahanan ingkang langkung abot.",
  "Wong ingkang usaha, sanajan alon-alon, mesthi bakal manggih kasuksesan.",
  "Aja nganti rasa wedi ngendhaleni langkahmu.",
  "Yen sampeyan ngupadi kanthi saestu, mesthi bakal diparingi hasil.",
  "Saben tantangan punika kesempatan kangge sinau lan tuwuh.",
  "Nglampahi panguripan kanthi sabar lan tekun, kabegjan badhe rawuh.",
  "Kawruh lan pengalaman saged dipunlampahi lumantar usaha ingkang konsisten.",
  "Sukses punika asiling usaha ingkang konsisten lan tekun.",
  "Minggahaken tekad punika cara kangge ngatasi tantangan.",
  "Aja ngandelake kemujuran, nanging ngandelake usaha.",
  "Sabar lan ketekunan punika sapunika kunci nggayuh cita-cita.",
  "Rasa yakin dhateng diri punika modal utama kangge ngatasi rintangan.",
  "Ngundhuh asile kudu nglewati perjalanan kang adoh.",
  "Aja gampang menyerah, usaha iku pancen perlu proses.",
  "Tindak lan usahamu mesthi bakal ngasilake asile.",
  "Sabar lan pangertosan punika minangka jembatan kasuksesan.",
  "Nglampahi gesang kanthi tabah, kasuksesan mesthi bakal ngancik.",
  "Punika perjalanan kangge mbangun kekuatan lan kaprigelan."
];

// Fungsi untuk menampilkan quote acak
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

// Panggil fungsi untuk menampilkan quote saat halaman dimuat
window.onload = displayRandomQuote;
