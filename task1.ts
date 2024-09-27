console.log("Variabel Primitif \n");

//String
console.log("Tipedata String:");
let jdl_buku: string = "kancil dan buaya";
console.log("Judul Buku "+jdl_buku);

let panggilan: string = "Ariff";
console.log("Nama Panggilan saya adalah " + panggilan);

let nama_item: string = "War Axe";
console.log("Nama item Mobile Legend " + nama_item);

let jabatan: string = "Rektor";
console.log("Jabatan dia itu " + jabatan);

let company: string = "Productzilla Academy";
console.log("Mitra MSIB Saya " + company);

console.log("\n");

//number
console.log("Tipedata Number:");
let id_item: number = 67;
console.log("ID Item: " + id_item);

let no_rumah: number = 45;
console.log("No Rumah: " + no_rumah);

let harga: number = 50000;
console.log("Harga: " + harga);

let hero_lv: number = 100;
console.log("Hero Level: " + hero_lv);

let hero_exp: number = 86;
console.log("Hero EXP: " + hero_exp);

let hero_health: number = 100;
console.log("Hero Health: " + hero_health);

console.log("\n");

//boolean
console.log("Tipedata Boolean:");
let isCompleted: boolean = false;
console.log("Loading Complate? " + isCompleted);

let isActive: boolean = true;
console.log("Button: " + isActive);

let isLoading: boolean = true;
console.log("Loading: " + isLoading);

let isAvailebel: boolean = false;
console.log("Status: " + isAvailebel);

let isHeroInjured: boolean = true;
console.log("Hero Injured: " + isHeroInjured);

let hasFinished: boolean = true;
console.log("Status Download: " + hasFinished);

console.log("\n");

//null
console.log("Tipedata Null:");
let emptyValue: null = null;
console.log("Nilai: " + emptyValue);

let data: null = null;
console.log("Data: " + data);

console.log("\n");

//undefined
console.log("Tipedata Undefined:");
let notAssigned: undefined = undefined;
console.log("Tidak ditugaskan: " + notAssigned);

let hasil: undefined = undefined;
console.log("Hasil: " + hasil);

console.log("\n");

//bigint
console.log("Tipedata Bigint:");
let luas_bumi: bigint = 510072000000n;
console.log("Luas Bumi(Km): " + luas_bumi);

let lightYears: bigint = 94607304725808n;
console.log("Jarak Tahun Cahaya(Km): " + lightYears);

console.log("\n");

//symbol
console.log("Tipedata Symbol:");
let idSymbol: symbol = Symbol("id");
console.log(idSymbol);

let uniqueKey: symbol = Symbol("uniqueKey");
console.log(uniqueKey);

console.log("\n");

// Metode untuk operasi matematika dasar
function penjumlahan(a: number, b: number): number {
  return a + b;
}

function pengurangan(a: number, b: number): number {
  return a - b;
}

function perkalian(a: number, b: number): number {
  return a * b;
}

function pembagian(a: number, b: number): number {
  return a / b;
}

console.log("Function Method Operasi Matematika: ");
console.log("Hasil Penjumlahan: " + penjumlahan(10, 7));
console.log("Hasil Pengurangan: " + pengurangan(10, 3));
console.log("Hasil Perkalian: " + perkalian(10, 0));
console.log("Hasil Pembagian: " + pembagian(10, 5));
