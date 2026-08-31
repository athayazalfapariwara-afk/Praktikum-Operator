let umur = 17;
let punyaKTP = false;
let punyaSIM = false

//boleh naik motor jika umur >=17 dan punya SIM
let bolehNaikMotor = (umur >= 17) && punyaSIM

//dianggap remaja jika >=13 atau belum punya KTP
let statusRemaja = (umur >= 13) || !punyaKTP

console.log('Boleh naik motor:', bolehNaikMotor)
console.log('Statur remaja:', statusRemaja)