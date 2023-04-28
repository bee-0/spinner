# spinner
Langkah membuat spinner 

### animasi spinner (loading) Animasi 

spinner tersebut terdiri dari tiga texts yang membentuk huruf 

``` 

DIO

```

 setiap huruf diberi class ".spinner-text" yang memiliki beberapa styling 

Selain itu kita mengunakan keyframes dengan nama "spinner-animation". memutar text-texts ditengah layar pada interval 1,5 detik.

###  animasi spinner, class 

```css

.spinner-text:nth-child(2) {

  animation-delay: 0.5s;

}

.spinner-text:nth-child(3) {

  animation-delay: 1s;

}

```

Child(2) memiliki animatio-delay 0,5 detik , child(3) memiliki animation-delay 1 detik

### hide-spinner

Kita juga memberikan class "hide-spinner" menghilakan spinner stelah 0,5 detik animasi selesai. mengatur opacity & visibility spinner menjadi 0 dan hidden dengan duransi transition selama 0,5 detik

```css

.hide-spinner {

  opacity: 0;

  visibility: hidden;

  transition: opacity 0.5s ease-out, visibility 0s 0.5s;

}

```

### Javascript 

kita mengunakan javascript yang menangani animasi spinner 

Pertama, kode 

```javascript

 const spinner = document.getElementById("spinner"); 

```

menentukan element HTML yang memiliki (id) spinner dan menyimpanya ke dalam variabel spinner.

```javascript

setTimeout(()=> { spinner.classList.add("hide-spinner");}, 5000); 

```

akan menambahkan kelas CSS "hide-spinner" stelah 500 milidetik (5 detik) lalu membuat spinner akan tersembunyi memanfaatkan property CSS visibility & opacity

```javascript

• setTimeout(()=> { spinner.style.display = "none",}, 6500); 

```

akan menghilangkan elemen spinner dari tampilan penguna stelah 6500 milidetik (6,5 detik) dengan mengubah properti CSS display "none".









📍Dengan begitu, animasi spinner akan tampil selama 5 detik dan kemudian akan hilang secara perlahan setelah 6,5 detik
