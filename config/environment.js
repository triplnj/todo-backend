export const env = {
    port: process.env.PORT || 3000, //ova druga vrednost je za development a prva za produkciju
    email: process.env.EMAIL || "ivko@yahoo.com",
    db_pass: process.env.DB_PASS || 'db123'
}