const fs = require(`fs`);

// Dosya oluşturma ve veri ekleme
fs.writeFile(
  "employees.json",
  '{ "name": "Employee 1 Name", "salary": 2000 }',
  (err) => {
    if (err) console.log("Error oluştu", err);
  }
);

// Dosya okuma
fs.readFile("employees.json", "utf8", (err, data) => {
  // callback fonksiyonu ile birlikte çalıştırıyoruz.
  if (err) console.log(err); // hata kontrolü
  console.log(data); // okunan verinin çıktısının alınması
});

// Dosya güncelleme
fs.appendFile(
  "employees.json",
  ',{ "name": "Employee 2 Name", "salary": 7777 }',
  "utf8",
  (err) => {
    if (err) console.log(err);
  }
);

//Dosya Silme
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
});
