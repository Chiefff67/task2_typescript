// Informasi Pahlawan
let nama_hero: string = "Arion";
let umur_hero: number = 30;
let siapTempur: boolean = true;

console.log("Nama Pahlawan: " + nama_hero);
console.log("Umur: " + umur_hero);
console.log("Apakah pahlawan siap bertarung? " + siapTempur);
console.log("\n")

// Sumber Daya Kerajaan
let jml_emas: number = 5000;
let jml_makanan: number = 120;
let jml_prajurit: number = 200;

console.log("jumlah Sumber Daya saat ini: ");
console.log("Jumlah Emas: " + jml_emas);
console.log("Suplai Makanan: " + jml_makanan);
console.log("Jumlah Prajurit: " + jml_prajurit);
console.log("\n");


let add_emas: number = 1500;
let pengalaman: number = 75;


jml_emas += add_emas;
let totalPengalaman: number = pengalaman;


function kurangiKesehatan(jml_prajurit: number, pengurangan_kesehatan: number): number {
  return pengurangan_kesehatan/jml_prajurit;
}

let kesehatan: number = kurangiKesehatan(5, 25);
console.log("Lima orang prajurit terluka saat bertempur")
console.log("Total kesehatan yang adalah "+(100-kesehatan)+"/prajurit"
);
console.log("\n");



function rangkumanMisi(namaHero: string, emas: number, xp: number): void {
    console.log(`Nama Pahlawan: ${namaHero}`);
    console.log(`Emas yang dikumpulkan: ${emas}`);
    console.log(`Poin pengalaman: ${xp}`);
}

rangkumanMisi(nama_hero, jml_emas, totalPengalaman);



