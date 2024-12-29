document.getElementById('payButton').addEventListener('click', function() {
    // Mobil cihaz kontrolü
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const paparaNumber = '1599567109';
    
    // Papara numarasını panoya kopyala
    navigator.clipboard.writeText(paparaNumber).then(function() {
        if (isMobile) {
            // Mobil cihazlar için
            Swal.fire({
                title: `Papara: ${paparaNumber}`,
                text: 'Numara kopyalandı!',
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Papara\'yı Aç',
                cancelButtonText: 'Kapat',
                background: '#1a1a1a',
                color: '#fff',
                confirmButtonColor: '#4CAF50'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = `papara://send?accountNumber=${paparaNumber}`;
                }
            });
        } else {
            // Masaüstü için
            Swal.fire({
                title: `Papara: ${paparaNumber}`,
                text: 'Numara kopyalandı! Papara gönderme sayfasına yönlendiriliyorsunuz...',
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Gönderme Sayfasına Git',
                cancelButtonText: 'Kapat',
                background: '#1a1a1a',
                color: '#fff',
                confirmButtonColor: '#4CAF50'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(`https://www.papara.com/personal/qr/send/${paparaNumber}`, '_blank');
                }
            });
        }
    }).catch(function() {
        // Kopyalama başarısız olursa
        Swal.fire({
            title: `Papara: ${paparaNumber}`,
            html: `
                <div style="margin-bottom: 15px">Papara gönderme sayfasına yönlendiriliyorsunuz...</div>
                <div style="font-size: 0.9em; color: #aaa;">
                    Numara: ${paparaNumber}
                </div>
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Gönderme Sayfasına Git',
            cancelButtonText: 'Kapat',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#4CAF50'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(`https://www.papara.com/personal/qr/send/${paparaNumber}`, '_blank');
            }
        });
    });
}); 
