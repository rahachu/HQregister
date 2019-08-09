# HQuarters
HQuarters adalah perusahaan bisnis properti yang menyewakan workspace. Program ini membantu HQuarters dalam proses registrasi penyewa, registrasi tower, dan penyimpanan data penyewa seperti identitas dan status pembayaran. 

## Getting Started
Ikuti instruksi di bawah ini untuk dapat menjalankan aplikasi kami di komputer lokal Anda.

### Prerequisites
* [Node.js](https://nodejs.org/en/) 
* [mongoDB](https://www.mongodb.com/)
* 64-bit OS

### Installing
#### Linux
* Install Node.js dan mongoDB
* Clone fabian_new_branch
```
git clone --branch fabian_new_branch https://github.com/rahachu/HQregister.git
```
* Buat folder untuk database, misalnya di
```
~/mongodb-HQuarters
```
* Run mongoDB menggunakan folder database yang baru saja dibuat. Contoh dengan menggunakan bash:
```
~/mongodb-linux-x86_64-ubuntu1804-4.0.9/bin/mongod --dbpath ~/mongodb-HQuarters --port 6969
```
Pada bagian depan, masukkan directory tempat mongoDB berada. 
Untuk --dbpath, masukkan directory di mana folder database berada. 
Untuk --port dibebaskan, biasanya 27017
* Pada folder parent, jalankan
```
npm run start
```
atau
```
npm run dev
```  

#### Windows
* Clone fabian_new_branch
```
git clone --branch fabian_new_branch https://github.com/rahachu/HQregister.git
```

* Setelah menginstall Node.js dan MongoDB, buka command prompt

* Setelah itu, buatlah folder baru di dalam folder "src"

* Kemudian, ketikkan: 
```
<Lokasi mongod.exe>  --dbpath=<Lokasi folder baru> --port 6969
```
Contoh: 
```
C:\Users>"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="C:\Users\ASUS\Documents\HMIF\Bareng-bareng\HQregister_Fabian_new_branch\src\db" --port 6969
```
* Pada folder parent 'src' ketikkan:
```
npm run start
```
Contoh:
```
C:\Users\ASUS\Documents\HMIF\Bareng-bareng\HQregister_Fabian_new_branch>npm run start
```

## Running the tests
Buka browser dan ketikkan: "http://localhost:3000/" di tab browser.

### Break down into end to end tests
Program utama yang dijalankan adalah index.js, melalui laman localhost:3000. Menu utama terdiri atas tiga pilihan, yaitu menu untuk me-register user, me-register tower, dan mencari user. Ketika melakukan registrasi user ataupun tower, data yang diinput akan tersimpan pada database. Data yang tersimpan ini diakses ketika menggunakan fitur pencarian user.

### And coding style tests
Spesifikasi stack yang digunakan adalah sebagai berikut. Front-end menggunakan HTML dan CSS, dan file CSS yang digunakan merupakan template dari tabler.io. Back-end menggunakan node.js. Untuk database, digunakan MongoDB.

## Deployment
Semua file dapat dipasang pada suatu website sehingga dapat diakses. 

## Built With
* [Node.js](https://nodejs.org/en/) - Framework yang digunakan
* [mongoDB](https://www.mongodb.com/) - Database 
* [tabler](https://tabler.io/) - Template dashboard

## Contributing
Program ini terbuka terhadap masukan dan saran. Silakan meng-clone, mengedit, dan meminta pull request. Untuk setiap edit yang dilakukan, tolong sebut dan jelaskan di README.md yang telah diperbarui.

## Versioning
Kami menggunakan [github](https://github.com/) untuk membantu version control. Data dan kode dapat dilihat di [sini](https://github.com/rahachu/HQregister).

## Authors
* **Fabian Zhafransyah** - [fabianzhafran](https://github.com/fabianzhafran)
* **Farras Mohammad Hibban** - [donbasta](https://github.com/donbasta)
* **Daniel Riyanto** - [Daniel-Ri](https://github.com/Daniel-Ri)
* **Muhammad Rahadian Alamsyah Putra Winarno** - [rahachu](https://github.com/rahachu)
* **Muhamad Rizki Nasharudin** - [mrizkinash](https://github.com/mrizkinash)
* **Yahya** - [Yahya1547](https://github.com/yahya1547)
* **Elisabeth Levana Thedjakusuma** - [iam-lisa](https://github.com/iam-lisa)
* **Muhammad Xavier Rafifsyah Prasetyo** - [xavierprasetyo](https://github.com/xavierprasetyo)
* **Denny Fardian** - [dennyfardian](https://github.com/dennyfardian) 
* **Khairunnisa Rifdah** - [nisarifdah](https://github.com/nisarifdah)
* **Anindya Prameswari Ekaputri** - [anindyy](https://github.com/anindyy)
* **Muhammad Farid Adilazuarda** - [FaridLazuada](https://github.com/faridlazuarda)
* **Kanisius Sosrodimardito** - [ditososro](https://github.com/ditososro)
* **Naomi Yolanda Bernadetta** - [nnaaooo](https://github.com/nnaaooo)
* **Iqbal Naufal** - [iqbaln11](https://github.com/iqbaln11)
* **Garin Ichsan Nugraha** - [94gin](https://github.com/94gin)

## License

## Acknowledgements
Many thanks to
* Kak [Juniardi Akbar](https://github.com/juniardiakbar/)
* [tabler](https://tabler.io/)
* [mongoDB](https://www.mongodb.com/)
