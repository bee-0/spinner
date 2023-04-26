# spinner
Langkah membuat spinner 


Membuat animasi spinner (loading) Animasi spinner tersebut terdiri dari tiga texts yang membentuk huruf "D","I",dan "O". setiap huruf diberi class ".spinner-text" yang memiliki beberapa styling 

Selain itu kita mengunakan keyframes dengan nama "spinner-animation". memutar text-texts ditengah layar pada interval 1,5 detik.

• animasi spinner, class ".spinner-text:nth-child(3)" memiliki animatio-delay 0,5 detik 

•animasi spinner, class ".spinner-text:nth-child(3)" memiliki animation-delay 1 detik

-class ".hide-spinner" menghilakan spinner stelah 0,5 detik animasi selesai. mengatur opacity & visibility spinner menjadi 0 dan hidden dengan duransi transition selama 0,5 detik

- Javascript 

kita mengunakan javascript yang menangani animasi spinner 

Pertama, kode 

• const spinner = document.getElementByIf("spinner"); menentukan element HTML yang memiliki (id) spinner dan menyimpanya ke dalam variabel spinner.

•setTimeout(()=> { spinner.classList.add("hide-spinner");}, 5000); 

akan menambahkan kelas CSS "hide-spinner" stelah 500 milidetik (5 detik) lalu membuat spinner akan tersembunyi memanfaatkan property CSS visibility & opacity

• setTimeout(()=> { spinner.style.display = "none",}, 6500); 

akan menghilangkan elemen spinner dari tampilan penguna stelah 6500 milidetik (6,5 detik) dengan mengubah properti CSS display "none".

Dengan begitu, animasi spinner akan tampil selama 5 detik dan kemudian akan hilang secara perlahan setelah 6,5 detik
