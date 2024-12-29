document.getElementById('payButton').addEventListener('click', function() {
    // Papara numarasını panoya kopyala
    navigator.clipboard.writeText('1599567109').then(function() {
        // Kopyalama başarılı olduğunda bildirim göster
        Swal.fire({
            title: 'Papara: 1599567109',
            text: 'Numara kopyalandı! Papara uygulamasına yönlendiriliyorsunuz...',
            icon: 'success',
            confirmButtonText: 'Tamam',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#4CAF50'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'papara://';
            }
        });
    }).catch(function() {
        // Kopyalama başarısız olursa
        Swal.fire({
            title: 'Papara: 1599567109',
            text: 'Lütfen bu numarayı Papara uygulamanızdan ödeyin.',
            icon: 'info',
            confirmButtonText: 'Papara\'ya Git',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#4CAF50'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'papara://';
            }
        });
    });
}); 
